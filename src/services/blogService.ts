
import { PostType, CommentType, CategoryType, CategoryDetailType } from '@/types/blog';

// Mock data for posts
const posts: PostType[] = [
  {
    id: '1',
    title: 'The Future of Web Development: What to Expect in 2023',
    slug: 'future-of-web-development-2023',
    author: 'Jane Cooper',
    authorImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=256&auto=format&fit=crop',
    date: '2023-06-15',
    category: 'tech',
    tags: ['webdev', 'frontend', 'programming'],
    excerpt: 'Explore the emerging trends and technologies that will shape web development in the coming year, from AI integration to new frameworks.',
    content: `
      <h2>Introduction</h2>
      <p>The web development landscape is constantly evolving, with new technologies and methodologies emerging at a rapid pace. As we look ahead to 2023, several key trends are set to revolutionize how developers work and what users can expect from web applications.</p>
      
      <h2>AI-Powered Development Tools</h2>
      <p>Artificial intelligence is making its way into development workflows, with tools that can automate routine tasks, suggest code improvements, and even generate functional components based on natural language descriptions. This is enabling developers to focus more on creativity and problem-solving rather than repetitive coding tasks.</p>
      
      <h2>WebAssembly Becomes Mainstream</h2>
      <p>WebAssembly (Wasm) has been gaining momentum, and 2023 is expected to be the year it becomes a standard part of the web developer's toolkit. By allowing code written in languages like C++, Rust, and Go to run in the browser at near-native speed, Wasm is opening new possibilities for web applications that were previously only available to native software.</p>
      
      <h2>Serverless Architecture</h2>
      <p>The serverless paradigm continues to gain traction, with more developers embracing the simplicity and scalability of services like AWS Lambda, Azure Functions, and Google Cloud Functions. This approach allows developers to focus on writing code without worrying about the underlying infrastructure.</p>
      
      <h2>Improved Web Accessibility</h2>
      <p>Accessibility is becoming a higher priority for web developers, and 2023 will see more tools and frameworks that make it easier to create inclusive web experiences. From automated testing to built-in accessibility features in popular libraries, making websites usable for everyone is getting easier.</p>
      
      <h2>Conclusion</h2>
      <p>The future of web development is exciting, with technologies that will make creating web applications faster, more efficient, and more accessible. By staying informed about these trends, developers can position themselves for success in an ever-changing landscape.</p>
    `,
    coverImage: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1752&auto=format&fit=crop',
    featured: true,
    views: 1250,
    comments: 28,
  },
  {
    id: '2',
    title: 'The Ultimate Guide to Sustainable Travel in 2023',
    slug: 'ultimate-guide-sustainable-travel-2023',
    author: 'Alex Johnson',
    authorImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=256&auto=format&fit=crop',
    date: '2023-05-22',
    category: 'travel',
    tags: ['travel', 'sustainability', 'ecotourism'],
    excerpt: 'Learn how to minimize your environmental footprint while experiencing the world, with practical tips for eco-friendly travel adventures.',
    content: `
      <h2>Introduction to Sustainable Travel</h2>
      <p>As travel rebounds after years of restrictions, many travelers are looking for ways to explore the world while minimizing their environmental impact. Sustainable travel isn't just about reducing carbon emissions—it encompasses supporting local communities, respecting wildlife and cultural heritage, and making conscious choices throughout your journey.</p>
      
      <h2>Planning Your Eco-Friendly Trip</h2>
      <p>The first step in sustainable travel happens before you even leave home. Research destinations with strong environmental practices, consider traveling during off-peak seasons to reduce overtourism, and look for eco-certified accommodations. When possible, choose direct flights to reduce your carbon footprint.</p>
      
      <h2>Packing Sustainably</h2>
      <p>Pack light to reduce fuel consumption on your transportation, and bring reusable items like water bottles, shopping bags, and food containers. Consider items like solid shampoo bars and bamboo toothbrushes to minimize plastic waste. Don't forget a water filter if you're visiting areas where tap water isn't potable.</p>
      
      <h2>Transportation Choices</h2>
      <p>Once at your destination, opt for public transportation, cycling, or walking whenever possible. If you need to rent a vehicle, choose an electric or hybrid option. Consider carbon offset programs for flights and other high-emission transportation methods.</p>
      
      <h2>Supporting Local Communities</h2>
      <p>Stay in locally-owned accommodations, eat at local restaurants, and purchase souvenirs directly from artisans. This ensures your tourism dollars benefit the community you're visiting rather than international corporations. Participate in community-based tourism initiatives to learn directly from locals.</p>
      
      <h2>Conclusion: The Future of Travel</h2>
      <p>Sustainable travel isn't about perfection—it's about making better choices when and where you can. As more travelers embrace these principles, the tourism industry is responding with more eco-friendly options. Your choices matter, and together we can ensure tourism benefits both communities and the environment for generations to come.</p>
    `,
    coverImage: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1742&auto=format&fit=crop',
    views: 843,
    comments: 15,
  },
  {
    id: '3',
    title: 'Mindfulness Practices for Daily Mental Wellness',
    slug: 'mindfulness-practices-daily-mental-wellness',
    author: 'Maya Rodriguez',
    authorImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=256&auto=format&fit=crop',
    date: '2023-04-10',
    category: 'health',
    tags: ['mindfulness', 'mental health', 'wellness'],
    excerpt: 'Discover simple yet powerful mindfulness techniques you can incorporate into your daily routine to improve focus, reduce stress, and enhance overall wellbeing.',
    content: `
      <h2>What is Mindfulness?</h2>
      <p>Mindfulness is the practice of purposely focusing your attention on the present moment—and accepting it without judgment. It's about being fully engaged with whatever you're doing at the moment, free from distraction or judgment, and aware of your thoughts and feelings without getting caught up in them.</p>
      
      <h2>Morning Mindfulness Routine</h2>
      <p>Start your day with intention by dedicating the first 10 minutes to mindfulness. Instead of immediately reaching for your phone, take deep breaths, set positive intentions for the day, or practice a quick body scan meditation to connect with yourself before connecting with the world.</p>
      
      <h2>Mindful Eating</h2>
      <p>Transform your meals into mindfulness opportunities by eating without distractions. Notice the colors, smells, textures, and flavors of your food. Chew slowly and put your utensils down between bites. This not only improves digestion but also helps you recognize hunger and fullness cues.</p>
      
      <h2>Mindfulness in Motion</h2>
      <p>You don't need to sit still to practice mindfulness. Walking meditation, yoga, or even mindful household chores can be powerful practices. Focus on the sensations in your body, the movement of your breath, and the details of your environment as you move.</p>
      
      <h2>Digital Mindfulness</h2>
      <p>In our connected world, practicing digital mindfulness is essential. Set boundaries around technology use, take regular screen breaks, and be intentional about how and why you're using digital devices. Consider a "digital sunset" by turning off screens an hour before bedtime.</p>
      
      <h2>Breathing Techniques for Stress</h2>
      <p>Your breath is a powerful tool that's always available. When stressed, try box breathing: inhale for four counts, hold for four, exhale for four, and hold for four before beginning again. Even a minute of focused breathing can activate your parasympathetic nervous system and reduce stress.</p>
      
      <h2>Integrating Mindfulness Long-Term</h2>
      <p>Consistency is key with mindfulness practice. Start small with 5-minute daily sessions and gradually build up. Use reminders like phone alarms or associate practice with existing habits. Remember that mindfulness is not about perfection but about returning to the present moment again and again.</p>
    `,
    coverImage: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1770&auto=format&fit=crop',
    views: 1025,
    comments: 22,
  },
  {
    id: '4',
    title: 'Revolutionizing Home Cooking with Smart Kitchen Devices',
    slug: 'revolutionizing-home-cooking-smart-kitchen-devices',
    author: 'Marcus Chen',
    authorImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=256&auto=format&fit=crop',
    date: '2023-03-18',
    category: 'food',
    tags: ['cooking', 'technology', 'smart home'],
    excerpt: 'Explore how the latest smart kitchen technology is transforming home cooking, making it more accessible, efficient, and enjoyable for cooks of all skill levels.',
    content: `
      <h2>The Smart Kitchen Revolution</h2>
      <p>The kitchen has always been the heart of the home, but now it's becoming the smartest room as well. From connected appliances to AI-assisted cooking, technology is transforming how we prepare food, follow recipes, and even how we shop for groceries.</p>
      
      <h2>Connected Cooking Appliances</h2>
      <p>Smart refrigerators can now track inventory and expiration dates, suggesting recipes based on what's inside. Connected ovens allow remote preheating and monitoring, while smart cooktops can maintain precise temperatures and even communicate with recipe apps to guide cooking times and temperatures.</p>
      
      <h2>Voice-Controlled Assistants in the Kitchen</h2>
      <p>Hands covered in flour or sauce? Voice assistants like Alexa and Google Assistant have become valuable kitchen companions, allowing you to set timers, convert measurements, add items to shopping lists, or even control other smart appliances—all without touching a device.</p>
      
      <h2>Precision Cooking Tools</h2>
      <p>Sous vide cookers, smart scales, and temperature-controlled cookware are bringing professional precision to home kitchens. These devices can help even novice cooks achieve consistent, restaurant-quality results by removing guesswork from the equation.</p>
      
      <h2>App-Connected Cooking Education</h2>
      <p>Smart devices paired with educational apps are transforming how we learn to cook. Interactive recipes, video tutorials synchronized with your cooking progress, and real-time feedback are making it easier than ever to build cooking skills and try new techniques.</p>
      
      <h2>The Future of Food Preparation</h2>
      <p>Looking ahead, we're seeing the emergence of autonomous cooking systems that can handle entire recipes with minimal human intervention. While we're not quite at the point of having robot chefs, the technology is advancing rapidly, promising to make nutritious home-cooked meals accessible even to those with limited time or skills.</p>
      
      <h2>Balancing Technology and Tradition</h2>
      <p>As kitchens become more connected, there's value in finding the right balance between technological assistance and the sensory, intuitive aspects of cooking that make it a fulfilling human experience. The best smart kitchen technology enhances rather than replaces the joy of cooking.</p>
    `,
    coverImage: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=1768&auto=format&fit=crop',
    views: 732,
    comments: 19,
  },
  {
    id: '5',
    title: 'Minimalism: The Lifestyle Revolution Changing How We Consume',
    slug: 'minimalism-lifestyle-revolution-changing-consumption',
    author: 'Olivia Taylor',
    authorImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=256&auto=format&fit=crop',
    date: '2023-02-05',
    category: 'lifestyle',
    tags: ['minimalism', 'sustainability', 'intentional living'],
    excerpt: 'Discover how the minimalist movement is challenging our relationship with consumption and helping people find greater satisfaction with less material possession.',
    content: `
      <h2>The Origins of Modern Minimalism</h2>
      <p>While minimalism has roots in various philosophical and spiritual traditions, the contemporary minimalist movement gained mainstream attention following the 2008 financial crisis. As people reassessed their relationship with consumption and debt, many found freedom in owning less and being more intentional about their purchases.</p>
      
      <h2>Beyond Aesthetics: Minimalism as a Philosophy</h2>
      <p>Though often associated with stark white interiors and capsule wardrobes, true minimalism goes beyond visual aesthetics. At its core, it's about removing excess to make room for what brings genuine value and joy. This applies not just to physical possessions but also to commitments, relationships, and digital consumption.</p>
      
      <h2>The Decluttering Process</h2>
      <p>Embracing minimalism typically begins with a decluttering process, popularized by figures like Marie Kondo. This isn't just about getting rid of things—it's about developing a more conscious relationship with your possessions by asking meaningful questions about utility, joy, and necessity.</p>
      
      <h2>Minimalism and Financial Freedom</h2>
      <p>Many minimalists report significant financial benefits from their lifestyle change. By reducing impulse purchases, focusing on quality over quantity, and clearly distinguishing wants from needs, minimalism often leads to reduced debt, increased savings, and greater financial independence.</p>
      
      <h2>Digital Minimalism</h2>
      <p>As our digital lives become increasingly cluttered and demanding, digital minimalism advocates for intentional use of technology. This might include reducing screen time, curating social media feeds, decluttering digital files, or adopting "slow tech" practices that help us use digital tools without being controlled by them.</p>
      
      <h2>Minimalism and Sustainability</h2>
      <p>There's a natural overlap between minimalism and environmental consciousness. By consuming less, opting for quality items that last longer, and being thoughtful about purchases, minimalists often reduce their environmental footprint. Many also embrace repair culture, second-hand shopping, and sharing economies.</p>
      
      <h2>Finding Your Minimalist Balance</h2>
      <p>Minimalism isn't about deprivation or following strict rules—it's about finding the right balance for your life. Some people thrive with extreme minimalism, while others apply minimalist principles more selectively. The key is intentionality: making conscious choices that align with your values and enhance your wellbeing.</p>
    `,
    coverImage: 'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?q=80&w=1767&auto=format&fit=crop',
    views: 942,
    comments: 26,
  },
  {
    id: '6',
    title: 'Building Your First AI-Powered Application: A Beginner\'s Guide',
    slug: 'building-first-ai-powered-application-beginners-guide',
    author: 'David Washington',
    authorImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=256&auto=format&fit=crop',
    date: '2023-01-12',
    category: 'tech',
    tags: ['artificial intelligence', 'programming', 'machine learning'],
    excerpt: 'Learn how to create your first application with artificial intelligence capabilities, even if you\'re just starting your coding journey.',
    content: `
      <h2>Introduction to AI Development</h2>
      <p>Artificial intelligence has moved from the realm of science fiction to becoming an accessible tool for developers of all levels. With the proliferation of AI frameworks, cloud services, and pre-trained models, building AI-powered applications is now within reach even for those new to programming.</p>
      
      <h2>Understanding AI Fundamentals</h2>
      <p>Before diving into development, it's helpful to understand basic AI concepts like machine learning, neural networks, and natural language processing. Don't worry—you don't need a PhD to get started. Many resources explain these concepts in beginner-friendly terms, and modern tools abstract away much of the complexity.</p>
      
      <h2>Choosing the Right AI Tools</h2>
      <p>For beginners, it's best to start with high-level APIs and services that don't require deep ML knowledge. Services like Google Cloud AI, Azure Cognitive Services, and OpenAI's GPT API let you integrate sophisticated AI capabilities with just a few lines of code. As you grow more comfortable, you can explore frameworks like TensorFlow or PyTorch.</p>
      
      <h2>Setting Up Your Development Environment</h2>
      <p>Most AI development happens in Python, so install Python and familiar yourself with basic syntax if you haven't already. Jupyter Notebooks provide an excellent environment for experimenting with AI code, as they allow you to run code in small chunks and visualize results immediately.</p>
      
      <h2>Your First AI Project</h2>
      <p>Start with something simple but meaningful. Text classification, image recognition, or a recommendation system using existing datasets are good first projects. These let you focus on implementation rather than data collection and can still produce impressive results.</p>
      
      <h2>Integrating AI into Applications</h2>
      <p>Once you've experimented with AI capabilities, you can integrate them into web or mobile applications. Frameworks like Flask or FastAPI make it easy to create API endpoints for your AI functionality, which can then be consumed by frontend applications built with technologies like React or Flutter.</p>
      
      <h2>Continuous Learning and Improvement</h2>
      <p>AI is a rapidly evolving field, so continuous learning is important. Join communities like Kaggle or AI-focused Discord servers, participate in beginner-friendly competitions, and keep experimenting with new projects. Remember that even experienced AI developers are constantly learning new techniques and approaches.</p>
    `,
    coverImage: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=1906&auto=format&fit=crop',
    views: 1103,
    comments: 31,
  }
];

