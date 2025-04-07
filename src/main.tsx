import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import PerformanceOptimization from './components/ui/PerformanceOptimization';

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <PerformanceOptimization />
    <App />
  </React.StrictMode>,
);
