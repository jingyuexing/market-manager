import { ApiProperty } from "@nestjs/swagger";

export class ICustomer{
    @ApiProperty({
        description:"客户名"
    })
    name:string;

    @ApiProperty({
        description:"简写"
    })
    abbreviation:string;
    
    @ApiProperty({
        description:"客户地址"
    })
    address:string;
    
    @ApiProperty({
        description:"电话号码"
    })
    phoneNumber:string;
    
    @ApiProperty({
        description:"传真"
    })
    fax:string;
    
    @ApiProperty({
        description:"邮箱"
    })
    email:string;
    
    @ApiProperty({
        description:"开户银行"
    })
    bank:string;
    
    @ApiProperty({
        description:"银行账户"
    })
    bankAccount:string;
}