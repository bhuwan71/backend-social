import { Column, CreateDateColumn, DeleteDateColumn, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export default class Base{
    @PrimaryGeneratedColumn()
    id:number

    @CreateDateColumn({name: 'created_at', type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)"})
    createdAt!: Date;
  
    @UpdateDateColumn({name: 'updated_at',type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)"})
    updatedAt!: Date;

    @Column({nullable:true})
    deletedBy?:string

    @Column({nullable:true,default:false})
    deleted?: boolean

    @DeleteDateColumn({name:'deleted_at',nullable:true})
    deletedAt?:Date

}