import React from 'react';
import { ContentfulRichText } from './ContentfulRichText';
import { Document } from '@contentful/rich-text-types';

interface BlogPostProps {
  post: {
    fields: {
      title: string;
      slug: string;
      featuredImage: {
        fields: {
          file: {
            url: string;
          };
        };
      };
      publishDate: string;
      readingTime: number;
      tags: string[];
      content: Document;
      seoTitle: string;
      seoDescription: string;
      seoKeywords: string[];
    };
  };
}

export const ContentfulBlogPost: React.FC<BlogPostProps> = ({ post }) => {
  const { fields } = post;
  const date = new Date(fields.publishDate);
  const formattedDate = date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <article className="prose prose-lg prose-slate dark:prose-invert">
      <header className="mb-12">
        <div className="relative overflow-hidden rounded-lg mb-8">
          <img
            src={fields.featuredImage.fields.file.url}
            alt={fields.title}
            className="w-full h-64 object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent h-1/3"></div>
        </div>
        <h1 className="text-4xl font-bold mb-4">{fields.title}</h1>
        <div className="flex items-center text-gray-600 dark:text-gray-400 mb-4">
          <time dateTime={fields.publishDate} className="mr-4">
            {formattedDate}
          </time>
          <span className="text-sm">{fields.readingTime} min read</span>
        </div>
        <div className="flex flex-wrap gap-2 mb-6">
          {fields.tags.map((tag: string) => (
            <span
              key={tag}
              className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </header>

      <ContentfulRichText content={fields.content} />
    </article>
  );
};
