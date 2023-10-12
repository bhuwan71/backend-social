import { Repository } from "typeorm";
import User from "../entities/user.entity";
import { DatabaseConfig } from "../config/database";
import Post from "../entities/post.entity";

export const UserRepository: Repository<User> =DatabaseConfig.getRepository(User);
export const PostRepository: Repository<Post> =DatabaseConfig.getRepository(Post);

