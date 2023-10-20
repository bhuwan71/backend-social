import jwt, { Secret } from 'jsonwebtoken';
require('dotenv').config();

const JWT_SECRET: Secret = process.env.JWT_SECRET as Secret;
const ACCESS_TOKEN_EXPIRATION = process.env.ACCESS_TOKEN_EXPIRATION;
const REFRESH_TOKEN_EXPIRATION = process.env.REFRESH_TOKEN_EXPIRATION;

export function generateAccessToken(username: string, userid: number): string {
    return jwt.sign({ username, userid }, JWT_SECRET, { expiresIn: ACCESS_TOKEN_EXPIRATION });
}

export function generateRefreshToken(username: string, userid: number): string {
    return jwt.sign({ username, userid }, JWT_SECRET, { expiresIn: REFRESH_TOKEN_EXPIRATION });
}
