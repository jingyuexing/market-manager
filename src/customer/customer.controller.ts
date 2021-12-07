import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ICustomer } from 'src/interface/customer.interface';
import { IResponse } from 'src/Response/ResponseConfig';
import { CustomerService } from './customer.service';

@ApiTags("客户API")
@Controller('api/web/v1/customer')
export class CustomerController {
    constructor(private readonly customer:CustomerService){}

    @Get('all')
    getCoustomer():IResponse{
        return this.customer.getCustomer();
    }

    @Get('list')
    getList():IResponse{
        return this.customer.getList();
    }

    @Post('new')
    create(@Body() customerData:ICustomer){
        this.customer.create(customerData);
    }
}
