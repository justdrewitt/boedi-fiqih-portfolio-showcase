import React, { useEffect, useState } from 'react';
import { getEntries } from '@/lib/contentful';
import { ContentfulRichText } from '@/components/ContentfulRichText';
import { BLOCKS, Document } from '@contentful/rich-text-types';

// Define proper types for Contentful entries
interface ContentfulField {
  stringValue?: string;
  numberValue?: number;
  booleanValue?: boolean;
  arrayValue?: Array<string | number | boolean | ContentfulField>;
  objectValue?: Record<string, unknown>;
  dateValue?: string;
  documentValue?: Document;
  linkValue?: {
    sys: {
      id: string;
      type: string;
      linkType: string;
    }
  };
}

interface ContentfulEntry {
  sys: {
    id: string;
    createdAt?: string;
    updatedAt?: string;
    contentType?: {
      sys: {
        id: string;
      }
    }
  };
  fields: {
    title?: string;
    slug?: string;
    publishDate?: string;
    readingTime?: number;
    tags?: string | string[];
    body?: Document;
    content?: Document;
    image?: {
      fields: {
        file: {
          url: string;
          details?: {
            size?: number;
            image?: {
              width: number;
              height: number;
            }
          };
          fileName?: string;
          contentType?: string;
        };
        title?: string;
        description?: string;
      }
    };
    seoTitle?: string;
    seoDescription?: string;
    seoKeywords?: string | string[];
    [key: string]: unknown;
  };
}

export const TestContentful: React.FC = () => {
  const [entries, setEntries] = useState<ContentfulEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const testContent: Document = {
    nodeType: BLOCKS.DOCUMENT,
    content: [
      {
        nodeType: BLOCKS.PARAGRAPH,
        content: [
          {
            nodeType: 'text',
            value: 'Testing Contentful connection... If you can see this, the connection is working!',
            marks: [],
            data: {},
          },
        ],
        data: {},
      },
    ],
    data: {},
  };

  useEffect(() => {
    const fetchEntries = async () => {
      try {
        console.log('Attempting to connect to Contentful...');
        console.log('Space ID:', import.meta.env.VITE_CONTENTFUL_SPACE_ID);
        console.log('Access Token:', import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN?.substring(0, 10) + '...'); // Only show first 10 chars for security
        
        const fetchedEntries = await getEntries('blogPage'); // Using the correct content type name
        console.log('Contentful entries:', fetchedEntries);
        
        setEntries(fetchedEntries);
        
        // Display detailed information about the first entry
        if (fetchedEntries.length > 0) {
          const firstEntry = fetchedEntries[0];
          console.log('First blog entry details:', {
            title: firstEntry.fields?.title,
            slug: firstEntry.fields?.slug,
            content: firstEntry.fields?.content ? 'Content exists' : 'No content',
            contentType: firstEntry.fields?.content && typeof firstEntry.fields.content === 'object' ? 
                      (firstEntry.fields.content as Document).nodeType : 'Not a document',
            publishedDate: firstEntry.fields?.publishDate,
            tags: firstEntry.fields?.tags
          });
        }
      } catch (error) {
        console.error('Contentful connection error:', error);
        let errorMessage = 'Error connecting to Contentful:\n\n';
        if (error instanceof Error) {
          errorMessage += error.message;
          console.error('Error details:', {
            message: error.message,
            stack: error.stack
          });
        } else {
          errorMessage += String(error);
        }
        setError(errorMessage);
      } finally {
        setLoading(false);
      }
    };

    fetchEntries();
  }, []);

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Contentful Connection Test</h1>
      
      <div className="mb-8 p-4 bg-blue-100 dark:bg-blue-900 rounded-lg">
        <h2 className="text-xl font-bold mb-4">Test Rich Text Rendering:</h2>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
          <ContentfulRichText content={testContent} />
        </div>
      </div>
      
      {loading ? (
        <div className="text-center p-8">
          <p className="text-xl">Loading entries from Contentful...</p>
        </div>
      ) : error ? (
        <div className="bg-red-100 dark:bg-red-900 p-4 rounded-lg mb-8">
          <h2 className="text-xl font-bold mb-2">Error:</h2>
          <pre className="whitespace-pre-wrap">{error}</pre>
        </div>
      ) : (
        <div>
          <h2 className="text-2xl font-bold mb-4">Contentful Entries ({entries.length}):</h2>
          
          {entries.length === 0 ? (
            <p className="bg-yellow-100 dark:bg-yellow-900 p-4 rounded-lg">
              No entries found. Make sure you have created and published entries in Contentful.
            </p>
          ) : (
            <div className="grid gap-6 md:grid-cols-2">
              {entries.map((entry) => (
                <div key={entry.sys.id} className="border dark:border-gray-700 rounded-lg p-4">
                  <h3 className="text-xl font-bold mb-2">{entry.fields?.title || 'No Title'}</h3>
                  <p className="mb-2"><strong>Slug:</strong> {entry.fields?.slug || 'No Slug'}</p>
                  <p className="mb-2"><strong>Has Content:</strong> {entry.fields?.content ? 'Yes' : 'No'}</p>
                  {entry.fields?.content && (
                    <div className="mt-4 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
                      <h4 className="font-bold mb-2">Content Preview:</h4>
                      <ContentfulRichText content={entry.fields.content} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      )}
      
      <div className="mt-8 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
        <h2 className="text-xl font-bold mb-4">Environment Variables:</h2>
        <p><strong>Space ID:</strong> {import.meta.env.VITE_CONTENTFUL_SPACE_ID || 'Not set'}</p>
        <p><strong>Access Token:</strong> {import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN ? 'Set (hidden for security)' : 'Not set'}</p>
      </div>
    </div>
  );
};
