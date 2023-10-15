import { Entity, ManyToOne, JoinColumn, Column } from 'typeorm';
import Base from "./base.entity";

@Entity("group")
export class Group extends Base {
    @Column()
    name: string;
}
