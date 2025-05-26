import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateCommentDto {
  @IsOptional()
  id?: string;

  @IsNotEmpty({ message: 'postId is required' })
  post_id: string;

  @IsNotEmpty({ message: 'Content is required' })
  content: string;

  @IsNotEmpty({ message: 'author is required' })
  author: string;

  @IsOptional()
  avatar?: string;

  @IsOptional()
  createdAt: string;
}
