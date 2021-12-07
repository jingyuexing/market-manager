import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { IProduct } from 'src/interface/product.interface';
import { ResponseConfig } from 'src/Response/ResponseConfig';
import { ProductService } from './product.service';

@ApiTags("商品API")
@Controller('api/web/v1/product')
export class ProductController {
    constructor(private readonly product:ProductService){}
    

    @Get('search/:id')
    search(@Param('id') id:number){
        return this.product.search(id);
    }

    @Post("new")
    update(@Body() productData:IProduct){
        let res = new ResponseConfig();
        res.status = 200;
        res.message = "succeed";
        let data = this.product.newProduct(productData);
        res.data = data;
        return res;
    }
}
