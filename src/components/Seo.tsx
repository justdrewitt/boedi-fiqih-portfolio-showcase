import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SeoProps {
  title: string;
  description: string;
  image?: string;
  url: string;
  keywords?: string[];
  type?: 'website' | 'article' | 'profile';
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
}

const Seo: React.FC<SeoProps> = ({
  title,
  description,
  image = 'https://bmmf.site/assets/images/fotome.webp',
  url,
  type = 'website',
  author = 'Boedi Fiqih',
  publishedTime = '2025-04-28T00:00:00+07:00',
  modifiedTime = '2025-04-28T00:00:00+07:00',
  keywords = [
    'web developer',
    'full stack web developer',
    'full stack developer',
    'seo developer',
    'stack web developer',
    'site developer',
    'seo web developer',
    'stack developer',
    'developer website',
    'website developer',
    'it web developer',
    'full developer',
    'website specialist',
    'web developer site',
    'full stack developer website',
    'full stack web developer courses',
    'web developer and seo',
    'web stack',
    'full stack developer what is it',
    'about web developer',
    'web specialist',
    'web site designer',
    'developer for website',
    'apa itu web developer',
    'it full stack developer',
    'full stack developer courses',
    'about full stack developer',
    'full stack seo',
    'website coders',
    'stack full',
    'jasa buat website',
    'jasa pembuatan website',
    'buat website murah',
    'jasa pembuatan website company profile',
    'pembuatan website murah',
    'jasa buat website murah',
    'jasa buat website perusahaan',
    'harga buat website',
    'jasa pembuatan website ecommerce',
    'jasa pembuatan website online shop',
    'jasa buat website toko online',
    'buat website perusahaan',
    'jasa buat website wordpress',
    'pembuatan website profesional',
    'jasa bikin website toko online',
    'jasa pembuatan website slot online',
    'pembuatan website company profile',
    'jasa pembuatan website shopify',
    'harga jasa buat website',
    'jasa buat website company profile',
    'seo',
    'seo google',
    'jasa seo',
    'seo google ads',
    'seo web',
    'marketing seo',
    'jasa seo google',
    'pagerank',
    'jasa seo website',
    'jasa backlink',
    'jasa ads',
    'jasa iklan facebook',
    'jasa tiktok ads',
    'jasa iklan instagram',
    'jasa facebook ads',
    'jasa iklan tiktok',
    'jasa fb ads',
    'jasa iklan fb ads',
    'jasa instagram ads',
    'jasa iklan tiktok ads',
    'React',
    'JavaScript',
    'Frontend',
    'Web Development',
    'Programming'
  ]
}) => {
  // Format the title to include the site name for better SEO
  const formattedTitle = `${title} | Boedi Fiqih`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{formattedTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={formattedTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={formattedTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      
      {/* Article Meta Tags */}
      {type === 'article' && (
        <>
          <meta property="article:published_time" content={publishedTime} />
          <meta property="article:modified_time" content={modifiedTime} />
          <meta property="article:author" content={author} />
        </>
      )}
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': type === 'article' ? 'Article' : type === 'profile' ? 'ProfilePage' : 'WebPage',
          headline: formattedTitle,
          description: description,
          image: image,
          author: {
            '@type': 'Person',
            name: author
          },
          publisher: {
            '@type': 'Organization',
            name: 'Boedi Fiqih',
            logo: {
              '@type': 'ImageObject',
              url: 'https://bmmf.site/assets/images/fotome.webp'
            }
          },
          ...(type === 'article' && {
            datePublished: publishedTime,
            dateModified: modifiedTime
          })
        })}
      </script>
    </Helmet>
  );
};

export default Seo;
