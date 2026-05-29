# 🔐 Authentication Module

A secure user authentication system built using React.js, Node.js, Express.js, MongoDB, JWT, and Bcrypt.

This branch contains the complete authentication workflow used in the AI Resume Builder application.

---

## ✨ Features

### User Authentication

- User Registration
- User Login
- JWT Token Generation
- Protected Routes
- Persistent Authentication State
- Logout Functionality

### Security

- Password Hashing with Bcrypt
- JWT-Based Authorization
- Secure API Endpoints
- User Verification
- Environment Variable Protection

---

## 🛠️ Tech Stack

### Frontend

- React.js
- React Router DOM
- Axios

### Backend

- Node.js
- Express.js

### Database

- MongoDB Atlas
- Mongoose

### Authentication

- JWT
- Bcrypt

---

## 📂 Folder Structure

```text
Authentication
│
├── client
│   ├── pages
│   │   ├── Login
│   │   └── Signup
│   │
│   └── components
│
├── server
│   ├── controllers
│   ├── routes
│   ├── middleware
│   └── models
│
└── README.md
```

---

## 🔄 Authentication Flow

```text
User Registration
        │
        ▼
Password Hashing (Bcrypt)
        │
        ▼
Store User in MongoDB
        │
        ▼
Generate JWT Token
        │
        ▼
User Login
        │
        ▼
Protected Routes Access
```

---

## 🔐 Security Features

- Password Encryption
- JWT Authentication
- Route Protection
- Middleware Authorization
- Secure User Sessions

---

## 🚀 Future Improvements

- Google Authentication
- GitHub OAuth
- Two-Factor Authentication (2FA)
- Forgot Password Functionality
- Email Verification

---

## 👨‍💻 Author

**Tanish Tandon**

B.Tech Information Technology

Focused on Full Stack Development, Cloud Computing, and AI Applications.
