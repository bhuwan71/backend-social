import { Request, Response } from "express";
import { UserRepository } from "../repository";
import { errorHandlingMiddleware } from "../middleware/errorHandlingMiddleware";
import { hashPassword } from "../utils/bcryptUtils";
import { checkFieldsUniqueness } from "../utils/checkFieldsUniqueness";
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
export const createUser = errorHandlingMiddleware(async (req: Request, res: Response): Promise<void> => {

  const { firstName, lastName, username, mobile, email, passwordHash } = req.body;

  const usernameError = await checkFieldsUniqueness(UserRepository, 'username', username);
  const emailError = await checkFieldsUniqueness(UserRepository, 'email', email);
  const mobileError = await checkFieldsUniqueness(UserRepository, 'mobile', mobile);

  if (usernameError || emailError || mobileError) {
    // remove an empty string from filter method 🤔
    res.status(400).json({ message: [usernameError, emailError, mobileError].filter(Boolean).join(', ') });
    return;
  }

  const hashedPassword = await hashPassword(passwordHash);
  const newUser = UserRepository.create({
    firstName: firstName,
    lastName: lastName,
    username: username,
    mobile: mobile,
    email: email,
    passwordHash: hashedPassword,
  });
  await UserRepository.save(newUser);
  res.status(201).json({ message: "Created User Successfully !!" });

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
