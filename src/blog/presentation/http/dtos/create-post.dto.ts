import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreatePostDto {
  @IsNotEmpty({ message: 'Title is required' })
  title: string;

  @IsNotEmpty({ message: 'Content is required' })
  content: string;

  @IsNotEmpty({ message: 'Author is required' })
  author: string;

  @IsNotEmpty({ message: 'category is required' })
  category: string;

  @IsOptional()
  avatar?: string;
}
