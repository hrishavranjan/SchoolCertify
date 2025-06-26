# 🏆 Certificate Generator Web App

A secure digital certificate generation system for schools — with Firebase Auth, superuser control, school-specific templates, and downloadable PNGs. 🎓✨

---

## 📌 Overview

This system allows **authorized schools** to securely log in, generate customized certificates, preview them, and download them as images. A designated **superuser** can manage certificates for all schools via a dropdown selector.

---

## 🚀 Features

- 🔐 Firebase Email/Password Authentication
- 🎨 School-specific certificate templates and CSS
- 📋 Multiple certificate types (Appreciation, Excellence, etc.)
- 🧑‍💼 Superuser access to all schools
- 📸 Certificate download as PNG via `html2canvas`
- ⏳ Inactivity auto-logout with popup

---

## 🏫 School Access Management

Only pre-approved school emails (added in Firebase Auth) can access the system.

Example structure:
- **Email**: `xxxxxxxxxxxxx@gmail.com`
- **Folder key**: `xxx`

> Access is granted by linking school emails to folder keys in code and Firebase Authentication.

---

## 🛠️ How to Use

### 🔑 1. Login
- Go to `/login.html`
- Use your registered school email and password
- Superuser (e.g., `xxxxxxxxxxxx@gmail.com`) will see a **school selector dropdown**

---

### 📄 2. Select Certificate Type
- Choose from:
  - Appreciation
  - Excellence
  - Completion
  - Topper
  - Future1, Future2, Future3
- Template and CSS update automatically

---

### 🧾 3. Fill Certificate Details
- Student Name
- Class
- Roll Number
- Father’s Name
- Event Name
- 📅 Date (formatted as `DD-MM-YY`)
- Rank (if type is "Excellence")

---

### 🎨 4. Preview Certificate
- The selected template is shown
- Overlay text is applied based on your input
- Design is based on selected school

---

### 📥 5. Download Certificate
- Click the **Download Certificate** button
- PNG image is generated and downloaded automatically

---

### 🔐 6. Logout / Auto Logout
- Click the **Logout** button
- System auto-logs out after 10 minutes of inactivity
- A popup appears before logout

---

## 📬 Developer Info

- 👨‍💻 Developer: **Hrishav Ranjan**
- 📧 Email: [hrishavranjan2003@gmail.com](mailto:hrishavranjan2003@gmail.com)

---

> 🧠 Built for schools to simplify digital certificate creation. Easy. Secure. Customizable.
