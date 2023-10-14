import { Request, Response, NextFunction } from 'express';
import jwt, { VerifyErrors } from 'jsonwebtoken';
require('dotenv').config();

interface CustomRequest extends Request {
    user: string;
}

export function authenticateToken(req: CustomRequest, res: Response, next: NextFunction) {

    const authorizationHeader = req.headers['authorization'];

    if (!authorizationHeader || !authorizationHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Access token in "Bearer" format is required' });
    }

    // Extracting the token after "Bearer " 👋
    const token = authorizationHeader.replace('Bearer ', '');

    const jwtSecret = process.env.JWT_SECRET;

    if (!jwtSecret) {
        return res.status(500).json({ message: 'JWT secret is not configured' });
    }

    jwt.verify(token, jwtSecret, (err: VerifyErrors | null, user: any) => {
        if (err) {
            return res.status(403).json({ message: 'Invalid access token' });
        }
        req.user = user;
        next();
    });
}
