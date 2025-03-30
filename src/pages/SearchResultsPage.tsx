
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import PostCard from '@/components/blog/PostCard';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { PostType } from '@/types/blog';
import { blogService } from '@/services/blogService';
import { Search } from 'lucide-react';

const SearchResultsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialQuery = searchParams.get('q') || '';
  
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [results, setResults] = useState<PostType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSearched, setIsSearched] = useState(false);

  useEffect(() => {
    const performSearch = async () => {
      if (!initialQuery) return;
      
      setIsLoading(true);
      setIsSearched(true);
      
      try {
        const searchResults = await blogService.searchPosts(initialQuery);
        setResults(searchResults);
      } catch (error) {
        console.error('Error searching posts:', error);
      } finally {
        setIsLoading(false);
      }
    };

    performSearch();
  }, [initialQuery]);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!searchQuery.trim()) return;
    
    // Update URL with search query
    setSearchParams({ q: searchQuery });
    
    setIsLoading(true);
    setIsSearched(true);
    
    try {
      const searchResults = await blogService.searchPosts(searchQuery);
      setResults(searchResults);
    } catch (error) {
      console.error('Error searching posts:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Layout>
      <div className="container-blog py-10">
        <header className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold font-heading text-blog-primary mb-6">
            {isSearched 
              ? `Search Results for "${initialQuery}"`
              : "Search Wordsmiths Nook"
            }
          </h1>
          
          <form onSubmit={handleSearch} className="flex gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="search"
                placeholder="Search for posts, topics, or keywords..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button type="submit">Search</Button>
          </form>
        </header>

        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-pulse">Searching...</div>
          </div>
        ) : isSearched ? (
          results.length > 0 ? (
            <div>
              <p className="mb-6 text-gray-600">
                Found {results.length} result{results.length !== 1 ? 's' : ''} for "{initialQuery}"
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {results.map((post) => (
                  <PostCard key={post.id} post={post} />
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center py-12">
              <h2 className="text-2xl font-bold mb-4">No results found</h2>
              <p className="text-gray-600 mb-8 max-w-md mx-auto">
                We couldn't find any posts matching "{initialQuery}". Try different keywords or browse our categories.
              </p>
              <Button asChild>
                <a href="/categories">Browse Categories</a>
              </Button>
            </div>
          )
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600 mb-8">
              Enter a search term to find posts, topics, or keywords.
            </p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default SearchResultsPage;
