
import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { ThemeToggle } from './ThemeToggle';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  
  // Check if we're on the home page
  const isHomePage = location.pathname === '/';
  
  // Create link targets based on current page
  const homeLink = isHomePage ? "#home" : "/";

  // Services submenu items
  const servicesItems = [
    { title: "AI Workflow Automation / Business Systems", path: "/services/automations" },
    { title: "AI Chatbots (SMS, WhatsApp, Web, Social)", path: "/services/chatbots" },
    { title: "AI Voice Agents", path: "/services/voice-agents" },
    { title: "Website Design & Revamps", path: "/services/web-development" },
    { title: "E-commerce Solutions", path: "/services/ecommerce" },
    { title: "Mobile & Web App Development", path: "/services/app-development" },
    { title: "Startup MVP Development (30 Days)", path: "/startup-mvp" },
    { title: "AI Consulting & Ongoing Support", path: "/services/consulting" },
  ];

  // Handle contact navigation
  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isHomePage) {
      // If on home page, scroll to contact section
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If not on home page, navigate to home and then scroll to contact
      navigate('/', { replace: true });
      setTimeout(() => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <header className="bg-background py-4 px-6 sticky top-0 z-50 border-b border-white/10 dark:border-white/10 light:border-gray-200">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img 
              src="/syncsphere-logo.png" 
              alt="SyncSphere Logo" 
              className="h-12 mr-2"
            />
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link 
            to={homeLink} 
            className="text-foreground/80 hover:text-foreground transition-colors"
          >
            Home
          </Link>
          
          {/* Services dropdown */}
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-foreground/80 hover:text-foreground transition-colors bg-transparent">Services</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid grid-cols-1 gap-2 p-4 w-[500px]">
                    {servicesItems.map((service) => (
                      <li key={service.path}>
                        <NavigationMenuLink asChild>
                          <Link
                            to={service.path}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-primary hover:text-white focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">{service.title}</div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <Link 
            to="/pricing"
            className="text-foreground/80 hover:text-foreground transition-colors"
          >
            Pricing
          </Link>

          <a 
            href="#contact"
            onClick={handleContactClick}
            className="text-foreground/80 hover:text-foreground transition-colors cursor-pointer"
          >
            Contact
          </a>
          <ThemeToggle />
        </nav>
        
        {/* Mobile Navigation Button */}
        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle />
          <Button 
            variant="ghost" 
            className="text-foreground p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background w-full py-4 px-4 absolute left-0 top-full border-b border-white/10 dark:border-white/10 light:border-gray-200 z-50 max-h-screen overflow-y-auto">
          <nav className="flex flex-col space-y-3">
            <Link 
              to={homeLink}
              className="text-foreground/80 hover:text-foreground transition-colors py-2 px-3 rounded-md hover:bg-white/5"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            
            {/* Mobile Services Submenu */}
            <div className="flex flex-col space-y-1">
              <div className="text-foreground/80 flex items-center cursor-pointer py-2 px-3 rounded-md">
                Services
              </div>
              <div className="pl-3 flex flex-col space-y-1">
                {servicesItems.map((service) => (
                  <Link
                    key={service.path}
                    to={service.path}
                    className="text-foreground/70 hover:text-primary transition-colors text-sm py-2 px-3 rounded-md hover:bg-white/5"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
            </div>
            
            <Link 
              to="/pricing"
              className="text-foreground/80 hover:text-foreground transition-colors py-2 px-3 rounded-md hover:bg-white/5"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            
            <a 
              href="#contact"
              onClick={(e) => {
                handleContactClick(e);
                setIsMenuOpen(false);
              }}
              className="text-foreground/80 hover:text-foreground transition-colors cursor-pointer py-2 px-3 rounded-md hover:bg-white/5"
            >
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
