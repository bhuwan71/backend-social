import express from "express";
import * as bodyParser from "body-parser";
import { DatabaseConfig } from "./src/config/database";
import userRoutes from "./src/routes/userRoutes";
import authRoutes from "./src/routes/authRoutes";
// import postRoutes from "./routes/postRoutes";
import dotenv from 'dotenv';


const app = express();
dotenv.config();

const port = process.env.PORT || 5000;

DatabaseConfig.initialize()
  .then(() => {
    console.log("DB connected successfully !!");
  })
  .catch((error) => {
    console.error("Error connecting to the database:", error);
  });

// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// Define your routes
app.use("/api", userRoutes);
app.use("/api/auth", authRoutes);

// app.use("/posts", postRoutes);

// Start the application
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
