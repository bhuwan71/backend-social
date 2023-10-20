import {
    Entity,
    ManyToOne,
    JoinColumn,
} from 'typeorm';
import Post from './post.entity';
import { Hashtag } from './hashTag.entity';
import Base from './base.entity';

@Entity("postHashTag")
export class PostHashtag extends Base {

    @ManyToOne(() => Post)
    @JoinColumn({ name: 'post_id' })
    post: Post;

    @ManyToOne(() => Hashtag)
    @JoinColumn({ name: 'hashtag_id' })
    hashtag: Hashtag;
}
