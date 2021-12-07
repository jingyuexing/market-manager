import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ICheckOut } from 'src/interface/checkout.interface';
import { IResponse, ResponseConfig } from 'src/Response/ResponseConfig';
import { Repository } from 'typeorm';
import { CheckOutEntity } from './checkout.entity';

@Injectable()
export class CheckoutService {
    constructor(@InjectRepository(CheckOutEntity) private readonly checkout:Repository<CheckOutEntity>){}
    getCheckOut():IResponse{
        let res = new ResponseConfig();
        res.status = 200;
        res.message = "succeed"
        return res;
    }
    getCheckOutList() :IResponse{
        let res = new ResponseConfig();
        res.status = 200;
        res.message = 'succeed';
        return res;
    }
    updateCheckout(checkout: ICheckOut) {
        return {};
    }
}
