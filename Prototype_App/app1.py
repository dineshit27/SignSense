import cv2
import mediapipe as mp
import numpy as np
import json
import os
import sys
import shutil
import uuid
from PyQt5.QtWidgets import (
    QApplication, QLabel, QWidget, QVBoxLayout, QPushButton, QHBoxLayout,
    QInputDialog, QDialog, QListWidget, QListWidgetItem, QMessageBox
)
from PyQt5.QtGui import QPixmap, QImage, QIcon
from PyQt5.QtCore import Qt, QTimer

# Load or create gesture DB
gesture_file = "gesture_db.json"
if os.path.exists(gesture_file):
    with open(gesture_file, encoding="utf-8") as f:
        gesture_db = json.load(f)
else:
    gesture_db = []

# Vector extractor
def extract_vector(landmarks):
    return np.array([coord for lm in landmarks for coord in [lm.x, lm.y]])

def match_gesture(vec):
    best_match = None
    min_dist = float("inf")
    for gesture in gesture_db:
        db_vec = np.array(gesture["hand_keypoints"])
        if len(vec) == len(db_vec):
            dist = np.linalg.norm(vec - db_vec)
            if dist < min_dist:
                min_dist = dist
                best_match = gesture
    return best_match if min_dist < 0.4 else None

# Train Dialog for burst recording
class TrainDialog(QDialog):
    def __init__(self, parent=None):
        super().__init__(parent)
        self.setWindowTitle("🎓 Train New Gesture")
        self.setFixedSize(1000, 600)

        self.layout = QHBoxLayout()
        self.preview_list = QListWidget()
        self.layout.addWidget(self.preview_list)

        self.right_layout = QVBoxLayout()
        self.label = QLabel("Camera Feed")
        self.label.setFixedSize(640, 480)
        self.label.setAlignment(Qt.AlignCenter)
        self.right_layout.addWidget(self.label)

        self.record_button = QPushButton("▶ Start Recording 20 Burst Photos")
        self.record_button.setStyleSheet("font-size: 16px; padding: 8px;")
        self.record_button.clicked.connect(self.start_recording)
        self.right_layout.addWidget(self.record_button)

        self.layout.addLayout(self.right_layout)
        self.setLayout(self.layout)

        self.cap = cv2.VideoCapture(0)
        self.mp_hands = mp.solutions.hands
        self.hands = self.mp_hands.Hands(max_num_hands=1)
        self.timer = QTimer()
        self.timer.timeout.connect(self.update_camera)
        self.timer.start(30)

        self.recording = False
        self.captured = 0
        self.gesture_images = []

    def update_camera(self):
        ret, frame = self.cap.read()
        if not ret:
            return
        img_rgb = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
        results = self.hands.process(img_rgb)

        if results.multi_hand_landmarks:
            for hand_landmarks in results.multi_hand_landmarks:
                mp.solutions.drawing_utils.draw_landmarks(frame, hand_landmarks, self.mp_hands.HAND_CONNECTIONS)

            if self.recording and self.captured < 20:
                vec = extract_vector(results.multi_hand_landmarks[0].landmark)
                uid = str(uuid.uuid4())[:8]
                folder = "gestures/temp"
                os.makedirs(folder, exist_ok=True)
                image_path = os.path.join(folder, f"{uid}.jpg")
                cv2.imwrite(image_path, frame)

                gesture_db.append({
                    "label": "",  # to be filled after recording
                    "text": "",
                    "hand_keypoints": vec.tolist(),
                    "image": image_path
                })
                self.gesture_images.append(image_path)
                self.show_image_on_list(image_path)
                self.captured += 1

        img_qt = QImage(frame.data, frame.shape[1], frame.shape[0], QImage.Format_BGR888)
        self.label.setPixmap(QPixmap.fromImage(img_qt))

        if self.recording and self.captured >= 20:
            self.finish_recording()

    def show_image_on_list(self, path):
        item = QListWidgetItem()
        pixmap = QPixmap(path).scaled(100, 100, Qt.KeepAspectRatio)
        item.setIcon(QIcon(pixmap))
        item.setText(os.path.basename(path))
        self.preview_list.addItem(item)

    def start_recording(self):
        self.recording = True
        self.captured = 0
        self.gesture_images.clear()
        self.preview_list.clear()
        self.record_button.setText("⏳ Recording...")

    def finish_recording(self):
        self.recording = False
        self.record_button.setText("✅ Done Recording")
        label, ok = QInputDialog.getText(self, "Label Gesture", "Enter gesture name:")
        if ok and label:
            for entry in gesture_db[-20:]:
                entry["label"] = label
                entry["text"] = f"The patient shows: {label.upper()}"
                new_path = f"gestures/{label.lower().replace(' ', '_')}_{uuid.uuid4().hex[:8]}.jpg"
                shutil.move(entry["image"], new_path)
                entry["image"] = new_path

            with open("gesture_db.json", "w", encoding="utf-8") as f:
                json.dump(gesture_db, f, ensure_ascii=False, indent=2)
            QMessageBox.information(self, "Success", f"Gesture '{label}' saved with 20 images!")

    def closeEvent(self, event):
        self.cap.release()
        self.timer.stop()
        event.accept()

