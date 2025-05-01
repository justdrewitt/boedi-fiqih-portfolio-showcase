import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AllProjects from "./pages/AllProjects";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import BlogIndex from "./pages/blog/index";
import { TestContentful } from "./pages/TestContentful";
import ContentfulBlog from "./pages/blog/ContentfulBlog";
import Navbar from "./components/Navbar";
import Faq from "./pages/Faq";
import CaseStudies from "./pages/CaseStudies";
import FashionEcommerce from "./pages/case-studies/FashionEcommerce";
import TechCompany from "./pages/case-studies/TechCompany";
import Restaurant from "./pages/case-studies/Restaurant";
import Education from "./pages/case-studies/Education";
import Pricing from "./pages/Pricing";
import OurClients from "./pages/OurClients";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
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
                  <Route path="/blog" element={<BlogIndex />} />
                  <Route path="/blog/:slug" element={<ContentfulBlog />} />
                  <Route path="/faq" element={<Faq />} />
                  <Route path="/case-studies" element={<CaseStudies />} />
                  <Route path="/case-studies/fashion-ecommerce" element={<FashionEcommerce />} />
                  <Route path="/case-studies/tech-company" element={<TechCompany />} />
                  <Route path="/case-studies/restaurant" element={<Restaurant />} />
                  <Route path="/case-studies/education" element={<Education />} />
                  <Route path="/pricing" element={<Pricing />} />
                  <Route path="/our-clients" element={<OurClients />} />
                  {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </div>
            </main>
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
