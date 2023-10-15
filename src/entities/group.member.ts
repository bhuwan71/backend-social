import {
    Entity,
    ManyToOne,
    JoinColumn,
    Column,
    CreateDateColumn,
} from 'typeorm';
import { Group } from './group.entity';
import User from './user.entity';
import Base from './base.entity';

@Entity("groupMember")
export class GroupMember extends Base {

    @ManyToOne(() => Group)
    @JoinColumn({ name: 'group_id' })
    group: Group;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'user_id' })
    user: User;

    @CreateDateColumn()
    joined_at: Date;

    @Column({ type: 'datetime', nullable: true })
    leave_at: Date;
}