// Mock data for comments
const comments: CommentType[] = [
  {
    id: '1',
    postId: '1',
    username: 'TechEnthusiast',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    date: '2023-06-16',
    content: 'This article really opened my eyes to the potential of WebAssembly. I\'ve been hesitant to explore it, but now I\'m excited to dive in!',
    likes: 12,
    replies: [
      {
        id: '2',
        postId: '1',
        username: 'DevGuru',
        avatar: 'https://randomuser.me/api/portraits/women/45.jpg',
        date: '2023-06-17',
        content: 'I\'ve been using Wasm in production for about a year now, and it\'s been a game-changer for performance-critical sections of our web app.',
        likes: 8,
      }
    ]
  },
  {
    id: '3',
    postId: '1',
    username: 'CodeNewbie',
    avatar: 'https://randomuser.me/api/portraits/women/62.jpg',
    date: '2023-06-18',
    content: 'As someone just starting in web development, this is both exciting and intimidating! How should beginners approach learning these new technologies without getting overwhelmed?',
    likes: 5,
  },
  {
    id: '4',
    postId: '2',
    username: 'GlobeWanderer',
    avatar: 'https://randomuser.me/api/portraits/men/14.jpg',
    date: '2023-05-23',
    content: 'I\'ve been trying to make my travels more sustainable, and these tips are really practical. The section on supporting local communities especially resonated with me.',
    likes: 9,
  },
  {
    id: '5',
    postId: '3',
    username: 'MindfulLiving',
    avatar: 'https://randomuser.me/api/portraits/women/16.jpg',
    date: '2023-04-11',
    content: 'I\'ve been practicing mindfulness for several years, and it\'s truly transformed my relationship with stress. The digital mindfulness section in this article offers suggestions I hadn\'t considered before.',
    likes: 15,
    replies: [
      {
        id: '6',
        postId: '3',
        username: 'BeginnersMind',
        avatar: 'https://randomuser.me/api/portraits/men/67.jpg',
        date: '2023-04-12',
        content: 'Do you have any recommended apps for getting started with mindfulness meditation? I\'ve tried a few but haven\'t found one that really clicks for me.',
        likes: 3,
      },
      {
        id: '7',
        postId: '3',
        username: 'MindfulLiving',
        avatar: 'https://randomuser.me/api/portraits/women/16.jpg',
        date: '2023-04-13',
        content: 'I personally like Insight Timer for its variety and Waking Up for more in-depth practice. But the best app is the one you\'ll actually use consistently!',
        likes: 7,
      }
    ]
  }
];

