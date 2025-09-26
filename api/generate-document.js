export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { type, content, projectName, clientName } = req.body;

    // Generate document content based on type
    let documentContent = '';
    let filename = '';

    switch (type) {
      case 'budget':
        filename = `${projectName || 'MVP'}_Budget_Plan.md`;
        documentContent = generateBudgetDocument(content, projectName, clientName);
        break;
      case 'proposal':
        filename = `${projectName || 'MVP'}_Proposal.md`;
        documentContent = generateProposalDocument(content, projectName, clientName);
        break;
      case 'mvp-plan':
        filename = `${projectName || 'MVP'}_Development_Plan.md`;
        documentContent = generateMVPPlanDocument(content, projectName, clientName);
        break;
      default:
        return res.status(400).json({ error: 'Invalid document type' });
    }

    // Set headers for file download
    res.setHeader('Content-Type', 'text/markdown');
    res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
    
    return res.status(200).send(documentContent);

  } catch (error) {
    console.error('Document generation error:', error);
    return res.status(500).json({ error: 'Failed to generate document' });
  }
}

function generateBudgetDocument(content, projectName, clientName) {
  const date = new Date().toLocaleDateString();
  
  return `# ${projectName || 'MVP'} Budget Plan

**Client:** ${clientName || 'Valued Client'}  
**Date:** ${date}  
**Prepared by:** SyncSphere AI Solutions  

---

## Executive Summary

${content.summary || 'This document outlines the comprehensive budget breakdown for your MVP development project.'}

## Budget Breakdown

### Development Costs
${content.development || `
- **Frontend Development:** £8,000 - £12,000
- **Backend Development:** £6,000 - £10,000
- **Database Setup:** £2,000 - £3,000
- **API Integration:** £3,000 - £5,000
`}

### AI Integration Costs
${content.aiIntegration || `
- **AI Model Setup:** £4,000 - £6,000
- **Training & Fine-tuning:** £2,000 - £4,000
- **API Costs (Annual):** £1,200 - £2,400
`}

### Infrastructure & Hosting
${content.infrastructure || `
- **Cloud Hosting (Annual):** £1,800 - £3,600
- **Domain & SSL:** £200 - £400
- **CDN & Security:** £600 - £1,200
`}

### Total Investment
${content.total || `
**Minimum Viable Product:** £25,800 - £45,600  
**Recommended Package:** £35,000 - £55,000  
**Premium Solution:** £50,000 - £75,000
`}

## Payment Options

### Option 1: Pilot Program
- **Cost:** £1,500
- **Delivery:** 7-14 days
- **Includes:** Basic working prototype
- **Credits toward full project:** 100%

### Option 2: Phased Development
- **Phase 1:** 30% upfront
- **Phase 2:** 40% at milestone
- **Phase 3:** 30% on completion

### Option 3: Monthly Payments
- **Duration:** 6-12 months
- **Interest:** 0% for first 6 months
- **Flexibility:** Pause/resume options

## ROI Projections

${content.roi || `
**Year 1:** 150-300% ROI  
**Year 2:** 400-600% ROI  
**Break-even:** 4-8 months  
`}

## Next Steps

1. **Pilot Program:** Start with £1,500 proof-of-concept
2. **Requirements Gathering:** 1-2 weeks
3. **Development Phase:** 4-8 weeks
4. **Testing & Launch:** 1-2 weeks

---

**Contact Information:**
- **WhatsApp:** +44 742 481 9094
- **Email:** sales@syncsphereofficial.com
- **Website:** syncsphereofficial.com

*This budget is valid for 30 days and subject to final requirements confirmation.*
`;
}

