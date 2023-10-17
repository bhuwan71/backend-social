import { Request, Response } from 'express';
import { errorHandlingMiddleware } from '../middleware/errorHandlingMiddleware';
import { PostRepository } from '../repository';

interface CustomRequest extends Request {
    user?: any; // Add your custom property here
}

// Get all posts infinite scroll
export const getAllPosts = errorHandlingMiddleware(async (req: Request, res: Response) => {
    const { page, pageSize } = req.body;
    const pageNumber = parseInt(page as string) || 1;
    const size = parseInt(pageSize as string) || 1;
    const [posts, count] = await PostRepository.findAndCount({
        take: size,
        skip: (pageNumber - 1) * size,
        order: {
            createdAt: 'DESC',
        },
    });
    res.json({
        posts,
        count,
    });
});

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

// Create a new post
export const createPost = errorHandlingMiddleware(async (req: CustomRequest, res: Response) => {
    const { content, title, postImage } = req.body;
    const userIdFromToken = req.user.userid;
    const newPost = PostRepository.create({
        author: userIdFromToken,
        title,
        content,
        postImage
    });
    await PostRepository.save(newPost);
    res.status(201).json({ message: "Post Create Successfully !!" });
});

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
