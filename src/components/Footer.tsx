
import React, { useState } from 'react';
import { Facebook, Instagram, Linkedin, Mail, Phone, Twitter, Cookie } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import CookieConsent from './CookieConsent';

const Footer = () => {
  return (
    <footer id="contact" className="bg-background py-16 border-t border-white/10 dark:border-white/10 light:border-gray-200">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-foreground text-2xl font-bold mb-6">SyncSphere</h3>
            <p className="text-foreground/70 mb-4 max-w-md">
              Empowering businesses globally with intelligent AI solutions designed for growth and innovation.
            </p>
            <div className="flex items-center gap-2 text-foreground/70 mb-2">
              <Phone size={16} className="text-primary" />
              <span>+1 815 472 7760</span>
            </div>
            <div className="flex items-center gap-2 text-foreground/70 mb-2">
              <Mail size={16} className="text-primary" />
              <span>info@syncsphereofficial.com</span>
            </div>
            <div className="flex items-center gap-2 text-foreground/70">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-primary">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.386"/>
              </svg>
              <a href="https://wa.me/18154727760" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                WhatsApp: +1 815 472 7760
              </a>
            </div>
          </div>
          
          <div className="flex flex-col">
            <h3 className="text-foreground text-2xl font-bold mb-6">Legal</h3>
            <div className="space-y-3">
              <Link to="/privacy-policy" className="text-foreground/70 hover:text-primary transition-colors block">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-foreground/70 hover:text-primary transition-colors block">
                Terms of Service
              </Link>
              <button
                onClick={() => {
                  // Trigger cookie settings modal
                  const event = new CustomEvent('openCookieSettings');
                  window.dispatchEvent(event);
                }}
                className="text-foreground/70 hover:text-primary transition-colors text-left flex items-center gap-2"
              >
                <Cookie size={16} />
                Cookie Settings
              </button>
            </div>
          </div>
          
          <div className="flex flex-col md:items-end">
            <h3 className="text-foreground text-2xl font-bold mb-6">Connect With Us</h3>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/syncsphereofficial" target="_blank" rel="noopener noreferrer" className="bg-white/5 dark:bg-white/5 light:bg-primary/5 border border-white/10 dark:border-white/10 light:border-primary/10 p-3 rounded-full hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-primary/10 transition-colors">
                <Facebook size={20} className="text-foreground" />
              </a>
              <a href="https://www.instagram.com/syncsphereofficial/" target="_blank" rel="noopener noreferrer" className="bg-white/5 dark:bg-white/5 light:bg-primary/5 border border-white/10 dark:border-white/10 light:border-primary/10 p-3 rounded-full hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-primary/10 transition-colors">
                <Instagram size={20} className="text-foreground" />
              </a>
              <a href="https://www.linkedin.com/company/106670846" target="_blank" rel="noopener noreferrer" className="bg-white/5 dark:bg-white/5 light:bg-primary/5 border border-white/10 dark:border-white/10 light:border-primary/10 p-3 rounded-full hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-primary/10 transition-colors">
                <Linkedin size={20} className="text-foreground" />
              </a>
              <a href="https://x.com/syncsphereoffic" target="_blank" rel="noopener noreferrer" className="bg-white/5 dark:bg-white/5 light:bg-primary/5 border border-white/10 dark:border-white/10 light:border-primary/10 p-3 rounded-full hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-primary/10 transition-colors">
                <Twitter size={20} className="text-foreground" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 dark:border-white/10 light:border-gray-200 mt-12 pt-8 text-center text-foreground/50">
          <p>&copy; 2025 SyncSphere. All rights reserved. SyncSphere — Your AI Partner for Global Growth</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
