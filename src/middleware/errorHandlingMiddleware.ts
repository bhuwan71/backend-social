import { Request, Response } from "express";
export function errorHandlingMiddleware(callback: (req: Request, res: Response) => Promise<any>) {
    return async (req: Request, res: Response) => {
        try {
            await callback(req, res);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Internal server error" });
        }
    };
}
