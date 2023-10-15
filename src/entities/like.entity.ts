import { Entity,Column, ManyToOne, CreateDateColumn } from 'typeorm';
import Base from "./base.entity";
import Post from "./post.entity";
import User from "./user.entity";

@Entity("likes")
export class Like extends Base {

    @CreateDateColumn()
    likedAt: Date;

    @Column()
    ipAddress: string;

    // relations
    @ManyToOne(() => User, user => user.likes)
    user: User;

    @ManyToOne(() => Post, post => post.likes)
    post: Post;
}
