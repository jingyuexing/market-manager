import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CheckoutController } from './checkout.controller';
import { CheckOutEntity } from './checkout.entity';
import { CheckoutService } from './checkout.service';

@Module({
  imports:[TypeOrmModule.forFeature([CheckOutEntity])],
  controllers: [CheckoutController],
  providers: [CheckoutService]
})
export class CheckoutModule {}
