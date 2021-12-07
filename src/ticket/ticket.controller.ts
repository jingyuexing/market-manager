import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ITicket } from 'src/interface/ticket.interface';
import { IResponse, ResponseConfig } from 'src/Response/ResponseConfig';
import { TicketService } from './ticket.service';

@ApiTags("销售票号API")
@Controller('api/web/v1/ticket')
export class TicketController {
    constructor(private readonly ticket:TicketService){}

    @Post('new')
    create(@Body() ticketData:ITicket):IResponse{
        let data = this.ticket.create(ticketData);
        let res = new ResponseConfig();
        res.status = 200;
        res.message = "succeed";
        res.data = data;
        return res;
    }
}
