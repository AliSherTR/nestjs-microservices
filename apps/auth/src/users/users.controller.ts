import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(readonly usersService: UsersService) {}
    @Post()
    async createUser(@Body() body: CreateUserDTO) {
        return this.usersService.create(body);
    }
}
