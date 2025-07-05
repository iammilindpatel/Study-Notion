<h1 align="center">
  🎓 Study‑Notion
</h1>

<p align="center">
  A modern <strong>Full-Stack EdTech Platform</strong> built using the <code>MERN Stack</code> for seamless learning, teaching, and course management.  
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Status-In%20Progress-blue?style=flat-square"/>
  <img src="https://img.shields.io/github/license/iammilindpatel/Study-Notion?style=flat-square"/>
  <img src="https://img.shields.io/github/languages/top/iammilindpatel/Study-Notion?style=flat-square"/>
</p>

---

## 📌 Table of Contents

- [✨ Features](#-features)
- [🛠️ Tech Stack](#-tech-stack)
- [📁 Folder Structure](#-folder-structure)
- [⚙️ Installation](#-installation)
- [🚀 Usage](#-usage)
- [📬 Contact](#-contact)
- [📄 License](#-license)

---

## ✨ Features

✅ Authentication (Login, Signup, OTP, JWT)  
✅ Instructor & Student Dashboards  
✅ Course Creation with Video Uploads  
✅ Markdown Support for Descriptions  
✅ Secure Payments via Razorpay  
✅ Cloudinary Media Storage  
✅ Ratings & Reviews  
✅ Admin Controls (Users, Courses, Stats)

---

## 🛠️ Tech Stack

### 🔹 Frontend
- React.js
- Redux Toolkit
- Tailwind CSS
- Chart.js

### 🔹 Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- Cloudinary API
- Razorpay API
- Nodemailer
- JSON Web Token (JWT)

---

## 📁 Folder Structure

Study-Notion/
├── client/ # React Frontend
│ ├── components/
│ ├── pages/
│ ├── redux/
│ └── utils/
├── server/ # Node.js Backend
│ ├── config/
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ └── middlewares/
├── .env
└── README.md



---

## ⚙️ Installation

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/iammilindpatel/Study-Notion.git
cd Study-Notion
2️⃣ Install Dependencies
Backend
bash
Copy
Edit
cd server
npm install
Frontend
bash
Copy
Edit
cd ../client
npm install
3️⃣ Set Up Environment Variables
Create a .env file in the server folder:

env
Copy
Edit
MONGO_URI=your_mongodb_url
JWT_SECRET=your_jwt_secret
RAZORPAY_KEY_ID=your_razorpay_id
RAZORPAY_KEY_SECRET=your_razorpay_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
EMAIL_USER=your_email
EMAIL_PASS=your_email_password
4️⃣ Start the App
bash
Copy
Edit
npm run dev
➡️ The app will now be running at:

Frontend: http://localhost:3000

Backend: http://localhost:4000

🚀 Usage
🧑‍🎓 Students: Browse, enroll, and review courses.

🧑‍🏫 Instructors: Create, manage, and monetize courses.

🧑‍💼 Admins: Manage platform-wide data, users, and revenue.

🖼️ Screenshots (Optional)
Add screenshots or screen recordings of dashboards, forms, and flow here if needed.

