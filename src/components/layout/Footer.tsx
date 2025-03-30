
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 pt-12 pb-8 border-t">
      <div className="container-blog mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About section */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-lg font-bold mb-4 text-blog-primary">Wordsmiths Nook</h3>
            <p className="text-gray-600 mb-4">
              A community of writers and readers sharing stories, insights, and knowledge.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-blog-accent transition">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-blog-accent transition">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-blog-accent transition">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-blog-accent transition">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-4 text-blog-primary">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-blog-accent transition">Home</Link>
              </li>
              <li>
                <Link to="/categories" className="text-gray-600 hover:text-blog-accent transition">Categories</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-blog-accent transition">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-blog-accent transition">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-4 text-blog-primary">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/categories/technology" className="text-gray-600 hover:text-blog-accent transition">Technology</Link>
              </li>
              <li>
                <Link to="/categories/lifestyle" className="text-gray-600 hover:text-blog-accent transition">Lifestyle</Link>
              </li>
              <li>
                <Link to="/categories/travel" className="text-gray-600 hover:text-blog-accent transition">Travel</Link>
              </li>
              <li>
                <Link to="/categories/health" className="text-gray-600 hover:text-blog-accent transition">Health</Link>
              </li>
              <li>
                <Link to="/categories/food" className="text-gray-600 hover:text-blog-accent transition">Food</Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-4 text-blog-primary">Newsletter</h3>
            <p className="text-gray-600 mb-4">
              Subscribe to our newsletter to get the latest updates.
            </p>
            <form className="space-y-2">
              <Input 
                type="email" 
                placeholder="Your email address" 
                className="w-full"
              />
              <Button type="submit" className="w-full">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>© {currentYear} Wordsmiths Nook. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <Link to="/privacy-policy" className="hover:text-blog-accent transition">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-blog-accent transition">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
