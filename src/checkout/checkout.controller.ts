import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ICheckOut } from 'src/interface/checkout.interface';
import { CheckoutService } from './checkout.service';

@ApiTags("入库结算API")
@Controller('api/web/v1/checkout')
export class CheckoutController {
    constructor(private readonly checkout:CheckoutService){}
    @Get('all')
    checkOut(){
        return this.checkout.getCheckOut();
    }

    @Get('list')
    getCheckOutList(){
        return this.checkout.getCheckOutList();
    }
    
    @Post("new")
    updateCheckOut(@Body() checkout:ICheckOut){
        return this.checkout.updateCheckout(checkout);
    }
}
