import jwt from "jsonwebtoken";

const protect = async (req, res, next) => {
    // let token = req.headers.authorization;

let token = req.headers.authorization || req.headers.Authorization;

    if (!token) {
        return res.status(401).json({ message: "Not authorized, no token" });
    }

    // Agar token "Bearer " se start ho raha hai, toh use remove kar do
    if (token.startsWith("Bearer ")) {
        token = token.split(" ")[1];
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = decoded.userId;
        next();
    } catch (error) {
        return res.status(401).json({ message: "Not authorized, invalid token" });
    }
};

export default protect;