import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ICustomer } from 'src/interface/customer.interface';
import { Repository } from 'typeorm';
import { CustomerEntity } from './customer.entity';

@Injectable()
export class CustomerService {
    constructor(@InjectRepository(CustomerEntity) private readonly customer:Repository<CustomerEntity>){}
    create(data:ICustomer){
        let _data = {};
        return _data;
    }
    getList() {
        let data = {};
        return data;
    }
    getCustomer(){
        let data = {};
        return data;
    }
}
