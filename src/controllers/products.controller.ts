import {
    Controller,
    Get,
    Query,
    Param,
    Post,
    Body,
    Put,
    Delete,
    HttpStatus,
    HttpCode,
    Res,
  } from '@nestjs/common';
  
  import { Response } from 'express';
  import { ParseIntPipe } from '../common/parse-int/parse-int.pipe';
  import { ProductsService } from './../services/products.service';
  
  @Controller('products')
  export class ProductsController {
    constructor(private productsService: ProductsService) {}
  
    @Get()
    getProducts() {

      return this.productsService.findAll();
    }
  
    @Get(':productId')
    @HttpCode(HttpStatus.ACCEPTED)
    getOne(@Param('productId',ParseIntPipe) productId: number) {
      return this.productsService.findOne(productId);
    }
  
    @Post()
    create(@Body() payload: any) {
 
      return this.productsService.create(payload);
    }
  
    @Put(':id')
    update(@Param('id') id: string, @Body() payload: any) {
      return this.productsService.update(+id, payload);
    }
  
    @Delete(':id')
    delete(@Param('id') id: string) {
      return this.productsService.remove(+id);
    }
  }