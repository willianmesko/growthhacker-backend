import { IsNotEmpty, IsNumber, IsString } from 'class-validator';


export class CreateFavoritesBodyDTO {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsNumber()
    @IsNotEmpty()
    eletronicId: number;

}
