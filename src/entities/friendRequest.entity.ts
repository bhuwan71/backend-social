import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import Base from "./base.entity";
import User from "./user.entity";

@Entity("friendRequest")
export class FriendRequest extends Base {

    @Column({ type: 'enum', enum: ['pending', 'accepted', 'declined'] })
    status: 'pending' | 'accepted' | 'declined';

    // Relations
    @ManyToOne(() => User, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'sender_id' })
    sender: User;

    @ManyToOne(() => User, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'receiver_id' })
    receiver: User;

}
