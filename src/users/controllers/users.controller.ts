import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
  HttpStatus,
  HttpCode,
  ParseIntPipe,
} from '@nestjs/common';
import { CreateUserDTO, UpdateUserDto } from '../dtos/user.dtos';
import { UsersService } from '../services/users.service';
@Controller('users')
export class UsersController {
  constructor(private UsersService: UsersService) {}

  @Get()
  getUsers() {
    return this.UsersService.findAll();
  }

  @Get(':usertId')
  @HttpCode(HttpStatus.ACCEPTED)
  getOne(@Param('usertId', ParseIntPipe) usertId: number) {
    return this.UsersService.findOne(usertId);
  }

  @Post()
  create(@Body() payload: CreateUserDTO) {
    return this.UsersService.create(payload);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() payload: UpdateUserDto) {
    return this.UsersService.update(+id, payload);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.UsersService.remove(+id);
  }
}
