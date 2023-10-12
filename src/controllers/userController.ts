import { Request, Response } from "express";
import User from "../entities/user.entity"; // Import your User model
import { UserRepository } from "../repository";

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
// export const getUserById = async (req: Request, res: Response) => {
//   const { id } = req.params;
//   try {
//     const user = await UserRepository.findOne({
//       where: {
//         id: +id,
//       },
//     });
//     if (!user) {
//       return res.status(404).json({ error: "User not found" });
//     }
//     res.json(user);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Internal server error" });
//   }
// };

// Create a new user
// export const createUser = async (req: Request, res: Response) => {
//   const { fullName, address } = req.body;
//   try {
//     const newUser = await UserRepository.save({ fullName, address });
//     res.json(newUser);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Internal server error" });
//   }
// };

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
