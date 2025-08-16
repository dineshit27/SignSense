import cv2
import mediapipe as mp
import numpy as np
import json
import os
import sys
import uuid
from PyQt5.QtWidgets import (
    QApplication, QLabel, QWidget, QVBoxLayout,
    QPushButton, QHBoxLayout, QInputDialog, QListWidget, QListWidgetItem, QDialog
)
from PyQt5.QtGui import QPixmap, QImage, QIcon
from PyQt5.QtCore import Qt, QTimer
from sklearn.neighbors import KNeighborsClassifier

gesture_file = "gesture_db.json"
gesture_folder = "gestures"

# Load or create gesture DB
if os.path.exists(gesture_file):
    with open(gesture_file, encoding="utf-8") as f:
        gesture_db = json.load(f)
else:
    gesture_db = []

# Clean gesture DB
gesture_db = [
    g for g in gesture_db
    if isinstance(g.get("hand_keypoints"), list) and len(g["hand_keypoints"]) == 42 and os.path.exists(g.get("image", ""))
]

# Save cleaned DB
with open(gesture_file, "w", encoding="utf-8") as f:
    json.dump(gesture_db, f, ensure_ascii=False, indent=2)

# Train KNN
def train_knn_classifier():
    global knn
    knn = KNeighborsClassifier(n_neighbors=3)
    X, y = [], []
    for gesture in gesture_db:
        vec = gesture.get("hand_keypoints")
        label = gesture.get("label")
        if isinstance(vec, list) and len(vec) == 42:
            X.append(vec)
            y.append(label)
    if X:
        knn.fit(X, y)
        print(f"✅ Trained KNN with {len(X)} samples.")
    else:
        print("⚠ No valid gesture samples to train KNN.")

# Normalize hand vector
def extract_vector(landmarks):
    coords = np.array([[lm.x, lm.y] for lm in landmarks])
    base = coords[0]
    normalized = coords - base
    norm = np.linalg.norm(normalized)
    if norm != 0:
        normalized /= norm
    return normalized.flatten()

# Dialog to train gestures
class TrainDialog(QDialog):
    def __init__(self, parent=None):
        super().__init__(parent)
        self.setWindowTitle("Record Gesture - Burst Mode")
        self.setFixedSize(700, 700)

        self.layout = QVBoxLayout()
        self.label = QLabel("Live Feed")
        self.label.setFixedSize(640, 480)
        self.label.setAlignment(Qt.AlignCenter)
        self.layout.addWidget(self.label)

        self.image_list = QListWidget()
        self.layout.addWidget(self.image_list)

        self.capture_button = QPushButton("Start Burst Capture")
        self.capture_button.clicked.connect(self.capture_burst)
        self.layout.addWidget(self.capture_button)

        self.setLayout(self.layout)

        self.cap = cv2.VideoCapture(0)
        self.timer = QTimer()
        self.timer.timeout.connect(self.update_frame)
        self.timer.start(30)

        self.mp_hands = mp.solutions.hands
        self.hands = self.mp_hands.Hands(max_num_hands=1)
        self.current_frame = None

    def update_frame(self):
        ret, frame = self.cap.read()
        if not ret:
            return
        self.current_frame = frame.copy()
        rgb = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
        qt_img = QImage(rgb.data, rgb.shape[1], rgb.shape[0], QImage.Format_RGB888)
        self.label.setPixmap(QPixmap.fromImage(qt_img))

    def capture_burst(self):
        label, ok = QInputDialog.getText(self, "Label Gesture", "Enter label (e.g., ONE, HELP):")
        if not ok or not label:
            return

        save_path = os.path.join(gesture_folder, label)
        os.makedirs(save_path, exist_ok=True)

        captured = 0
        while captured < 30:
            ret, frame = self.cap.read()
            if not ret:
                continue
            img_rgb = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
            result = self.hands.process(img_rgb)
            if result.multi_hand_landmarks:
                landmarks = result.multi_hand_landmarks[0].landmark
                vec = extract_vector(landmarks).tolist()
                filename = os.path.join(save_path, f"{uuid.uuid4().hex[:8]}.jpg")
                cv2.imwrite(filename, frame)
                rel_path = os.path.relpath(filename)

                gesture_db.append({
                    "label": label,
                    "text": f"The patient shows: {label.upper()}",
                    "hand_keypoints": vec,
                    "image": rel_path
                })

                item = QListWidgetItem(os.path.basename(filename))
                item.setIcon(QIcon(QPixmap(rel_path).scaled(100, 100, Qt.KeepAspectRatio)))
                self.image_list.addItem(item)
                captured += 1

        with open(gesture_file, "w", encoding="utf-8") as f:
            json.dump(gesture_db, f, ensure_ascii=False, indent=2)
        train_knn_classifier()

    def closeEvent(self, event):
        self.cap.release()
        event.accept()

