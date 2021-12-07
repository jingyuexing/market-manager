import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity({
    name:'checkout' // 入库结算表
})
export class CheckOutEntity{
    @PrimaryGeneratedColumn({
        type:'bigint',
        comment:'结款票号'
    })
    id:number;

    @Column({
        type:'bigint',
        comment:'入库票号'
    })
    repoID:number;

    @Column({
        type:'varchar',
        length:200,
        comment:'供应商全称'
    })
    name:string;

    @Column({
        type:'float',
        comment:'本次结款'
    })
    paied:number;

    @Column({
        type:'datetime',
        comment:''
    })
    date:number;

    @Column({
        type:'char',
        comment:'操作员'
    })
    operator:string;

    @Column({
        type:'char',
        length:100,
        comment:'经手人'
    })
    dealer:string;
}