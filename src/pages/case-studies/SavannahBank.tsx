
import React from 'react';
import CaseStudyLayout from '../../components/CaseStudyLayout';
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const SavannahBank = () => {
  return (
    <CaseStudyLayout 
      title="Intelligent Call Handling System" 
      client="Savannah Bank" 
      industry="Financial Services"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-2">
          <div className="aspect-video rounded-lg bg-muted/20 overflow-hidden mb-8">
            <img 
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&h=675" 
              alt="Savannah Bank customer service center with AI voice agent integration"
              className="w-full h-full object-cover"
            />
          </div>
          
          <h2 className="text-2xl font-bold mb-4">Challenge</h2>
          <p className="mb-6 text-foreground/80">
            Savannah Bank, a growing financial institution with branches across East Africa, faced several challenges in their customer service operations:
          </p>
          <ul className="list-disc pl-6 mb-8 space-y-2 text-foreground/80">
            <li>High call volumes leading to long wait times for customers</li>
            <li>Staffing limitations for their call center, especially during peak hours</li>
            <li>Inconsistent quality of service due to staff turnover</li>
            <li>Rising costs associated with traditional call center operations</li>
            <li>Need for better routing of specialized queries to appropriate departments</li>
            <li>Regulatory requirements for recording and maintaining call records</li>
          </ul>
          
          <h2 className="text-2xl font-bold mb-4">Solution</h2>
          <p className="mb-6 text-foreground/80">
            SyncSphere designed and implemented an Intelligent Call Handling System with advanced AI voice agents:
          </p>
          <ul className="list-disc pl-6 mb-8 space-y-2 text-foreground/80">
            <li>Developed natural-sounding AI voice agents capable of understanding various accents and dialects</li>
            <li>Integrated with the bank's core banking system for secure account verification and transaction processing</li>
            <li>Created intelligent routing logic to direct complex queries to specialized human agents</li>
            <li>Implemented a secure authentication system using voice biometrics and knowledge-based verification</li>
            <li>Built comprehensive analytics dashboard for monitoring system performance and customer interactions</li>
            <li>Designed a scalable system that could handle increasing call volumes as the bank expanded</li>
          </ul>
        </div>
        
        <div className="lg:col-span-1">
          <Card className="bg-white/5 border border-white/10 backdrop-blur-sm mb-8">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Key Results</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-foreground/80">Automated Calls</span>
                    <span className="text-primary font-bold">75% Handled</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-foreground/80">Call Duration</span>
                    <span className="text-primary font-bold">40% Reduction</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '40%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-foreground/80">Service Consistency</span>
                    <span className="text-primary font-bold">87% Improvement</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '87%' }}></div>
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
                  <span className="text-primary font-semibold">Month 1</span>
                  <p className="text-foreground/80 text-sm">System design and infrastructure setup</p>
                </li>
                <li className="border-l-2 border-primary/50 pl-4 pb-4">
                  <span className="text-primary font-semibold">Month 2-3</span>
                  <p className="text-foreground/80 text-sm">AI voice agent development and banking system integration</p>
                </li>
                <li className="border-l-2 border-primary/50 pl-4 pb-4">
                  <span className="text-primary font-semibold">Month 4</span>
                  <p className="text-foreground/80 text-sm">Security testing, compliance verification, and staff training</p>
                </li>
                <li className="border-l-2 border-primary/50 pl-4">
                  <span className="text-primary font-semibold">Month 5</span>
                  <p className="text-foreground/80 text-sm">Phased deployment and continuous improvement</p>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Tabs defaultValue="impact" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="impact">Financial Impact</TabsTrigger>
          <TabsTrigger value="technology">Technology Used</TabsTrigger>
          <TabsTrigger value="testimonial">Client Testimonial</TabsTrigger>
        </TabsList>
        <TabsContent value="impact" className="p-6 bg-white/5 border border-white/10 backdrop-blur-sm rounded-md mt-6">
          <h3 className="text-xl font-bold mb-4">Financial Impact</h3>
          <p className="mb-4 text-foreground/80">
            The implementation of the Intelligent Call Handling System delivered significant financial benefits for Savannah Bank:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            <div>
              <h4 className="text-lg font-semibold mb-2">Cost Savings</h4>
              <p className="text-foreground/80">
                The bank reduced call center operational costs by 42% within the first year, representing approximately $850,000 in annual savings. This was achieved through reduced staffing requirements and improved operational efficiency.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-2">Revenue Enhancement</h4>
              <p className="text-foreground/80">
                The system's ability to identify and suggest relevant banking products during calls resulted in a 23% increase in cross-selling success. Additionally, improved customer satisfaction led to a 15% increase in customer retention.
              </p>
            </div>
          </div>
          <p className="text-foreground/80">
            Return on Investment (ROI) analysis showed that the initial system investment was recouped within 8 months of full deployment, with ongoing savings and revenue enhancements continuing to benefit the bank.
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
                <TableCell className="font-medium">Voice Recognition</TableCell>
                <TableCell>Custom Speech-to-Text Engine</TableCell>
                <TableCell>Accurate transcription of customer queries</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Voice Synthesis</TableCell>
                <TableCell>Neural Text-to-Speech System</TableCell>
                <TableCell>Natural-sounding responses with local accent options</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Banking Integration</TableCell>
                <TableCell>Secure API Gateway, Encryption Layer</TableCell>
                <TableCell>Safe connection to core banking systems</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Call Management</TableCell>
                <TableCell>Cloud-based VoIP System</TableCell>
                <TableCell>Call routing, recording, and quality monitoring</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TabsContent>
        
        <TabsContent value="testimonial" className="p-6 bg-white/5 border border-white/10 backdrop-blur-sm rounded-md mt-6">
          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/40 to-blue-300/40 flex items-center justify-center mb-4">
              <span className="text-2xl font-bold text-white">S</span>
            </div>
            <p className="text-xl italic mb-6 text-foreground/90">
              "The AI voice agents from SyncSphere have revolutionized our customer service operations. Our customers appreciate the immediate response and consistently high quality of service, while we've benefited from significant cost savings and improved operational efficiency. The system's ability to handle routine transactions while intelligently escalating complex queries has been key to its success."
            </p>
            <div>
              <p className="font-semibold">Sarah Omondi</p>
              <p className="text-sm text-foreground/70">Head of Digital Transformation, Savannah Bank</p>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </CaseStudyLayout>
  );
};

export default SavannahBank;