function generateProposalDocument(content, projectName, clientName) {
  const date = new Date().toLocaleDateString();
  
  return `# ${projectName || 'MVP'} Development Proposal

**Client:** ${clientName || 'Valued Client'}  
**Date:** ${date}  
**Prepared by:** SyncSphere AI Solutions  
**Project Duration:** ${content.duration || '6-12 weeks'}  

---

## Project Overview

${content.overview || 'We propose to develop a cutting-edge MVP solution that leverages AI technology to transform your business operations and deliver exceptional user experiences.'}

## Objectives

${content.objectives || `
- **Primary Goal:** Launch market-ready MVP within 8 weeks
- **User Experience:** Intuitive, responsive, and engaging interface
- **Scalability:** Built to handle 10,000+ users from day one
- **AI Integration:** Smart automation and intelligent features
- **Performance:** Sub-2 second load times, 99.9% uptime
`}

## Technical Approach

### Architecture
${content.architecture || `
- **Frontend:** React/Next.js with TypeScript
- **Backend:** Node.js/Python with microservices
- **Database:** PostgreSQL with Redis caching
- **AI/ML:** OpenAI GPT integration + custom models
- **Hosting:** AWS/Vercel with auto-scaling
`}

### Key Features
${content.features || `
1. **User Authentication & Profiles**
2. **AI-Powered Core Functionality**
3. **Real-time Data Processing**
4. **Mobile-Responsive Design**
5. **Admin Dashboard & Analytics**
6. **Payment Integration (Stripe)**
7. **Email/SMS Notifications**
8. **API Documentation & Testing**
`}

## Development Timeline

### Phase 1: Foundation (Weeks 1-2)
${content.phase1 || `
- Project setup and architecture
- Database design and setup
- Basic authentication system
- Core UI components
`}

### Phase 2: Core Development (Weeks 3-5)
${content.phase2 || `
- Main feature implementation
- AI integration and testing
- API development
- Frontend-backend integration
`}

### Phase 3: Polish & Launch (Weeks 6-8)
${content.phase3 || `
- UI/UX refinement
- Performance optimization
- Security testing
- Deployment and launch
`}

## Investment & Value

### Development Package
${content.investment || `
**Total Investment:** £35,000 - £55,000  
**Payment Terms:** Flexible options available  
**Pilot Program:** Start with £1,500 proof-of-concept  
`}

### What's Included
- Complete source code ownership
- 90-day warranty and support
- Documentation and training
- Deployment assistance
- 3 months free hosting

## Success Metrics

${content.metrics || `
- **User Acquisition:** 1,000+ users in first month
- **Engagement:** 70%+ daily active users
- **Performance:** <2s load times, 99.9% uptime
- **Revenue:** Break-even within 6 months
`}

## Why Choose SyncSphere

- **Proven Track Record:** 500+ successful projects
- **AI Expertise:** Cutting-edge AI integration
- **Rapid Development:** MVP in 6-8 weeks
- **Ongoing Support:** 24/7 technical assistance
- **Flexible Payments:** Multiple payment options

## Next Steps

1. **Approve Proposal:** Sign and return this document
2. **Pilot Program:** £1,500 proof-of-concept (optional)
3. **Project Kickoff:** Requirements gathering session
4. **Development Begins:** Within 1 week of approval

---

**Proposal Valid Until:** ${new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toLocaleDateString()}

**Contact Information:**
- **WhatsApp:** +44 742 481 9094
- **Email:** sales@syncsphereofficial.com
- **Direct Line:** +1 815 472 7760 (US) / +31 97010257248 (Netherlands)

*Ready to transform your idea into reality? Let's build something amazing together.*
`;
}

