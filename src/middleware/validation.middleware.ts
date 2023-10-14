import { Request, Response, NextFunction } from "express";
import { validate, ValidationError } from "class-validator";

export function validateEntity<T>(type: new () => T) {
    return async (req: Request, res: Response, next: NextFunction) => {
        const entity = new type();
        Object.assign(entity as any, req.body);
        const errors: ValidationError[] = await validate(entity as any);

        if (errors.length > 0) {
            res.status(400).json({ errors: errors });
        } else {
            next();
        }
    };
}
