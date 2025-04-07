import { useEffect } from 'react';

const PerformanceOptimization = () => {
  useEffect(() => {
    // Optimize images
    const images = document.querySelectorAll('img');
    images.forEach((img) => {
      if (img instanceof HTMLImageElement && img.src && !img.src.includes('.webp')) {
        const webpSrc = img.src.replace(/\.(jpg|jpeg|png)$/, '.webp');
        img.src = webpSrc;
      }
    });

    // Add lazy loading to images
    const imagesToLazyLoad = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            observer.unobserve(img);
          }
        }
      });
    });

    imagesToLazyLoad.forEach((img) => imageObserver.observe(img as HTMLImageElement));

    // Optimize fonts
    const fontLinks = document.querySelectorAll('link[rel="preload"][as="font"]');
    fontLinks.forEach((link) => {
      if (link instanceof HTMLLinkElement) {
        link.setAttribute('crossorigin', 'anonymous');
      }
    });

    // Optimize critical CSS
    const criticalCSS = `
      body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
          'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
          sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }
      
      code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
          monospace;
      }
    `;

    const style = document.createElement('style');
    style.textContent = criticalCSS;
    document.head.appendChild(style);

    // Optimize animations
    const animations = document.querySelectorAll('[data-animation]');
    animations.forEach((element) => {
      if (element instanceof HTMLElement) {
        element.style.willChange = 'transform, opacity';
      }
    });
  }, []);

  return null;
};

export default PerformanceOptimization;
