
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Mail } from 'lucide-react';

interface TeamMember {
  name: string;
  position: string;
  bio: string;
  linkedIn?: string;
  email?: string;
}

// Ensure Allan is completely removed from this array
const teamMembers: TeamMember[] = [
  {
    name: "Cliff Evans Kyagaba",
    position: "Founder & CEO",
    bio: "Cliff brings 10+ years of experience in AI development and business transformation globally, leading innovative technology solutions for enterprises worldwide.",
    linkedIn: "https://www.linkedin.com/in/cliff-evans-kyagaba-19127363/",
    email: "ceo@syncsphereofficial.com"
  },
  {
    name: "Amutuhaire Faith Ahabwe",
    position: "AI Solutions Architect",
    bio: "Faith specializes in designing custom AI solutions that address unique challenges faced by businesses worldwide, with expertise in scalable enterprise architectures.",
    linkedIn: "https://www.linkedin.com/in/amutuhaire-faith/",
    email: "faith@syncsphereofficial.com"
  },
  {
    name: "Mateo Gomez",
    position: "Global Marketing Director",
    bio: "Based in Florida, Mateo drives SyncSphere's global marketing strategy, brand growth, and digital innovation with expertise in international market expansion and creative leadership.",
    linkedIn: "https://www.linkedin.com/in/mateo-gomez-b68292361?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    email: "mateo@syncsphereofficial.com"
  },
  {
    name: "Brian Henry Vubya",
    position: "Head of Business Development",
    bio: "Brian works closely with clients globally to understand their needs and develop comprehensive strategies for AI implementation and digital transformation.",
    linkedIn: "https://www.linkedin.com/in/henry-brian-vubya-a1943537/",
    email: "brian@syncsphereofficial.com"
  }
];

const TeamSection = () => {
  return (
    <section id="team" className="py-20 bg-background relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-30 blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="px-4 py-2 bg-white/5 dark:bg-white/5 light:bg-primary/5 rounded-full text-foreground/80 text-sm mb-6 inline-block border border-white/10 dark:border-white/10 light:border-primary/10 backdrop-blur-sm">
            Our People
          </span>
          <h2 className="text-foreground text-3xl md:text-4xl font-bold">Meet Our Team</h2>
          <p className="text-foreground/70 mt-4 max-w-xl mx-auto">
            The passionate experts behind SyncSphere's innovative AI solutions for a global market.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="animate-fadeIn" style={{ animationDelay: `${0.1 * (index + 1)}s` }}>
              <Card className="bg-white/5 border border-white/10 backdrop-blur-sm h-full hover:bg-white/10 transition-colors">
                <CardContent className="p-6">
                  <div className="mb-4 rounded-full w-24 h-24 mx-auto bg-gradient-to-br from-primary/40 to-blue-300/40 flex items-center justify-center">
                    <span className="text-3xl font-bold text-white">{member.name.charAt(0)}</span>
                  </div>
                  <h3 className="text-foreground text-xl font-semibold text-center">{member.name}</h3>
                  <p className="text-primary text-sm text-center mb-3">{member.position}</p>
                  <p className="text-foreground/70 text-center text-sm mb-4">{member.bio}</p>
                  <div className="flex justify-center gap-3 mt-auto">
                    {member.linkedIn && (
                      <a 
                        href={member.linkedIn} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                        aria-label={`${member.name}'s LinkedIn`}
                      >
                        <Linkedin size={16} className="text-foreground" />
                      </a>
                    )}
                    {member.email && (
                      <a 
                        href={`mailto:${member.email}`}
                        className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                        aria-label={`Email ${member.name}`}
                      >
                        <Mail size={16} className="text-foreground" />
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
