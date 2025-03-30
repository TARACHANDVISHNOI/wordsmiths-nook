
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { CategoryDetailType } from '@/types/blog';
import { blogService } from '@/services/blogService';

const CategoriesPage = () => {
  const [categories, setCategories] = useState<CategoryDetailType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      setIsLoading(true);
      try {
        const data = await blogService.getCategories();
        setCategories(data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return (
    <Layout>
      <div className="container-blog py-10">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold font-heading text-blog-primary mb-4">
            Categories
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our diverse range of topics and find the content that interests you most.
          </p>
        </header>

        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-pulse">Loading categories...</div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {categories.map((category) => (
              <Link 
                key={category.type} 
                to={`/categories/${category.type}`}
                className="transition-transform hover:scale-[1.02]"
              >
                <Card className="overflow-hidden h-full shadow-md hover:shadow-lg transition-shadow">
                  <div 
                    className="relative h-40 overflow-hidden" 
                    style={{ 
                      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${category.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <h2 className="text-white text-3xl font-heading font-bold">
                        {category.label}
                      </h2>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <p className="text-gray-700">
                      {category.description}
                    </p>
                    <div className="mt-4 inline-block">
                      <span 
                        className="px-3 py-1 rounded-full text-sm font-medium text-white"
                        style={{ backgroundColor: category.color }}
                      >
                        Explore {category.label}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default CategoriesPage;
