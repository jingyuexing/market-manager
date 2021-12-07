import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ICustomer } from 'src/interface/customer.interface';
import { IResponse, ResponseConfig } from 'src/Response/ResponseConfig';
import { Repository } from 'typeorm';
import { CustomerEntity } from './customer.entity';

@Injectable()
export class CustomerService {
    constructor(@InjectRepository(CustomerEntity) private readonly customer:Repository<CustomerEntity>){}
    create(data:ICustomer) :IResponse{
        let res = new ResponseConfig();
        res.status = 200;
        res.message = 'succeed';
        return res;
    }
    getList(): IResponse {
        let res = new ResponseConfig();
        res.data = [new ICustomer()];
        return res;
    }
    getCustomer():IResponse{
        let res  = new ResponseConfig();
        res.status = 200;
        res.message = "succeed";
        let customer = new ICustomer();
        customer.bankAccount = ""
        customer.address = "";
        customer.abbreviation= "";
        res.data = customer;
        return res;
    }
}
