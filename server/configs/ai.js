import OpenAI from "openai";

// const ai = new OpenAI({
//     apiKey: process.env.OPENAI_API_KEY,      // Case corrected
//     baseURL: process.env.OPENAI_BASE_URL,    // Case corrected
// });



const ai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY, 
    baseURL: process.env.OPENAI_BASE_URL 
});

export default ai;