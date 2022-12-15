import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from '../entities/users.entities';
import { CreateUserDTO, UpdateUserDto } from '../dtos/user.dtos';
@Injectable()
export class UsersService {
  private counterId = 1;
  private User: User[] = [
    {
      id: 1,
      name: 'a',
      pass: 'b',
      status: 1,
      type: 1,
      image: 'a.com',
    },
  ];

  findAll() {
    return this.User;
  }

  findOne(id: number) {
    const product = this.User.find((item) => item.id === id);
    if (!product) {
      throw new NotFoundException(`Product #${id} not found`);
    }
    return product;
  }

  create(payload: CreateUserDTO) {
    this.counterId = this.counterId + 1;
    const newUser = {
      id: this.counterId,
      ...payload,
    };
    this.User.push(newUser);
    return newUser;
  }

  update(id: number, payload: UpdateUserDto) {
    const product = this.findOne(id);
    const index = this.User.findIndex((item) => item.id === id);
    this.User[index] = {
      ...product,
      ...payload,
    };
    return this.User[index];
  }

  remove(id: number) {
    const index = this.User.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new NotFoundException(`Product #${id} not found`);
    }
    this.User.splice(index, 1);
    return true;
  }
}
