export class CreateUserDTO {
  readonly name: string;
  readonly pass: string;
  readonly status: number;
  readonly type: number;
  readonly image: string;
}

export class UpdateUserDto {
  readonly name?: string;
  readonly pass?: string;
  readonly status?: number;
  readonly type?: number;
  readonly image?: string;
}
