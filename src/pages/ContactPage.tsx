
import { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { 
  MessageSquare, 
  Mail, 
  MapPin,
  Send,
  Facebook,
  Twitter,
  Instagram,
  Linkedin
} from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', formData);
      
      // Reset form and show toast
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      setIsSubmitting(false);
      
      toast({
        title: "Message sent!",
        description: "We've received your message and will get back to you soon.",
      });
    }, 1500);
  };

  return (
    <Layout>
      <div className="container-blog py-10">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold font-heading text-blog-primary mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have a question, suggestion, or want to contribute to Wordsmiths Nook? 
            We'd love to hear from you!
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold font-heading text-blog-primary mb-6">
              Send Us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-2 font-medium">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block mb-2 font-medium">
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email address"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block mb-2 font-medium">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What is this regarding?"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-2 font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message"
                  rows={6}
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center">
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </span>
                )}
              </Button>
            </form>
          </div>
          
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold font-heading text-blog-primary mb-6">
                Contact Information
              </h2>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <MessageSquare className="h-5 w-5 text-blog-accent mt-1 mr-3" />
                  <div>
                    <h3 className="font-medium">General Inquiries</h3>
                    <p className="text-gray-600">For general questions about Wordsmiths Nook.</p>
                    <a href="mailto:info@wordsmithsnook.com" className="text-blog-accent hover:underline">info@wordsmithsnook.com</a>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <Mail className="h-5 w-5 text-blog-accent mt-1 mr-3" />
                  <div>
                    <h3 className="font-medium">Editorial Team</h3>
                    <p className="text-gray-600">For content submissions or editorial questions.</p>
                    <a href="mailto:editorial@wordsmithsnook.com" className="text-blog-accent hover:underline">editorial@wordsmithsnook.com</a>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <MapPin className="h-5 w-5 text-blog-accent mt-1 mr-3" />
                  <div>
                    <h3 className="font-medium">Our Location</h3>
                    <p className="text-gray-600">
                      Wordsmiths Nook HQ<br />
                      123 Writer's Lane<br />
                      San Francisco, CA 94103
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold font-heading text-blog-primary mb-6">
                Follow Us
              </h2>
              <p className="text-gray-600 mb-4">
                Stay connected with us on social media for the latest updates.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="bg-gray-100 p-3 rounded-full text-gray-600 hover:bg-blog-primary hover:text-white transition"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a 
                  href="#" 
                  className="bg-gray-100 p-3 rounded-full text-gray-600 hover:bg-blog-primary hover:text-white transition"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a 
                  href="#" 
                  className="bg-gray-100 p-3 rounded-full text-gray-600 hover:bg-blog-primary hover:text-white transition"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a 
                  href="#" 
                  className="bg-gray-100 p-3 rounded-full text-gray-600 hover:bg-blog-primary hover:text-white transition"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
            
            <div className="bg-blog-muted p-6 rounded-lg">
              <h3 className="font-bold mb-2">Become a Contributor</h3>
              <p className="text-gray-600 mb-4">
                Interested in writing for Wordsmiths Nook? We're always looking for passionate writers to join our community.
              </p>
              <Button variant="outline" asChild>
                <a href="/write-for-us">Learn More</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;
