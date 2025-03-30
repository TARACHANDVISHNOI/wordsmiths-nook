
import { PostType } from '@/types/blog';
import PostCard from './PostCard';

interface RelatedPostsProps {
  posts: PostType[];
}

const RelatedPosts = ({ posts }: RelatedPostsProps) => {
  if (!posts.length) return null;

  return (
    <section className="my-12">
      <h3 className="text-2xl font-heading font-bold mb-6">Related Posts</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
};

export default RelatedPosts;
