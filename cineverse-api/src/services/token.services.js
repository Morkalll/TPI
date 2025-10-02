
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config.js";

export const verifyToken = (req, res, next) => 
{
    const header = req.header("Authorization") || "";
    const token = header.split(" ")[1];

    if (!token) 
    {
        return res.status(401).json({ message: "No posee autorización requerida" });
    }

    try 
    {
        const payload = jwt.verify(token, JWT_SECRET);
        // adjuntamos datos del token al request
        req.user = payload;
        next();

    } catch (error) 
    {
        return res.status(403).json({ message: "No posee permisos correctos" });
    } 

};
