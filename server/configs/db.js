// import mongoose from "mongoose";

// const connectDB = async () => {
//     try {
//         mongoose.connection.on("connected", ()=>{console.log("Database connected successfully")})

//         let mongodbURI = process.env.MONGODB_URI;
//         const projectName = 'resume-builder';

//         if(!mongodbURI){
//             throw new Error("MONGODB_URI environment variable not set")
//         }

//         if(mongodbURI.endsWith('/')){
//             mongodbURI = mongodbURI.slice(0, -1)
//         }

//         await mongoose.connect(`${mongodbURI}/${projectName}`)
//     } catch (error) {
//         console.error("Error connecting to MongoDB:", error)
//     }
// }

// export default connectDB;



import mongoose from "mongoose";

const connectDB = async () => {
    try {
        // Connection success listener
        mongoose.connection.on("connected", () => {
            console.log("Database connected successfully");
        });

        // Error listener for better debugging
        mongoose.connection.on("error", (err) => {
            console.error("MongoDB connection error:", err);
        });

        const mongodbURI = process.env.MONGODB_URI;

        if (!mongodbURI) {
            throw new Error("MONGODB_URI environment variable not set in .env file");
        }

        // Direct connection string use karo, isme alag se '/' ya projectName append mat karo.
        // MongoDB Atlas ya local URL mein DB naam pehle se hota hai (e.g., .../resume-builder)
        await mongoose.connect(mongodbURI);

    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        process.exit(1); // Agar DB connect nahi hua toh app exit hona chahiye
    }
}

export default connectDB;