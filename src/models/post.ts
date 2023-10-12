import { Model, Table, Column, ForeignKey, BelongsTo } from 'sequelize-typescript';
import User from './user';

@Table
export class Post extends Model<Post> {
  @Column
  content: string = ''; // Initialize with an empty string

  @ForeignKey(() => User)
  @Column
  userId: number;

  @BelongsTo(() => User)
  user: User;
}
