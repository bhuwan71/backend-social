import { Request, Response } from 'express';
import { QueryFailedError } from 'typeorm';

export function errorHandlingMiddleware(callback: (req: Request, res: Response) => Promise<void>) {
    return async (req: Request, res: Response) => {
        try {
            await callback(req, res);
        } catch (error) {
            if (error instanceof QueryFailedError) {
                if (error.message.includes('duplicate key value')) {
                    if (error.message.includes('username')) {
                        return res.status(400).json({ error: 'Username is already taken.' });
                    } else if (error.message.includes('mobile')) {
                        return res.status(400).json({ error: 'Mobile number is already taken.' });
                    } else if (error.message.includes('email')) {
                        return res.status(400).json({ error: 'Email is already taken.' });
                    }
                }
            }

            return res.status(500).json({ error: 'Internal server error' });
        }
    };
}