function generateMVPPlanDocument(content, projectName, clientName) {
  const date = new Date().toLocaleDateString();
  
  return `# ${projectName || 'MVP'} Development Plan

**Client:** ${clientName || 'Valued Client'}  
**Date:** ${date}  
**Project Manager:** SyncSphere Development Team  

---

## MVP Strategy

${content.strategy || 'This comprehensive plan outlines the step-by-step approach to building your Minimum Viable Product, focusing on core features that deliver maximum value to early users.'}

## Market Validation

### Target Audience
${content.audience || `
- **Primary Users:** Early adopters aged 25-45
- **Market Size:** Estimated 100,000+ potential users
- **Pain Points:** Current solutions are expensive/complex
- **Value Proposition:** 10x faster, 50% cheaper alternative
`}

### Competitive Analysis
${content.competition || `
- **Direct Competitors:** 3-5 established players
- **Competitive Advantage:** AI-powered automation
- **Market Gap:** Lack of user-friendly solutions
- **Pricing Strategy:** Freemium with premium features
`}

## Feature Prioritization

### Must-Have Features (MVP v1.0)
${content.mustHave || `
1. **User Registration & Authentication**
2. **Core Functionality (Primary Use Case)**
3. **Basic Dashboard/Interface**
4. **Payment Processing**
5. **Email Notifications**
`}

### Should-Have Features (v1.1)
${content.shouldHave || `
1. **Advanced Analytics**
2. **Mobile App**
3. **API Access**
4. **Team Collaboration**
5. **Integration Capabilities**
`}

### Could-Have Features (v2.0)
${content.couldHave || `
1. **AI-Powered Recommendations**
2. **Advanced Reporting**
3. **White-label Solutions**
4. **Enterprise Features**
5. **Third-party Integrations**
`}

## Technical Implementation

### Technology Stack
${content.techStack || `
- **Frontend:** React 18 + TypeScript + Tailwind CSS
- **Backend:** Node.js + Express + PostgreSQL
- **Authentication:** Auth0 or Firebase Auth
- **Payments:** Stripe + PayPal integration
- **Hosting:** Vercel (Frontend) + Railway (Backend)
- **AI/ML:** OpenAI API + custom models
`}

### Development Phases

#### Phase 1: Foundation (2 weeks)
${content.devPhase1 || `
- [ ] Project setup and repository creation
- [ ] Database schema design
- [ ] Authentication system implementation
- [ ] Basic UI/UX framework
- [ ] CI/CD pipeline setup
`}

#### Phase 2: Core Features (3 weeks)
${content.devPhase2 || `
- [ ] Main feature development
- [ ] API endpoints creation
- [ ] Frontend-backend integration
- [ ] Payment system integration
- [ ] Basic testing implementation
`}

#### Phase 3: Polish & Launch (2 weeks)
${content.devPhase3 || `
- [ ] UI/UX refinement
- [ ] Performance optimization
- [ ] Security audit
- [ ] Beta testing with select users
- [ ] Production deployment
`}

## Launch Strategy

### Pre-Launch (Week -2 to 0)
${content.preLaunch || `
- Beta testing with 50-100 users
- Bug fixes and performance optimization
- Marketing website completion
- Social media presence setup
- Press kit preparation
`}

### Launch Week
${content.launch || `
- Product Hunt launch
- Social media announcement
- Email marketing campaign
- Influencer outreach
- Customer support readiness
`}

### Post-Launch (Week 1-4)
${content.postLaunch || `
- User feedback collection
- Performance monitoring
- Bug fixes and improvements
- Feature usage analytics
- Customer success stories
`}

## Success Metrics & KPIs

### User Metrics
${content.userMetrics || `
- **Sign-ups:** 1,000+ in first month
- **Active Users:** 70% weekly retention
- **User Engagement:** 15+ minutes average session
- **Conversion Rate:** 5-10% free to paid
`}

### Business Metrics
${content.businessMetrics || `
- **Revenue:** £10,000+ MRR by month 3
- **Customer Acquisition Cost:** <£50
- **Lifetime Value:** £500+
- **Churn Rate:** <5% monthly
`}

### Technical Metrics
${content.techMetrics || `
- **Uptime:** 99.9%
- **Load Time:** <2 seconds
- **API Response:** <200ms
- **Error Rate:** <0.1%
`}

## Risk Management

### Technical Risks
${content.techRisks || `
- **Scalability Issues:** Implement auto-scaling from day 1
- **Security Vulnerabilities:** Regular security audits
- **Third-party Dependencies:** Have backup solutions ready
- **Performance Bottlenecks:** Continuous monitoring
`}

### Business Risks
${content.businessRisks || `
- **Market Competition:** Focus on unique value proposition
- **User Adoption:** Implement strong onboarding flow
- **Funding Requirements:** Secure 6-12 months runway
- **Team Scaling:** Plan hiring strategy early
`}

## Budget Allocation

### Development Costs (70%)
${content.devBudget || `
- Frontend Development: £12,000
- Backend Development: £10,000
- AI Integration: £6,000
- Testing & QA: £4,000
`}

### Marketing & Launch (20%)
${content.marketingBudget || `
- Website & Branding: £3,000
- Digital Marketing: £4,000
- PR & Outreach: £2,000
`}

### Operations & Contingency (10%)
${content.opsBudget || `
- Hosting & Infrastructure: £2,000
- Legal & Compliance: £1,500
- Contingency Fund: £2,500
`}

## Next Steps

### Immediate Actions (This Week)
- [ ] Approve development plan
- [ ] Finalize technical requirements
- [ ] Set up project management tools
- [ ] Begin Phase 1 development

### Short-term Goals (Next Month)
- [ ] Complete MVP development
- [ ] Conduct beta testing
- [ ] Prepare launch materials
- [ ] Secure initial funding/revenue

### Long-term Vision (3-6 Months)
- [ ] Scale to 10,000+ users
- [ ] Achieve product-market fit
- [ ] Plan Series A funding
- [ ] Expand team and features

---

**Project Timeline:** 8 weeks from approval  
**Total Investment:** £45,000 - £65,000  
**Expected ROI:** 300-500% in Year 1  

**Contact Information:**
- **Project Manager:** development@syncsphereofficial.com
- **WhatsApp:** +44 742 481 9094
- **Emergency Contact:** +1 815 472 7760

*This plan is a living document and will be updated based on user feedback and market conditions.*
`;
}