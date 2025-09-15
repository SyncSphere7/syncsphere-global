
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-6 py-16">
          <Link to="/" className="inline-flex items-center text-foreground/70 hover:text-primary mb-8 transition-colors">
            <ArrowLeft size={20} className="mr-2" />
            Back to Home
          </Link>
          
          <h1 className="text-3xl md:text-5xl font-bold mb-10 text-foreground">Privacy Policy</h1>
          
          <div className="prose prose-invert max-w-4xl mx-auto">
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4">Introduction</h2>
              <p className="text-white/70 mb-4">
                At SyncSphere, we respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
              </p>
              <p className="text-white/70">
                This policy applies to information we collect when you use our website, products, and services, or when you otherwise interact with us.
              </p>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
              <p className="text-white/70 mb-4">
                We may collect, use, store, and transfer different kinds of personal data about you, which we have grouped together as follows:
              </p>
              <ul className="list-disc pl-6 text-white/70 space-y-2">
                <li>Identity Data: includes first name, last name, username or similar identifier.</li>
                <li>Contact Data: includes email address, telephone numbers, and physical address.</li>
                <li>Technical Data: includes internet protocol (IP) address, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li>
                <li>Usage Data: includes information about how you use our website, products, and services.</li>
                <li>Marketing and Communications Data: includes your preferences in receiving marketing from us and our third parties and your communication preferences.</li>
              </ul>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
              <p className="text-white/70 mb-4">
                We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
              </p>
              <ul className="list-disc pl-6 text-white/70 space-y-2">
                <li>To provide and maintain our service, including to monitor the usage of our products.</li>
                <li>To contact you about our products and services.</li>
                <li>To manage your account and the customer relationship.</li>
                <li>To provide customer support and respond to your inquiries.</li>
                <li>To gather analysis or valuable information so that we can improve our products and services.</li>
                <li>To detect, prevent and address technical issues with our platform.</li>
              </ul>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4">Data Security</h2>
              <p className="text-white/70">
                We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way, altered, or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors, and other third parties who have a business need to know.
              </p>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4">Your Legal Rights</h2>
              <p className="text-white/70 mb-4">
                Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to:
              </p>
              <ul className="list-disc pl-6 text-white/70 space-y-2">
                <li>Request access to your personal data.</li>
                <li>Request correction of your personal data.</li>
                <li>Request erasure of your personal data.</li>
                <li>Object to processing of your personal data.</li>
                <li>Request restriction of processing your personal data.</li>
                <li>Request transfer of your personal data.</li>
                <li>Right to withdraw consent.</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
              <p className="text-white/70">
                If you have any questions about this privacy policy or our privacy practices, please contact us at info@syncsphereofficial.com.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
