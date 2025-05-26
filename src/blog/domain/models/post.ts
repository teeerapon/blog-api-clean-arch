import { Comment } from './comment';

export interface PostBlog {
  id: string;
  title: string;
  content: string;
  category?: string;
  avatar?: string;
  comments?: Comment[];
  author: string;
  createdAt: string;
  commentCount?: number;
}
