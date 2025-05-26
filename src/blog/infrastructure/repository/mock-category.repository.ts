import { Injectable } from '@nestjs/common';
import { CategoryRepository } from '../../domain/repositories/category.repository';
import { Category } from '../../domain/models/category';
import { MOCK_CATEGORY } from '../mock-data/category.mock'; // <- Import ตรงนี้

@Injectable()
export class MockCategoryRepository implements CategoryRepository {
  getAll(): Category[] {
    return MOCK_CATEGORY;
  }
}
