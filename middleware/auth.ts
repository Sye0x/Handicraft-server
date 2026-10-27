import type { Request, Response, NextFunction } from "express";
import { verifyToken } from "../utils/jwt.js";

export const authenticate = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const token = req.cookies?.token;

    if (!token) {
      return res.status(401).json({
        message: "Authentication required",
      });
    }

    const decoded = verifyToken(token);

    // Attach the authenticated user's data to the request
    res.locals.user = decoded;

    next();
  } catch {
    return res.status(401).json({
      message: "Invalid or expired token",
    });
  }
};
