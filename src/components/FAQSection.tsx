
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Helmet } from 'react-helmet-async';

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "What types of businesses can benefit from AI chatbots?",
    answer: "Virtually any business that engages with customers can benefit from AI chatbots. They're particularly valuable for businesses in retail, e-commerce, finance, healthcare, hospitality, and service industries. Our chatbots can handle customer inquiries, process orders, provide information, and offer support 24/7."
  },
  {
    question: "How long does it take to implement an AI solution?",
    answer: "Implementation timelines vary based on the complexity of your needs. Simple chatbot implementations can be completed in 2-4 weeks, while more comprehensive AI systems like voice agents or custom automations typically take 4-8 weeks. We provide a detailed timeline during our initial consultation."
  },
  {
    question: "Do I need technical expertise to use your AI solutions?",
    answer: "No technical expertise is required. We design our solutions to be user-friendly with intuitive interfaces. Our team provides comprehensive training and ongoing support to ensure your team can effectively manage and utilize the AI tools we implement."
  },
  {
    question: "How do you ensure data privacy and security?",
    answer: "We prioritize data security and privacy in all our solutions. We implement industry-standard encryption protocols, secure data storage, and comply with relevant data protection regulations. We also offer customized security measures for industries with specific compliance requirements."
  },
  {
    question: "Can your AI solutions integrate with our existing systems?",
    answer: "Yes, our AI solutions are designed to integrate seamlessly with most existing business systems, including CRMs, ERPs, e-commerce platforms, and communication tools. We conduct a thorough assessment of your current infrastructure to ensure smooth integration."
  },
  {
    question: "How is pricing structured for your AI solutions?",
    answer: "Our pricing varies by service: AI Workflow Automation ($1,000–$4,000), AI Chatbots ($1,000–$3,000), AI Voice Agents ($1,500–$4,000), Website Design ($500–$2,000), E-commerce Solutions ($2,500–$5,000), Mobile/Web Apps ($3,000–$6,000), and AI Consulting ($1,500–$4,000/month). We offer flexible payment terms and customized packages. Contact us for a detailed quote tailored to your business needs and ROI goals."
  }
];

const FAQSection = () => {
  // FAQ structured data for SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>
      <section id="faq" className="py-20 bg-background relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5 opacity-30 blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="px-4 py-2 bg-white/5 dark:bg-white/5 light:bg-primary/5 rounded-full text-foreground/80 text-sm mb-6 inline-block border border-white/10 dark:border-white/10 light:border-primary/10 backdrop-blur-sm">
            Common Questions
          </span>
          <h2 className="text-foreground text-3xl md:text-4xl font-bold">Frequently Asked Questions</h2>
          <p className="text-foreground/70 mt-4 max-w-xl mx-auto">
            Find answers to common questions about our AI solutions and implementation process.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white/5 border border-white/10 rounded-lg overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline text-foreground">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-foreground/80">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
    </>
  );
};

export default FAQSection;
