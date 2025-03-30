
export type CategoryType = 'tech' | 'lifestyle' | 'travel' | 'health' | 'food';

export interface PostType {
  id: string;
  title: string;
  slug: string;
  author: string;
  authorImage?: string;
  date: string;
  category: CategoryType;
  tags?: string[];
  excerpt: string;
  content: string;
  coverImage: string;
  featured?: boolean;
  views?: number;
  comments?: number;
}

export interface CommentType {
  id: string;
  postId: string;
  username: string;
  avatar?: string;
  date: string;
  content: string;
  likes: number;
  replies?: CommentType[];
}

export interface CategoryDetailType {
  type: CategoryType;
  label: string;
  description: string;
  color: string;
  image: string;
}
