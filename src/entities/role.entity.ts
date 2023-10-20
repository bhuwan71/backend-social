import { Column, Entity, JoinTable, ManyToMany, OneToMany, Unique } from "typeorm";
import Base from "./base.entity";

@Entity("roles")
@Unique(["name"])
export class Role extends Base {
    @Column()
    name: string;
}