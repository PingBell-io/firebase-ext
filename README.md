# 🔔 Firebase PingBell Extension

## 🚀 Overview
This **Firebase Extension** automatically listens for **new user registrations** in **Firebase Authentication** and sends a webhook notification to your **PingBell**.

## 📌 Features
- ✅ **Listens for new users created** in Firebase Authentication.
- ✅ **Triggers a webhook request** to PingBell with user details (soon).
- ✅ **Works with Firebase Emulator** for local testing.
- ✅ **Secure & Efficient** – runs as a Firebase Cloud Function.

---

## 📖 How It Works
1. A user **signs up** via Firebase Authentication.
2. The extension **automatically triggers a Cloud Function**.
3. The function **sends a webhook request** to the configured **PingBell Webhook URL**.