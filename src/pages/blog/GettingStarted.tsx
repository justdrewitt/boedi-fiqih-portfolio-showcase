import React from 'react';
import Layout from '@/components/Layout';
import { useLocation } from 'react-router-dom';
import Seo from '@/components/Seo';

const GettingStarted: React.FC = () => {
  const location = useLocation();
  const baseUrl = 'http://localhost:8080';

  return (
    <Layout location={location}>
      <Seo
        title="Getting Started with Web Development - A Comprehensive Guide"
        description="Learn how to start your web development journey with this comprehensive guide. Covers HTML, CSS, JavaScript, and modern web development practices."
        url={`${baseUrl}/blog/getting-started`}
        keywords={['Web Development', 'HTML', 'CSS', 'JavaScript', 'Frontend', 'Programming', 'Beginner Guide']}
      />
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <article className="prose prose-lg prose-slate dark:prose-invert">
            <header className="mb-12">
              <div className="relative overflow-hidden rounded-lg mb-8">
                <img 
                  src="https://plus.unsplash.com/premium_photo-1685086785423-435c02d5c321" 
                  alt="Web Development" 
                  className="w-full h-64 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent h-1/3"></div>
              </div>
              <h1 className="text-4xl font-bold mb-4">Getting Started with Web Development</h1>
              <div className="flex items-center text-gray-600 dark:text-gray-400 mb-4">
                <time dateTime="2025-04-28" className="mr-4">April 28, 2025</time>
                <span className="text-sm">12 min read</span>
              </div>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                  Web Development
                </span>
                <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                  HTML
                </span>
                <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                  CSS
                </span>
                <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                  JavaScript
                </span>
              </div>
            </header>

            <section className="mb-12">
              <p className="text-xl text-gray-700 dark:text-gray-300">
                Welcome to your journey in web development! This comprehensive guide will help you get started with building modern web applications.
              </p>

          <h2>Prerequisites</h2>
          <ul className="list-disc pl-6">
            <li>Basic understanding of HTML</li>
            <li>Basic understanding of CSS</li>
            <li>A code editor (like VS Code)</li>
            <li>A modern web browser</li>
          </ul>

          <h2>Getting Started</h2>
          <p>
            The first step in web development is to understand the basic structure of a web page. HTML (HyperText Markup Language) is the foundation of all web pages.
          </p>

          <h3>HTML Structure</h3>
          <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
            <code className="language-html">
              {`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My First Web Page</title>
</head>
<body>
    <h1>Welcome to My Website</h1>
    <p>This is my first web page!</p>
</body>
</html>`}
            </code>
          </pre>

          <h2>Next Steps</h2>
          <ol className="list-decimal pl-6">
            <li>Learn CSS for styling</li>
            <li>Explore JavaScript for interactivity</li>
            <li>Learn about responsive design</li>
            <li>Start building your own projects</li>
          </ol>

          <h2>Resources</h2>
          <ul className="list-disc pl-6">
            <li><a href="https://developer.mozilla.org" className="text-blue-500 hover:text-blue-700">MDN Web Docs</a></li>
            <li><a href="https://w3schools.com" className="text-blue-500 hover:text-blue-700">W3Schools</a></li>
            <li><a href="https://freecodecamp.org" className="text-blue-500 hover:text-blue-700">FreeCodeCamp</a></li>
          </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Comments</h2>
              <div className="space-y-6">
                <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="flex items-start gap-4">
                    <img 
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80" 
                      alt="John Doe" 
                      className="w-12 h-12 rounded-full"
                    />
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-semibold">Emma Johnson</h3>
                        <span className="text-sm text-gray-500">1 day ago</span>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300">
                        This is exactly what I needed! The HTML and CSS sections are really well explained. I'm excited to start building my first website.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="flex items-start gap-4">
                    <img 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80" 
                      alt="Sarah Smith" 
                      className="w-12 h-12 rounded-full"
                    />
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-semibold">David Brown</h3>
                        <span className="text-sm text-gray-500">2 days ago</span>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300">
                        The JavaScript section is amazing! I was intimidated by JavaScript before, but now it seems much more approachable.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="flex items-start gap-4">
                    <img 
                      src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80" 
                      alt="Mike Johnson" 
                      className="w-12 h-12 rounded-full"
                    />
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-semibold">Lily Chen</h3>
                        <span className="text-sm text-gray-500">3 days ago</span>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300">
                        The resources section is gold! I've already started working through some of the tutorials and they're really helpful.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <form className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                      />
                    </div>

                    <div>
                      <label htmlFor="comment" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Comment
                      </label>
                      <textarea
                        id="comment"
                        rows={4}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                      />
                    </div>

                    <button
                      type="submit"
                      className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      Post Comment
                    </button>
                  </form>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Related Posts</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <article className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <img 
                    src="https://images.unsplash.com/photo-1670057037226-b3d65909424f" 
                    alt="React Basics for Beginners" 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <a href="/blog/react-basics" className="block">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400">
                        React Basics for Beginners
                      </h3>
                      <p className="mt-2 text-gray-600 dark:text-gray-400">
                        Learn the fundamentals of React and start building modern web applications...
                      </p>
                    </a>
                  </div>
                </article>

                <article className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <img 
                    src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80" 
                    alt="Advanced Web Development" 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <a href="/blog/advanced-web-dev" className="block">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400">
                        Advanced Web Development Techniques
                      </h3>
                      <p className="mt-2 text-gray-600 dark:text-gray-400">
                        Explore advanced web development concepts and best practices...
                      </p>
                    </a>
                  </div>
                </article>

                <article className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <img 
                    src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80" 
                    alt="Web Performance Optimization" 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <a href="/blog/web-performance" className="block">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400">
                        Web Performance Optimization
                      </h3>
                      <p className="mt-2 text-gray-600 dark:text-gray-400">
                        Learn how to optimize your web applications for better performance...
                      </p>
                    </a>
                  </div>
                </article>
              </div>
            </section>
          </article>
        </div>
      </div>
    </Layout>
  );
};

export default GettingStarted;
