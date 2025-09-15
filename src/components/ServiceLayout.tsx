
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceLayoutProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

const ServiceLayout = ({ title, description, children }: ServiceLayoutProps) => {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-6 py-16">
          <Link to="/#services" className="inline-flex items-center text-foreground/70 hover:text-primary mb-8 transition-colors">
            <ArrowLeft size={20} className="mr-2" />
            Back to Services
          </Link>
          
          <h1 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">{title}</h1>
          <p className="text-xl text-foreground/70 mb-12 max-w-3xl">{description}</p>
          
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ServiceLayout;
