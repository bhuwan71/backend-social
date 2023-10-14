import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import Base from "./base.entity";
import User from "./user.entity";

@Entity("user_post")
export default class Post extends Base {
  @Column()
  title: string;

  @Column({ type: "text" })
  description: string;

  @ManyToOne(() => User, (user) => user.posts)
  @JoinColumn({ name: "user_id" })
  user: User | number;
}
