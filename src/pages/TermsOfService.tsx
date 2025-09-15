
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-6 py-16">
          <Link to="/" className="inline-flex items-center text-foreground/70 hover:text-primary mb-8 transition-colors">
            <ArrowLeft size={20} className="mr-2" />
            Back to Home
          </Link>
          
          <h1 className="text-3xl md:text-5xl font-bold mb-10 text-foreground">Terms of Service</h1>
          
          <div className="prose prose-invert max-w-4xl mx-auto">
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4">Introduction</h2>
              <p className="text-white/70 mb-4">
                These Terms of Service govern your use of the SyncSphere website and services offered by SyncSphere. By accessing our website or using our services, you agree to be bound by these Terms.
              </p>
              <p className="text-white/70">
                Please read these Terms carefully before using our services. If you do not agree with any part of these Terms, you may not use our services.
              </p>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4">Use of Services</h2>
              <p className="text-white/70 mb-4">
                Our services are provided for business and professional use. You agree to use our services only for lawful purposes and in accordance with these Terms. You agree not to:
              </p>
              <ul className="list-disc pl-6 text-white/70 space-y-2">
                <li>Use our services in any way that violates any applicable local, national, or international law or regulation.</li>
                <li>Attempt to gain unauthorized access to any part of our services, other accounts, computer systems, or networks connected to our services.</li>
                <li>Use our services to transmit any data or material that is harmful, threatening, abusive, harassing, defamatory, or otherwise objectionable.</li>
                <li>Engage in any conduct that restricts or inhibits anyone's use or enjoyment of our services.</li>
                <li>Use our services for any purpose that is unlawful or prohibited by these Terms.</li>
              </ul>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4">Intellectual Property</h2>
              <p className="text-white/70 mb-4">
                The content, features, and functionality of our services, including but not limited to text, graphics, logos, icons, images, audio clips, data compilations, and software, are owned by SyncSphere or its licensors and are protected by copyright, trademark, and other intellectual property laws.
              </p>
              <p className="text-white/70">
                You may not copy, reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our website without our express prior written permission.
              </p>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4">User Content</h2>
              <p className="text-white/70 mb-4">
                Any content you upload, post, or otherwise make available through our services is your responsibility. You retain ownership of your content, but by posting content, you grant SyncSphere a non-exclusive, royalty-free, transferable, sublicensable, worldwide license to use, store, display, reproduce, modify, and distribute your content in connection with the operation of our services.
              </p>
              <p className="text-white/70">
                You represent and warrant that your content does not violate any third-party rights, including intellectual property rights and privacy rights, and that your content complies with these Terms and all applicable laws.
              </p>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4">Limitation of Liability</h2>
              <p className="text-white/70">
                In no event shall SyncSphere, its directors, employees, partners, agents, suppliers, or affiliates be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use our services.
              </p>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4">Changes to Terms</h2>
              <p className="text-white/70">
                We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
              <p className="text-white/70">
                If you have any questions about these Terms, please contact us at info@syncsphereofficial.com.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;
