import express from "express";
import protect from "../middlewares/authMiddleware.js";
import { calculateAtsScore, enhanceJobDescription, enhanceProfessionalSummary, uploadResume } from "../controllers/aiController.js";

const aiRouter = express.Router();

aiRouter.post('/enhance-pro-sum', protect, enhanceProfessionalSummary);
aiRouter.post('/enhance-job-desc', protect, enhanceJobDescription);
aiRouter.post('/upload-resume', protect, uploadResume);
// NEW ADAPTIVE GATE: Scoring calculator path
aiRouter.post('/calculate-ats', protect, calculateAtsScore);

export default aiRouter;