import { Request, Response } from "express";
import { UserRepository } from "../repository";
import { errorHandlingMiddleware } from "../middleware/errorHandlingMiddleware";
import User from "../entities/user.entity";

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
    const user: User = await UserRepository.createQueryBuilder('users')
        .select([
            'users.id',
            'users.username',
            'users.email',
            'users.firstName',
            'users.middleName',
            'users.lastName',
            'users.mobile',
            "users.followersCount",
            "users.followingCount",
            "users.location",
            "users.dateOfBirth",
            "users.bio",
            "users.website",
            "users.profileImage"
        ])
        .where('users.id = :id', { id: +id })
        .getOneOrFail();

    if (!user) {
        res.status(404).json({ error: "User not found" });
        return
    }

    res.json(user);
});

// Update a user by ID
export const updateProfile = errorHandlingMiddleware(async (req: Request, res: Response): Promise<void> => {

    const { id, username, email, firstName, middleName, lastName, mobile, location, dateOfBirth, bio, website, profileImage } = req.body;

    const allowedFields = ['id', 'username', 'email', 'firstName', 'middleName', 'lastName', 'mobile', 'location', 'dateOfBirth', 'bio', 'website', 'profileImage'];
    const disallowedFields = Object.keys(req.body).filter(field => !allowedFields.includes(field));
    if (disallowedFields.length > 0) {
        res.status(400).json({ error: `Updating '${disallowedFields.join(', ')}' is not allowed` });
        return;
    }

    const updateResult = await UserRepository
        .createQueryBuilder()
        .update(User)
        .set({ username, email, firstName, middleName, lastName, mobile, location, dateOfBirth, bio, website, profileImage }) // Allow updates only to the {object filed} field 👌
        .where({ id })
        .execute()

    if (updateResult.affected === 0) {
        res.status(404).json({ error: 'User not found' });
        return;
    }
    res.json({ success: 'User profile updated' });
});

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
