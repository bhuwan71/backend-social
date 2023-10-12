// import { Request, Response } from 'express';
// import { Post } from '../entities/post'; // Import your Post model

// // Get all posts
// export const getAllPosts = async (req: Request, res: Response) => {
//   try {
//     const posts = await Post.findAll();
//     res.json(posts);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// };

// // Get a post by ID
// export const getPostById = async (req: Request, res: Response) => {
//   const { id } = req.params;
//   try {
//     const post = await Post.findByPk(id);
//     if (!post) {
//       return res.status(404).json({ error: 'Post not found' });
//     }
//     res.json(post);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// };

// // Create a new post
// // export const createPost = async (req: Request, res: Response) => {
// //   const { content, userId } = req.body;
// //   try {
// //     const newPost = await Post.create({
// //       content,
// //       userId,
// //     });
// //     res.json(newPost);
// //   } catch (error) {
// //     console.error(error);
// //     res.status(500).json({ error: 'Internal server error' });
// //   }
// // };

// // Update a post by ID
// export const updatePost = async (req: Request, res: Response) => {
//   const { id } = req.params;
//   const { content } = req.body;
//   try {
//     const post = await Post.findByPk(id);
//     if (!post) {
//       return res.status(404).json({ error: 'Post not found' });
//     }
//     post.content = content;
//     await post.save();
//     res.json(post);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// };

// // Delete a post by ID
// export const deletePost = async (req: Request, res: Response) => {
//   const { id } = req.params;
//   try {
//     const post = await Post.findByPk(id);
//     if (!post) {
//       return res.status(404).json({ error: 'Post not found' });
//     }
//     await post.destroy();
//     res.json({ message: 'Post deleted successfully' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// };