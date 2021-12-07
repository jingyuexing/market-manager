import { ApiProperty } from "@nestjs/swagger";

export class IProduct{
    @ApiProperty({
        description:"商品名称",
        example:"商品名称"
    })
    name:string;

    @ApiProperty({
        description:"商品简称",
        example:"简称"
    })
    abbreviation:string;
    
    @ApiProperty({
        description:"商品产地",
        example:'产地'
    })
    place:string;
    
    @ApiProperty({
        description:"商品价格",
        example:'价格'
    })
    price:number;
    
    @ApiProperty({
        description:"商品描述",
        example:'商品描述'
    })
    description:string;
}

