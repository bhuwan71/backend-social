import express from "express";
import * as bodyParser from "body-parser";
import { sequelize } from "./config/database";
import userRoutes from "./routes/userRoutes"; 
import postRoutes from "./routes/postRoutes";

const app = express();
const port = process.env.PORT || 3000;

// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Define your routes
app.use("/users", userRoutes);
app.use("/posts", postRoutes);

// Start the application
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Sync the database with Sequelize
sequelize
  .sync({ force: false })
  .then(() => {
    console.log("Database synced");
  })
  .catch((error: any) => {
    console.error("Error syncing database:", error);
  });
