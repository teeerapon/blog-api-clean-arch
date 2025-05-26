import { PostBlog } from '../models/post';

export abstract class PostRepository {
  abstract getAll(): PostBlog[];
  abstract findById(id: string): PostBlog | undefined;
  abstract addPost(post: PostBlog): PostBlog;
  abstract updatePost(id: string, update: Partial<PostBlog>): PostBlog;
  abstract deletePost(id: string): void;
}
