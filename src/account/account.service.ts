import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AccountEntity } from './account.entity';

@Injectable()
export class AccountService {
    constructor(@InjectRepository(AccountEntity) private readonly account:Repository<AccountEntity>){}
    login() {
        return {}
    }
    reset() {
        return {};
    }
    rename() {
        return {};
    }
    logout() {
        return {};
    }
    register() {
        return {};
    }
}
