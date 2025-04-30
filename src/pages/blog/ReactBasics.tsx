import React from 'react';
import Layout from '@/components/Layout';
import { useLocation } from 'react-router-dom';
import Seo from '@/components/Seo';

const ReactBasics: React.FC = () => {
  const location = useLocation();
  const baseUrl = 'http://localhost:8080';

  return (
    <Layout location={location}>
      <Seo
        title="React Basics for Beginners - A Comprehensive Guide"
        description="Learn the fundamentals of React and start building modern web applications. This comprehensive guide covers components, props, state management, and best practices."
        url={`${baseUrl}/blog/react-basics`}
        keywords={['React', 'JavaScript', 'Frontend', 'Web Development', 'Programming', 'React Basics', 'React Tutorial']}
      />
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <article className="prose prose-lg prose-slate dark:prose-invert">
            <header className="mb-12">
              <div className="relative overflow-hidden rounded-lg mb-8">
                <img 
                  src="https://images.unsplash.com/photo-1670057037226-b3d65909424f" 
                  alt="React Development" 
                  className="w-full h-64 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent h-1/3"></div>
              </div>
              <h1 className="text-4xl font-bold mb-4">React Basics for Beginners</h1>
              <div className="flex items-center text-gray-600 dark:text-gray-400 mb-4">
                <time dateTime="2025-04-28" className="mr-4">April 28, 2025</time>
                <span className="text-sm">10 min read</span>
              </div>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                  React
                </span>
                <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                  JavaScript
                </span>
                <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                  Frontend
                </span>
              </div>
            </header>

            <section className="mb-12">
              <p className="text-xl text-gray-700 dark:text-gray-300">
                React is a powerful JavaScript library for building user interfaces. This comprehensive guide will help you understand the fundamentals of React and start building modern web applications.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">What is React?</h2>
              <p className="mb-6">
                React is a JavaScript library for building user interfaces. It was developed by Facebook and is now maintained by Facebook and the community. React allows developers to create large web applications that can change data without reloading the page.
              </p>
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg mb-6">
                <p className="text-gray-600 dark:text-gray-400">
                  "React makes it painless to create interactive UIs. Design simple views for each state in your application." - React Documentation
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Key Concepts</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Components</h3>
                  <p className="mb-4">
                    React applications are built with components. Components are reusable pieces of code that represent parts of your UI. They can be nested inside each other to create complex UIs.
                  </p>
                  <pre className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg overflow-x-auto mb-4">
                    <code className="language-jsx">
                      {`function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}`}
                    </code>
                  </pre>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-4">Props</h3>
                  <p className="mb-4">
                    Props (short for properties) are how components receive data from their parent components. They are read-only and help maintain a unidirectional data flow.
                  </p>
                  <pre className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg overflow-x-auto mb-4">
                    <code className="language-jsx">
                      {`<Welcome name="John" />`}
                    </code>
                  </pre>
                </div>
              </div>

              <div className="mb-12">
                <h3 className="text-2xl font-semibold mb-4">State</h3>
                <p className="mb-4">
                  State is data that can change over time. In React, state is managed using the useState hook. It allows components to maintain their own data and update the UI when that data changes.
                </p>
                <pre className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg overflow-x-auto mb-4">
                  <code className="language-jsx">
                    {`function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}`}
                  </code>
                </pre>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-6">Best Practices</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-2xl font-semibold mb-4">Component Structure</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Keep components small and focused</li>
                      <li>Use descriptive component names</li>
                      <li>Prefer functional components over class components</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-4">State Management</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Use React hooks for state management</li>
                      <li>Lift state up when multiple components need it</li>
                      <li>Use context for global state when needed</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-6">Resources</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-2xl font-semibold mb-4">Official Resources</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>
                        <a href="https://react.dev" className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-500">
                          React Documentation
                        </a>
                      </li>
                      <li>
                        <a href="https://react.dev/learn" className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-500">
                          React Learning Resources
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-4">Community Resources</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>
                        <a href="https://react.dev/tutorials" className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-500">
                          React Tutorials
                        </a>
                      </li>
                      <li>
                        <a href="https://stackoverflow.com/questions/tagged/reactjs" className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-500">
                          Stack Overflow
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h2 className="text-3xl font-bold mb-6">Next Steps</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                    <h3 className="text-xl font-semibold mb-4">Learn More</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Dive deeper into React concepts and advanced features.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                    <h3 className="text-xl font-semibold mb-4">Build Projects</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Start building your own React applications.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                    <h3 className="text-xl font-semibold mb-4">Join Community</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Connect with other React developers.
                    </p>
                  </div>
                </div>
              </div>
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
                        <h3 className="font-semibold">John Doe</h3>
                        <span className="text-sm text-gray-500">2 days ago</span>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300">
                        Great article! The explanation about components and props is really clear. I've been struggling with React for a while, and this helped me understand it much better.
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
                        <h3 className="font-semibold">Sarah Smith</h3>
                        <span className="text-sm text-gray-500">3 days ago</span>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300">
                        The state management section is really helpful. I was confused about hooks before, but now it makes much more sense.
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
                        <h3 className="font-semibold">Mike Johnson</h3>
                        <span className="text-sm text-gray-500">5 days ago</span>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300">
                        This is exactly what I needed! The resources section is amazing - I'll definitely check out those tutorials.
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
                    src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80" 
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
                    src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80" 
                    alt="Advanced React Patterns" 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <a href="/blog/advanced-react" className="block">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400">
                        Advanced React Patterns
                      </h3>
                      <p className="mt-2 text-gray-600 dark:text-gray-400">
                        Learn advanced React patterns and best practices for building scalable applications...
                      </p>
                    </a>
                  </div>
                </article>

                <article className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <img 
                    src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80" 
                    alt="React Performance Optimization" 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <a href="/blog/react-performance" className="block">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400">
                        React Performance Optimization
                      </h3>
                      <p className="mt-2 text-gray-600 dark:text-gray-400">
                        Tips and techniques for optimizing React application performance...
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

export default ReactBasics;