const categoryDetails: Record<CategoryType, CategoryDetailType> = {
  tech: {
    type: 'tech',
    label: 'Technology',
    description: 'Exploring the latest in gadgets, software development, AI advancements, and digital transformation.',
    color: '#3B82F6', // Blue
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1740&auto=format&fit=crop'
  },
  lifestyle: {
    type: 'lifestyle',
    label: 'Lifestyle',
    description: 'Insights on minimalism, productivity, relationships, and finding balance in the modern world.',
    color: '#10B981', // Green
    image: 'https://images.unsplash.com/photo-1511988617509-a57c8a288659?q=80&w=1771&auto=format&fit=crop'
  },
  travel: {
    type: 'travel',
    label: 'Travel',
    description: 'Destination guides, travel tips, cultural experiences, and sustainable tourism practices.',
    color: '#F59E0B', // Yellow
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1770&auto=format&fit=crop'
  },
  health: {
    type: 'health',
    label: 'Health & Wellness',
    description: 'Advice on physical and mental wellbeing, fitness routines, nutrition, and mindfulness practices.',
    color: '#EC4899', // Pink
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1720&auto=format&fit=crop'
  },
  food: {
    type: 'food',
    label: 'Food & Cooking',
    description: 'Recipes, cooking techniques, food science, restaurant reviews, and culinary traditions.',
    color: '#8B5CF6', // Purple
    image: 'https://images.unsplash.com/photo-1493770348161-369560ae357d?q=80&w=1770&auto=format&fit=crop'
  }
};

