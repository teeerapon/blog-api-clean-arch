import { Injectable } from '@nestjs/common';
import { Comment } from '../../domain/models/comment';
import { CommentRepository } from '../../domain/repositories/comment.repository';

@Injectable()
export class CommentUseCase {
  constructor(private readonly commentRepo: CommentRepository) {}

  // ดึงคอมเมนต์ตาม postId
  execute(postId: string): Comment[] {
    return this.commentRepo.getByPostId(postId);
  }

  // เพิ่มคอมเมนต์ใหม่
  create(comment: Comment): Comment {
    return this.commentRepo.addComment(comment);
  }

  // อัปเดตคอมเมนต์
  update(id: string, updated: Partial<Comment>): Comment {
    return this.commentRepo.updateComment(id, updated);
  }

  // ลบคอมเมนต์
  delete(id: string): void {
    return this.commentRepo.deleteComment(id);
  }
}
