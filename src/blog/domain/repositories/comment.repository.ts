import { Comment } from '../models/comment';

export abstract class CommentRepository {
  abstract getByPostId(postId: string): Comment[];
  abstract addComment(comment: Comment): Comment;
  abstract updateComment(id: string, update: Partial<Comment>): Comment;
  abstract deleteComment(id: string): void;
}
