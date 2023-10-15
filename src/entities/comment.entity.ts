import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn } from 'typeorm';
import Base from "./base.entity";
import User from "./user.entity";
import Post from './post.entity';

@Entity("comments")
export class Comment extends Base {

    @Column({ nullable: true, default: " " })
    content: string

    // Relations
    @ManyToOne(() => User, user => user.comments)
    user: User;

    @ManyToOne(() => Post, post => post.comments)
    post: Post;

}
