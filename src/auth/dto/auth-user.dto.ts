import { IsNotEmpty, IsString } from 'class-validator';


export class AuthUserDTO {

    @IsString()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    password: string;
}