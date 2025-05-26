import { Module } from '@nestjs/common';
import { PostController } from './controllers/post.controller';
import { PostsUseCase } from 'src/blog/application/use-cases/posts.use-case';
import { PostRepository } from 'src/blog/domain/repositories/post.repository';
import { MockPostRepository } from 'src/blog/infrastructure/repository/mock-post.repository';
import { MockCommentRepository } from 'src/blog/infrastructure/repository/mock-comment.repository';
import { CommentRepository } from 'src/blog/domain/repositories/comment.repository';
import { CommentUseCase } from 'src/blog/application/use-cases/comment.use-case';
import { CommentController } from './controllers/comment.controller';
import { CategoryController } from './controllers/categoty.controller';
import { CategoryUseCase } from 'src/blog/application/use-cases/category.use-case';
import { CategoryRepository } from 'src/blog/domain/repositories/category.repository';
import { MockCategoryRepository } from 'src/blog/infrastructure/repository/mock-category.repository';

@Module({
  controllers: [PostController, CommentController, CategoryController],
  providers: [
    PostsUseCase,
    CommentUseCase,
    CategoryUseCase,
    { provide: PostRepository, useClass: MockPostRepository },
    { provide: CommentRepository, useClass: MockCommentRepository },
    { provide: CategoryRepository, useClass: MockCategoryRepository },
  ],
})
export class BlogModule {}
