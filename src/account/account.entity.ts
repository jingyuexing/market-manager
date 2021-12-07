
import { Column, Entity, PrimaryGeneratedColumn, Timestamp } from 'typeorm';

@Entity({
    name:'account'
})
export class AccountEntity{
    @PrimaryGeneratedColumn({
        type:'bigint',
        comment:'id'
    })
    id:number;
    
    @Column({
        type:'char',
        length:40,
        comment:'用户名'
    })
    name:string;

    @Column({
        type:'varchar',
        comment:'密码'
    })
    password:string;

    @Column({
        type:'timestamp',
        comment:'上一次登录时间'
    })
    lastLogin:Timestamp;
}