import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AllProjects from "./pages/AllProjects";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import { TestContentful } from "./pages/TestContentful";
import GettingStarted from "./pages/blog/GettingStarted";
import ReactBasics from "./pages/blog/ReactBasics";
import AdvancedWebDev from "./pages/blog/AdvancedWebDev";
import WebPerformance from "./pages/blog/WebPerformance";
import ContentfulBlog from "./pages/blog/ContentfulBlog";
import Navbar from "./components/Navbar";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <div className="pt-20">
              <Routes>
                <Route path="/test-contentful" element={<TestContentful />} />
                <Route path="/" element={<Index />} />
                <Route path="/projects" element={<AllProjects />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/getting-started" element={<GettingStarted />} />
                <Route path="/blog/react-basics" element={<ReactBasics />} />
                <Route path="/blog/advanced-web-dev" element={<AdvancedWebDev />} />
                <Route path="/blog/performance" element={<WebPerformance />} />
                <Route path="/blog/:slug" element={<ContentfulBlog />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
          </main>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
