
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Calendar, User, MessageSquare, Eye, Facebook, Twitter, Linkedin, Link2 } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import CategoryBadge from '@/components/blog/CategoryBadge';
import CommentsSection from '@/components/blog/CommentsSection';
import RelatedPosts from '@/components/blog/RelatedPosts';
import { Button } from '@/components/ui/button';
import { Avatar } from '@/components/ui/avatar';
import { PostType, CommentType } from '@/types/blog';
import { blogService } from '@/services/blogService';
import { formatDate } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';

const PostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<PostType | null>(null);
  const [comments, setComments] = useState<CommentType[]>([]);
  const [relatedPosts, setRelatedPosts] = useState<PostType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const fetchPostData = async () => {
      setIsLoading(true);
      try {
        if (slug) {
          // Fetch post data
          const postData = await blogService.getPostBySlug(slug);
          
          if (postData) {
            setPost(postData);
            
            // Fetch comments and related posts
            const [postComments, related] = await Promise.all([
              blogService.getCommentsByPostId(postData.id),
              blogService.getRelatedPosts(postData.id)
            ]);
            
            setComments(postComments);
            setRelatedPosts(related);
          } else {
            // Handle post not found
            toast({
              title: "Post not found",
              description: "The post you're looking for doesn't exist or has been removed.",
              variant: "destructive"
            });
          }
        }
      } catch (error) {
        console.error('Error fetching post data:', error);
        toast({
          title: "Error loading post",
          description: "There was a problem loading the post. Please try again later.",
          variant: "destructive"
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchPostData();
  }, [slug, toast]);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    toast({
      title: "Link copied!",
      description: "The post link has been copied to your clipboard."
    });
  };

  return (
    <Layout>
      <div className="container-blog py-10">
        {isLoading ? (
          <div className="flex justify-center items-center h-96">
            <div className="animate-pulse">Loading post...</div>
          </div>
        ) : post ? (
          <>
            {/* Post Header */}
            <header className="mb-8">
              <div className="mb-4">
                <CategoryBadge category={post.category} />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold font-heading text-blog-dark mb-6">
                {post.title}
              </h1>
              
              <div className="flex flex-wrap items-center text-gray-500 gap-y-2">
                <div className="flex items-center mr-6">
                  <Avatar className="h-10 w-10 mr-3">
                    <img 
                      src={post.authorImage || '/placeholder.svg'} 
                      alt={post.author} 
                    />
                  </Avatar>
                  <span>{post.author}</span>
                </div>
                
                <div className="flex items-center mr-6">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{formatDate(post.date)}</span>
                </div>
                
                {post.views && (
                  <div className="flex items-center mr-6">
                    <Eye className="h-4 w-4 mr-2" />
                    <span>{post.views} views</span>
                  </div>
                )}
                
                {post.comments !== undefined && (
                  <div className="flex items-center">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    <span>{post.comments} comments</span>
                  </div>
                )}
              </div>
            </header>
            
            {/* Featured Image */}
            <div className="mb-8">
              <img 
                src={post.coverImage} 
                alt={post.title} 
                className="w-full h-auto rounded-lg shadow-md" 
              />
            </div>
            
            {/* Post Content */}
            <div 
              className="blog-content prose prose-lg max-w-none mb-10"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
            
            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="mb-8">
                <h3 className="text-lg font-bold mb-2">Tags:</h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700 hover:bg-gray-200 transition cursor-pointer"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
            
            {/* Share Buttons */}
            <div className="mb-10 border-t border-b py-6">
              <div className="flex flex-wrap items-center">
                <span className="font-medium mr-4">Share this post:</span>
                <div className="flex space-x-2">
                  <Button size="sm" variant="outline" className="rounded-full w-9 h-9 p-0">
                    <Facebook className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="outline" className="rounded-full w-9 h-9 p-0">
                    <Twitter className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="outline" className="rounded-full w-9 h-9 p-0">
                    <Linkedin className="h-4 w-4" />
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="rounded-full w-9 h-9 p-0"
                    onClick={handleCopyLink}
                  >
                    <Link2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Author Box */}
            <div className="bg-gray-50 rounded-lg p-6 mb-10">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                <Avatar className="h-16 w-16">
                  <img 
                    src={post.authorImage || '/placeholder.svg'} 
                    alt={post.author} 
                  />
                </Avatar>
                <div>
                  <h3 className="font-bold text-lg mb-2">About {post.author}</h3>
                  <p className="text-gray-600 mb-4">
                    An experienced writer with a passion for sharing knowledge and insights. 
                    Follow for more articles on {categoryLabels[post.category]}.
                  </p>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      Follow
                    </Button>
                    <Button size="sm">
                      View All Posts
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Comments Section */}
            <CommentsSection comments={comments} />
            
            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <RelatedPosts posts={relatedPosts} />
            )}
          </>
        ) : (
          <div className="text-center py-20">
            <h2 className="text-2xl font-bold mb-4">Post Not Found</h2>
            <p className="text-gray-600 mb-8">
              The post you're looking for doesn't exist or has been removed.
            </p>
            <Button asChild>
              <a href="/">Return to Home</a>
            </Button>
          </div>
        )}
      </div>
    </Layout>
  );
};

// Category labels for display
const categoryLabels: Record<string, string> = {
  tech: 'Technology',
  lifestyle: 'Lifestyle',
  travel: 'Travel',
  health: 'Health',
  food: 'Food'
};

export default PostPage;
