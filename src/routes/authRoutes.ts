import express from "express";
import * as AuthController from "../controllers/authController";
import { validateEntity } from "../middleware/validation.middleware";
import User from "../entities/user.entity";
const router = express.Router();

router.post('/register', validateEntity(User), AuthController.register);
router.post('/login', AuthController.login);

export default router;
