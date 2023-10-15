import { Column, Entity, JoinTable, ManyToMany, OneToMany, Unique } from "typeorm";
import Base from "./base.entity";
import Post from "./post.entity";
import { Like } from "./like.entity";
import { Role } from "./role.entity"
import {
    IsEmail,
    IsNotEmpty,
    MinLength,
    Matches,
} from "class-validator";
import { Comment } from "./comment.entity";

@Entity("users")
@Unique(["username"])
@Unique(["mobile"])
@Unique(["email"])
export default class User extends Base {
    @Column({
        name: "first_name",
        type: "varchar",
        length: 50,
    })
    @IsNotEmpty({ message: "First name is required" })
    @MinLength(2, { message: "First name must be at least 2 characters" })
    firstName: string;

    @Column({
        name: "middle_name",
        type: "varchar",
        length: 50,
        nullable: true,
        default: " ",
    })
    middleName: string;

    @Column({
        name: "last_name",
        type: "varchar",
        length: 50,
    })
    @IsNotEmpty({ message: "Last name is required" })
    @MinLength(2, { message: "Last name must be at least 2 characters" })
    lastName: string;

    @Column({ type: "varchar", length: 50 })
    @IsNotEmpty({ message: "User name is required" })
    username: string | null;

    @Column({ type: "varchar", length: 100 })
    @IsNotEmpty({ message: "Email is required" })
    @IsEmail({}, { message: "Invalid email format" })
    email: string;

    @Column({ type: "varchar", length: 15, nullable: true })
    mobile: string | null;

    @Column({ type: "varchar" })
    @IsNotEmpty({ message: "Password is required" })
    @MinLength(8, { message: "Password must be at least 8 characters" })
    @Matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z\d]).*$/, {
        message: "Password must contain at least one lowercase letter, one uppercase letter, one digit, and one special character",
    })
    passwordHash: string;

    @Column({ type: "timestamp", nullable: true, default: null })
    lastLogin: Date | null;

    @Column({ nullable: true, default: 0 })
    followingCount: number

    @Column({ nullable: true, default: 0 })
    followersCount: number

    @Column({ nullable: true, default: 0 })
    postCount: number

    @Column({ nullable: true, default: " " })
    location: string

    @Column({ type: "timestamp", nullable: true, default: null })
    dateOfBirth: string

    @Column({ type: "text", nullable: true, default: " " })
    bio: string | null;

    @Column({ type: "text", nullable: true, default: " " })
    website: string | null;

    @Column({ type: "text", nullable: true, default: " " })
    profileImage: string | null;


    // Relations

    @OneToMany(() => Post, post => post.author)
    posts: Post[];

    @OneToMany(() => Comment, comment => comment.user)
    comments: Comment[];

    @OneToMany(() => Like, like => like.user)
    likes: Like[];

    @ManyToMany(() => Role)
    @JoinTable()
    roles: Role[];

}
