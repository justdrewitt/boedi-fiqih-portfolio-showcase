import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SeoProps {
  title: string;
  description: string;
  image?: string;
  url: string;
  keywords?: string[];
}

const Seo: React.FC<SeoProps> = ({
  title,
  description,
  image = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80',
  url,
  keywords = ['React', 'JavaScript', 'Frontend', 'Web Development', 'Programming']
}) => {
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="article" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      
      {/* Article Meta Tags */}
      <meta property="article:published_time" content="2025-04-28T00:00:00+07:00" />
      <meta property="article:modified_time" content="2025-04-28T00:00:00+07:00" />
      <meta property="article:author" content="Boedi Fiqih" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: title,
          description: description,
          image: image,
          author: {
            '@type': 'Person',
            name: 'Boedi Fiqih'
          },
          publisher: {
            '@type': 'Organization',
            name: 'Boedi Fiqih',
            logo: {
              '@type': 'ImageObject',
              url: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80'
            }
          },
          datePublished: '2025-04-28T00:00:00+07:00',
          dateModified: '2025-04-28T00:00:00+07:00'
        })}
      </script>
    </Helmet>
  );
};

export default Seo;
