import { Column, Entity, OneToMany, Unique } from "typeorm";
import Base from "./base.entity";
import Post from "./post.entity";
import {
    IsEmail,
    IsNotEmpty,
    IsInt,
    Min,
    Max,
    MaxLength,
    MinLength,
    Matches,
} from "class-validator";

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
        default: null,
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

    @Column({ type: "text", nullable: true, default: null })
    intro: string | null;

    @Column({ type: "text", nullable: true, default: null })
    profile: string | null;

    @OneToMany(() => Post, (post) => post.user)
    posts: Post[] | number[];
}
