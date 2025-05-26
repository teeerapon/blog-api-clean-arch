import { Injectable } from '@nestjs/common';
import { CommentRepository } from '../../domain/repositories/comment.repository';
import { Comment } from '../../domain/models/comment';
import { MOCK_COMMENTS } from '../mock-data/comment.mock';

@Injectable()
export class MockCommentRepository implements CommentRepository {
  private comments: Comment[] = [...MOCK_COMMENTS];

  getByPostId(postId: string): Comment[] {
    return this.comments.filter((c) => c.post_id === postId);
  }

  addComment(comment: Comment): Comment {
    const id = `${Date.now()}-${Math.floor(Math.random() * 10000)}`;
    const newComment: Comment = {
      id: id,
      post_id: comment.post_id,
      content: comment.content,
      author: comment.author,
      avatar: comment.avatar,
      createdAt: new Date().toISOString(),
    };

    this.comments.push(newComment);
    return newComment;
  }

  updateComment(id: string, update: Partial<Comment>): Comment {
    const comment = this.comments.find((c) => c.id === id);
    if (!comment) throw new Error('Comment not found');
    Object.assign(comment, update);
    return comment;
  }

  deleteComment(id: string): void {
    const index = this.comments.findIndex((c) => c.id === id);
    if (index === -1) throw new Error('Comment not found');
    this.comments.splice(index, 1);
  }
}
