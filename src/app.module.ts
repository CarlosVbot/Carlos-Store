import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './products/controllers/products.controller';
import { CategoriesController } from './categories/controllers/categories.controller';
import { ProductsService } from './products/services/products.service';
import { UsersController } from './users/controllers/users.controller';
import { UsersService } from './users/services/users.service';

@Module({
  imports: [],
  controllers: [
    AppController,
    ProductsController,
    CategoriesController,
    UsersController,
  ],
  providers: [AppService, ProductsService, UsersService],
})
export class AppModule {}
