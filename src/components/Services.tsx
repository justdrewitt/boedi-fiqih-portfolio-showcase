
import { 
  Code, Globe, BarChart, Search, Layout, Server, Database, LineChart, Smartphone, Shield
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const services = [
  {
    title: 'Web Development',
    description: 'Creating responsive and user-friendly websites that meet business objectives and provide excellent user experience.',
    icon: <Globe size={24} />,
  },
  {
    title: 'Frontend Development',
    description: 'Building beautiful, interactive user interfaces using modern technologies like React, Vue.js, and Svelte.',
    icon: <Layout size={24} />,
  },
  {
    title: 'Backend Development',
    description: 'Developing robust server-side applications with Node.js, PHP, Python and database management systems.',
    icon: <Server size={24} />,
  },
  {
    title: 'SEO Optimization',
    description: 'Improving your website's visibility in search engine results and driving organic traffic.',
    icon: <Search size={24} />,
  },
  {
    title: 'Technical SEO',
    description: 'Enhancing your website's architecture and infrastructure for better crawling and indexing by search engines.',
    icon: <Code size={24} />,
  },
  {
    title: 'Database Design',
    description: 'Creating efficient and scalable database systems that are optimized for performance.',
    icon: <Database size={24} />,
  },
  {
    title: 'SEO Analytics',
    description: 'Setting up and analyzing website performance with Google Analytics and other tracking tools.',
    icon: <LineChart size={24} />,
  },
  {
    title: 'Responsive Design',
    description: 'Ensuring your website looks great and functions properly across all devices and screen sizes.',
    icon: <Smartphone size={24} />,
  },
  {
    title: 'Website Security',
    description: 'Implementing best practices for web security to protect your site from threats and vulnerabilities.',
    icon: <Shield size={24} />,
  },
];

interface ServiceProps {
  service: {
    title: string;
    description: string;
    icon: JSX.Element;
  };
}

const ServiceCard = ({ service }: ServiceProps) => {
  return (
    <Card className="hover:shadow-lg transition-all duration-300 group h-full">
      <CardContent className="p-6 flex flex-col h-full">
        <div className="mb-4 w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center text-teal-500 group-hover:bg-teal-500 group-hover:text-white transition-colors">
          {service.icon}
        </div>
        <h3 className="text-lg font-bold mb-2 text-navy-900">{service.title}</h3>
        <p className="text-gray-600 flex-grow">{service.description}</p>
      </CardContent>
    </Card>
  );
};

const Services = () => {
  return (
    <section id="services" className="section-padding bg-blue-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h3 className="section-subtitle">My Services</h3>
          <h2 className="section-title">What I Offer</h2>
          <p className="text-gray-700">
            I provide a range of services to help businesses build and optimize their online presence.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
