
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import PostCard from '@/components/blog/PostCard';
import { PostType, CategoryDetailType, CategoryType } from '@/types/blog';
import { blogService } from '@/services/blogService';

const CategoryDetailPage = () => {
  const { category } = useParams<{ category: string }>();
  const [posts, setPosts] = useState<PostType[]>([]);
  const [categoryDetails, setCategoryDetails] = useState<CategoryDetailType | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCategoryData = async () => {
      setIsLoading(true);
      try {
        if (category && isValidCategory(category)) {
          // Fetch category details and posts
          const [details, categoryPosts] = await Promise.all([
            blogService.getCategoryDetail(category as CategoryType),
            blogService.getPostsByCategory(category as CategoryType)
          ]);
          
          if (details) {
            setCategoryDetails(details);
          }
          
          setPosts(categoryPosts);
        }
      } catch (error) {
        console.error('Error fetching category data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCategoryData();
  }, [category]);

  // Helper function to validate category type
  const isValidCategory = (cat: string): cat is CategoryType => {
    return ['tech', 'lifestyle', 'travel', 'health', 'food'].includes(cat);
  };

  return (
    <Layout>
      <div className="container-blog py-10">
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-pulse">Loading category data...</div>
          </div>
        ) : categoryDetails ? (
          <>
            {/* Category Header */}
            <header 
              className="relative mb-12 rounded-lg overflow-hidden"
              style={{ 
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${categoryDetails.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="container py-16 text-center">
                <h1 className="text-4xl font-bold font-heading text-white mb-4">
                  {categoryDetails.label}
                </h1>
                <p className="text-lg text-white/80 max-w-2xl mx-auto">
                  {categoryDetails.description}
                </p>
              </div>
            </header>

            {/* Posts Grid */}
            {posts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts.map((post) => (
                  <PostCard key={post.id} post={post} />
                ))}
              </div>
            ) : (
              <div className="text-center py-10">
                <h2 className="text-2xl font-bold mb-2">No posts found</h2>
                <p className="text-gray-600">
                  There are currently no posts in this category. Check back later!
                </p>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-20">
            <h2 className="text-2xl font-bold mb-4">Category Not Found</h2>
            <p className="text-gray-600 mb-8">
              The category you're looking for doesn't exist.
            </p>
            <a 
              href="/categories"
              className="inline-block px-4 py-2 bg-blog-primary text-white rounded-md hover:bg-blog-accent transition"
            >
              Browse All Categories
            </a>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default CategoryDetailPage;
