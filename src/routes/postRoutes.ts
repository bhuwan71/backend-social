import express from "express";
import * as PostController from '../controllers/postController';
import { authenticateToken } from "../middleware/authenticateToken";

const router = express.Router();

// // Define post routes
router.post("", authenticateToken as any, PostController.getAllPosts);
// router.get("/:id", PostController.getPostById);
router.post("/create/post", authenticateToken as any, PostController.createPost);
// router.put("/:id", PostController.updatePost);
// router.delete("/:id", PostController.deletePost);

export default router;
