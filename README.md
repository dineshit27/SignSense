# 🧏‍♂️ SignSense – Webcam-based Sign Language Translator  

![GitHub license](https://img.shields.io/github/license/dineshit27/SignSense?style=flat-square&color=blue)   ![Contributions](https://img.shields.io/badge/Contributions-Welcome-orange?style=flat-square)  ![Platform](https://img.shields.io/badge/Platform-Web%20%7C%20AI-yellow?style=flat-square)  ![Status](https://img.shields.io/badge/Status-Prototype-success?style=flat-square)  

---

## 🚀 Introduction  
**SignSense** is an AI-powered **webcam-based sign language translation system**.  
It bridges the communication gap between **sign language users** and **non-signers** by providing **real-time gesture recognition** and converting them into **speech & text**.  

This project aims to **break communication barriers**, promote **inclusivity**, and support **better healthcare & accessibility** for the dumb and hard-of-hearing community.  

---

## ✨ Features  

| Feature | Description |
|---------|-------------|
| 🎥 **Webcam-Based Recognition** | Captures sign gestures in real-time using computer vision. |
| 🧠 **AI-Powered Translation** | Uses machine learning models to detect and interpret signs. |
| 🔊 **Speech & Text Output** | Converts detected gestures into spoken audio & text. |
| 🏥 **Healthcare Integration** | Designed for hospitals to improve patient-doctor communication. |
| 🌍 **Future Expansion** | Supports multi-language gestures & platform integrations. |
| 📊 **Data Analytics** | Provides gesture tracking and recognition accuracy metrics. |

---

## 🛠 Tech Stack  

<p align="center">
  <!-- Frontend -->
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"/>
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"/>
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white"/>
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white"/>
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white"/>

  <!-- Backend & AI -->
  <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white"/>
  <img src="https://img.shields.io/badge/OpenCV-5C3EE8?style=for-the-badge&logo=opencv&logoColor=white"/>
  <img src="https://img.shields.io/badge/Teachable%20Machine-FF4B4B?style=for-the-badge&logo=google&logoColor=white"/>
  <img src="https://img.shields.io/badge/TensorFlow-FF6F00?style=for-the-badge&logo=tensorflow&logoColor=white"/>

  <!-- Tools -->
  <img src="https://img.shields.io/badge/VS%20Code-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white"/>
</p>


---

## 🏗 Block Diagram  

```mermaid
graph TD
    A[User Signs in front of Webcam] --> B[Gesture Capture via Webcam]
    B --> C[Gesture Processing & Feature Extraction]
    C --> D[Machine Learning Model - Sign Recognition]
    D --> E[Database Lookup]
    E --> F[Translation Engine]
    F --> G[Audio Output 🔊]
    F --> H[Text Output 📝]
```

---

## 📸 Screenshots  

<p align="center">
  <!-- Replace these image paths with your actual project screenshots -->
  <img src="Images/ss1.png" alt="Home Page" width="45%"/>
  <img src="Images/ss2.png" alt="Sign Detection" width="45%"/>
</p>

---

## 📂 Resources  

<p align="center">
  <!-- Project PPT -->
  <a href="PPTs/SIGN SENSE PPT (1).pptx" target="blank">
    <img src="https://img.shields.io/badge/📑%20Project%20PPT-Download-blue?style=for-the-badge"/>
  </a>

  <!-- Project Video -->
  <a href="Videos/Doctor_Speech.mp4" target="blank">
    <img src="https://img.shields.io/badge/🎬%20Project%20Video-Watch-red?style=for-the-badge"/>
  </a>
</p>

---

## File Tree: SignSense-App-Prototype

```
├── 📁 gestures/
│   ├── 📁 one
│   └── 📁 two
├── 🐍 app.py
├── 🐍 app1.py
└── 📄 gesture_db.json
```

---

## File Tree: SignSense-Frontend

```
├── 📁 .vite/
│   ├── 📁 deps_temp_0cd38d1b/
│   │   └── 📄 package.json
│   └── 📁 deps_temp_deb1649f/
│       └── 📄 package.json
├── 📁 .vscode/ 🚫 (auto-hidden)
└── 📁 signsense-ai-translator-main/
    ├── 📁 node_modules/ 🚫 (auto-hidden)
    ├── 📁 public/
    │   ├── 🖼️ favicon.ico
    │   ├── 🖼️ placeholder.svg
    │   └── 📄 robots.txt
    ├── 📁 src/
    │   ├── 📁 components/
    │   │   ├── 📁 ui/
    │   │   │   ├── 📄 accordion.tsx
    │   │   │   ├── 📄 alert-dialog.tsx
    │   │   │   ├── 📄 alert.tsx
    │   │   │   ├── 📄 aspect-ratio.tsx
    │   │   │   ├── 📄 avatar.tsx
    │   │   │   ├── 📄 badge.tsx
    │   │   │   ├── 📄 breadcrumb.tsx
    │   │   │   ├── 📄 button.tsx
    │   │   │   ├── 📄 calendar.tsx
    │   │   │   ├── 📄 card.tsx
    │   │   │   ├── 📄 carousel.tsx
    │   │   │   ├── 📄 chart.tsx
    │   │   │   ├── 📄 checkbox.tsx
    │   │   │   ├── 📄 collapsible.tsx
    │   │   │   ├── 📄 command.tsx
    │   │   │   ├── 📄 context-menu.tsx
    │   │   │   ├── 📄 dialog.tsx
    │   │   │   ├── 📄 drawer.tsx
    │   │   │   ├── 📄 dropdown-menu.tsx
    │   │   │   ├── 📄 form.tsx
    │   │   │   ├── 📄 hover-card.tsx
    │   │   │   ├── 📄 input-otp.tsx
    │   │   │   ├── 📄 input.tsx
    │   │   │   ├── 📄 label.tsx
    │   │   │   ├── 📄 menubar.tsx
    │   │   │   ├── 📄 navigation-menu.tsx
    │   │   │   ├── 📄 pagination.tsx
    │   │   │   ├── 📄 popover.tsx
    │   │   │   ├── 📄 progress.tsx
    │   │   │   ├── 📄 radio-group.tsx
    │   │   │   ├── 📄 resizable.tsx
    │   │   │   ├── 📄 scroll-area.tsx
    │   │   │   ├── 📄 select.tsx
    │   │   │   ├── 📄 separator.tsx
    │   │   │   ├── 📄 sheet.tsx
    │   │   │   ├── 📄 sidebar.tsx
    │   │   │   ├── 📄 skeleton.tsx
    │   │   │   ├── 📄 slider.tsx
    │   │   │   ├── 📄 sonner.tsx
    │   │   │   ├── 📄 switch.tsx
    │   │   │   ├── 📄 table.tsx
    │   │   │   ├── 📄 tabs.tsx
    │   │   │   ├── 📄 textarea.tsx
    │   │   │   ├── 📄 toast.tsx
    │   │   │   ├── 📄 toaster.tsx
    │   │   │   ├── 📄 toggle-group.tsx
    │   │   │   ├── 📄 toggle.tsx
    │   │   │   ├── 📄 tooltip.tsx
    │   │   │   └── 📄 use-toast.ts
    │   │   ├── 📄 Footer.tsx
    │   │   └── 📄 Navigation.tsx
    │   ├── 📁 hooks/
    │   │   ├── 📄 use-mobile.tsx
    │   │   └── 📄 use-toast.ts
    │   ├── 📁 lib/
    │   │   └── 📄 utils.ts
    │   ├── 📁 pages/
    │   │   ├── 📄 Contact.tsx
    │   │   ├── 📄 GoalAndImpact.tsx
    │   │   ├── 📄 HowItWorks.tsx
    │   │   ├── 📄 Index.tsx
    │   │   ├── 📄 LiveTranslation.tsx
    │   │   ├── 📄 NotFound.tsx
    │   │   ├── 📄 StreamlitApp.tsx
    │   │   ├── 📄 TeachableMachine.tsx
    │   │   └── 📄 TechStack.tsx
    │   ├── 🎨 App.css
    │   ├── 📄 App.tsx
    │   ├── 🎨 index.css
    │   ├── 📄 main.tsx
    │   └── 📄 vite-env.d.ts
    ├── 🚫 .gitignore
    ├── 📖 README.md
    ├── 📄 bun.lockb
    ├── 📄 components.json
    ├── 📄 eslint.config.js
    ├── 🌐 index.html
    ├── 📄 package-lock.json
    ├── 📄 package.json
    ├── 📄 postcss.config.js
    ├── 📄 tailwind.config.ts
    ├── 📄 tsconfig.app.json
    ├── 📄 tsconfig.json
    ├── 📄 tsconfig.node.json
    └── 📄 vite.config.ts
```

---
**Built with ❤️ by M. Dinesh**

*Last Updated: August 2025*
