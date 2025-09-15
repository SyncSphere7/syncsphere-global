
import React from 'react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CaseStudy {
  title: string;
  client: string;
  industry: string;
  solution: string;
  results: string[];
  link?: string;
}

const caseStudies: CaseStudy[] = [
  {
    title: "24/7 Customer Support Automation",
    client: "Global Retail Corporation",
    industry: "Retail & E-commerce",
    solution: "Implemented AI chatbots across multiple channels to handle customer inquiries, order tracking, and personalized product recommendations for a seamless shopping experience.",
    results: [
      "90% reduction in response time",
      "65% decrease in support tickets",
      "32% increase in customer satisfaction"
    ],
    link: "/case-studies/retail-corp"
  },
  {
    title: "Intelligent Call Handling System",
    client: "International Financial Group",
    industry: "Financial Services",
    solution: "Deployed AI voice agents to manage customer calls, perform account inquiries, and route complex financial queries to specialized advisors.",
    results: [
      "Handled 75% of calls without human intervention",
      "Reduced average call duration by 40%",
      "Improved service consistency by 87%"
    ],
    link: "/case-studies/financial-group"
  },
  {
    title: "Inventory Management Automation",
    client: "Healthcare Solutions Network",
    industry: "Healthcare",
    solution: "Created an intelligent automation system to track inventory levels, predict demand patterns, and optimize supply chain operations across multiple locations.",
    results: [
      "Reduced stockouts by 88%",
      "Lowered inventory costs by 23%",
      "Automated 95% of routine ordering tasks"
    ],
    link: "/case-studies/healthcare-network"
  }
];

const CaseStudiesSection = () => {
  return (
    <section id="case-studies" className="py-20 bg-background relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-30 blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="px-4 py-2 bg-white/5 dark:bg-white/5 light:bg-primary/5 rounded-full text-foreground/80 text-sm mb-6 inline-block border border-white/10 dark:border-white/10 light:border-primary/10 backdrop-blur-sm">
            Success Stories
          </span>
          <h2 className="text-foreground text-3xl md:text-4xl font-bold">Case Studies</h2>
          <p className="text-foreground/70 mt-4 max-w-xl mx-auto">
            Real-world examples of how our AI solutions drive business transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <div key={index} className="animate-fadeIn" style={{ animationDelay: `${0.1 * (index + 1)}s` }}>
              <Card className="bg-white/5 border border-white/10 backdrop-blur-sm h-full hover:bg-white/10 transition-colors">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <span className="text-sm text-primary">{study.industry}</span>
                    <h3 className="text-xl font-semibold text-foreground mt-1">{study.title}</h3>
                    <p className="text-foreground/70 text-sm">{study.client}</p>
                  </div>
                  
                  <p className="text-foreground/80 mb-4">{study.solution}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-foreground mb-2">Key Results:</h4>
                    <ul className="space-y-1">
                      {study.results.map((result, i) => (
                        <li key={i} className="text-foreground/70 text-sm flex items-start">
                          <span className="text-primary mr-2">•</span>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
                
                {study.link && (
                  <CardFooter className="px-6 pb-6 pt-0">
                    <Link to={study.link}>
                      <Button variant="link" className="text-primary p-0 hover:text-primary/80 flex items-center">
                        View Full Case Study
                        <ArrowRight size={16} className="ml-1" />
                      </Button>
                    </Link>
                  </CardFooter>
                )}
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
