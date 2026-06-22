










import ai from "../configs/ai.js";
import Resume from "../models/Resume.js";

const cleanAIResponse = (text) => {
    return text.replace(/```json/g, "").replace(/```/g, "").trim();
};

export const enhanceProfessionalSummary = async (req, res) => {
    try {
        const { userContent } = req.body;
        const response = await ai.chat.completions.create({
            model: "llama-3.1-8b-instant",
            messages: [{ role: "user", content: `Rewrite this resume summary professionally: ${userContent}` }]
        });
        return res.status(200).json({ enhancedContent: response.choices[0].message.content });
    } catch (error) {
        console.error("AI Controller Error:", error);
        return res.status(500).json({ message: "AI Engine failed." });
    }
};

export const enhanceJobDescription = async (req, res) => {
    try {
        const { userContent } = req.body;
        const response = await ai.chat.completions.create({
            model:  "llama-3.1-8b-instant",
            messages: [{ role: "user", content: `Enhance this job description: ${userContent}` }],
        });
        return res.status(200).json({ enhancedContent: response.choices[0].message.content });
    } catch (error) {
        console.error("Job Desc Error:", error);
        return res.status(500).json({ message: "AI Engine failed." });
    }
};

export const uploadResume = async (req, res) => {
    try {
        const { resumeText, title } = req.body;
        if (!resumeText) return res.status(400).json({ message: 'Missing source text' });

        const response = await ai.chat.completions.create({
            model: "llama-3.1-8b-instant",
            messages: [
                { 
                    role: "system", 
                    content: `You are an expert Resume Parser. Return ONLY valid JSON in this exact structure:
                    {
                        "personal_info": {"full_name": "", "email": "", "phone": "", "profession": "", "linkedin": "", "github": "", "leetcode": ""},
                        "professional_summary": "",
                        "experience": [],
                        "education": [],
                        "project": [],
                        "skills": [],
                        "achievements": []
                    }.` 
                },
                { role: "user", content: `Extract details from this resume text:\n${resumeText}` }
            ]
        });

        const cleanedData = cleanAIResponse(response.choices[0].message.content);
        const parsedData = JSON.parse(cleanedData);

        // Explicit Mapping to Database Schema
        const newResume = await Resume.create({ 
            userId: req.userId, 
            title: title || "Parsed Resume",
            personal_info: parsedData.personal_info || {},
            professional_summary: parsedData.professional_summary || "",
            experience: parsedData.experience || [],
            education: parsedData.education || [],
            project: parsedData.project || [],
            skills: parsedData.skills || [],
            achievements: parsedData.achievements || [] // Added achievements mapping
        });

        return res.status(201).json({ resumeId: newResume._id });
    } catch (error) {
        console.error("Critical Parsing Error:", error);
        return res.status(500).json({ message: "AI Parsing failed." });
    }
};



export const calculateAtsScore = async (req, res) => {
    try {
        const { resumeData } = req.body;
        if (!resumeData) return res.status(400).json({ message: "Empty data" });

        const response = await ai.chat.completions.create({
            model:  "llama-3.1-8b-instant", 
            messages: [
                { role: "user", content: `Analyze this JSON. Return ONLY JSON: {"score": number, "criticalImprovements": ["string"]}. Data: ${JSON.stringify(resumeData)}` }
            ]
        });

        const cleanJson = cleanAIResponse(response.choices[0].message.content);
        try {
            const parsedData = JSON.parse(cleanJson);
            return res.status(200).json(parsedData);
        } catch (e) {
            return res.status(500).json({ score: 0, criticalImprovements: ["Format error."] });
        }
    } catch (error) {
        console.error("ATS Error:", error.message);
        return res.status(500).json({ message: "AI service failed." });
    }
};