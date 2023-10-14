import express from "express";
import * as UserController from "../controllers/userController";
import { authenticateToken } from "../middleware/authenticateToken";

const router = express.Router();

router.get("/profile/:id", authenticateToken as any, UserController.getProfile);
// router.get("/me/:id", UserController.getUserById);


export default router;
