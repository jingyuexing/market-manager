import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { IProduct } from 'src/interface/product.interface';
import { IResponse, ResponseConfig } from 'src/Response/ResponseConfig';
import { ProductService } from './product.service';

@ApiTags("商品API")
@Controller('api/web/v1/product')
export class ProductController {
    constructor(private readonly product:ProductService){}
    

    @Get('search/:id')
    search(@Param('id') id:number,@Query('limit') limit:number,@Query('page') page:number):IResponse{
        let res = new ResponseConfig();
        res.status = 200;
        res.message = "succeed";
        res.data = this.product.search(id,limit,page);
        return res;
    }

    @Post("new")
    update(@Body() productData:IProduct):IResponse{
        let res = new ResponseConfig();
        res.status = 200;
        res.message = "succeed";
        let data = this.product.newProduct(productData);
        res.data = data;
        return res;
    }
}
