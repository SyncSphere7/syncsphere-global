
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Check } from 'lucide-react';

interface ServiceDemoFormProps {
  serviceName: string;
  ctaText: string;
}

const ServiceDemoForm = ({ serviceName, ctaText }: ServiceDemoFormProps) => {
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Send the form data to the email address
      const formData = new FormData();
      formData.append('name', name);
      formData.append('email', email);
      formData.append('phone', phone);
      formData.append('service', serviceName);
      formData.append('_replyto', email);
      formData.append('_subject', `Demo Request for ${serviceName}`);
      
      // Log the form data for debugging
      console.log('Demo requested for:', serviceName, { name, email, phone });
      
      // Email.js or a similar service would be better than formspree for direct email
      // For now sending directly to email using mailto as a fallback
      const mailtoLink = `mailto:info@syncsphereofficial.com?subject=Demo Request for ${serviceName}&body=Name: ${name}%0D%0AEmail: ${email}%0D%0APhone: ${phone}%0D%0AService: ${serviceName}`;
      
      // Open the default mail client
      window.location.href = mailtoLink;
      
      // Show success message
      setIsSubmitted(true);
      
      toast({
        title: "Request submitted",
        description: `Your ${serviceName} demo request has been received. We'll contact you soon.`,
      });
      
      // Reset form
      setEmail('');
      setName('');
      setPhone('');
      
      // Reset success state after delay
      setTimeout(() => setIsSubmitted(false), 5000);
      
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Submission Error",
        description: "There was a problem submitting your request. Please try again or email us directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <label htmlFor="name" className="text-sm text-white/70">Your Name</label>
        <Input
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          placeholder="Enter your name"
          className="bg-white/5 border-white/10"
        />
      </div>
      
      <div className="space-y-2">
        <label htmlFor="email" className="text-sm text-white/70">Email Address</label>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="Enter your email"
          className="bg-white/5 border-white/10"
        />
      </div>
      
      <div className="space-y-2">
        <label htmlFor="phone" className="text-sm text-white/70">Phone Number</label>
        <Input
          id="phone"
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Enter your phone number"
          className="bg-white/5 border-white/10"
        />
      </div>
      
      <Button 
        type="submit" 
        className="w-full bg-primary hover:bg-primary/90 text-white py-6 text-lg mt-4"
        disabled={isSubmitting || isSubmitted}
      >
        {isSubmitting ? 'Processing...' : isSubmitted ? (
          <span className="flex items-center justify-center">
            <Check className="mr-2" size={20} />
            Request Received
          </span>
        ) : ctaText}
      </Button>
    </form>
  );
};

export default ServiceDemoForm;
