
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface ServiceCardProps {
  title: string;
  description: string;
  delay: string;
}

const ServiceCard = ({ title, description, delay }: ServiceCardProps) => {
  return (
    <Card 
      className="bg-white/5 border border-white/10 backdrop-blur-sm h-full animate-fadeIn hover:bg-white/10 transition-colors group cursor-pointer" 
      style={{ animationDelay: delay }}
    >
      <CardHeader>
        <CardTitle className="text-foreground text-xl md:text-2xl group-hover:text-primary transition-colors">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-foreground/70 text-base">{description}</CardDescription>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
