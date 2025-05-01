import React from 'react';
import { useLocation, Location } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Breadcrumbs from './Breadcrumbs';

interface LayoutProps {
  children: React.ReactNode;
  location: Location;
}

const Layout: React.FC<LayoutProps> = ({ children, location }) => {
  return (
    <HelmetProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <main className="container mx-auto px-4 py-8">
          {location.pathname !== '/' && <Breadcrumbs />}
          {children}
        </main>
      </div>
    </HelmetProvider>
  );
};

export default Layout;
