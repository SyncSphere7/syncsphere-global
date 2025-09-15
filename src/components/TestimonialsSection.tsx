
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Star } from 'lucide-react';

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

const TestimonialsSection = () => {
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="animate-fadeIn" style={{ animationDelay: `${0.1 * (index + 1)}s` }}>
              <Card className="bg-white/5 border border-white/10 backdrop-blur-sm h-full hover:bg-white/10 transition-colors">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        className={i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-400"}
                      />
                    ))}
                  </div>
                  <p className="text-foreground/80 mb-6 italic">"{testimonial.text}"</p>
                  <div className="mt-auto">
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-foreground/60 text-sm">{testimonial.company}</p>
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
