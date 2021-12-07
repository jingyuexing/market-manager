import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity({
    name: 'commodity'
})
export class ProductEntity {
    @PrimaryGeneratedColumn({
        type: 'bigint'
    })
    id: number;

    @Column({
        type: 'varchar',
        length: 50,
        comment: '商品名'
    })
    name: string;

    @Column({
        type:'varchar',
        comment:'简称'
    })
    abbreviation: string;

    @Column({
        type:'varchar',
        comment:'产地'
    })
    place: string;

    @Column({
        type:'float',
        comment:'价格'
    })
    price: number;


    @Column({
        type: 'varchar',
        comment: '备注'
    })
    description: string;
}