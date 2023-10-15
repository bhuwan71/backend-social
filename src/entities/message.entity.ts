import { Entity, ManyToOne, JoinColumn, Column } from 'typeorm';
import Base from "./base.entity";
import User from "./user.entity";
import { Chat } from './chat.entity';

@Entity("message")
export class Message extends Base {

    // Relations
    @ManyToOne(() => Chat)
    @JoinColumn({ name: 'chat_id' })
    chat: Chat;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'sender_id' })
    sender: User;

    @Column('text')
    content: string;


}
