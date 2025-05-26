import { Injectable } from '@nestjs/common';
import { CategoryRepository } from '../../domain/repositories/category.repository';
import { Category } from '../../domain/models/category';

@Injectable()
export class CategoryUseCase {
  constructor(private readonly postRepo: CategoryRepository) {}

  execute(): Category[] {
    return this.postRepo.getAll();
  }
}