# Main App
class GestureApp(QWidget):
    def __init__(self):
        super().__init__()
        self.setWindowTitle("✋ Gesture to Text App")
        self.setGeometry(100, 100, 1100, 600)
        self.is_running = False

        self.output_text = QLabel("Press Start or Train a Gesture", self)
        self.output_text.setAlignment(Qt.AlignTop)
        self.output_text.setStyleSheet("font-size: 24px; color: green; font-weight: bold;")

        self.output_image = QLabel(self)
        self.output_image.setAlignment(Qt.AlignTop)

        left_layout = QVBoxLayout()
        left_layout.addWidget(self.output_text)
        left_layout.addWidget(self.output_image)

        self.camera_label = QLabel("Live Feed", self)
        self.camera_label.setFixedSize(640, 480)
        self.camera_label.setStyleSheet("background-color: black;")
        self.camera_label.setAlignment(Qt.AlignCenter)

        self.start_button = QPushButton("▶ Start")
        self.start_button.clicked.connect(self.start_recognition)

        self.stop_button = QPushButton("⏹ Stop")
        self.stop_button.clicked.connect(self.stop_recognition)

        self.train_button = QPushButton("🎓 Train New Gesture")
        self.train_button.clicked.connect(self.open_train_dialog)

        for btn in [self.start_button, self.stop_button, self.train_button]:
            btn.setStyleSheet("font-size: 18px; padding: 10px")

        right_layout = QVBoxLayout()
        right_layout.addWidget(self.camera_label)
        right_layout.addWidget(self.start_button)
        right_layout.addWidget(self.stop_button)
        right_layout.addWidget(self.train_button)

        main_layout = QHBoxLayout()
        main_layout.addLayout(left_layout)
        main_layout.addLayout(right_layout)
        self.setLayout(main_layout)

        self.timer = QTimer()
        self.timer.timeout.connect(self.update_frame)

        self.cap = None
        self.mp_hands = mp.solutions.hands
        self.hands = self.mp_hands.Hands(max_num_hands=1)

    def start_recognition(self):
        self.cap = cv2.VideoCapture(0)
        self.is_running = True
        self.timer.start(30)
        self.output_text.setText("🟢 Recognizing... Show a gesture.")

    def stop_recognition(self):
        self.is_running = False
        self.timer.stop()
        if self.cap:
            self.cap.release()
            self.cap = None
        self.camera_label.clear()
        self.output_text.setText("⏹ Recognition stopped.")
        self.output_image.clear()

    def update_frame(self):
        if not self.cap or not self.is_running:
            return
        ret, frame = self.cap.read()
        if not ret:
            return
        img_rgb = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
        result = self.hands.process(img_rgb)

        if result.multi_hand_landmarks:
            vec = extract_vector(result.multi_hand_landmarks[0].landmark)
            match = match_gesture(vec)
            if match:
                self.output_text.setText(f"<h2 style='color:green;'>🧠 {match['text']}</h2>")
                if os.path.exists(match["image"]):
                    pixmap = QPixmap(match["image"]).scaled(300, 300, Qt.KeepAspectRatio)
                    self.output_image.setPixmap(pixmap)

        img_resized = cv2.resize(img_rgb, (640, 480))
        img_qt = QImage(img_resized.data, img_resized.shape[1], img_resized.shape[0], QImage.Format_RGB888)
        self.camera_label.setPixmap(QPixmap.fromImage(img_qt))

    def open_train_dialog(self):
        self.stop_recognition()
        dialog = TrainDialog(self)
        dialog.exec()

# Main loop
if __name__ == "__main__":
    app = QApplication(sys.argv)
    window = GestureApp()
    window.show()
    sys.exit(app.exec_())



