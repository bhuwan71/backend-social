import express from "express";
import * as UserController from "../controllers/userController";

const router = express.Router();

// Define user routes
router.get("/", UserController.getAllUsers);
router.get("/:id", UserController.getUserById);
// router.post('/', UserController.createUser);
router.put("/:id", UserController.updateUser);
router.delete("/:id", UserController.deleteUser);

export default router;
