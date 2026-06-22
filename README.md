# 🚀 AI Resume Builder

An AI-powered Resume Builder that enables users to create ATS-friendly professional resumes using Groq-powered Llama 3 models, real-time editing, customizable templates, and instant PDF export.

## ✨ Features

### 👤 User Features

* Secure Authentication using JWT
* User Registration & Login
* Create and Manage Multiple Resumes
* Real-Time Resume Editing
* Live Resume Preview
* Multiple Resume Templates
* Custom Color Themes
* PDF Download Functionality
* Responsive Design for Mobile & Desktop
* Resume Data Persistence using MongoDB

### 🤖 AI Features

* Professional Summary Generation
* AI-Based Resume Content Suggestions
* Resume Enhancement using Groq API
* Llama 3 Powered Text Generation
* Smart Resume Writing Assistance

### 🔒 Security

* JWT Authentication
* Password Hashing using bcrypt
* Protected Routes
* Secure API Handling
* Environment Variable Protection
* Role-Based Access Control

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Vite
* Tailwind CSS
* React Router DOM
* Axios

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* bcryptjs

### AI Integration

* Groq API
* Llama 3 Model

### Additional Tools

* Git & GitHub
* Vercel
* Render

---

## 🌐 Local Development URLs

Frontend:
https://resume-builder-frontend-d9ze.onrender.com/

Backend:
https://resume-builder-backend-oh6y.onrender.com/

---

## 🔑 Environment Variables

```env
PORT=9000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

GROQ_API_KEY=your_groq_api_key
```

---

## 🚀 Deployment

### Frontend

* Vercel
* Netlify

### Backend

* Render
* Railway
* Vercel

### Database

* MongoDB Atlas

---

## 📡 API Endpoints

### Authentication

```http
POST /api/auth/register
POST /api/auth/login
GET  /api/auth/profile
```

### Resume

```http
POST   /api/resume/create
GET    /api/resume/:id
PUT    /api/resume/:id
DELETE /api/resume/:id
```

### AI

```http
POST /api/ai/generate-summary
POST /api/ai/improve-content
```

---

## 🎯 Future Enhancements

* ATS Score Checker
* Cover Letter Generator
* Resume Analytics Dashboard
* LinkedIn Profile Import
* Multi-Language Support
* Share Resume via Public Link
* Resume Version History

---

## 👨‍💻 Author

Tanish Tandon

GitHub:
https://github.com/Tanish-Tandon

LinkedIn:
https://linkedin.com/in/tanish-tandon-2b4199310

---

## 📄 License

This project is licensed under the MIT License. See the LICENSE file for details.
