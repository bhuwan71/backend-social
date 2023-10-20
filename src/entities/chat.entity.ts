import { Entity, ManyToOne, JoinColumn } from 'typeorm';
import Base from "./base.entity";
import User from "./user.entity";

@Entity("chat")
export class Chat extends Base {

    // Relations
    @ManyToOne(() => User)
    @JoinColumn({ name: 'user1_id' })
    user1: User;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'user2_id' })
    user2: User;


}