# Main window
class GestureApp(QWidget):
    def __init__(self):
        super().__init__()
        self.setWindowTitle("Gesture Recognition - KNN Model")
        self.setGeometry(100, 100, 1000, 600)

        self.output_text = QLabel("Start or Train a Gesture")
        self.output_text.setStyleSheet("font-size: 24px; color: green")

        self.camera_label = QLabel("Live Feed")
        self.camera_label.setFixedSize(640, 480)
        self.camera_label.setStyleSheet("background-color: black;")

        self.start_btn = QPushButton("▶ Start")
        self.start_btn.clicked.connect(self.start_recognition)
        self.stop_btn = QPushButton("⏹ Stop")
        self.stop_btn.clicked.connect(self.stop_recognition)
        self.train_btn = QPushButton("🎓 Train New Gesture")
        self.train_btn.clicked.connect(self.open_train_dialog)

        for btn in [self.start_btn, self.stop_btn, self.train_btn]:
            btn.setStyleSheet("font-size: 18px; padding: 10px")

        left = QVBoxLayout()
        left.addWidget(self.output_text)

        right = QVBoxLayout()
        right.addWidget(self.camera_label)
        right.addWidget(self.start_btn)
        right.addWidget(self.stop_btn)
        right.addWidget(self.train_btn)

        main = QHBoxLayout()
        main.addLayout(left)
        main.addLayout(right)
        self.setLayout(main)

        self.timer = QTimer()
        self.timer.timeout.connect(self.update_frame)

        self.cap = None
        self.mp_hands = mp.solutions.hands
        self.hands = self.mp_hands.Hands(max_num_hands=1)
        train_knn_classifier()

    def start_recognition(self):
        self.cap = cv2.VideoCapture(0)
        self.timer.start(30)
        self.output_text.setText("🕵️ Waiting for gesture...")

    def stop_recognition(self):
        self.timer.stop()
        if self.cap:
            self.cap.release()
        self.cap = None
        self.camera_label.clear()
        self.output_text.setText("⏹ Stopped")

    def update_frame(self):
        if not self.cap:
            return

        ret, frame = self.cap.read()
        if not ret:
            return

        img_rgb = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
        result = self.hands.process(img_rgb)

        if result.multi_hand_landmarks:
            vec = extract_vector(result.multi_hand_landmarks[0].landmark).reshape(1, -1)

            if hasattr(knn, "kneighbors"):
                try:
                    distances, _ = knn.kneighbors(vec)
                    threshold = 0.35  # tolerance for matching
                    if distances[0][0] > threshold:
                        self.output_text.setText("⚠ Unknown gesture")
                    else:
                        label = knn.predict(vec)[0]
                        confidence = max(0, 1 - distances[0][0] / threshold)
                        percent = int(confidence * 100)
                        self.output_text.setText(f"🧠 Detected: {label.upper()} ({percent}%)")
                except Exception:
                    self.output_text.setText("⚠ Prediction error.")
        else:
            self.output_text.setText("🕵️ Waiting for gesture...")

        resized = cv2.resize(img_rgb, (640, 480))
        qt_img = QImage(resized.data, resized.shape[1], resized.shape[0], QImage.Format_RGB888)
        self.camera_label.setPixmap(QPixmap.fromImage(qt_img))

    def open_train_dialog(self):
        dialog = TrainDialog(self)
        dialog.exec()

if __name__ == "__main__":
    app = QApplication(sys.argv)
    window = GestureApp()
    window.show()
    sys.exit(app.exec())

