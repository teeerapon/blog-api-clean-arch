import { Injectable } from '@nestjs/common';
import { PostRepository } from '../../domain/repositories/post.repository';
import { PostBlog } from '../../domain/models/post';
import { MOCK_POSTS } from '../mock-data/post.mock'; // <- Import ตรงนี้

@Injectable()
export class MockPostRepository implements PostRepository {
  private postBlog: PostBlog[] = [...MOCK_POSTS];

  getAll(): PostBlog[] {
    return this.postBlog;
  }

  findById(id: string): PostBlog | undefined {
    return this.postBlog.find((post) => post.id === id);
  }

  addPost(createPostDto: PostBlog): PostBlog {
    const id = `${Date.now()}-${Math.floor(Math.random() * 10000)}`;
    const newPost: PostBlog = {
      id: id,
      title: createPostDto.title,
      content: createPostDto.content,
      author: createPostDto.author,
      category: createPostDto.category,
      avatar: createPostDto.avatar,
      createdAt: new Date().toISOString(),
      commentCount: 0,
      comments: [],
    };

    this.postBlog.push(newPost);
    return newPost;
  }

  updatePost(id: string, update: Partial<PostBlog>): PostBlog {
    const post = this.postBlog.find((p) => p.id === id);
    if (!post) throw new Error('Post not found');
    const allowedUpdates: (keyof PostBlog)[] = [
      'title',
      'content',
      'category',
      'avatar',
    ];
    for (const key of allowedUpdates) {
      if (update[key] !== undefined) {
        (post[key] as any) = update[key];
      }
    }
    return post;
  }

  deletePost(id: string): void {
    console.log(id);
    const index = this.postBlog.findIndex((c) => c.id === id);
    if (index === -1) throw new Error('Comment not found');
    this.postBlog.splice(index, 1);
  }

  reset(): void {
    this.postBlog = [...MOCK_POSTS];
  }
}
