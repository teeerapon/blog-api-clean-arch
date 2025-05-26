import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { PostsUseCase } from '../../../application/use-cases/posts.use-case';
import { PostBlog } from '../../../domain/models/post';
import { CreatePostDto } from '../dtos/create-post.dto';

@Controller('posts')
export class PostController {
  constructor(private readonly postsUseCase: PostsUseCase) {}

  @Get()
  getAllPosts(): PostBlog[] {
    return this.postsUseCase.execute();
  }

  @Post()
  addComment(@Body() body: CreatePostDto): PostBlog {
    const newPost: PostBlog = {
      id: Math.random().toString(36).substring(2),
      title: body.title,
      content: body.content,
      author: body.author,
      category: body.category,
      avatar:
        'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png',
      createdAt: new Date().toISOString(),
      commentCount: 0,
      comments: [],
    };

    return this.postsUseCase.create(newPost);
  }

  @Patch(':id')
  updatePost(
    @Param('id') id: string,
    @Body() body: Partial<CreatePostDto>,
  ): PostBlog {
    return this.postsUseCase.update(id, body);
  }

  @Delete(':id')
  deletePost(@Param('id') id: string): { message: string } {
    this.postsUseCase.delete(id);
    return { message: 'Post deleted successfully' };
  }
}
