
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SendHorizontal, Check } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submission started:', formData);
    
    // Basic validation
    if (!formData.name.trim()) {
      toast({
        title: "Validation Error",
        description: "Please enter your full name.",
        variant: "destructive"
      });
      return;
    }

    if (!formData.email.trim()) {
      toast({
        title: "Validation Error",
        description: "Please enter your email address.",
        variant: "destructive"
      });
      return;
    }

    if (!formData.message.trim()) {
      toast({
        title: "Validation Error",
        description: "Please enter a message.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          formType: 'contact',
          service: 'General Inquiry'
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', phone: '', company: '', message: '' });
        
        toast({
          title: "Message sent!",
          description: "Thank you for your inquiry. We'll get back to you within 24 hours.",
        });
        
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        throw new Error('Failed to submit');
      }
      
    } catch (error) {
      console.error('Error opening email client:', error);
      setIsSubmitting(false);
      
      toast({
        title: "Error",
        description: "Unable to open email client. Please email us directly at info@syncsphereofficial.com",
        variant: "destructive"
      });
    }
  };

  return (
    <section id="contact" className="bg-background py-20 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/10 opacity-30 blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="px-4 py-2 bg-white/5 dark:bg-white/5 light:bg-primary/5 rounded-full text-foreground/80 text-sm mb-6 inline-block border border-white/10 dark:border-white/10 light:border-primary/10 backdrop-blur-sm">
            Get in Touch
          </span>
          <h2 className="text-foreground text-3xl md:text-4xl font-bold">Let's Discuss Your AI Solution</h2>
          <p className="text-foreground/70 mt-4 max-w-xl mx-auto">
            Whether you're ready to get started or just exploring options, our team is here to help you navigate the AI landscape.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="bg-white/5 border border-white/10 rounded-lg p-8 backdrop-blur-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm text-foreground/70">Full Name *</label>
                  <Input 
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="bg-white/5 border-white/10 focus:border-primary"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm text-foreground/70">Email Address *</label>
                  <Input 
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email"
                    required
                    className="bg-white/5 border-white/10 focus:border-primary"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm text-foreground/70">Phone Number</label>
                  <Input 
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your phone number"
                    className="bg-white/5 border-white/10 focus:border-primary"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm text-foreground/70">Company (Optional)</label>
                  <Input 
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your company"
                    className="bg-white/5 border-white/10 focus:border-primary"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm text-foreground/70">Message *</label>
                <Textarea 
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can we help you?"
                  required
                  className="bg-white/5 border-white/10 focus:border-primary min-h-32"
                />
              </div>
              
              <Button 
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className="w-full md:w-auto bg-gradient-to-r from-[#0EA5E9] to-primary hover:from-primary hover:to-[#0EA5E9] text-white px-8 py-6 text-lg flex items-center gap-2 border border-primary/30 shadow-lg shadow-primary/20 transition-all duration-300 hover:translate-y-[-2px]"
              >
                {isSubmitting ? (
                  <>Opening Email...</>
                ) : isSubmitted ? (
                  <>
                    <Check size={20} />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <SendHorizontal size={20} />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
