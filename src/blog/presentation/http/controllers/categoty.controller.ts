import { Controller, Get } from '@nestjs/common';
import { CategoryUseCase } from '../../../application/use-cases/category.use-case';
import { Category } from '../../../domain/models/category';

@Controller('category')
export class CategoryController {
  constructor(private readonly getPostsUseCase: CategoryUseCase) {}

  @Get()
  getAllPosts(): Category[] {
    return this.getPostsUseCase.execute();
  }
}
