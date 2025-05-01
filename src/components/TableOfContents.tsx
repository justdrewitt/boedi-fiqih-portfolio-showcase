import React, { useEffect, useState } from 'react';

interface TocItem {
  id: string;
  text: string;
  level: number;
}

const TableOfContents: React.FC = () => {
  const [headings, setHeadings] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    // Cari semua heading h2 dan h3 dalam artikel
    const article = document.querySelector('article.prose');
    if (!article) return;

    const headingElements = Array.from(article.querySelectorAll('h2, h3'));
    
    // Buat ID untuk heading yang belum memiliki ID
    headingElements.forEach((heading, index) => {
      if (!heading.id) {
        const id = `heading-${index}`;
        heading.id = id;
      }
    });
    
    // Buat array TOC items
    const items = headingElements.map(heading => ({
      id: heading.id,
      text: heading.textContent || '',
      level: heading.tagName === 'H2' ? 2 : 3
    }));
    
    setHeadings(items);
    
    // Setup Intersection Observer untuk highlight heading aktif
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: '0px 0px -80% 0px'
      }
    );
    
    // Observe semua heading
    headingElements.forEach(heading => observer.observe(heading));
    
    return () => {
      headingElements.forEach(heading => observer.unobserve(heading));
    };
  }, []);
  
  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: 'smooth'
      });
    }
  };
  
  if (headings.length === 0) {
    return null;
  }

  return (
    <div className="bg-white dark:bg-gray-800/70 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
      <h3 className="text-lg font-semibold mb-6 text-gray-900 dark:text-white flex items-center">
        <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
        </svg>
        Table of Contents
      </h3>
      <nav className="space-y-1">
        {headings.map((heading) => (
          <button
            key={heading.id}
            onClick={() => scrollToHeading(heading.id)}
            className={`
              w-full text-left py-2 px-3 rounded-md transition-colors flex items-center
              ${heading.level === 3 ? 'pl-6' : ''}
              ${
                activeId === heading.id 
                  ? 'bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400 font-medium' 
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700/30'
              }
            `}
          >
            {activeId === heading.id && (
              <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 flex-shrink-0"></span>
            )}
            <span className={activeId === heading.id ? '' : 'ml-3.5'}>
              {heading.text}
            </span>
          </button>
        ))}
      </nav>
    </div>
  );
};

export default TableOfContents;
