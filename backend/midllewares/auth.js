import { User } from "../model/User.js";
import jwt from "jsonwebtoken";

export const isAuthenticated = async (req, res, next) => {
  try {
    const { token } = req.cookies;
    if (!token) {
        return res.status(400).json({
            success: false,
            message: "Please Login to Access",
          });
    }
    const decoded=jwt.verify(token,"jdvkcvkjdnvcmsxnckjsdbshbdhbcbhbschncshdcsdfkjgjsfg");
    const user=await User.findById(decoded._id);
    req.user=user;
    next();

  
  } catch(error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
