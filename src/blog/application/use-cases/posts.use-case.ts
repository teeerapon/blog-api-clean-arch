import { Injectable } from '@nestjs/common';
import { PostRepository } from '../../domain/repositories/post.repository';
import { PostBlog } from '../../domain/models/post';

@Injectable()
export class PostsUseCase {
  constructor(private readonly postRepo: PostRepository) {}

  execute(): PostBlog[] {
    return this.postRepo.getAll();
  }
  // เพิ่มโพสต์ใหม่
  create(post: PostBlog): PostBlog {
    return this.postRepo.addPost(post);
  }

  // อัปเดตโพสต์
  update(id: string, updated: Partial<PostBlog>): PostBlog {
    const post = this.postRepo.findById(id);
    if (!post) {
      throw new Error('Post not found');
    }
    return this.postRepo.updatePost(id, updated);
  }

  // ลบโพสต์
  delete(id: string): void {
    const post = this.postRepo.findById(id);
    if (!post) {
      throw new Error('Post not found');
    }
    return this.postRepo.deletePost(id);
  }
}
