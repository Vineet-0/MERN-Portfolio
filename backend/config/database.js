import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config({ path: 'backend/config/config.env' })

export const connectDatabase = () => {
    const db_link = "mongodb+srv://vineet351016:dxMeXFrMMQhztMZ8@portfoliodata.7g8z8fr.mongodb.net/?retryWrites=true&w=majority";
  mongoose
    .connect(db_link)
    .then(() => {
      console.log("DB connected ....");
    })
    .catch((err) => {
      console.log(err);
    });
};
