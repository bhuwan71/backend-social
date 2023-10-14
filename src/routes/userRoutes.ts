import express from "express";
import * as UserController from "../controllers/userController";
import { validateEntity } from "../middleware/validation.middleware";
import User from "../entities/user.entity";
const router = express.Router();

// Define user routes
// router.get("/", UserController.getAllUsers);
// router.get("/:id", UserController.getUserById);
router.post('/createUser', validateEntity(User), UserController.createUser);
// router.put("/:id", UserController.updateUser);
// router.delete("/:id", UserController.deleteUser);

export default router;
