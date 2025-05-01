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
