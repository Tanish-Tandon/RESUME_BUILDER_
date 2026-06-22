import User from "../models/User.js";
import Resume from "../models/Resume.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const generateToken = (userId) => {
    return jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: "7d" });
};

// POST : /api/users/register
// POST : /api/users/register
export const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            return res.status(400).json({ message: "Missing required fields" });
        }

        // --- YAHAN CHANGE KARO ---
        // Purana: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        // Naya (Strict):
        const emailRegex = /^[^\s@]+@[^\s@]+\.(com|in|net|org)$/;
        
        if (!emailRegex.test(email)) {
            return res.status(400).json({ message: "Invalid email syntax: dot ke baad kam se kam 2 characters chahiye." });
        }
        // -------------------------

        if (password.length < 7) {
            return res.status(400).json({ message: "Security parameters mismatch: Password must be >= 7 characters." });
        }

        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ message: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await User.create({ name, email, password: hashedPassword });
        const token = generateToken(newUser._id);

        return res.status(201).json({ 
            message: "User registered successfully", 
            token, 
            user: { _id: newUser._id, name: newUser.name, email: newUser.email } 
        });
    } catch (error) {
       return res.status(400).json({ message: error.message });
    }
};










// POST: /api/users/login
export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        const token = generateToken(user._id);
        return res.status(200).json({ message: 'Login successful', token, user: { _id: user._id, name: user.name, email: user.email } });
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

// FIXED: Explicitly matching the exact export name required by userRoutes.js
export const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.userId).select("-password");
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        return res.status(200).json({ user });
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

// GET: /api/users/resumes
// GET: /api/users/resumes
export const getUserResumes = async (req, res) => {
    try {
        // .sort({ updatedAt: -1 }) add kar do, taaki naye resumes upar dikhein
        const resumes = await Resume.find({ userId: req.userId }).sort({ updatedAt: -1 });
        return res.status(200).json({ resumes });
    } catch (error) {
        // Error log ko console.error kardo taaki backend terminal mein dikhe
        console.error("Fetch Resumes Error:", error);
        return res.status(500).json({ message: "Server error, try again later." });
    }
};