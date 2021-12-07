import { ApiProperty } from "@nestjs/swagger";

export class ICheckOut{

    @ApiProperty({
        description:'供应商全称'
    })
    name:string;
    
    @ApiProperty({
        description:'本次结款'
    })
    paied:number;
    
    @ApiProperty({
        description:'结款日期'
    })
    date:number;
    
    @ApiProperty({
        description:'操作员'
    })
    operator:string;

    @ApiProperty({
        description:'经手人'
    })
    dealer:string;
}