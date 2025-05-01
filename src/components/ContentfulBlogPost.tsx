import React, { useEffect, useState } from 'react';
import { ContentfulRichText } from './ContentfulRichText';
import { Document } from '@contentful/rich-text-types';
import BlogComments from './BlogComments';
import ReadingProgressBar from './ReadingProgressBar';
import BackToTop from './BackToTop';
import RelatedPosts from './RelatedPosts';

interface BlogPostProps {
  post: {
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
      tags?: string[];
      content?: Document;
      body?: Document;
      seoTitle?: string;
      seoDescription?: string;
      seoKeywords?: string[];
    };
  };
}

export const ContentfulBlogPost: React.FC<BlogPostProps> = ({ post }) => {
  // State untuk melacak apakah kode sudah diformat
  const [codeFormatted, setCodeFormatted] = useState(false);
  // State untuk estimated reading time
  const [estimatedReadTime, setEstimatedReadTime] = useState<number>(0);
  
  // Tambahkan CSS khusus untuk memastikan kode ditampilkan dengan benar
  const codeStyles = `
    .prose {
      max-width: 100%;
      font-size: 1rem;
      padding: 0 1rem;
    }
    
    @media (min-width: 640px) {
      .prose {
        font-size: 1.125rem;
        padding: 0 1.5rem;
      }
    }
    
    @media (min-width: 1024px) {
      .prose {
        max-width: 65ch;
        margin: 0 auto;
        padding: 0;
      }
    }
    
    .prose pre {
      background-color: #1a202c;
      color: #e2e8f0;
      padding: 1rem;
      border-radius: 0.5rem;
      overflow-x: auto;
      font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
      font-size: 0.875rem;
      line-height: 1.7;
      white-space: pre;
      margin: 1.5rem 0;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    }
    
    .prose code {
      background-color: rgba(209, 213, 219, 0.2);
      border-radius: 0.25rem;
      padding: 0.125rem 0.25rem;
      font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
      font-size: 0.875rem;
    }
    
    .prose p {
      white-space: pre-wrap;
      margin-bottom: 1.5rem;
      line-height: 1.8;
    }
    
    /* Styling untuk paragraf yang berisi kode */
    .prose p.code-paragraph {
      background-color: #1a202c;
      color: #e2e8f0;
      padding: 1rem;
      border-radius: 0.5rem;
      overflow-x: auto;
      font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
      font-size: 0.875rem;
      line-height: 1.7;
      white-space: pre;
      margin: 1.5rem 0;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    }
    
    .prose h2 {
      margin-top: 2rem;
      margin-bottom: 1rem;
      font-weight: 700;
      font-size: 1.75rem;
      line-height: 1.3;
      color: #1a202c;
      border-bottom: 1px solid #e2e8f0;
      padding-bottom: 0.5rem;
    }
    
    @media (min-width: 640px) {
      .prose h2 {
        font-size: 2rem;
        margin-top: 2.5rem;
        margin-bottom: 1.25rem;
      }
    }
    
    .dark .prose h2 {
      color: #f7fafc;
      border-bottom-color: #2d3748;
    }
    
    .prose h3 {
      margin-top: 1.75rem;
      margin-bottom: 0.875rem;
      font-weight: 600;
      font-size: 1.375rem;
      line-height: 1.4;
      color: #1a202c;
    }
    
    @media (min-width: 640px) {
      .prose h3 {
        font-size: 1.5rem;
        margin-top: 2rem;
        margin-bottom: 1rem;
      }
    }
    
    .dark .prose h3 {
      color: #f7fafc;
    }
    
    .prose ul, .prose ol {
      margin-top: 1.25rem;
      margin-bottom: 1.25rem;
      padding-left: 1.5rem;
    }
    
    .prose li {
      margin-top: 0.5rem;
      margin-bottom: 0.5rem;
    }
    
    .prose blockquote {
      border-left-width: 4px;
      border-left-color: #4299e1;
      padding-left: 1rem;
      font-style: italic;
      margin: 1.5rem 0;
      color: #4a5568;
    }
    
    .dark .prose blockquote {
      color: #cbd5e0;
    }
    
    .prose img {
      border-radius: 0.5rem;
      margin: 1.5rem auto;
      max-width: 100%;
      height: auto;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    }
    
    @media (min-width: 640px) {
      .prose img {
        margin: 2rem auto;
      }
    }
    
    /* Styling untuk link dalam artikel */
    .prose a {
      color: #3182ce;
      text-decoration: none;
      border-bottom: 1px dotted #3182ce;
      transition: all 0.2s ease;
    }
    
    .prose a:hover {
      color: #2c5282;
      border-bottom-color: #2c5282;
    }
    
    .dark .prose a {
      color: #63b3ed;
      border-bottom-color: #63b3ed;
    }
    
    .dark .prose a:hover {
      color: #90cdf4;
      border-bottom-color: #90cdf4;
    }
    
    /* Table of Contents inline */
    .toc-inline {
      background-color: #f7fafc;
      border-radius: 0.5rem;
      padding: 1.25rem;
      margin: 1.5rem 0;
      border: 1px solid #e2e8f0;
    }
    
    @media (min-width: 640px) {
      .toc-inline {
        padding: 1.5rem;
        margin: 2rem 0;
      }
    }
    
    .dark .toc-inline {
      background-color: #2d3748;
      border-color: #4a5568;
    }
    
    .toc-inline h4 {
      font-size: 1.125rem;
      font-weight: 600;
      margin-bottom: 1rem;
      display: flex;
      align-items: center;
    }
    
    @media (min-width: 640px) {
      .toc-inline h4 {
        font-size: 1.25rem;
      }
    }
    
    .toc-inline ul {
      list-style: none;
      padding-left: 0;
    }
    
    .toc-inline li {
      margin: 0.5rem 0;
    }
    
    .toc-inline a {
      display: block;
      padding: 0.5rem 0.75rem;
      border-radius: 0.375rem;
      transition: all 0.2s ease;
      border-bottom: none;
    }
    
    .toc-inline a:hover {
      background-color: #edf2f7;
      color: #2b6cb0;
    }
    
    .dark .toc-inline a:hover {
      background-color: #4a5568;
      color: #63b3ed;
    }
    
    .toc-inline .toc-h3 {
      padding-left: 1.25rem;
    }
    
    @media (min-width: 640px) {
      .toc-inline .toc-h3 {
        padding-left: 1.5rem;
      }
    }
  `;

  // Tambahkan efek untuk mengubah tampilan kode setelah komponen di-render
  useEffect(() => {
    // Format kode hanya jika belum diformat
    if (!codeFormatted) {
      const codeBlocks = document.querySelectorAll('pre code');
      
      codeBlocks.forEach(codeBlock => {
        // Tambahkan class untuk styling
        codeBlock.parentElement?.classList.add('code-block');
      });
      
      setCodeFormatted(true);
    }
    
    // Hitung estimasi waktu baca
    const calculateReadingTime = () => {
      const article = document.querySelector('article.prose');
      if (!article) return;
      
      const text = article.textContent || '';
      const wordCount = text.split(/\s+/).length;
      // Rata-rata kecepatan membaca: 200 kata per menit
      const readingTime = Math.ceil(wordCount / 200);
      setEstimatedReadTime(readingTime);
    };
    
    calculateReadingTime();
    
    // Buat Table of Contents
    const generateTableOfContents = () => {
      const article = document.querySelector('article.prose');
      const tocList = document.getElementById('toc-list');
      
      if (!article || !tocList) return;
      
      // Cari semua heading h2 dan h3 dalam artikel
      const headings = Array.from(article.querySelectorAll('h2, h3'));
      
      // Buat ID untuk heading yang belum memiliki ID
      headings.forEach((heading, index) => {
        if (!heading.id) {
          const id = `heading-${index}`;
          heading.id = id;
        }
      });
      
      // Kosongkan TOC list
      tocList.innerHTML = '';
      
      // Tambahkan item ke TOC
      headings.forEach(heading => {
        const id = heading.id;
        const text = heading.textContent || '';
        const level = heading.tagName.toLowerCase();
        
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        
        link.href = `#${id}`;
        link.textContent = text;
        link.className = level === 'h3' 
          ? 'block py-2 px-3 pl-6 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700/30 transition-colors'
          : 'block py-2 px-3 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700/30 transition-colors font-medium';
        
        // Scroll smooth ke heading saat link diklik
        link.addEventListener('click', (e) => {
          e.preventDefault();
          const targetElement = document.getElementById(id);
          if (targetElement) {
            window.scrollTo({
              top: targetElement.offsetTop - 100,
              behavior: 'smooth'
            });
          }
        });
        
        listItem.appendChild(link);
        tocList.appendChild(listItem);
      });
      
      // Setup Intersection Observer untuk highlight heading aktif
      const observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              // Temukan link yang sesuai di TOC
              const activeId = entry.target.id;
              const links = tocList.querySelectorAll('a');
              
              links.forEach(link => {
                const href = link.getAttribute('href');
                if (href === `#${activeId}`) {
                  link.classList.add('bg-blue-50', 'text-blue-700', 'dark:bg-blue-900/20', 'dark:text-blue-400', 'font-medium');
                } else {
                  link.classList.remove('bg-blue-50', 'text-blue-700', 'dark:bg-blue-900/20', 'dark:text-blue-400', 'font-medium');
                }
              });
            }
          });
        },
        {
          rootMargin: '0px 0px -80% 0px'
        }
      );
      
      // Observe semua heading
      headings.forEach(heading => observer.observe(heading));
    };
    
    generateTableOfContents();
    
    // Cleanup
    return () => {
      const article = document.querySelector('article.prose');
      if (!article) return;
      
      const headings = Array.from(article.querySelectorAll('h2, h3'));
      const observer = new IntersectionObserver(() => {});
      
      headings.forEach(heading => observer.unobserve(heading));
    };
  }, [codeFormatted]);

  if (!post || !post.fields) {
    return <div>No blog post data available</div>;
  }

  const { fields } = post;
  const date = fields.publishDate ? new Date(fields.publishDate) : new Date();
  const formattedDate = date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  // Default image if image is not available
  const imageUrl = fields.image?.fields?.file?.url || 
    'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80';

  // Ensure tags is always an array
  const tags = Array.isArray(fields.tags) ? fields.tags : 
               fields.tags ? [fields.tags] : [];

  // Get content from either content or body field
  const richTextContent = fields.content || fields.body;

  return (
    <>
      <ReadingProgressBar />
      <BackToTop />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-12 max-w-5xl mx-auto">
            <article className="prose prose-lg prose-slate dark:prose-invert mx-auto">
              <style>{codeStyles}</style>
              {/* Header */}
              <header className="mb-8 sm:mb-12">
                {/* Cover Image */}
                {post.fields.image && (
                  <div className="relative w-full h-[30vh] sm:h-[40vh] md:h-[50vh] mb-6 sm:mb-8 rounded-2xl overflow-hidden shadow-xl">
                    <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent z-10"></div>
                    <img 
                      src={`https:${post.fields.image.fields.file.url}`} 
                      alt={post.fields.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                
                {/* Title and Meta */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-gray-900 dark:text-white leading-tight">
                  {post.fields.title}
                </h1>
                
                <div className="flex flex-wrap items-center gap-4 text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-6">
                  {/* Date */}
                  {post.fields.publishDate && (
                    <time dateTime={post.fields.publishDate}>
                      {new Date(post.fields.publishDate).toLocaleDateString('id-ID', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </time>
                  )}
                  
                  {/* Reading Time */}
                  <span className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {post.fields.readingTime || estimatedReadTime} min read
                  </span>
                  
                  {/* Tags */}
                  {post.fields.tags && post.fields.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {post.fields.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 text-xs sm:text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                
                {/* Table of Contents (Collapsible on Mobile) */}
                <div className="mb-10 mt-8">
                  <details className="bg-gray-50 dark:bg-gray-800/70 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
                    <summary className="text-lg font-semibold text-gray-900 dark:text-white cursor-pointer flex items-center">
                      <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
                      </svg>
                      Table of Contents
                    </summary>
                    <div className="mt-4 pl-2">
                      <div className="toc-inline" id="table-of-contents">
                        <ul id="toc-list" className="space-y-1">
                          {/* TOC will be populated by JavaScript */}
                        </ul>
                      </div>
                    </div>
                  </details>
                </div>
              </header>
              
              {/* Content */}
              {post.fields.content || post.fields.body ? (
                <ContentfulRichText content={richTextContent} />
              ) : (
                <div className="blog-content-default">
                  <p className="text-lg mb-6">
                    Maaf, konten untuk artikel ini sedang dalam proses penulisan. Silakan kembali lagi nanti untuk membaca artikel lengkapnya.
                  </p>
                  
                  <h2 id="tentang-artikel">Tentang Artikel Ini</h2>
                  <p>
                    Artikel ini akan membahas tentang {post.fields.title}. Kami sedang menyiapkan konten yang berkualitas dan informatif untuk Anda.
                  </p>
                  
                  <h2 id="konten-akan-datang">Konten yang Akan Datang</h2>
                  <p>
                    Beberapa topik yang akan dibahas dalam artikel ini:
                  </p>
                  <ul>
                    {post.fields.tags && post.fields.tags.map((tag, index) => (
                      <li key={index} className="mb-2">
                        <strong>{tag}</strong>: Pembahasan mendalam tentang {tag} dan implementasinya.
                      </li>
                    ))}
                    {(!post.fields.tags || post.fields.tags.length === 0) && (
                      <>
                        <li className="mb-2"><strong>Pengenalan</strong>: Dasar-dasar yang perlu Anda ketahui.</li>
                        <li className="mb-2"><strong>Implementasi</strong>: Langkah-langkah praktis untuk diterapkan.</li>
                        <li className="mb-2"><strong>Studi Kasus</strong>: Contoh penerapan di dunia nyata.</li>
                        <li className="mb-2"><strong>Tips dan Trik</strong>: Cara mengoptimalkan penggunaan.</li>
                      </>
                    )}
                  </ul>
                  
                  {/* Contoh kode */}
                  {post.fields.title && post.fields.title.toLowerCase().includes('devops') && (
                    <div className="my-8">
                      <h2 id="contoh-kode">Contoh Kode</h2>
                      <p className="mb-4">Berikut adalah contoh konfigurasi CI/CD pipeline menggunakan GitHub Actions:</p>
                      <div className="rounded-lg overflow-hidden border border-gray-700 shadow-lg">
                        {/* Terminal Header */}
                        <div className="bg-gray-800 px-4 py-2 flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="flex space-x-2 mr-4">
                              <div className="w-3 h-3 rounded-full bg-red-500"></div>
                              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                              <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            </div>
                            <span className="text-gray-200 text-sm font-medium">GitHub Actions</span>
                          </div>
                          <div className="text-gray-400 text-xs">
                            workflow.yml
                          </div>
                        </div>
                        
                        {/* Code Content */}
                        <pre className="bg-gray-900 text-gray-100 p-4 overflow-x-auto font-mono text-sm leading-relaxed whitespace-pre m-0">
                          <code>{`name: CI/CD Pipeline

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v2
    
    - name: Set up Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '16'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Run tests
      run: npm test
      
    - name: Build project
      run: npm run build
      
    - name: Deploy to production
      if: github.ref == 'refs/heads/main'
      run: |
        echo "Deploying to production server..."
        # Add your deployment commands here`}</code>
                        </pre>
                      </div>
                    </div>
                  )}
                  
                  {post.fields.title && post.fields.title.toLowerCase().includes('react') && (
                    <div className="my-8">
                      <h2 id="contoh-kode">Contoh Kode</h2>
                      <p className="mb-4">Berikut adalah contoh komponen React dengan Hooks:</p>
                      <div className="rounded-lg overflow-hidden border border-gray-700 shadow-lg">
                        {/* Terminal Header */}
                        <div className="bg-gray-800 px-4 py-2 flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="flex space-x-2 mr-4">
                              <div className="w-3 h-3 rounded-full bg-red-500"></div>
                              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                              <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            </div>
                            <span className="text-gray-200 text-sm font-medium">React</span>
                          </div>
                          <div className="text-gray-400 text-xs">
                            UserProfile.jsx
                          </div>
                        </div>
                        
                        {/* Code Content */}
                        <pre className="bg-gray-900 text-gray-100 p-4 overflow-x-auto font-mono text-sm leading-relaxed whitespace-pre m-0">
                          <code>{`import React, { useState, useEffect } from 'react';

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    async function fetchUserData() {
      try {
        setLoading(true);
        const response = await fetch(\`https://api.example.com/users/\${userId}\`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }
        
        const userData = await response.json();
        setUser(userData);
        setError(null);
      } catch (err) {
        setError(err.message);
        setUser(null);
      } finally {
        setLoading(false);
      }
    }
    
    fetchUserData();
  }, [userId]);
  
  if (loading) {
    return <div>Loading user data...</div>;
  }
  
  if (error) {
    return <div>Error: {error}</div>;
  }
  
  return (
    <div className="user-profile">
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Location: {user.location}</p>
    </div>
  );
}`}</code>
                        </pre>
                      </div>
                    </div>
                  )}
                  
                  {post.fields.title && post.fields.title.toLowerCase().includes('web') && (
                    <div className="my-8">
                      <h2 id="contoh-kode">Contoh Kode</h2>
                      <p className="mb-4">Berikut adalah contoh layout modern dengan CSS Grid:</p>
                      <div className="rounded-lg overflow-hidden border border-gray-700 shadow-lg">
                        {/* Terminal Header */}
                        <div className="bg-gray-800 px-4 py-2 flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="flex space-x-2 mr-4">
                              <div className="w-3 h-3 rounded-full bg-red-500"></div>
                              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                              <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            </div>
                            <span className="text-gray-200 text-sm font-medium">CSS</span>
                          </div>
                          <div className="text-gray-400 text-xs">
                            styles.css
                          </div>
                        </div>
                        
                        {/* Code Content */}
                        <pre className="bg-gray-900 text-gray-100 p-4 overflow-x-auto font-mono text-sm leading-relaxed whitespace-pre m-0">
                          <code>{`/* Modern CSS Grid Layout */
.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 2rem;
  padding: 2rem;
}

.card {
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
}

.card-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.card-content {
  padding: 1.5rem;
}

.card-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.75rem;
}

.card-description {
  color: #666;
  line-height: 1.6;
}`}</code>
                        </pre>
                      </div>
                    </div>
                  )}
                  
                  <h2 id="hubungi-kami">Hubungi Kami</h2>
                  <p>
                    Jika Anda memiliki pertanyaan atau ingin mendiskusikan topik ini lebih lanjut, jangan ragu untuk menghubungi kami melalui:
                  </p>
                  <ul>
                    <li>Email: <a href="mailto:info@boedifiqih.com">info@boedifiqih.com</a></li>
                    <li>Twitter: <a href="https://twitter.com/bfiqih" target="_blank" rel="noopener noreferrer">@bfiqih</a></li>
                    <li>LinkedIn: <a href="https://www.linkedin.com/in/bfiqih/" target="_blank" rel="noopener noreferrer">Boedi Fiqih</a></li>
                  </ul>
                  
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl mt-10 mb-6">
                    <h3 className="text-xl font-semibold mb-3 text-blue-700 dark:text-blue-300">Tertarik dengan artikel lainnya?</h3>
                    <p className="mb-4">
                      Sambil menunggu artikel ini selesai, Anda bisa membaca artikel lain yang mungkin menarik bagi Anda.
                    </p>
                    <a 
                      href="/blog" 
                      className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                      Lihat Artikel Lainnya
                    </a>
                  </div>
                </div>
              )}
            </article>
            
            {/* Author Info */}
            <div className="max-w-5xl mx-auto mt-12 p-6 bg-gray-50 dark:bg-gray-800/70 rounded-xl flex flex-col md:flex-row items-center md:items-start gap-6 shadow-sm">
              <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0 border-4 border-white shadow-md">
                <img 
                  src="/fotome.png" 
                  alt="Author" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Boedi Fiqih</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Frontend Developer specializing in React, TypeScript, and modern web development. Passionate about creating beautiful and functional user interfaces.
                </p>
                <div className="flex justify-center md:justify-start space-x-4">
                  <a 
                    href="https://twitter.com/bfiqih" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                    aria-label="Twitter"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                    </svg>
                  </a>
                  <a 
                    href="https://github.com/bfiqih" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                    aria-label="GitHub"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/bfiqih/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                    aria-label="LinkedIn"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                      <circle cx="4" cy="4" r="2" stroke="currentColor" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Bagian Share */}
            <div className="max-w-5xl mx-auto my-12 border-t border-b border-gray-200 dark:border-gray-800 py-8">
              <div className="flex flex-col sm:flex-row justify-between items-center">
                <h3 className="text-lg font-semibold mb-4 sm:mb-0 text-gray-900 dark:text-white">Share this article</h3>
                <div className="flex space-x-3">
                  <a 
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(fields.title || '')}&url=${encodeURIComponent(window.location.href)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors shadow-sm"
                    aria-label="Share on Twitter"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                    </svg>
                  </a>
                  <a 
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-blue-800 text-white rounded-full hover:bg-blue-900 transition-colors shadow-sm"
                    aria-label="Share on Facebook"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                  <a 
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors shadow-sm"
                    aria-label="Share on LinkedIn"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                      <circle cx="4" cy="4" r="2" stroke="currentColor" />
                    </svg>
                  </a>
                  <button 
                    onClick={() => {
                      navigator.clipboard.writeText(window.location.href);
                      alert('Link copied to clipboard!');
                    }}
                    className="p-3 bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-200 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors shadow-sm"
                    aria-label="Copy link"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            
            {/* Related Posts */}
            <div className="max-w-5xl mx-auto">
              <RelatedPosts currentPostId={post.sys.id} currentPostTags={tags} />
            </div>
            
            {/* Bagian Komentar */}
            <div className="max-w-5xl mx-auto">
              <BlogComments postSlug={fields.slug} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
