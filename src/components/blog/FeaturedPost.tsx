
import { Link } from 'react-router-dom';
import { Calendar, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CategoryBadge from './CategoryBadge';
import { formatDate } from '@/lib/utils';
import { PostType } from '@/types/blog';

interface FeaturedPostProps {
  post: PostType;
}

const FeaturedPost = ({ post }: FeaturedPostProps) => {
  return (
    <div className="relative overflow-hidden rounded-lg bg-white shadow-md">
      <div className="grid grid-cols-1 md:grid-cols-2 overflow-hidden">
        <div className="overflow-hidden h-64 md:h-full">
          <img
            src={post.coverImage}
            alt={post.title}
            className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="p-6 flex flex-col justify-between">
          <div>
            <div className="mb-3">
              <CategoryBadge category={post.category} />
            </div>
            <Link to={`/post/${post.slug}`} className="block mb-2">
              <h2 className="text-2xl font-bold font-heading text-blog-dark hover:text-blog-primary transition-colors">
                {post.title}
              </h2>
            </Link>
            <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
          </div>

          <div className="mt-4">
            <div className="flex items-center text-gray-500 text-sm mb-4">
              <User className="h-4 w-4 mr-1" />
              <span className="mr-4">{post.author}</span>
              <Calendar className="h-4 w-4 mr-1" />
              <span>{formatDate(post.date)}</span>
            </div>

            <Link to={`/post/${post.slug}`}>
              <Button variant="outline">Read More</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPost;
