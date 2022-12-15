export class CreateProductDTO {
  readonly name: string;
  readonly description: string;
  readonly price: number;
  readonly image: string;
  readonly stock: number;
}

export class UpdateProductDto {
  readonly name?: string;
  readonly description?: string;
  readonly price?: number;
  readonly stock?: number;
  readonly image?: string;
}
