import React from 'react';
import Layout from '@/components/Layout';
import { useLocation } from 'react-router-dom';
import Seo from '@/components/Seo';

const WebPerformance: React.FC = () => {
  const location = useLocation();
  const baseUrl = 'http://localhost:8080';

  return (
    <Layout location={location}>
      <Seo
        title="Web Performance Optimization - Build Faster Web Applications"
        description="Learn how to optimize your web applications for better performance. From loading times to user experience, this guide covers everything you need to know about web performance optimization."
        url={`${baseUrl}/blog/web-performance`}
        keywords={['Web Performance', 'Optimization', 'Lighthouse', 'Speed', 'Loading', 'User Experience']}
      />
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <article className="prose prose-lg prose-slate dark:prose-invert">
            <header className="mb-12">
              <div className="relative overflow-hidden rounded-lg mb-8">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80" 
                  alt="Web Performance Optimization" 
                  className="w-full h-64 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent h-1/3"></div>
              </div>
              <h1 className="text-4xl font-bold mb-4">Web Performance Optimization</h1>
              <div className="flex items-center text-gray-600 dark:text-gray-400 mb-4">
                <time dateTime="2025-04-28" className="mr-4">April 28, 2025</time>
                <span className="text-sm">15 min read</span>
              </div>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                  Web Development
                </span>
                <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                  Performance
                </span>
                <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                  Optimization
                </span>
              </div>
            </header>

            <section className="mb-12">
              <p className="text-xl text-gray-700 dark:text-gray-300">
                In today's digital landscape, web performance is crucial for user experience and business success. This guide covers key optimization techniques to make your websites faster and more efficient.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Core Web Vitals</h2>
              <p className="mb-4">
                Core Web Vitals are a set of specific factors that Google considers important in a webpage's overall user experience:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li><strong>Largest Contentful Paint (LCP)</strong>: Measures loading performance. To provide a good user experience, LCP should occur within 2.5 seconds of when the page first starts loading.</li>
                <li><strong>First Input Delay (FID)</strong>: Measures interactivity. Pages should have a FID of less than 100 milliseconds.</li>
                <li><strong>Cumulative Layout Shift (CLS)</strong>: Measures visual stability. Pages should maintain a CLS of less than 0.1.</li>
              </ul>

              <h3 className="text-2xl font-bold mb-4">Improving LCP</h3>
              <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto">
                <code className="text-sm">
{`// Optimize LCP with image optimization
<img 
  src="image.webp" 
  alt="Description" 
  loading="eager" 
  width="800" 
  height="600" 
  decoding="async"
/>

// Preload critical resources
<link rel="preload" href="critical.css" as="style">
<link rel="preload" href="hero-image.webp" as="image">`}
                </code>
              </pre>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Image Optimization</h2>
              <p className="mb-4">
                Images often account for most of the downloaded bytes on a webpage. Optimizing them can significantly improve performance:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>Use modern formats like WebP and AVIF</li>
                <li>Implement responsive images</li>
                <li>Lazy load non-critical images</li>
                <li>Properly size images</li>
              </ul>

              <h3 className="text-2xl font-bold mb-4">Responsive Images Example</h3>
              <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto">
                <code className="text-sm">
{`<picture>
  <source 
    srcset="image-small.webp 400w, image-large.webp 800w" 
    type="image/webp"
  />
  <source 
    srcset="image-small.jpg 400w, image-large.jpg 800w" 
    type="image/jpeg"
  />
  <img 
    src="image-large.jpg" 
    alt="Description" 
    loading="lazy" 
    width="800" 
    height="600"
  />
</picture>`}
                </code>
              </pre>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">JavaScript Optimization</h2>
              <p className="mb-4">
                JavaScript can significantly impact performance if not optimized properly:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>Implement code splitting</li>
                <li>Remove unused code with tree shaking</li>
                <li>Defer non-critical JavaScript</li>
                <li>Minify and compress your code</li>
              </ul>

              <h3 className="text-2xl font-bold mb-4">Code Splitting Example</h3>
              <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto">
                <code className="text-sm">
{`// React code splitting with lazy loading
import React, { Suspense, lazy } from 'react';

// Instead of regular import
// import Dashboard from './Dashboard';

// Use lazy loading
const Dashboard = lazy(() => import('./Dashboard'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Dashboard />
    </Suspense>
  );
}`}
                </code>
              </pre>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">CSS Optimization</h2>
              <p className="mb-4">
                Optimize your CSS to reduce render-blocking and improve paint times:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>Extract critical CSS</li>
                <li>Defer non-critical CSS</li>
                <li>Minimize unused CSS</li>
                <li>Use CSS containment</li>
              </ul>

              <h3 className="text-2xl font-bold mb-4">Critical CSS Example</h3>
              <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto">
                <code className="text-sm">
{`<!-- Inline critical CSS -->
<style>
  /* Critical styles needed for above-the-fold content */
  body { 
    font-family: system-ui, sans-serif;
    margin: 0;
    padding: 0;
  }
  .hero {
    height: 100vh;
    background-color: #f5f5f5;
  }
</style>

<!-- Load the rest of CSS asynchronously -->
<link 
  rel="preload" 
  href="styles.css" 
  as="style" 
  onload="this.onload=null;this.rel='stylesheet'"
>
<noscript>
  <link rel="stylesheet" href="styles.css">
</noscript>`}
                </code>
              </pre>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Server Optimization</h2>
              <p className="mb-4">
                Server-side optimizations can dramatically improve load times:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>Implement proper caching strategies</li>
                <li>Use CDNs for global distribution</li>
                <li>Enable HTTP/2 or HTTP/3</li>
                <li>Compress resources with Gzip or Brotli</li>
              </ul>

              <h3 className="text-2xl font-bold mb-4">Caching Headers Example</h3>
              <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto">
                <code className="text-sm">
{`// Cache-Control headers for different resource types
// HTML - no caching
Cache-Control: no-cache, no-store, must-revalidate

// CSS, JS with versioning (e.g., style.123.css)
Cache-Control: public, max-age=31536000, immutable

// Images and other static assets
Cache-Control: public, max-age=86400`}
                </code>
              </pre>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Performance Testing Tools</h2>
              <p className="mb-4">
                Use these tools to measure and monitor your website's performance:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>Lighthouse</li>
                <li>WebPageTest</li>
                <li>Chrome DevTools Performance panel</li>
                <li>PageSpeed Insights</li>
                <li>Core Web Vitals report in Google Search Console</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Comments</h2>
              <div className="space-y-6">
                <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="flex items-start gap-4">
                    <img 
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80" 
                      alt="Sarah Johnson" 
                      className="w-12 h-12 rounded-full"
                    />
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-semibold">Sarah Johnson</h3>
                        <span className="text-sm text-gray-500">1 day ago</span>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300">
                        The Core Web Vitals section is really helpful! I've implemented some of these optimizations and seen significant improvements in my website's performance.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="flex items-start gap-4">
                    <img 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80" 
                      alt="Michael Chen" 
                      className="w-12 h-12 rounded-full"
                    />
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-semibold">Michael Chen</h3>
                        <span className="text-sm text-gray-500">2 days ago</span>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300">
                        The JavaScript optimization section is really comprehensive. I've implemented code splitting and seen a significant improvement in my app's load time.
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <article className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <img 
                    src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80" 
                    alt="Getting Started with Web Development" 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <a href="/blog/getting-started" className="block">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400">
                        Getting Started with Web Development
                      </h3>
                      <p className="mt-2 text-gray-600 dark:text-gray-400">
                        Learn the basics of web development and start your journey...
                      </p>
                    </a>
                  </div>
                </article>

                <article className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <img 
                    src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80" 
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
              </div>
            </section>
          </article>
        </div>
      </div>
    </Layout>
  );
};

export default WebPerformance;
