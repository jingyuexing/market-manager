import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { IResponse, ResponseConfig } from 'src/Response/ResponseConfig';
import { AccountService } from './account.service'


@ApiTags("账户api")
@Controller('api/web/v1/account')
export class AccountController {
    constructor(private readonly account:AccountService){}

    @Post("register")
    register(){
        this.account.register();
    }

    @Delete("logout")
    logout(){
        this.account.logout();
    }

    @Put("rename")
    rename(){
        this.account.rename();
    }

    @Post('reset')
    resetPassword(){
        this.account.reset();
    }

    @Post('login')
    login():IResponse{
        let res = new ResponseConfig();
        res.message = "succeed";
        res.status = 200;
        res.data = this.account.login();
        return res;
    }
}
