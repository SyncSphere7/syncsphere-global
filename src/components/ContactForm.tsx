import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { X, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import '@/styles/phone-input.css';  // Import custom styles

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
}

interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
  conversationHistory: Message[];
}

export const ContactForm: React.FC<ContactFormProps> = ({ isOpen, onClose, conversationHistory }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'sending' | 'success'>('idle');
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handlePhoneChange = (value: string) => {
    setFormData(prev => ({ ...prev, phone: value }));
  };

  const formatConversationForEmail = (messages: Message[]) => {
    return messages.map(msg => {
      const time = new Date(msg.timestamp).toLocaleString();
      const role = msg.role === 'user' ? 'Client' : 'AI Assistant';
      return `[${time}] ${role}: ${msg.content}`;
    }).join('\n\n');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('sending');

    try {
      const conversationText = formatConversationForEmail(conversationHistory);
      
      const emailBody = `
New Lead from SyncSphere AI Assistant

Client Information:
- Name: ${formData.name}
- Email: ${formData.email}
- Company: ${formData.company}
- Phone: ${formData.phone}

Message:
${formData.message}

Conversation History:
${conversationText}

---
This conversation history is provided for reference to ensure accurate project scoping and consistent pricing.
      `;

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          message: `${formData.message}\n\nConversation History:\n${conversationText}`,
          formType: 'sales',
          service: 'AI Assistant Consultation'
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit');
      }

      setSubmitStatus('success');

      toast({
        title: "AI Consultation Request Sent",
        description: "Your request has been sent to our AI solutions team. They will contact you shortly.",
        variant: "default"
      });

      // Show success state for 1.5 seconds before closing
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        message: ''
      });
      
      onClose();
    } catch (error) {
      console.error('Error sending contact form:', error);
      toast({
        title: "Error",
        description: "There was an issue sending your request. Please try again.",
        variant: "destructive"
      });
      setSubmitStatus('idle');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-md bg-background border-white/10">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
          <CardTitle className="text-white">Request Human Contact</CardTitle>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="text-white/70 hover:text-white"
          >
            <X size={16} />
          </Button>
        </CardHeader>
        <CardContent>
          <div className="mb-4 p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg">
            <p className="text-sm text-blue-200">
              📋 Your conversation history will be shared with our sales team for accurate project scoping and consistent pricing.
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                name="name"
                placeholder="Full Name *"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="bg-white/5 border-white/10 text-white placeholder:text-white/50"
              />
            </div>
            
            <div>
              <Input
                name="email"
                type="email"
                placeholder="Email Address *"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="bg-white/5 border-white/10 text-white placeholder:text-white/50"
              />
            </div>
            
            <div>
              <Input
                name="company"
                placeholder="Company Name"
                value={formData.company}
                onChange={handleInputChange}
                className="bg-white/5 border-white/10 text-white placeholder:text-white/50"
              />
            </div>
            
            <div>
              <PhoneInput
                country={'us'}
                value={formData.phone}
                onChange={handlePhoneChange}
                inputProps={{
                  name: 'phone',
                  placeholder: 'Phone Number',
                  className: 'w-full bg-white/5 border border-white/10 text-white placeholder:text-white/50 rounded-md px-3 py-2'
                }}
                containerClass="phone-input-container"
                buttonClass="phone-input-button"
                dropdownClass="phone-input-dropdown"
                searchClass="phone-input-search"
              />
            </div>
            
            <div>
              <Textarea
                name="message"
                placeholder="Additional message or specific requirements..."
                value={formData.message}
                onChange={handleInputChange}
                rows={3}
                className="bg-white/5 border-white/10 text-white placeholder:text-white/50"
              />
            </div>
            
            <div className="flex gap-2 pt-2">
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                className="flex-1 border-white/10 text-white/70 hover:text-white"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={isSubmitting || !formData.name || !formData.email}
                className="flex-1 bg-primary hover:bg-primary/90"
              >
                {submitStatus === 'sending' ? 'Sending...' :
                 submitStatus === 'success' ? 'Email Sent' : (
                  <>
                    <Send size={16} className="mr-2" />
                    Send Request
                  </>
                )}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};
