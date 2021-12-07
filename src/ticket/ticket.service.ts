import { Injectable } from '@nestjs/common';
import { ITicket } from 'src/interface/ticket.interface';

@Injectable()
export class TicketService {
    create(ticketData: ITicket) {
        return {};
    }
}
