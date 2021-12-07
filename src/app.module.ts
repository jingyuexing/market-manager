import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';


import { AppService } from './app.service';
import { AccountModule } from './account/account.module';
import { ProductModule } from './product/product.module';
import { CustomerModule } from './customer/customer.module';
import { TicketModule } from './ticket/ticket.module';
import { CheckoutModule } from './checkout/checkout.module';
import { AccountEntity } from './account/account.entity';
import { ProductEntity } from './product/product.entity';
import { CustomerEntity } from './customer/customer.entity';
import { CheckOutEntity } from './checkout/checkout.entity';

@Module({
  imports: [
    AccountModule, 
    ProductModule, 
    CustomerModule,
    TicketModule, 
    CheckoutModule,
    TypeOrmModule.forRoot({
      type:"mysql",
      host:"localhost",
      port:3668, //3668 //3306
      username:'root', //test
      password:"@cc63221#", //@cc63221# //#13669#
      database:"test",
      entities:[
        AccountEntity,
        ProductEntity,
        CustomerEntity,
        CheckOutEntity
      ],
      synchronize:true,
      logging:false
    }),
  ],
  // controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
