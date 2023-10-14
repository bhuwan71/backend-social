import { Request, Response } from "express";
import { UserRepository } from "../repository";
import { errorHandlingMiddleware } from "../middleware/errorHandlingMiddleware";

interface CustomRequest extends Request {
    user?: any; // Add your custom property here
}
// Get all users
// export const getAllUsers = async (req: Request, res: Response) => {
//   try {
//     const users = await UserRepository.find({
//       relations: { posts: true },
//       select: { posts: { id: true, title: true } },
//     });
//     res.json(users);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Internal server error" });
//   }
// };

// Get a user by ID
export const getProfile = errorHandlingMiddleware(async (req: CustomRequest, res: Response): Promise<void> => {
    const { id } = req.params;
    const userIdFromToken = req.user.userid;

    // Check if the user ID from the token matches the requested user ID
    if (userIdFromToken !== +id) {
        res.status(403).json({ message: 'Access denied' });
        return
    }
    const user = await UserRepository.createQueryBuilder('users')
        .select(['users.id', 'users.username', 'users.email', 'users.firstName', 'users.middleName', 'users.lastName'])
        .where('users.id = :id', { id: +id })
        .getOne();

    if (!user) {
        res.status(404).json({ error: "User not found" });
        return
    }
    res.json(user);
});

// Update a user by ID
// export const updateUser = async (req: Request, res: Response) => {
//   const { id } = req.params;
//   try {
//     const user = await UserRepository.update(id, req.body);
//     if (!user) {
//       return res.status(404).json({ error: "User not found" });
//     }
//     res.json(user);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Internal server error" });
//   }
// };

// Delete a user by ID
// export const deleteUser = async (req: Request, res: Response) => {
//   const { id } = req.params;
//   try {
//     const user = await UserRepository.softDelete(id);
//     if (!user) {
//       return res.status(404).json({ error: "User not found" });
//     }
//     res.json({ message: "User deleted successfully" });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Internal server error" });
//   }
// };
