import React from 'react';
import { useLocation, Location } from 'react-router-dom';
import Seo from '@/components/Seo';

interface BlogPost {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  image: string;
  slug: string;
  tags?: string[];
  readingTime?: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Getting Started with Web Development",
    date: "April 28, 2025",
    excerpt: "A comprehensive guide to starting your web development journey...",
    image: "https://plus.unsplash.com/premium_photo-1685086785423-435c02d5c321",
    slug: "getting-started",
    tags: ['Web Development', 'Beginner', 'HTML', 'CSS'],
    readingTime: '12 min read'
  },
  {
    id: 2,
    title: "React Basics for Beginners",
    date: "April 28, 2025",
    excerpt: "Learn the fundamentals of React and start building modern web applications...",
    image: "https://images.unsplash.com/photo-1670057037226-b3d65909424f",
    slug: "react-basics",
    tags: ['React', 'JavaScript', 'Frontend'],
    readingTime: '15 min read'
  },
  {
    id: 3,
    title: "Advanced Web Development Techniques",
    date: "April 28, 2025",
    excerpt: "Learn advanced web development techniques including performance optimization, security best practices, and modern web architecture patterns...",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80",
    slug: "advanced-web-dev",
    tags: ['Web Development', 'Advanced', 'Performance', 'Security', 'Architecture'],
    readingTime: '20 min read'
  },
  {
    id: 4,
    title: "Web Performance Optimization",
    date: "April 28, 2025",
    excerpt: "Learn how to optimize your web applications for better performance. From loading times to user experience, this guide covers everything you need to know...",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80",
    slug: "web-performance",
    tags: ['Web Development', 'Performance', 'Optimization', 'User Experience'],
    readingTime: '15 min read'
  }
];

interface BlogListProps {
  location: Location;
}

const BlogList: React.FC<BlogListProps> = ({ location }) => {
  const baseUrl = 'http://localhost:8080';

  return (
    <>
      <Seo
        title="Blog - Web Development and React Tutorials"
        description="Explore our collection of web development and React tutorials. From beginner guides to advanced topics, we have everything you need to become a better developer."
        url={`${baseUrl}/blog`}
        keywords={['Web Development', 'React', 'JavaScript', 'Programming', 'Tutorials', 'Blog']}
      />
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <div className="relative w-full h-48 mb-8">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80" 
                alt="Blog Header" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h1 className="text-4xl font-bold text-white mb-2">Blog</h1>
                <p className="text-xl text-gray-300">Explore our collection of web development and React tutorials</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mb-8">
              <a href="/blog/web-development" className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors">
                Web Development
              </a>
              <a href="/blog/react" className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors">
                React
              </a>
              <a href="/blog/javascript" className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors">
                JavaScript
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="relative h-48">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                    {post.tags && (
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag, index) => (
                          <span key={index} className="inline-flex items-center px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-xs font-medium">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    <a href={`/blog/${post.slug}`} className="hover:text-blue-600 dark:hover:text-blue-400">
                      {post.title}
                    </a>
                    </h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                    <time dateTime={post.date}>{post.date}</time>
                    <span>{post.readingTime}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

            <div className="flex justify-center mt-12">
            <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              Load More
                </button>
            </div>
        </div>
      </div>
    </>
  );
};

export default BlogList;
