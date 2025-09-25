
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Users, TrendingUp } from 'lucide-react';

interface Testimonial {
  name: string;
  company: string;
  text: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: "Jennifer Martinez",
    company: "Global Tech Solutions",
    text: "SyncSphere transformed our customer service with their AI chatbot platform. Response times decreased by 80% and our team now focuses on complex issues while the AI handles routine inquiries seamlessly.",
    rating: 5
  },
  {
    name: "Michael Chen",
    company: "International Retail Group",
    text: "The voice agent solution from SyncSphere has revolutionized our call center operations. The AI handles over 70% of our customer inquiries without human intervention, improving efficiency dramatically.",
    rating: 5
  },
  {
    name: "Sarah Johnson",
    company: "FinTech Innovations Inc",
    text: "We've been using SyncSphere's automation solutions for our back-office operations and have seen remarkable improvements in efficiency, accuracy, and overall productivity across our global teams.",
    rating: 5
  }
];

interface TestimonialsSectionProps {
  testimonial?: {
    text: string;
    author: string;
    company: string;
    metric: string;
  };
  industry?: string;
}

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ testimonial, industry }) => {
  return (
    <section id="testimonials" className="py-20 bg-background relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5 opacity-30 blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="px-4 py-2 bg-white/5 dark:bg-white/5 light:bg-primary/5 rounded-full text-foreground/80 text-sm mb-6 inline-block border border-white/10 dark:border-white/10 light:border-primary/10 backdrop-blur-sm">
            Client Success Stories
          </span>
          <h2 className="text-foreground text-3xl md:text-4xl font-bold">What Our Clients Say</h2>
          <p className="text-foreground/70 mt-4 max-w-xl mx-auto">
            Learn how our AI solutions have transformed businesses worldwide.
          </p>
        </div>

        {/* Personalized Testimonial */}
        {testimonial && (
          <div className="mb-16">
            <Card className="bg-primary/10 border-primary/20 backdrop-blur-sm max-w-4xl mx-auto">
              <CardContent className="p-8">
                <div className="flex items-center gap-2 mb-4">
                  <Badge className="bg-primary/20 text-primary border-primary/30">
                    {industry ? industry.charAt(0).toUpperCase() + industry.slice(1) : 'Industry'} Success Story
                  </Badge>
                  <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    {testimonial.metric}
                  </Badge>
                </div>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className="text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>
                <blockquote className="text-lg md:text-xl text-foreground/90 mb-6 italic">
                  "{testimonial.text}"
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.author}</p>
                    <p className="text-foreground/70">{testimonial.company}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonialItem, index) => (
            <div key={index} className="animate-fadeIn" style={{ animationDelay: `${0.1 * (index + 1)}s` }}>
              <Card className="bg-white/5 border border-white/10 backdrop-blur-sm h-full hover:bg-white/10 transition-colors">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        className={i < testimonialItem.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-400"}
                      />
                    ))}
                  </div>
                  <p className="text-foreground/80 mb-6 italic">"{testimonialItem.text}"</p>
                  <div className="mt-auto">
                    <p className="font-semibold text-foreground">{testimonialItem.name}</p>
                    <p className="text-foreground/60 text-sm">{testimonialItem.company}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
