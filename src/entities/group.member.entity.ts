import {
    Entity,
    ManyToOne,
    JoinColumn,
    Column,
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

    @Column({ type: "timestamp", nullable: true, default: null })
    joined_at: Date | null;

    @Column({ type: "timestamp", nullable: true, default: null })
    leave_at: Date | null;
}
