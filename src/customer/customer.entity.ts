import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({
    name:"customer"
})
export class CustomerEntity{
    @PrimaryGeneratedColumn({
        type:'bigint'
    })
    id:number;

    @Column({
        type:'varchar',
        comment:'客户名称',
        default:''
    })
    name:string

    @Column({
        type:'varchar',
        comment:'简称',
        default:''
    })
    abbreviation: string;

    @Column({
        type:'varchar',
        comment:'地址',
        default:''
    })
    address:string;

    @Column({
        type:'char',
        length:40,
        default:''
    })
    phoneNumber:string;

    @Column({
        type:'varchar',
        comment:'传真',
        default:'',
    })
    fax:string;

    @Column({
        type:'varchar',
        default:''
    })
    email:string;

    @Column({
        type:'varchar',
        comment:'开户银行',
        default:''
    })
    bank:string;

    @Column({
        type:'varchar',
        comment:'银行账号',
        default:''
    })
    bankAccount:string;
}