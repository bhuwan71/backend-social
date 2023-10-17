import { Request, Response } from "express";
import { UserRepository } from "../repository";
import { errorHandlingMiddleware } from "../middleware/errorHandlingMiddleware";
import { comparePasswords, hashPassword } from "../utils/bcryptUtils";
import { checkFieldsUniqueness } from "../utils/checkFieldsUniqueness";
import { generateAccessToken, generateRefreshToken } from "../utils/tokenUtils";

// Create a new user Register function 😁
export const register = errorHandlingMiddleware(async (req: Request, res: Response): Promise<void> => {

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
    newUser.validate();
    await UserRepository.save(newUser);
    res.status(201).json({ message: "Register User Successfully !!" });

});

// login function

export const login = errorHandlingMiddleware(async (req: Request, res: Response): Promise<void> => {
    const { username, passwordHash } = req.body;

    if (!username || !passwordHash) {
        res.status(400).json({ message: 'Username and password are required' });
        return;
    }

    const user = await UserRepository.findOne({ where: { username } });

    if (!user) {
        res.status(401).json({ message: 'Invalid credentials User Does not exist' });
        return;
    }

    // compare passwords 
    const comparedPasswordsResult = await comparePasswords(passwordHash, user.passwordHash)
    if (!comparedPasswordsResult) {
        res.status(401).json({ message: 'Invalid credentials Password Does not matched' });
        return;
    }

    const accessToken = generateAccessToken(username, user.id);
    const refreshToken = generateRefreshToken(username, user.id);

    res.status(200).json(
        {
            message: "Login Successfully",
            accessToken,
            refreshToken,
        });
});
