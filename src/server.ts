import express from "express";
import * as bodyParser from "body-parser";
import { DatabaseConfig } from "./config/database";


// routes import
import userRoutes from "./routes/userRoutes";
// import postRoutes from "./routes/postRoutes";

const app = express();
const port = process.env.PORT || 5000;

DatabaseConfig.initialize()
  .then(() => {
    console.log("DB connected !!");
  })
  .catch((error) => {
    console.error("Error connecting to the database:", error);
  });

// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Define your routes
app.use("/api", userRoutes);
// app.use("/posts", postRoutes);

// Start the application
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