// Service methods
export const blogService = {
  // Get all posts
  getPosts: async (): Promise<PostType[]> => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    return posts;
  },

  // Get featured posts
  getFeaturedPosts: async (): Promise<PostType[]> => {
    await new Promise(resolve => setTimeout(resolve, 500));
    return posts.filter(post => post.featured);
  },

  // Get recent posts
  getRecentPosts: async (limit: number = 6): Promise<PostType[]> => {
    await new Promise(resolve => setTimeout(resolve, 500));
    return [...posts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, limit);
  },

  // Get post by slug
  getPostBySlug: async (slug: string): Promise<PostType | undefined> => {
    await new Promise(resolve => setTimeout(resolve, 500));
    return posts.find(post => post.slug === slug);
  },

  // Get related posts
  getRelatedPosts: async (postId: string, limit: number = 3): Promise<PostType[]> => {
    await new Promise(resolve => setTimeout(resolve, 500));
    const currentPost = posts.find(post => post.id === postId);
    if (!currentPost) return [];
    
    return posts
      .filter(post => post.id !== postId && post.category === currentPost.category)
      .slice(0, limit);
  },

  // Get posts by category
  getPostsByCategory: async (category: CategoryType): Promise<PostType[]> => {
    await new Promise(resolve => setTimeout(resolve, 500));
    return posts.filter(post => post.category === category);
  },

  // Get comments for a post
  getCommentsByPostId: async (postId: string): Promise<CommentType[]> => {
    await new Promise(resolve => setTimeout(resolve, 500));
    return comments.filter(comment => comment.postId === postId);
  },

  // Get all categories
  getCategories: async (): Promise<CategoryDetailType[]> => {
    await new Promise(resolve => setTimeout(resolve, 500));
    return Object.values(categoryDetails);
  },

  // Get category details
  getCategoryDetail: async (category: CategoryType): Promise<CategoryDetailType | undefined> => {
    await new Promise(resolve => setTimeout(resolve, 500));
    return categoryDetails[category];
  },

  // Search posts
  searchPosts: async (query: string): Promise<PostType[]> => {
    await new Promise(resolve => setTimeout(resolve, 500));
    const searchTerm = query.toLowerCase();
    return posts.filter(post => 
      post.title.toLowerCase().includes(searchTerm) || 
      post.content.toLowerCase().includes(searchTerm) || 
      post.excerpt.toLowerCase().includes(searchTerm) ||
      post.tags?.some(tag => tag.toLowerCase().includes(searchTerm))
    );
  }
};
