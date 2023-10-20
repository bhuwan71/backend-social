import {
    Entity,
    Column,
    Unique,
} from 'typeorm';
import Base from './base.entity';

@Entity("hastag")
@Unique(['name'])
export class Hashtag extends Base {

    @Column()
    name: string;
}
