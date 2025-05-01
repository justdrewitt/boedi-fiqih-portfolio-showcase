import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getEntries } from '@/lib/contentful';
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
    tags?: string | string[];
  };
}

interface RelatedPostsProps {
  currentPostId: string;
  currentPostTags?: string[];
}

const RelatedPosts: React.FC<RelatedPostsProps> = ({ currentPostId, currentPostTags = [] }) => {
  const [relatedPosts, setRelatedPosts] = useState<BlogEntry[]>([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchRelatedPosts = async () => {
      try {
        // Fetch all blog posts
        const entries = await getEntries('blogPage');
        
        // Format entries to match BlogEntry type
        const formattedEntries = entries.map((entry: Entry<EntrySkeletonType>) => {
          return {
            sys: {
              id: entry.sys.id
            },
            fields: {
              title: entry.fields.title as string,
              slug: entry.fields.slug as string,
              image: entry.fields.image as BlogEntry['fields']['image'],
              tags: entry.fields.tags as string | string[]
            }
          };
        });
        
        // Filter out current post
        const otherPosts = formattedEntries.filter(post => post.sys.id !== currentPostId);
        
        // Find related posts based on tags
        let related: BlogEntry[] = [];
        
        if (currentPostTags.length > 0) {
          // Sort posts by number of matching tags
          related = otherPosts.filter(post => {
            const postTags = Array.isArray(post.fields.tags) 
              ? post.fields.tags 
              : post.fields.tags 
                ? [post.fields.tags] 
                : [];
            
            return postTags.some(tag => currentPostTags.includes(tag));
          });
        }
        
        // If we don't have enough related posts, add random posts
        if (related.length < 3) {
          const randomPosts = otherPosts
            .filter(post => !related.includes(post))
            .sort(() => 0.5 - Math.random())
            .slice(0, 3 - related.length);
          
          related = [...related, ...randomPosts];
        }
        
        // Limit to 3 posts
        setRelatedPosts(related.slice(0, 3));
      } catch (error) {
        console.error('Error fetching related posts:', error);
      } finally {
        setLoading(false);
      }
    };
    
    if (currentPostId) {
      fetchRelatedPosts();
    }
  }, [currentPostId, currentPostTags]);
  
  if (loading) {
    return (
      <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800">
        <h2 className="text-2xl font-bold mb-6">Related Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map(i => (
            <div key={i} className="bg-gray-100 dark:bg-gray-800 rounded-xl animate-pulse h-64"></div>
          ))}
        </div>
      </div>
    );
  }
  
  if (relatedPosts.length === 0) {
    return null;
  }
  
  return (
    <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800">
      <h2 className="text-2xl font-bold mb-6">Related Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {relatedPosts.map(post => {
          const imageUrl = post.fields.image?.fields?.file?.url || 
            'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80';
          
          return (
            <Link 
              key={post.sys.id} 
              to={`/blog/${post.fields.slug}`}
              className="group block bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all"
            >
              <div className="relative h-40 overflow-hidden">
                <img 
                  src={imageUrl} 
                  alt={post.fields.title} 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {post.fields.title}
                </h3>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default RelatedPosts;
