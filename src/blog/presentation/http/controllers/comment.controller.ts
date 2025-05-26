import {
  Body,
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
} from '@nestjs/common';
import { CommentUseCase } from '../../../application/use-cases/comment.use-case';
import { Comment } from '../../../domain/models/comment';
import { CreateCommentDto } from '../dtos/create-comment.dto';

@Controller('comment_posts')
export class CommentController {
  constructor(private readonly commentUseCase: CommentUseCase) {}

  @Get(':postId/comments')
  getComments(@Param('postId') postId: string): Comment[] {
    return this.commentUseCase.execute(postId);
  }

  @Post()
  addComment(@Body() body: CreateCommentDto): Comment {
    const comment: Comment = {
      id: `${Date.now()}-${Math.floor(Math.random() * 10000)}`,
      post_id: body.post_id,
      author: body.author,
      avatar:
        'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png',
      content: body.content,
      createdAt: new Date().toISOString(),
    };

    return this.commentUseCase.create(comment);
  }

  @Patch(':commentId')
  updateComment(
    @Param('commentId') commentId: string,
    @Body() body: Partial<CreateCommentDto>,
  ): Comment {
    return this.commentUseCase.update(commentId, body);
  }

  @Delete(':commentId')
  deleteComment(@Param('commentId') commentId: string): { message: string } {
    this.commentUseCase.delete(commentId);
    return { message: 'Comment deleted successfully' };
  }
}
