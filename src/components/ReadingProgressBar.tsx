import React, { useEffect, useState } from 'react';

const ReadingProgressBar: React.FC = () => {
  const [readingProgress, setReadingProgress] = useState(0);
  
  useEffect(() => {
    const updateReadingProgress = () => {
      const currentPosition = window.scrollY;
      const articleElement = document.querySelector('article.prose');
      
      if (!articleElement) return;
      
      const articleHeight = articleElement.clientHeight;
      const windowHeight = window.innerHeight;
      const footerHeight = document.querySelector('footer')?.clientHeight || 0;
      
      // Hitung total scroll height yang tersedia
      const totalScrollHeight = articleHeight - windowHeight + footerHeight;
      
      // Hitung persentase scroll
      const scrollPercentage = (currentPosition / totalScrollHeight) * 100;
      
      // Batasi nilai antara 0-100
      setReadingProgress(Math.min(100, Math.max(0, scrollPercentage)));
    };
    
    // Tambahkan event listener
    window.addEventListener('scroll', updateReadingProgress);
    
    // Panggil sekali untuk inisialisasi
    updateReadingProgress();
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', updateReadingProgress);
    };
  }, []);
  
  return (
    <div className="fixed top-0 left-0 right-0 h-1.5 bg-gray-200 dark:bg-gray-700 z-50">
      <div 
        className="h-full bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-300 ease-out"
        style={{ width: `${readingProgress}%` }}
      />
      <div className="absolute right-0 top-0 px-2 py-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-medium rounded-bl-md transform translate-y-1.5 shadow-sm opacity-90">
        {Math.round(readingProgress)}%
      </div>
    </div>
  );
};

export default ReadingProgressBar;
