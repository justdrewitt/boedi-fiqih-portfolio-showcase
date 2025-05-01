import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getEntries } from '@/lib/contentful';
import Layout from '@/components/Layout';
import Seo from '@/components/Seo';
import { Entry, EntrySkeletonType } from 'contentful';

interface BlogEntry {
  sys: {
    id: string;
  };
  fields: {
    title: string;
    slug: string;
    image?: {
      fields: {
        file: {
          url: string;
        };
      };
    };
    publishDate?: string;
    readingTime?: number;
    tags?: string | string[];
    seoDescription?: string;
  };
}

const BlogIndex: React.FC = () => {
  const [blogPosts, setBlogPosts] = useState<BlogEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [featuredPost, setFeaturedPost] = useState<BlogEntry | null>(null);
  const location = useLocation();

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        console.log('Fetching blog posts from Contentful...');
        const entries = await getEntries('blogPage');
        console.log('Fetched entries:', entries);
        
        // Konversi entries ke format BlogEntry
        const formattedEntries = entries.map((entry: Entry<EntrySkeletonType>) => {
          return {
            sys: {
              id: entry.sys.id
            },
            fields: {
              title: entry.fields.title as string,
              slug: entry.fields.slug as string,
              image: entry.fields.image as BlogEntry['fields']['image'],
              publishDate: entry.fields.publishDate as string,
              readingTime: entry.fields.readingTime as number,
              tags: entry.fields.tags as string | string[],
              seoDescription: entry.fields.seoDescription as string
            }
          };
        });
        
        // Set featured post (post pertama)
        if (formattedEntries.length > 0) {
          setFeaturedPost(formattedEntries[0]);
        }
        
        setBlogPosts(formattedEntries);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPosts();
  }, []);

  // Format date untuk tampilan
  const formatDate = (dateString?: string) => {
    if (!dateString) return '';
    
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  // Pastikan tags selalu array
  const getTags = (tags?: string | string[]) => {
    if (!tags) return [];
    return Array.isArray(tags) ? tags : [tags];
  };

  // Fungsi untuk mendapatkan warna acak untuk tag
  const getTagColor = (tag: string) => {
    const colors = [
      'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
      'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
      'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300',
      'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
      'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300',
      'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300',
    ];
    
    // Gunakan hash sederhana dari string untuk memilih warna
    const hash = tag.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return colors[hash % colors.length];
  };

  return (
    <Layout location={location}>
      <Seo
        title="Blog | Boedi Fiqih"
        description="Explore articles and tutorials on web development, programming, and technology."
        keywords={['Blog', 'Web Development', 'Programming', 'Technology']}
        url="/blog"
      />
      
      {/* Hero Section dengan Gradient Background */}
      <div className="relative bg-gradient-to-r from-blue-600 to-indigo-800 dark:from-blue-900 dark:to-indigo-950">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:20px_20px]"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-extrabold text-white mb-4 tracking-tight">
              Blog & Insights
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Discover the latest articles, tutorials, and insights on web development, 
              programming, and technology.
            </p>
            <div className="flex justify-center space-x-4">
              <Link 
                to="#latest-posts" 
                className="px-6 py-3 bg-white text-blue-700 rounded-full font-medium hover:bg-blue-50 transition-colors"
              >
                Latest Posts
              </Link>
              <a 
                href="#subscribe" 
                className="px-6 py-3 bg-blue-700 text-white rounded-full font-medium hover:bg-blue-800 transition-colors border border-blue-500"
              >
                Subscribe
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white dark:from-gray-900 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 py-16">
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-700"></div>
          </div>
        ) : blogPosts.length === 0 ? (
          <div className="text-center py-12 bg-gray-50 dark:bg-gray-800 rounded-xl">
            <svg className="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
            </svg>
            <p className="text-lg font-medium text-gray-600 dark:text-gray-300">No blog posts found.</p>
            <p className="text-gray-500 dark:text-gray-400 mt-2">Check back later for new content.</p>
          </div>
        ) : (
          <>
            {/* Featured Post */}
            {featuredPost && (
              <div className="mb-16">
                <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
                  <span className="inline-block bg-blue-600 h-6 w-1.5 mr-3 rounded-full align-middle"></span>
                  Featured Post
                </h2>
                <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl transition-all hover:shadow-2xl">
                  <div className="md:flex">
                    <div className="md:w-1/2">
                      <Link to={`/blog/${featuredPost.fields.slug}`}>
                        <div className="relative h-80 md:h-full">
                          <img 
                            src={featuredPost.fields.image?.fields?.file?.url || 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80'} 
                            alt={featuredPost.fields.title} 
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:hidden"></div>
                        </div>
                      </Link>
                    </div>
                    <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                        <time dateTime={featuredPost.fields.publishDate}>
                          {formatDate(featuredPost.fields.publishDate)}
                        </time>
                        <span className="mx-2">•</span>
                        <span>{featuredPost.fields.readingTime || 5} min read</span>
                      </div>
                      
                      <Link to={`/blog/${featuredPost.fields.slug}`}>
                        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                          {featuredPost.fields.title}
                        </h3>
                      </Link>
                      
                      <p className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-3">
                        {featuredPost.fields.seoDescription || `Read more about ${featuredPost.fields.title}`}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {getTags(featuredPost.fields.tags).map((tag, index) => (
                          <span
                            key={index}
                            className={`px-3 py-1 rounded-full text-sm font-medium ${getTagColor(tag)}`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <Link 
                        to={`/blog/${featuredPost.fields.slug}`} 
                        className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:underline"
                      >
                        Read article
                        <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {/* Latest Posts */}
            <div id="latest-posts">
              <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
                <span className="inline-block bg-blue-600 h-6 w-1.5 mr-3 rounded-full align-middle"></span>
                Latest Posts
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.filter(post => post !== featuredPost).map((post) => {
                  const { fields } = post;
                  const imageUrl = fields.image?.fields?.file?.url || 
                    'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80';
                  const tags = getTags(fields.tags);
                  
                  return (
                    <article key={post.sys.id} className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-all hover:shadow-xl hover:translate-y-[-4px]">
                      <Link to={`/blog/${fields.slug}`} className="block">
                        <div className="relative h-48 overflow-hidden">
                          <img 
                            src={imageUrl} 
                            alt={fields.title} 
                            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                          {tags.length > 0 && (
                            <span className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium ${getTagColor(tags[0])}`}>
                              {tags[0]}
                            </span>
                          )}
                        </div>
                      </Link>
                      
                      <div className="p-6">
                        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                          <time dateTime={fields.publishDate}>
                            {formatDate(fields.publishDate)}
                          </time>
                          <span className="mx-2">•</span>
                          <span>{fields.readingTime || 5} min read</span>
                        </div>
                        
                        <Link to={`/blog/${fields.slug}`}>
                          <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors line-clamp-2">
                            {fields.title}
                          </h3>
                        </Link>
                        
                        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                          {fields.seoDescription || `Read more about ${fields.title}`}
                        </p>
                        
                        <Link 
                          to={`/blog/${fields.slug}`} 
                          className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:underline"
                        >
                          Read more
                          <svg className="ml-1 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </Link>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
            
            {/* Newsletter Subscription */}
            <div id="subscribe" className="mt-20 bg-gradient-to-r from-blue-600 to-indigo-700 dark:from-blue-800 dark:to-indigo-900 rounded-2xl p-8 md:p-12">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
                <p className="text-blue-100 mb-8">
                  Subscribe to our newsletter to receive the latest articles, tutorials, and insights directly in your inbox.
                </p>
                <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-grow px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 bg-white text-blue-700 rounded-lg font-medium hover:bg-blue-50 transition-colors"
                  >
                    Subscribe
                  </button>
                </form>
                <p className="text-blue-200 text-sm mt-4">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </div>
            </div>
          </>
        )}
      </div>
    </Layout>
  );
};

export default BlogIndex;
