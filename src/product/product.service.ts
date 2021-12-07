import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IProduct } from 'src/interface/product.interface';
import { IResponse, ResponseConfig } from 'src/Response/ResponseConfig';
import { Repository } from 'typeorm';
import { ProductEntity } from './product.entity';

@Injectable()
export class ProductService {
    constructor(@InjectRepository(ProductEntity) private readonly product:Repository<ProductEntity>){}
    newProduct(productData: IProduct) {
        return {};
    }
    search(id:number){
        return {};
    }
}
