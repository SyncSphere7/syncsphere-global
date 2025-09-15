
import React from 'react';
import CaseStudyLayout from '../../components/CaseStudyLayout';
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const HealthPlus = () => {
  return (
    <CaseStudyLayout 
      title="Inventory Management Automation" 
      client="HealthPlus Pharmacy Chain" 
      industry="Healthcare"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-2">
          <div className="aspect-video rounded-lg bg-muted/20 overflow-hidden mb-8">
            <img 
              src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=1200&h=675" 
              alt="HealthPlus Pharmacy automated inventory management system in action"
              className="w-full h-full object-cover"
            />
          </div>
          
          <h2 className="text-2xl font-bold mb-4">Challenge</h2>
          <p className="mb-6 text-foreground/80">
            HealthPlus, a rapidly expanding pharmacy chain with over 50 locations across East Africa, faced critical inventory management challenges:
          </p>
          <ul className="list-disc pl-6 mb-8 space-y-2 text-foreground/80">
            <li>Frequent stockouts of essential medications leading to lost sales and compromised patient care</li>
            <li>Excess inventory of slow-moving items tying up capital and leading to expiration issues</li>
            <li>Manual, paper-based ordering processes causing errors and inefficiencies</li>
            <li>Lack of visibility into real-time inventory levels across all locations</li>
            <li>Difficulty in forecasting demand due to seasonal variations and regional differences</li>
            <li>Complex regulatory requirements for tracking pharmaceutical products</li>
          </ul>
          
          <h2 className="text-2xl font-bold mb-4">Solution</h2>
          <p className="mb-6 text-foreground/80">
            SyncSphere designed and implemented a comprehensive AI-powered inventory management automation system:
          </p>
          <ul className="list-disc pl-6 mb-8 space-y-2 text-foreground/80">
            <li>Installed IoT-enabled smart shelves and RFID tracking for real-time inventory monitoring</li>
            <li>Developed predictive analytics algorithms to forecast demand based on historical data, seasonal trends, and regional factors</li>
            <li>Created an automated ordering system with approval workflows and vendor integration</li>
            <li>Implemented a centralized dashboard providing real-time visibility across all locations</li>
            <li>Built regulatory compliance features including lot tracking, expiration date management, and recall handling</li>
            <li>Designed mobile applications for staff to perform inventory tasks efficiently</li>
          </ul>
        </div>
        
        <div className="lg:col-span-1">
          <Card className="bg-white/5 border border-white/10 backdrop-blur-sm mb-8">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Key Results</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-foreground/80">Stockouts Reduction</span>
                    <span className="text-primary font-bold">88%</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '88%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-foreground/80">Inventory Costs</span>
                    <span className="text-primary font-bold">23% Lower</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '23%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-foreground/80">Ordering Tasks Automated</span>
                    <span className="text-primary font-bold">95%</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '95%' }}></div>
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
                  <span className="text-primary font-semibold">Month 1-2</span>
                  <p className="text-foreground/80 text-sm">Analysis and system design phase</p>
                </li>
                <li className="border-l-2 border-primary/50 pl-4 pb-4">
                  <span className="text-primary font-semibold">Month 3-5</span>
                  <p className="text-foreground/80 text-sm">Core system development and pilot implementation</p>
                </li>
                <li className="border-l-2 border-primary/50 pl-4 pb-4">
                  <span className="text-primary font-semibold">Month 6-8</span>
                  <p className="text-foreground/80 text-sm">Hardware installation and staff training across locations</p>
                </li>
                <li className="border-l-2 border-primary/50 pl-4">
                  <span className="text-primary font-semibold">Month 9-12</span>
                  <p className="text-foreground/80 text-sm">Full rollout and optimization of the predictive analytics</p>
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
            The implementation of SyncSphere's inventory automation system transformed HealthPlus's operations:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            <div>
              <h4 className="text-lg font-semibold mb-2">Financial Performance</h4>
              <p className="text-foreground/80">
                HealthPlus reported a 16% increase in overall profitability within the first year of implementation. Inventory carrying costs decreased by 23%, freeing up approximately $1.2 million in working capital. Product expiration losses were reduced by 91%, saving an additional $350,000 annually.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-2">Operational Efficiency</h4>
              <p className="text-foreground/80">
                Staff time spent on inventory management decreased by 68%, allowing pharmacy professionals to focus more on patient care. Order fulfillment accuracy improved to 99.7%, while the time required for physical inventory counts decreased by 75%.
              </p>
            </div>
          </div>
          <p className="text-foreground/80">
            The system's success enabled HealthPlus to accelerate their expansion plans, opening 15 new locations within 18 months of implementation without requiring proportional increases in inventory management staff.
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
                <TableCell className="font-medium">Hardware</TableCell>
                <TableCell>RFID Tags, Smart Shelves, IoT Sensors</TableCell>
                <TableCell>Real-time inventory monitoring and tracking</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">AI System</TableCell>
                <TableCell>Machine Learning Algorithms, Neural Networks</TableCell>
                <TableCell>Demand forecasting and inventory optimization</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Backend</TableCell>
                <TableCell>Cloud Infrastructure, Distributed Database</TableCell>
                <TableCell>Data storage, processing, and synchronization</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Frontend</TableCell>
                <TableCell>Web Dashboard, Mobile Applications</TableCell>
                <TableCell>User interfaces for monitoring and management</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TabsContent>
        
        <TabsContent value="testimonial" className="p-6 bg-white/5 border border-white/10 backdrop-blur-sm rounded-md mt-6">
          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/40 to-blue-300/40 flex items-center justify-center mb-4">
              <span className="text-2xl font-bold text-white">D</span>
            </div>
            <p className="text-xl italic mb-6 text-foreground/90">
              "SyncSphere's inventory automation system has been a game-changer for our pharmacy chain. We've virtually eliminated stockouts of critical medications, significantly reduced our inventory costs, and freed our pharmacists to focus on patient care instead of counting pills. The predictive ordering capabilities have been remarkably accurate, even accounting for seasonal disease patterns and regional variations in our market."
            </p>
            <div>
              <p className="font-semibold">Dr. David Muturi</p>
              <p className="text-sm text-foreground/70">Operations Director, HealthPlus Pharmacy Chain</p>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </CaseStudyLayout>
  );
};

export default HealthPlus;
