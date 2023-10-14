import express from "express";
import * as UserController from "../controllers/userController";
import { authenticateToken } from "../middleware/authenticateToken";

const router = express.Router();

router.get("/me/:id", authenticateToken as any, UserController.getUserById);
// router.get("/me/:id", UserController.getUserById);


export default router;
