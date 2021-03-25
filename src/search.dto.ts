import { IsOptional, IsArray, IsInt, Length } from 'class-validator';

export class SearchDto {
    @IsOptional()
    @IsArray()
    @IsInt({ each: true })
    numbers: number;

    @IsOptional()
    @IsArray()
    @Length(2, 11, { each: true })
    texts: string[];
}
