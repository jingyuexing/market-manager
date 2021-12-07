import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity({
    name:"ticket"
})
export class TicketEntity{
    @PrimaryGeneratedColumn({
        type:'bigint',
        comment:'入库票号'
    })
    id:number;

    @Column({
        type:'bigint',
        comment:'数量'
    })
    nums:number;

    @Column({
        type:'float',
        comment:'应付'
    })
    pay:number;

    @Column({
        type:'float',
        comment:'已付'
    })
    payed:number

    @Column({
        type:'float',
        comment:'未付'
    })
    unpaid:number;

    @Column({
        type:'varchar',
        comment:'供货商名称'
    })
    productProvider:string;

    @Column({
        type:'date',
        comment:'入库时间'
    })
    date:Date;
    @Column({
        type:'char',
        length:100,
        comment:'操作员'
    })
    operator:string;

    @Column({
        type:'char',
        length:32,
        comment:'支付方式'
    })
    payTheWay:string;

    @Column({
        type:'bool',
        comment:'是否结清'
    })
    isPay:boolean;
}