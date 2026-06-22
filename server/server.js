// server.js ka updated logic
import express from 'express';
import cors from 'cors';
import "dotenv/config";
import connectDB from './configs/db.js'; 
import userRouter from './routes/userRoutes.js';
import resumeRouter from './routes/resumeRoutes.js';
import aiRouter from './routes/aiRoute.js';

const app = express();
const PORT = process.env.PORT || 9000;

// Database connection
await connectDB();

// Middlewares
app.use(cors()); // CORS pehle
app.use(express.json({ limit: '50mb' })); // Resume data bada hota hai, limit badhao

// Routes
app.get("/", (req, res) => res.send("Server is live..."));
app.use("/api/users", userRouter);
app.use('/api/resumes', resumeRouter);
app.use('/api/ai', aiRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});