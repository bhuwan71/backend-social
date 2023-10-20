import express from "express";
import * as UserController from "../controllers/userController";
import { authenticateToken } from "../middleware/authenticateToken";

const router = express.Router();

// post routes
router.post("/upDateProfile", authenticateToken as any, UserController.updateProfile)


// get Routes
router.get("/profile/:id", authenticateToken as any, UserController.getProfile);







export default router;
