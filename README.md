# 🚀 AI Resume Builder

<p align="center">
  <b>Create ATS-Friendly Resumes with AI Assistance</b>
</p>

<p align="center">
  Real-Time Preview • Custom Templates • PDF Export • JWT Authentication • OpenAI Integration
</p>

---

## 📖 About The Project

AI Resume Builder is a full-stack MERN application that helps users create professional and ATS-friendly resumes efficiently.

The platform provides customizable resume templates, AI-powered content enhancement, real-time resume preview, image upload support, secure authentication, and PDF export functionality.

This project was developed to simplify the resume-building process while providing modern design customization and AI-assisted content generation.

---

## ✨ Key Features

### 🔐 Authentication & Security

- User Registration
- User Login
- JWT Authentication
- Protected Routes
- Secure Password Hashing

### 📄 Resume Builder

- Create Multiple Resumes
- Edit Existing Resumes
- Real-Time Resume Preview
- Professional Resume Sections
- ATS-Friendly Formatting

### 🎨 Customization

- Multiple Resume Templates
- Color Theme Selection
- Modern and Minimal Layouts
- Responsive Design

### 🤖 AI Features

- AI Generated Professional Summary
- Resume Content Enhancement
- Smart Suggestions

### 🖼 Media Support

- Profile Image Upload
- Background Removal Support

### 📥 Export Features

- Download Resume as PDF
- Print-Friendly Layout

---

# 🏗️ System Architecture

```text
Client (React + Vite)
        │
        ▼
REST API (Node.js + Express)
        │
        ▼
MongoDB Database
        │
        ▼
OpenAI Integration
```

---

# 🛠️ Tech Stack

## Frontend

- React.js
- Vite
- Tailwind CSS
- React Router DOM
- Axios
- Lucide React

## Backend

- Node.js
- Express.js

## Database

- MongoDB Atlas
- Mongoose

## Authentication

- JWT
- bcryptjs

## AI Integration

- OpenAI API

## Deployment

- Vercel
- Render
- MongoDB Atlas

---

# 📂 Project Structure

```text
RESUME_BUILDER_
│
├── client
│   ├── public
│   ├── src
│   │   ├── assets
│   │   ├── components
│   │   ├── pages
│   │   ├── configs
│   │   ├── hooks
│   │   └── App.jsx
│   │
│   └── package.json
│
├── server
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── config
│   └── package.json
│
└── README.md
```

---

# 📸 Application Screenshots

### Landing Page

<img width="100%" alt="Landing Page" src="YOUR_SCREENSHOT_LINK">

---

### Resume Builder

<img width="100%" alt="Resume Builder" src="YOUR_SCREENSHOT_LINK">

---

### Resume Preview

<img width="100%" alt="Resume Preview" src="YOUR_SCREENSHOT_LINK">

---

# ⚙️ Local Setup

## Clone Repository

```bash
git clone https://github.com/Tanish-Tandon/RESUME_BUILDER_.git
```

---

## Frontend Setup

```bash
cd client

npm install

npm run dev
```

Frontend:

```text
http://localhost:5173
```

---

## Backend Setup

```bash
cd server

npm install

npm run dev
```

Backend:

```text
http://localhost:5000
```

---

# 🔑 Environment Variables

Create a `.env` file inside the server folder.

```env
PORT=5000

MONGODB_URI=YOUR_MONGODB_URI

JWT_SECRET=YOUR_SECRET_KEY

OPENAI_API_KEY=YOUR_OPENAI_KEY
```

---

# 📌 API Modules

### Authentication

- Register User
- Login User

### Resume

- Create Resume
- Update Resume
- Delete Resume
- Fetch Resume

### AI Services

- Generate Professional Summary
- Improve Resume Content

---

# 🎯 ATS Optimization

The generated resumes are designed for:

✅ ATS Compatibility

✅ Professional Formatting

✅ Recruiter Friendly Design

✅ Keyword Optimization

✅ Clean Resume Structure

---

# 🚀 Future Enhancements

- Resume Analytics
- Cover Letter Generator
- Multi-language Support
- Interview Preparation Assistant
- Cloud Resume Storage
- Shareable Resume Links

---

# 👨‍💻 Author

### Tanish Tandon

B.Tech Information Technology

Pranveer Singh Institute of Technology, Kanpur

GitHub:
https://github.com/Tanish-Tandon



---

## ⭐ Support

If you found this project useful, consider giving it a star on GitHub.
