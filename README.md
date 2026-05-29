# 🧩 Reusable Components & Resume Templates Module

A modular React component architecture powering the AI Resume Builder application.

This branch focuses on reusable UI components, dynamic resume templates, live preview rendering, and customizable resume design systems.

---

## 🚀 Overview

The Components Module is responsible for:

- Reusable UI Architecture
- Resume Preview Rendering
- Dynamic Template Management
- Personal Information Components
- Responsive Layout System
- Theme & Styling Controls

The goal is to maintain a scalable and maintainable frontend architecture while supporting multiple resume designs and real-time updates.

---

## ✨ Features

### 🎨 Dynamic Resume Templates

- Classic Template
- Modern Template
- Minimal Template
- Minimal Image Template

### ⚡ Live Resume Preview

- Real-Time Updates
- Dynamic Data Rendering
- Responsive Resume Layout
- Instant Template Switching

### 🧩 Reusable Components

- Navbar
- Hero Section
- Features Section
- Testimonials
- Call To Action
- Footer
- Resume Preview
- Personal Information Form

### 🎯 User Experience

- Mobile Responsive Design
- Clean UI Components
- Fast Rendering
- Component Reusability

---

## 📂 Component Structure

```text
src
│
├── components
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── Features.jsx
│   ├── Testimonial.jsx
│   ├── Footer.jsx
│   ├── ResumePreview.jsx
│   └── PersonalInfoForm.jsx
│
├── assets
│   └── templates
│       ├── ClassicTemplate.jsx
│       ├── ModernTemplate.jsx
│       ├── MinimalTemplate.jsx
│       └── MinimalImageTemplate.jsx
│
└── pages
```

---

## 🎨 Resume Template Engine

```text
Resume Data
      │
      ▼
Template Selector
      │
      ▼
Selected Template
      │
      ▼
Live Rendering
      │
      ▼
Resume Preview
```

---

## ⚡ Engineering Highlights

- Component-Based Architecture
- Reusable UI Design
- Dynamic Template Rendering
- Conditional Component Loading
- Responsive Layout System
- Clean Folder Structure
- Maintainable Codebase

---

## 📱 Responsive Design

Supports:

- Desktop
- Laptop
- Tablet
- Mobile Devices

---

## 🛠️ Technologies Used

### Frontend

- React.js
- JSX
- Tailwind CSS
- React Router DOM

### State Handling

- React Hooks
- Props Drilling
- Dynamic State Updates

---

## 🎯 Key Components

### ResumePreview.jsx

Responsible for rendering resume data dynamically.

### PersonalInfoForm.jsx

Handles user information input and updates.

### Template Components

Provide multiple ATS-friendly resume layouts.

### Home Components

Landing page UI sections such as:

- Hero
- Features
- Testimonials
- Call To Action
- Footer

---

## 🚀 Future Improvements

- Drag & Drop Sections
- Template Marketplace
- Theme Generator
- Dark Mode Support
- Advanced Layout Customization
- Template Builder

---

## 👨‍💻 Author
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
# 🚀 AI Resume Builder - Full Stack MERN + AI SaaS Platform

> An AI-powered Resume Builder that helps users create ATS-optimized professional resumes with real-time preview, intelligent content enhancement, cloud image management, and one-click PDF export.

---

## 🌟 Overview

AI Resume Builder is a production-ready full-stack web application designed to simplify professional resume creation.

The platform leverages Artificial Intelligence to generate compelling professional summaries and improve job descriptions while providing users with complete control over resume customization through dynamic templates, color themes, profile image management, and live preview functionality.

---

## ✨ Core Features

### 🔐 Authentication & Authorization

- Secure User Registration
- JWT Authentication
- Password Hashing using Bcrypt
- Protected Routes
- Persistent Login Sessions

### 🧠 AI Powered Resume Enhancement

- Generate Professional Summaries
- ATS-Friendly Content Optimization
- AI Enhanced Experience Descriptions
- Smart Resume Content Suggestions

### 📄 Resume Management

- Create Multiple Resumes
- Edit Existing Resumes
- Delete Resumes
- Public/Private Resume Visibility
- Resume Sharing Support

### 🎨 Customization Engine

- Multiple Resume Templates
- Dynamic Color Themes
- Profile Picture Upload
- Background Removal Support
- Responsive Resume Layouts

### ⚡ Live Resume Preview

- Real-Time Preview Rendering
- Dynamic Template Switching
- Instant Content Updates
- Responsive Design

### 📥 Export & Distribution

- PDF Download
- Shareable Resume Links
- Public Resume Access

---

## 🏗️ System Architecture

```text
Frontend (React + Redux)
            │
            ▼
REST API (Node.js + Express)
            │
    ┌───────┴────────┐
    ▼                ▼
MongoDB Atlas     OpenAI API
(Database)       (AI Engine)
    │
    ▼
ImageKit Cloud Storage
```

---

## 🛠️ Tech Stack

### Frontend

- React.js
- React Router DOM
- Redux Toolkit
- Tailwind CSS
- Axios

### Backend

- Node.js
- Express.js
- JWT Authentication
- Multer

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
- Mongoose ODM

### AI Services

- OpenAI API

### Cloud Services

- ImageKit

### Deployment

- VPS Hosting
- Nginx Reverse Proxy
- SSL Configuration

---

## 🔐 Security Features

- JWT Token Authentication
- Password Encryption using Bcrypt
- Protected API Routes
- Secure Environment Variables
- CORS Protection
- Request Validation
- Error Handling Middleware

---

## ⚡ Engineering Highlights

- Component-Based Architecture
- Scalable REST API Design
- Redux State Management
- Reusable UI Components
- Dynamic Resume Rendering
- Cloud File Management
- Optimized API Communication
- Modular Backend Structure

---

## 📂 Project Structure

```text
AI-Resume-Builder
│
├── client
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── redux
│   │   ├── assets
│   │   └── routes
│
├── server
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── config
│   └── utils
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
## 📈 Performance Optimizations

- Lazy Loading
- Reusable Components
- Optimized Redux Store
- Reduced API Requests
- Cloud Image Delivery
- Efficient Database Queries

---

## 🌍 Real World Applications

- Students creating internship resumes
- Freshers applying for placements
- Working professionals updating resumes
- Freelancers building portfolios
- HR screening ATS-friendly resumes

---

## 🚀 Future Roadmap

### Phase 1

- ATS Resume Builder
- AI Summary Generator
- PDF Export

### Phase 2

- Resume Analytics
- ATS Score Checker
- Cover Letter Generator

### Phase 3

- LinkedIn Profile Import
- Portfolio Website Generator
- AI Career Assistant

### Phase 4

- AI Interview Preparation
- Job Recommendation Engine
- Resume Benchmarking

---

## 📸 Screenshots

### Home Page

(Add Screenshot)

### Dashboard

(Add Screenshot)

### Resume Editor

(Add Screenshot)

### Resume Preview

(Add Screenshot)

---

## 👨‍💻 Developer

### Tanish Tandon

B.Tech Information Technology

Focused on Full Stack Development, Cloud Computing, React Architecture, and AI Applications.

---

⭐ If you like this architecture, consider giving the repository a star.
Passionate about Full Stack Development, Cloud Computing, AI Applications and Scalable Web Systems.

### Skills

- React.js
- Node.js
- Express.js
- MongoDB
- Redux
- JWT
- OpenAI API
- Cloud Computing

---

## ⭐ If you like this project

Give this repository a star and support future development.
