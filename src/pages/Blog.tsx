import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Layout from '@/components/Layout';
import BlogList from '@/components/BlogList';
import Seo from '@/components/Seo';

// Define categories for filtering
const categories = [
  { id: 'all', name: 'All Posts' },
  { id: 'webdev', name: 'Web Development' },
  { id: 'react', name: 'React' },
  { id: 'performance', name: 'Performance' },
  { id: 'beginner', name: 'Beginner Guides' },
];

const Blog: React.FC = () => {
  const location = useLocation();
  const baseUrl = 'http://localhost:8080';
  const [activeCategory, setActiveCategory] = useState('all');

  return (
    <Layout location={location}>
      <Seo
        title="Blog - Web Development and React Tutorials"
        description="Explore our collection of web development and React tutorials. From beginner guides to advanced topics, we have everything you need to become a better developer."
        url={`${baseUrl}/blog`}
        keywords={['Web Development', 'React', 'JavaScript', 'Programming', 'Tutorials', 'Blog']}
      />
      
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-indigo-800 text-white">
        <div className="absolute inset-0 opacity-20 bg-pattern-grid"></div>
        <div className="container mx-auto px-4 py-24 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Insights & Tutorials for Modern Developers
            </h1>
            <p className="text-xl opacity-90 mb-8">
              Dive into our collection of articles covering everything from beginner basics to advanced techniques in web development.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a 
                href="#latest-posts" 
                className="px-6 py-3 bg-white text-blue-700 rounded-full font-medium hover:bg-blue-50 transition-colors"
              >
                Latest Posts
              </a>
              <a 
                href="/contact" 
                className="px-6 py-3 bg-transparent border-2 border-white rounded-full font-medium hover:bg-white/10 transition-colors"
              >
                Suggest a Topic
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white dark:from-gray-900 to-transparent"></div>
      </div>
      
      {/* Featured Post */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="h-64 md:h-full relative">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80" 
                  alt="Web Performance Optimization" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent md:bg-gradient-to-t"></div>
                <div className="absolute top-4 left-4 md:hidden">
                  <span className="inline-block px-3 py-1 bg-blue-600 text-white rounded-full text-sm font-medium">
                    Featured
                  </span>
                </div>
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="hidden md:block mb-4">
                  <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">
                    Featured
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                  Web Performance Optimization
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Learn how to optimize your web applications for better performance. From loading times to user experience, this guide covers everything you need to know about web performance optimization.
                </p>
                <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mb-6">
                  <span className="mr-4">April 28, 2025</span>
                  <span>15 min read</span>
                </div>
                <a 
                  href="/blog/web-performance" 
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:text-blue-800 dark:hover:text-blue-300"
                >
                  Read Article
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Category Filters */}
      <div id="latest-posts" className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">All Articles</h2>
            <div className="overflow-x-auto pb-2 hide-scrollbar">
              <div className="flex space-x-2">
                {categories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                      activeCategory === category.id
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          {/* Blog List */}
          <BlogList location={location} />
        </div>
      </div>
      
      {/* Newsletter Section */}
      <div className="bg-gray-50 dark:bg-gray-800/50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Stay Updated</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Subscribe to our newsletter to receive the latest articles and updates directly in your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
