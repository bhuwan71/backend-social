import {
    Entity,
    PrimaryGeneratedColumn,
    ManyToOne,
    JoinColumn,
    Column,
} from 'typeorm';
import User from './user.entity';
import Base from './base.entity';
import { NotificationSettingType } from '../enum/NotificationType';

@Entity("notificationSettings")
export class NotificationSettings extends Base {

    @Column({ type: 'enum', enum: NotificationSettingType })
    notification_type: NotificationSettingType;

    @Column({ default: true })
    enabled: boolean;

    // Relations
    @ManyToOne(() => User)
    @JoinColumn({ name: 'user_id' })
    user: User;
}
