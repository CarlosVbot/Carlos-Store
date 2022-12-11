import { Controller,Get,Query ,Param,Post ,Body} from '@nestjs/common';

@Controller('products')
export class ProductsController {
    @Get()
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return {
        limit: limit,
        offset: offset,
        brand: brand 
    };
  }

  @Get('filter')
  getProductFilter() {
    return `yo soy un filter`;
  }

  @Get(':productId')
  getProduct(@Param('productId') productId: string) {
    return `product ${productId}`;
  }
  @Post()
  createProducto(@Body() payload: any){
    return {
      message : "succes",
      payload,
    };
  }
}
