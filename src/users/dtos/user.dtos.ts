export class CreateProductDTO {
  readonly name: string;
  readonly pass: string;
  readonly status: number;
  readonly type: string;
  readonly image: number;
}

export class UpdateProductDto {
  readonly name?: string;
  readonly pass: string;
  readonly status?: number;
  readonly type: number;
  readonly image?: string;
}
