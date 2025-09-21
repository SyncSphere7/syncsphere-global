
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Check } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import '@/styles/phone-input.css';

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
      console.log('Demo requested for:', serviceName, { name, email, phone });
      
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          message: `I'm interested in a demo of your ${serviceName} solution. Please contact me to schedule a consultation.`,
          formType: 'demo',
          service: serviceName
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        toast({
          title: "Request submitted",
          description: `Your ${serviceName} demo request has been received. We'll contact you soon.`,
        });
        
        setEmail('');
        setName('');
        setPhone('');
        
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        throw new Error('Failed to submit');
      }
      
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
        <div>
          <PhoneInput
            country={'us'}
            value={phone}
            onChange={(value) => setPhone(value)}
            inputProps={{
              name: 'phone',
              id: 'phone',
              placeholder: 'Phone Number with Country Code',
              className: 'w-full bg-white/5 border border-white/10 text-white placeholder:text-white/50 rounded-md px-3 py-2'
            }}
            containerClass="phone-input-container"
            buttonClass="phone-input-button"
            dropdownClass="phone-input-dropdown"
            searchClass="phone-input-search"
          />
          <p className="text-xs text-white/50 mt-1 ml-1">
            Please include your country code (e.g., +1 for US/Canada)
          </p>
        </div>
      </div>
      
      <Button 
        type="submit" 
        className="w-full bg-primary hover:bg-primary/90 text-white py-6 text-lg mt-4"
        disabled={isSubmitting || isSubmitted}
      >
        {isSubmitting ? 'Sending...' : isSubmitted ? (
          <span className="flex items-center justify-center">
            <Check className="mr-2" size={20} />
            Request Sent!
          </span>
        ) : ctaText}
      </Button>
    </form>
  );
};

export default ServiceDemoForm;
