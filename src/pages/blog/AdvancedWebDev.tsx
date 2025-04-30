import React from 'react';
import Layout from '@/components/Layout';
import { useLocation } from 'react-router-dom';
import Seo from '@/components/Seo';

const AdvancedWebDev: React.FC = () => {
  const location = useLocation();
  const baseUrl = 'http://localhost:8080';

  return (
    <Layout location={location}>
      <Seo
        title="Advanced Web Development Techniques - Master Modern Web Development"
        description="Learn advanced web development techniques including performance optimization, security best practices, and modern web architecture patterns."
        url={`${baseUrl}/blog/advanced-web-dev`}
        keywords={['Web Development', 'Advanced', 'Performance', 'Security', 'Architecture', 'Optimization', 'Best Practices']}
      />
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <article className="prose prose-lg prose-slate dark:prose-invert">
            <header className="mb-12">
              <div className="relative overflow-hidden rounded-lg mb-8">
                <img 
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80" 
                  alt="Advanced Web Development" 
                  className="w-full h-64 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent h-1/3"></div>
              </div>
              <h1 className="text-4xl font-bold mb-4">Advanced Web Development Techniques</h1>
              <div className="flex items-center text-gray-600 dark:text-gray-400 mb-4">
                <time dateTime="2025-04-28" className="mr-4">April 28, 2025</time>
                <span className="text-sm">20 min read</span>
              </div>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                  Web Development
                </span>
                <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                  Performance
                </span>
                <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                  Security
                </span>
                <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                  Architecture
                </span>
              </div>
            </header>

            <section className="mb-12">
              <p className="text-xl text-gray-700 dark:text-gray-300">
                Welcome to the advanced web development guide! This comprehensive guide covers advanced techniques and best practices for building high-performance, secure, and scalable web applications.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Performance Optimization</h2>
              <ul className="list-disc pl-6 mb-6">
                <li>Code Splitting and Lazy Loading</li>
                <li>Image Optimization Techniques</li>
                <li>Service Workers and Caching</li>
                <li>Performance Monitoring Tools</li>
              </ul>

              <h3 className="text-2xl font-bold mb-4">Code Splitting Example</h3>
              <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto">
                <code className="text-sm">
                  {`// React Code Splitting Example
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const Home = React.lazy(() => import('./components/Home'));
const Dashboard = React.lazy(() => import('./components/Dashboard'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Suspense>
    </Router>
  );
}`}
                </code>
              </pre>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Security Best Practices</h2>
              <ul className="list-disc pl-6 mb-6">
                <li>CORS Configuration</li>
                <li>Content Security Policy (CSP)</li>
                <li>Input Validation</li>
                <li>Authentication and Authorization</li>
              </ul>

              <h3 className="text-2xl font-bold mb-4">CSP Example</h3>
              <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto">
                <code className="text-sm">
                  {`// Content Security Policy Example
Content-Security-Policy: 
  default-src 'self';
  script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.example.com;
  style-src 'self' 'unsafe-inline' https://cdn.example.com;
  img-src 'self' data: https:;
  font-src 'self' https: data:;`}
                </code>
              </pre>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Modern Architecture Patterns</h2>
              <ul className="list-disc pl-6 mb-6">
                <li>Micro-Frontends</li>
                <li>Serverless Architecture</li>
                <li>Progressive Web Apps (PWA)</li>
                <li>Headless CMS Integration</li>
              </ul>

              <h3 className="text-2xl font-bold mb-4">Micro-Frontends Example</h3>
              <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto">
                <code className="text-sm">
                  {`// Micro-Frontends Configuration
export const routes = [
  {
    path: '/auth',
    component: AuthApp,
    load: () => import('./apps/auth'),
  },
  {
    path: '/dashboard',
    component: DashboardApp,
    load: () => import('./apps/dashboard'),
  },
  {
    path: '/admin',
    component: AdminApp,
    load: () => import('./apps/admin'),
  },
];`}
                </code>
              </pre>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Resources</h2>
              <ul className="list-disc pl-6 mb-6">
                <li><a href="https://developer.mozilla.org" className="text-blue-500 hover:text-blue-700">MDN Web Docs</a></li>
                <li><a href="https://web.dev" className="text-blue-500 hover:text-blue-700">Web.dev</a></li>
                <li><a href="https://developer.chrome.com/docs/lighthouse" className="text-blue-500 hover:text-blue-700">Lighthouse Documentation</a></li>
                <li><a href="https://owasp.org" className="text-blue-500 hover:text-blue-700">OWASP Security Guidelines</a></li>
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
                        <h3 className="font-semibold">Michael Johnson</h3>
                        <span className="text-sm text-gray-500">1 day ago</span>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300">
                        The performance optimization section is gold! I've already implemented some of these techniques and seen significant improvements.
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
                        <h3 className="font-semibold">Emily Chen</h3>
                        <span className="text-sm text-gray-500">2 days ago</span>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300">
                        The security section is really comprehensive. I've learned a lot about implementing proper security measures in my web applications.
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
                        <h3 className="font-semibold">David Brown</h3>
                        <span className="text-sm text-gray-500">3 days ago</span>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300">
                        The architecture patterns section is really helpful. I'm planning to implement micro-frontends in my next project.
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
                    src="https://plus.unsplash.com/premium_photo-1685086785423-435c02d5c321" 
                    alt="Getting Started with Web Development" 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <a href="/blog/getting-started" className="block">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400">
                        Getting Started with Web Development
                      </h3>
                      <p className="mt-2 text-gray-600 dark:text-gray-400">
                        A comprehensive guide to starting your web development journey...
                      </p>
                    </a>
                  </div>
                </article>

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

export default AdvancedWebDev;
