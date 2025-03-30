
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import FeaturedPost from '@/components/blog/FeaturedPost';
import PostCard from '@/components/blog/PostCard';
import { Button } from '@/components/ui/button';
import { PostType } from '@/types/blog';
import { blogService } from '@/services/blogService';

const Index = () => {
  const [featuredPost, setFeaturedPost] = useState<PostType | null>(null);
  const [recentPosts, setRecentPosts] = useState<PostType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        // Get featured and recent posts
        const featured = await blogService.getFeaturedPosts();
        const recent = await blogService.getRecentPosts(6);
        
        // Set first featured post if exists
        if (featured.length > 0) {
          setFeaturedPost(featured[0]);
        }
        
        // Filter out the featured post from recent posts to avoid duplication
        if (featured.length > 0) {
          setRecentPosts(recent.filter(post => post.id !== featured[0].id));
        } else {
          setRecentPosts(recent);
        }
      } catch (error) {
        console.error('Error fetching blog data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <Layout>
      <section className="container-blog py-10">
        {isLoading ? (
          <div className="flex justify-center items-center h-96">
            <div className="animate-pulse">Loading blog content...</div>
          </div>
        ) : (
          <>
            {/* Hero Section with Featured Post */}
            {featuredPost && (
              <div className="mb-12">
                <FeaturedPost post={featuredPost} />
              </div>
            )}

            {/* Recent Posts Section */}
            <div className="mb-12">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold font-heading text-blog-primary">Recent Posts</h2>
                <Link to="/categories">
                  <Button variant="outline">View All Categories</Button>
                </Link>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {recentPosts.map((post) => (
                  <PostCard key={post.id} post={post} />
                ))}
              </div>
            </div>

            {/* Newsletter CTA */}
            <div className="bg-blog-muted p-8 rounded-lg text-center my-12">
              <h3 className="text-xl font-heading font-bold mb-4">
                Join our Newsletter
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Stay updated with the latest articles, tips, and insights from our community of writers. 
                We promise not to spam your inbox!
              </p>
              <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-2">
                <input 
                  type="email" 
                  placeholder="your@email.com" 
                  className="flex-1 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blog-accent"
                />
                <Button type="button">Subscribe</Button>
              </div>
            </div>
          </>
        )}
      </section>
    </Layout>
  );
};

export default Index;
