import React from 'react';
import { getEntries } from '@/lib/contentful';
import { ContentfulRichText } from '@/components/ContentfulRichText';
import { BLOCKS, Document } from '@contentful/rich-text-types';

export const TestContentful: React.FC = () => {
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

  const testConnection = async () => {
    try {
      console.log('Attempting to connect to Contentful...');
      console.log('Space ID:', import.meta.env.VITE_CONTENTFUL_SPACE_ID);
      console.log('Access Token:', import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN?.substring(0, 10) + '...'); // Only show first 10 chars for security
      
      const entries = await getEntries('blogPage'); // Using the correct content type name
      console.log('Contentful entries:', entries);
      
      // Display detailed information about the first entry
      if (entries.length > 0) {
        const firstEntry = entries[0];
        console.log('First blog entry details:', {
          title: firstEntry.fields.title,
          slug: firstEntry.fields.slug,
          content: firstEntry.fields.content,
          publishedDate: firstEntry.fields.publishedDate,
          tags: firstEntry.fields.tags
        });
      }
      
      alert('Contentful connection successful!\n\nEntries found: ' + entries.length);
    } catch (error) {
      console.error('Contentful connection error:', error);
      let errorMessage = 'Error connecting to Contentful:\n\n';
      if (error instanceof Error) {
        errorMessage += error.message;
      } else {
        errorMessage += 'Unknown error occurred';
      }
      alert(errorMessage);
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Contentful Test Page</h1>
      <button
        onClick={testConnection}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Test Contentful Connection
      </button>
      
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Test Content:</h2>
        <ContentfulRichText content={testContent} />
      </div>
    </div>
  );
};
