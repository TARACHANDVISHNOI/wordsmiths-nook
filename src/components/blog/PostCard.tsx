
import { Link } from 'react-router-dom';
import { Calendar, User } from 'lucide-react';
import CategoryBadge from './CategoryBadge';
import { formatDate } from '@/lib/utils';
import { PostType } from '@/types/blog';

interface PostCardProps {
  post: PostType;
}

const PostCard = ({ post }: PostCardProps) => {
  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <Link to={`/post/${post.slug}`} className="block overflow-hidden">
        <img
          src={post.coverImage}
          alt={post.title}
          className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
        />
      </Link>
      <div className="p-5">
        <div className="mb-3">
          <CategoryBadge category={post.category} />
        </div>
        <Link to={`/post/${post.slug}`} className="block mb-2">
          <h3 className="font-heading font-bold text-xl text-blog-dark hover:text-blog-primary transition-colors">
            {post.title}
          </h3>
        </Link>
        <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
        <div className="flex items-center text-gray-500 text-sm">
          <User className="h-4 w-4 mr-1" />
          <span className="mr-4">{post.author}</span>
          <Calendar className="h-4 w-4 mr-1" />
          <span>{formatDate(post.date)}</span>
        </div>
      </div>
    </article>
  );
};

export default PostCard;
