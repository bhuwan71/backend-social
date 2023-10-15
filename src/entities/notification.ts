import {
    Entity,
    ManyToOne,
    JoinColumn,
    Column,
} from 'typeorm';
import User from './user.entity';
import Post from './post.entity';
import { Comment } from './comment.entity';
import { FriendRequest } from './friend.request';
import Base from './base.entity';
import { NotificationType } from '../enum/NotificationType';

@Entity("notification")
export class Notification extends Base {

    @Column({type: 'enum',enum: NotificationType})
    type: NotificationType;

    @Column({ default: false })
    is_read: boolean;

    // relations
    @ManyToOne(() => User)
    @JoinColumn({ name: 'user_id' })
    user: User;

    @ManyToOne(() => Post, { nullable: true })
    @JoinColumn({ name: 'entity_id' })
    post: Post;

    @ManyToOne(() => Comment, { nullable: true })
    @JoinColumn({ name: 'entity_id' })
    comment: Comment;

    @ManyToOne(() => FriendRequest, { nullable: true })
    @JoinColumn({ name: 'entity_id' })
    friendRequest: FriendRequest;

}
