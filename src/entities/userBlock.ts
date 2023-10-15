import {
    Entity,
    ManyToOne,
    JoinColumn,
} from 'typeorm';
import User from './user.entity';
import Base from './base.entity';

@Entity("userBlock")
export class UserBlock extends Base {

    @ManyToOne(() => User)
    @JoinColumn({ name: 'user_id' })
    user: User;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'blocked_user_id' })
    blockedUser: User;
}
