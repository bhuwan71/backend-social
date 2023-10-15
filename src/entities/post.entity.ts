import { Column, Entity, OneToMany, ManyToOne, JoinColumn } from "typeorm";
import Base from "./base.entity";
import User from "./user.entity";
import { Like } from "./like.entity";
import { Comment } from "./comment.entity";

@Entity("post")
export default class Post extends Base {
    @Column()
    title: string;

    @Column({ type: "text" })
    content: string;

    @Column({ nullable: true, default: 0 })
    likesCount: number

    @Column({ nullable: true, default: 0 })
    commentsCount: number

    @Column({ nullable: true, default: 0 })
    sharesCount: number

    // Relations
    @ManyToOne(() => User, user => user.posts)
    author: User;

    @OneToMany(() => Like, like => like.post)
    likes: Like[];

    @OneToMany(() => Comment, comment => comment.post)
    comments: Comment[];
}
