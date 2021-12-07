import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ICustomer } from 'src/interface/customer.interface';
import { IResponse, ResponseConfig } from 'src/Response/ResponseConfig';
import { CustomerService } from './customer.service';

@ApiTags("客户API")
@Controller('api/web/v1/customer')
export class CustomerController {
    constructor(private readonly customer:CustomerService){}

    @Get('list')
    getList(@Query('limit') limit:number,@Query('page') page:number):IResponse{
        let res = new ResponseConfig();
        let data = this.customer.getList();
        res.data = data;
        res.status = 200;
        res.message = "succeed"
        return res;
    }

    @Post('new')
    create(@Body() customerData:ICustomer){
        let data = this.customer.create(customerData);
        let res = new ResponseConfig();
        res.data = data;
        return res;
    }
}
