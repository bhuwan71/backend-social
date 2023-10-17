import { Column, Entity, JoinTable, ManyToMany, OneToMany, Unique } from "typeorm";
import Base from "./base.entity";
import Post from "./post.entity";
import { Like } from "./like.entity";
import { Role } from "./role.entity"
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
    lastName: string;

    @Column({ type: "varchar", length: 50 })
    username: string | null;

    @Column({ type: "varchar", length: 100 })
    email: string;

    @Column({ type: "varchar", length: 15, nullable: true })
    mobile: string | null;

    @Column({ type: "varchar" })

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


    validate() {
        const errors = [];

        if (!this.firstName || this.firstName.length < 2) {
            errors.push('First name must be at least 2 characters');
        }

        if (!this.lastName || this.lastName.length < 2) {
            errors.push('Last name must be at least 2 characters');
        }

        // Email validation using a simple regex pattern
        const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
        if (!this.email || !emailPattern.test(this.email)) {
            errors.push('Invalid email format');
        }

        // Strong password validation
        // Requires at least one lowercase letter, one uppercase letter, one digit, and one special character
        const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z\d]).*$/;
        if (!this.passwordHash || this.passwordHash.length < 8 || !passwordPattern.test(this.passwordHash)) {
            errors.push('Password must be at least 8 characters and contain one lowercase letter, one uppercase letter, one digit, and one special character');
        }

        if (errors.length > 0) {
            throw new Error(errors.join(', '));
        }
    }

}
