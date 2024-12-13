import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('todo')
export class TodoEntity{
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    title:string;
    @Column()
    description:string;
    @Column()
    status: TodoStatus
}

export enum TodoStatus{
    OPEN='OPEN',
    WIP='WIP',
    COMPLETE='COMPLETE'
}