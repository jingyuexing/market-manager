import { ApiProperty } from "@nestjs/swagger";

export class ITicket{
    @ApiProperty({
        description:"数量"
    })
    nums:number;

    @ApiProperty({
        description:"应付"
    })
    pay:number;

    @ApiProperty({
        description:"已付"
    })
    payed:number;

    @ApiProperty({
        description:"操作员"
    })
    operator:string;

    @ApiProperty({
        description:"是否结清"
    })
    isPay:boolean;
}