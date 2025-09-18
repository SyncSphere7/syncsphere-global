import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, User, Building, MessageSquare, CheckCircle, AlertCircle } from 'lucide-react';

interface ContactFormProps {
  formType?: 'demo' | 'sales' | 'finance' | 'compliance' | 'security';
  service?: string;
  title?: string;
  description?: string;
}

const ContactFormNew: React.FC<ContactFormProps> = ({ 
  formType = 'demo', 
  service = '',
  title = 'Get in Touch',
  description = 'Send us a message and we\'ll get back to you within 24 hours.'
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          formType,
          service
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', company: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  if (submitStatus === 'success') {
    return (
      <Card className="bg-white/5 border border-white/10 backdrop-blur-sm">
        <CardContent className="p-8 text-center">
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-foreground mb-2">Message Sent!</h3>
          <p className="text-foreground/70 mb-4">
            Thank you for your inquiry. We'll get back to you within 24 hours.
          </p>
          <Button 
            onClick={() => setSubmitStatus('idle')}
            variant="outline"
          >
            Send Another Message
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-white/5 border border-white/10 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-foreground">{title}</CardTitle>
        <CardDescription className="text-foreground/70">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <User className="absolute left-3 top-3 h-4 w-4 text-foreground/50" />
              <Input
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="pl-10 bg-white/5 border-white/10 text-foreground placeholder:text-foreground/50"
              />
            </div>
            <div className="relative">
              <Mail className="absolute left-3 top-3 h-4 w-4 text-foreground/50" />
              <Input
                name="email"
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                className="pl-10 bg-white/5 border-white/10 text-foreground placeholder:text-foreground/50"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <Phone className="absolute left-3 top-3 h-4 w-4 text-foreground/50" />
              <Input
                name="phone"
                placeholder="Phone Number (Optional)"
                value={formData.phone}
                onChange={handleChange}
                className="pl-10 bg-white/5 border-white/10 text-foreground placeholder:text-foreground/50"
              />
            </div>
            <div className="relative">
              <Building className="absolute left-3 top-3 h-4 w-4 text-foreground/50" />
              <Input
                name="company"
                placeholder="Company Name (Optional)"
                value={formData.company}
                onChange={handleChange}
                className="pl-10 bg-white/5 border-white/10 text-foreground placeholder:text-foreground/50"
              />
            </div>
          </div>

          <div className="relative">
            <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-foreground/50" />
            <Textarea
              name="message"
              placeholder="Tell us about your project or inquiry..."
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="pl-10 bg-white/5 border-white/10 text-foreground placeholder:text-foreground/50 resize-none"
            />
          </div>

          {submitStatus === 'error' && (
            <div className="flex items-center gap-2 text-red-400 text-sm">
              <AlertCircle className="h-4 w-4" />
              Failed to send message. Please try again.
            </div>
          )}

          <Button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-primary to-blue-600 hover:from-blue-600 hover:to-primary text-white"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactFormNew;