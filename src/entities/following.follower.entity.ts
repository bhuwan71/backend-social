import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import Base from "./base.entity";
import User from "./user.entity";

@Entity("followingFollower")
export class FollowingFollower extends Base {

    // Relations
    @ManyToOne(() => User)
    @JoinColumn({ name: 'follower_id' })
    follower: User;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'following_id' })
    following: User;

}
