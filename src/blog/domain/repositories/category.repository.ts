import { Category } from '../models/category';

export abstract class CategoryRepository {
  abstract getAll(): Category[];
}
