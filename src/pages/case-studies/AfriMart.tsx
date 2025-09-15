
import React from 'react';
import CaseStudyLayout from '../../components/CaseStudyLayout';
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const AfriMart = () => {
  return (
    <CaseStudyLayout
      title="24/7 Customer Support Automation"
      client="Global Retail Corporation"
      industry="Retail & E-commerce"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-2">
          <div className="aspect-video rounded-lg bg-muted/20 overflow-hidden mb-8">
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&h=675" 
              alt="AfriMart E-commerce customer service agent using SyncSphere's AI chatbot solution"
              className="w-full h-full object-cover"
            />
          </div>
          
          <h2 className="text-2xl font-bold mb-4">Challenge</h2>
          <p className="mb-6 text-foreground/80">
            AfriMart, a leading e-commerce platform in East Africa, was experiencing rapid growth but struggling to handle the increasing volume of customer inquiries. With operations spanning multiple countries and time zones, they needed a solution that could:
          </p>
          <ul className="list-disc pl-6 mb-8 space-y-2 text-foreground/80">
            <li>Provide 24/7 customer support across multiple channels</li>
            <li>Handle common inquiries such as order tracking, returns, and product information</li>
            <li>Support customers in multiple languages including English, Swahili, and French</li>
            <li>Reduce the burden on their human customer service team</li>
            <li>Maintain high customer satisfaction levels despite the growing demand</li>
          </ul>
          
          <h2 className="text-2xl font-bold mb-4">Solution</h2>
          <p className="mb-6 text-foreground/80">
            SyncSphere implemented a multi-channel AI chatbot solution that integrated with AfriMart's existing systems:
          </p>
          <ul className="list-disc pl-6 mb-8 space-y-2 text-foreground/80">
            <li>Deployed AI-powered chatbots across WhatsApp, web, and SMS channels</li>
            <li>Integrated with their inventory and order management systems for real-time data access</li>
            <li>Implemented natural language processing capabilities in multiple languages</li>
            <li>Created a seamless escalation protocol for complex issues requiring human intervention</li>
            <li>Built a product recommendation engine based on customer preferences and browsing behavior</li>
          </ul>
        </div>
        
        <div className="lg:col-span-1">
          <Card className="bg-white/5 border border-white/10 backdrop-blur-sm mb-8">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Key Results</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-foreground/80">Response Time</span>
                    <span className="text-primary font-bold">90% Reduction</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-foreground/80">Support Tickets</span>
                    <span className="text-primary font-bold">65% Decrease</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '65%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-foreground/80">Customer Satisfaction</span>
                    <span className="text-primary font-bold">32% Increase</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '32%' }}></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-white/5 border border-white/10 backdrop-blur-sm">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Implementation Timeline</h3>
              <ul className="space-y-4">
                <li className="border-l-2 border-primary/50 pl-4 pb-4">
                  <span className="text-primary font-semibold">Week 1-2</span>
                  <p className="text-foreground/80 text-sm">Requirements gathering and system integration planning</p>
                </li>
                <li className="border-l-2 border-primary/50 pl-4 pb-4">
                  <span className="text-primary font-semibold">Week 3-4</span>
                  <p className="text-foreground/80 text-sm">Initial chatbot development and system integration</p>
                </li>
                <li className="border-l-2 border-primary/50 pl-4 pb-4">
                  <span className="text-primary font-semibold">Week 5-6</span>
                  <p className="text-foreground/80 text-sm">Testing, language model training, and refinement</p>
                </li>
                <li className="border-l-2 border-primary/50 pl-4">
                  <span className="text-primary font-semibold">Week 7-8</span>
                  <p className="text-foreground/80 text-sm">Deployment, staff training, and ongoing optimization</p>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Tabs defaultValue="impact" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="impact">Business Impact</TabsTrigger>
          <TabsTrigger value="technology">Technology Used</TabsTrigger>
          <TabsTrigger value="testimonial">Client Testimonial</TabsTrigger>
        </TabsList>
        <TabsContent value="impact" className="p-6 bg-white/5 border border-white/10 backdrop-blur-sm rounded-md mt-6">
          <h3 className="text-xl font-bold mb-4">Business Impact</h3>
          <p className="mb-4 text-foreground/80">
            The implementation of SyncSphere's AI chatbot solution had a significant impact on AfriMart's business operations and customer experience:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            <div>
              <h4 className="text-lg font-semibold mb-2">Operational Efficiency</h4>
              <p className="text-foreground/80">
                The customer service team size remained constant despite a 40% increase in sales volume, reducing operational costs significantly. The automated system handled 78% of all customer inquiries without human intervention.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-2">Customer Experience</h4>
              <p className="text-foreground/80">
                Average response time decreased from 15 minutes to under 30 seconds. Customer satisfaction scores increased by 32%, and repeat purchase rate improved by 24% within six months of implementation.
              </p>
            </div>
          </div>
          <p className="text-foreground/80">
            Additionally, the AI system's analytics capabilities provided valuable customer insights that informed product development and marketing strategies.
          </p>
        </TabsContent>
        
        <TabsContent value="technology" className="p-6 bg-white/5 border border-white/10 backdrop-blur-sm rounded-md mt-6">
          <h3 className="text-xl font-bold mb-4">Technology Stack</h3>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Component</TableHead>
                <TableHead>Technology</TableHead>
                <TableHead>Function</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Conversational AI</TableCell>
                <TableCell>Custom Large Language Model</TableCell>
                <TableCell>Natural language understanding and generation</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Channel Integration</TableCell>
                <TableCell>WhatsApp Business API, Web SDK, SMS Gateway</TableCell>
                <TableCell>Multi-channel communication capabilities</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Backend Systems</TableCell>
                <TableCell>REST APIs, Database Connectors</TableCell>
                <TableCell>Integration with inventory and order management</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Analytics</TableCell>
                <TableCell>Custom Dashboard, ML-based Analysis</TableCell>
                <TableCell>Performance monitoring and customer insights</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TabsContent>
        
        <TabsContent value="testimonial" className="p-6 bg-white/5 border border-white/10 backdrop-blur-sm rounded-md mt-6">
          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/40 to-blue-300/40 flex items-center justify-center mb-4">
              <span className="text-2xl font-bold text-white">A</span>
            </div>
            <p className="text-xl italic mb-6 text-foreground/90">
              "SyncSphere's AI chatbot has transformed our customer service operations. We're now able to provide instant support 24/7 across all channels, which has significantly improved customer satisfaction. The system's ability to handle multiple languages has been crucial for our pan-African expansion."
            </p>
            <div>
              <p className="font-semibold">Ahmed Kamau</p>
              <p className="text-sm text-foreground/70">Chief Customer Officer, AfriMart E-commerce</p>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </CaseStudyLayout>
  );
};

export default AfriMart;
