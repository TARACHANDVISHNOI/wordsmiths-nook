
import Layout from '@/components/layout/Layout';
import { Avatar } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';

const AboutPage = () => {
  return (
    <Layout>
      <div className="container-blog py-10">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold font-heading text-blog-primary mb-4">
            About Wordsmiths Nook
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A community of passionate writers sharing stories, insights, and knowledge.
          </p>
        </header>

        {/* Our Mission */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl font-bold font-heading text-blog-primary mb-4">Our Mission</h2>
              <p className="text-gray-700 mb-4">
                At Wordsmiths Nook, we believe in the power of words to inform, inspire, and connect people across the globe. Our mission is to create a platform where thoughtful, well-crafted content finds its audience, and where writers can share their expertise and perspectives on topics that matter.
              </p>
              <p className="text-gray-700">
                We're committed to fostering a diverse community of voices, promoting meaningful conversations, and providing valuable insights across a wide range of categories—from technology and travel to health, food, and lifestyle.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1770&auto=format&fit=crop" 
                alt="Team collaboration" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="order-2 md:order-1 rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?q=80&w=1770&auto=format&fit=crop" 
                alt="Person writing" 
                className="w-full h-auto"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-2xl font-bold font-heading text-blog-primary mb-4">Our Story</h2>
              <p className="text-gray-700 mb-4">
                Wordsmiths Nook began as a small collective of writers who wanted to create a space where quality content could thrive in an age of information overload. Founded in 2023, we set out to build not just another blog, but a community where readers could find trustworthy, thoughtful articles on topics they care about.
              </p>
              <p className="text-gray-700">
                What started as a passion project has grown into a platform featuring diverse voices from around the world. We continue to be guided by our founding principles: quality over quantity, depth over superficiality, and community over competition.
              </p>
            </div>
          </div>
        </section>

        {/* Meet Our Team */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold font-heading text-blog-primary mb-8 text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {teamMembers.map((member) => (
              <Card key={member.name} className="overflow-hidden shadow-md">
                <div className="text-center pt-6">
                  <Avatar className="h-24 w-24 mx-auto">
                    <img src={member.avatar} alt={member.name} />
                  </Avatar>
                </div>
                <CardContent className="text-center p-6">
                  <h3 className="font-bold text-xl mb-1">{member.name}</h3>
                  <p className="text-blog-accent mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Our Values */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold font-heading text-blog-primary mb-8 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div key={value.title} className="bg-blog-muted p-6 rounded-lg">
                <div className="text-blog-primary mb-4">
                  <value.icon className="h-10 w-10" />
                </div>
                <h3 className="font-bold text-lg mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Join Us CTA */}
        <section className="bg-blog-primary text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold font-heading mb-4">Join Our Community</h2>
          <p className="max-w-2xl mx-auto mb-6">
            Whether you're a reader seeking quality content or a writer looking to share your voice, 
            we'd love to have you as part of our community.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="/signup" 
              className="bg-white text-blog-primary px-6 py-2 rounded-md font-medium hover:bg-gray-100 transition"
            >
              Sign Up
            </a>
            <a 
              href="/contact" 
              className="border border-white px-6 py-2 rounded-md font-medium hover:bg-white hover:text-blog-primary transition"
            >
              Contact Us
            </a>
          </div>
        </section>
      </div>
    </Layout>
  );
};

// Team member data
const teamMembers = [
  {
    name: 'Alexandra Chen',
    role: 'Founder & Editor-in-Chief',
    bio: 'Former journalist with a passion for storytelling and building communities. Leads editorial direction and vision.',
    avatar: 'https://randomuser.me/api/portraits/women/43.jpg',
  },
  {
    name: 'Michael Rivera',
    role: 'Senior Editor',
    bio: 'Award-winning writer specializing in technology and culture. Ensures content quality and editorial standards.',
    avatar: 'https://randomuser.me/api/portraits/men/54.jpg',
  },
  {
    name: 'Priya Sharma',
    role: 'Community Manager',
    bio: 'Digital marketing expert who nurtures our writer community and reader engagement strategies.',
    avatar: 'https://randomuser.me/api/portraits/women/63.jpg',
  },
];

// Values data with lucide-react icons
import { 
  BookOpen, 
  Users, 
  GlobePlus, 
  PenTool
} from 'lucide-react';

const values = [
  {
    title: 'Quality Content',
    description: 'We prioritize depth, accuracy, and thoughtful analysis in everything we publish.',
    icon: BookOpen,
  },
  {
    title: 'Community Focus',
    description: 'We believe in building connections between writers and readers, fostering meaningful dialogue.',
    icon: Users,
  },
  {
    title: 'Global Perspective',
    description: 'We celebrate diverse viewpoints and seek to provide insights from around the world.',
    icon: GlobePlus,
  },
  {
    title: 'Creative Freedom',
    description: 'We empower writers to express their unique voices while maintaining editorial standards.',
    icon: PenTool,
  },
];

export default AboutPage;
