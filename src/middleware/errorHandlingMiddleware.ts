import { Request, Response } from 'express';
import { QueryFailedError } from 'typeorm';

export function errorHandlingMiddleware(callback: (req: Request, res: Response) => Promise<void>) {
    return async (req: Request, res: Response) => {
        try {
            await callback(req, res);
        } catch (error) {
            return res.status(500).json({ error: 'Internal server error' });
        }
    };
}
