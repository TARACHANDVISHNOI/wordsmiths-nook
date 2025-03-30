
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement search functionality
    console.log('Searching for:', searchQuery);
    window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
  };

  return (
    <nav className="bg-white shadow-sm py-4">
      <div className="container-blog mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo and brand */}
          <Link to="/" className="flex items-center">
            <h1 className="text-2xl font-heading font-bold text-blog-primary">Wordsmiths Nook</h1>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <div className="flex items-center space-x-6">
              <Link to="/" className="text-gray-700 hover:text-blog-accent transition">Home</Link>
              <Link to="/categories" className="text-gray-700 hover:text-blog-accent transition">Categories</Link>
              <Link to="/about" className="text-gray-700 hover:text-blog-accent transition">About</Link>
              <Link to="/contact" className="text-gray-700 hover:text-blog-accent transition">Contact</Link>
            </div>
            
            <form onSubmit={handleSearch} className="relative ml-4">
              <Input
                type="search"
                placeholder="Search posts..."
                className="w-40 pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            </form>
            
            <Link to="/login">
              <Button variant="outline" size="sm">
                Login
              </Button>
            </Link>
            <Link to="/signup">
              <Button size="sm">Sign Up</Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="p-2 text-gray-700 rounded-md focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-gray-700 hover:text-blog-accent transition py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/categories" 
                className="text-gray-700 hover:text-blog-accent transition py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Categories
              </Link>
              <Link 
                to="/about" 
                className="text-gray-700 hover:text-blog-accent transition py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className="text-gray-700 hover:text-blog-accent transition py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              
              <form onSubmit={handleSearch} className="relative">
                <Input
                  type="search"
                  placeholder="Search posts..."
                  className="w-full pl-8"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search className="absolute left-2 top-3 h-4 w-4 text-muted-foreground" />
              </form>
              
              <div className="flex space-x-2 pt-2">
                <Link to="/login" className="w-full">
                  <Button variant="outline" className="w-full">Login</Button>
                </Link>
                <Link to="/signup" className="w-full">
                  <Button className="w-full">Sign Up</Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
