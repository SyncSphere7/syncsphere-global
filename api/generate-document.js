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
      case 'pitch-deck':
        filename = `${projectName || 'MVP'}_Pitch_Deck.md`;
        documentContent = generatePitchDeckDocument(content, projectName, clientName);
        break;
      case 'business-model':
        filename = `${projectName || 'MVP'}_Business_Model_Canvas.md`;
        documentContent = generateBusinessModelDocument(content, projectName, clientName);
        break;
      case 'financial-model':
        filename = `${projectName || 'MVP'}_Financial_Projections.md`;
        documentContent = generateFinancialModelDocument(content, projectName, clientName);
        break;
      case 'market-research':
        filename = `${projectName || 'MVP'}_Market_Research.md`;
        documentContent = generateMarketResearchDocument(content, projectName, clientName);
        break;
      case 'competitive-analysis':
        filename = `${projectName || 'MVP'}_Competitive_Analysis.md`;
        documentContent = generateCompetitiveAnalysisDocument(content, projectName, clientName);
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

function generatePitchDeckDocument(content, projectName, clientName) {
  const date = new Date().toLocaleDateString();
  
  return `# ${projectName || 'Startup'} Pitch Deck

**Company:** ${clientName || 'Your Startup'}  
**Date:** ${date}  
**Prepared by:** SyncSphere AI Solutions  

---

## Slide 1: Title Slide
**${projectName || 'Your Startup Name'}**  
*Transforming [Industry] with AI Innovation*

**Founders:** ${clientName || 'Founder Name'}  
**Contact:** [email] | [phone]  
**Date:** ${date}

---

## Slide 2: Problem Statement
${content.problem || `
### The Problem We're Solving
- **Pain Point 1:** Current solutions are expensive and complex
- **Pain Point 2:** Manual processes waste 40+ hours per week
- **Pain Point 3:** No integrated solution exists in the market
- **Market Impact:** $50B+ market affected by this inefficiency
`}

---

## Slide 3: Solution Overview
${content.solution || `
### Our Solution
**AI-Powered Platform** that automates [core function]

**Key Features:**
- 🤖 **Smart Automation:** Reduces manual work by 80%
- 📊 **Real-time Analytics:** Data-driven insights
- 🔗 **Seamless Integration:** Works with existing tools
- 📱 **Mobile-First:** Access anywhere, anytime
`}

---

## Slide 4: Market Opportunity
${content.market || `
### Market Size & Opportunity
- **TAM (Total Addressable Market):** $10B+
- **SAM (Serviceable Addressable Market):** $2B+
- **SOM (Serviceable Obtainable Market):** $200M+
- **Growth Rate:** 25% CAGR over next 5 years
- **Market Drivers:** Digital transformation, AI adoption
`}

---

## Slide 5: Product Demo
${content.demo || `
### Product Demonstration
**Live Demo Highlights:**
1. **User Onboarding:** 30-second setup process
2. **Core Functionality:** AI automation in action
3. **Dashboard:** Real-time analytics and insights
4. **Mobile Experience:** Responsive design showcase
5. **Integration:** Connect with popular tools

*[Include screenshots or demo video link]*
`}

---

## Slide 6: Business Model
${content.businessModel || `
### Revenue Streams
**SaaS Subscription Model:**
- **Starter:** £29/month (SMBs)
- **Professional:** £99/month (Growing businesses)
- **Enterprise:** £299/month (Large organizations)

**Additional Revenue:**
- Setup & consulting fees
- Custom integrations
- Training & support packages

**Unit Economics:**
- Customer Acquisition Cost: £150
- Lifetime Value: £2,400
- LTV/CAC Ratio: 16:1
`}

---

## Slide 7: Traction & Validation
${content.traction || `
### Current Traction
**User Metrics:**
- 🎯 **Beta Users:** 500+ active users
- 📈 **Growth Rate:** 40% month-over-month
- ⭐ **User Satisfaction:** 4.8/5 rating
- 🔄 **Retention Rate:** 85% monthly retention

**Business Metrics:**
- 💰 **Revenue:** £25K ARR
- 📊 **Conversion Rate:** 12% free-to-paid
- 🚀 **Churn Rate:** <3% monthly
`}

---

## Slide 8: Competitive Landscape
${content.competition || `
### Competitive Analysis
**Direct Competitors:**
- **Competitor A:** Legacy solution, expensive (£500+/month)
- **Competitor B:** Limited features, poor UX
- **Competitor C:** Enterprise-only, complex setup

**Our Competitive Advantage:**
- ✅ **10x Cheaper:** Affordable for SMBs
- ✅ **AI-Powered:** Smart automation vs manual
- ✅ **User-Friendly:** 5-minute setup vs hours
- ✅ **Mobile-First:** Native mobile experience
`}

---

## Slide 9: Marketing & Go-to-Market
${content.marketing || `
### Go-to-Market Strategy
**Phase 1: Product-Market Fit (Months 1-6)**
- Beta testing with 1,000 users
- Product refinement based on feedback
- Content marketing & SEO

**Phase 2: Growth (Months 7-18)**
- Paid advertising (Google, LinkedIn)
- Partnership with industry leaders
- Referral program launch

**Phase 3: Scale (Months 19+)**
- International expansion
- Enterprise sales team
- Channel partnerships
`}

---

## Slide 10: Financial Projections
${content.financials || `
### 5-Year Financial Forecast
**Revenue Projections:**
- Year 1: £250K ARR
- Year 2: £1.2M ARR
- Year 3: £4.5M ARR
- Year 4: £12M ARR
- Year 5: £25M ARR

**Key Metrics:**
- Gross Margin: 85%+
- Customer Acquisition Cost: £150
- Monthly Churn: <3%
- Break-even: Month 18
`}

---

## Slide 11: Team
${content.team || `
### Founding Team
**${clientName || 'Founder Name'}** - CEO
- 10+ years in [industry]
- Previously built and sold [company]
- Expert in [relevant skill]

**Co-Founder** - CTO
- Former [big tech company] engineer
- AI/ML expertise
- Built scalable systems for millions of users

**Advisors:**
- Industry veteran with 20+ years experience
- Former VC partner
- Marketing expert from [known company]
`}

---

## Slide 12: Funding Ask
${content.funding || `
### Investment Opportunity
**Seeking:** £2M Seed Round

**Use of Funds:**
- 40% Product Development & Engineering
- 30% Marketing & Customer Acquisition
- 20% Team Expansion
- 10% Operations & Legal

**Milestones:**
- Reach £1M ARR within 18 months
- Expand to 10,000+ active users
- Launch enterprise features
- Achieve profitability by Month 24
`}

---

## Slide 13: Investment Terms
${content.terms || `
### Proposed Terms
- **Valuation:** £8M pre-money
- **Investment:** £2M for 20% equity
- **Use of Funds:** 18-month runway
- **Board Seats:** 1 investor seat
- **Liquidation Preference:** 1x non-participating
- **Anti-dilution:** Weighted average

**Investor Benefits:**
- Quarterly updates and metrics
- Product advisory input
- Network introductions
- Board observer rights
`}

---

## Slide 14: Next Steps
${content.nextSteps || `
### Immediate Next Steps
**This Month:**
- Complete due diligence materials
- Finalize legal documentation
- Set up data room access

**Next 90 Days:**
- Close seed round
- Hire 3 key team members
- Launch v2.0 with enterprise features
- Reach 1,000 paying customers

**Contact Information:**
- Email: [founder@company.com]
- Phone: [phone number]
- LinkedIn: [profile]
`}

---

## Slide 15: Thank You & Q&A
**Thank You!**

*Questions & Discussion*

**Contact:**
- **Email:** [email]
- **Phone:** [phone]
- **Website:** [website]
- **Demo:** [demo-link]

---

**Appendix: Additional Information**
- Detailed financial model
- Technical architecture
- Customer testimonials
- Market research data
- Competitive analysis deep-dive

*This pitch deck is confidential and proprietary.*
`;
}

function generateBusinessModelDocument(content, projectName, clientName) {
  const date = new Date().toLocaleDateString();
  
  return `# ${projectName || 'Startup'} Business Model Canvas

**Company:** ${clientName || 'Your Startup'}  
**Date:** ${date}  
**Framework:** Business Model Canvas (Osterwalder)

---

## 1. Value Propositions
${content.valueProps || `
### What value do we deliver to customers?
- **Primary Value:** Save 40+ hours per week through AI automation
- **Cost Reduction:** 60% cheaper than existing solutions
- **Convenience:** 5-minute setup vs hours of configuration
- **Innovation:** AI-powered insights not available elsewhere
- **Reliability:** 99.9% uptime with enterprise-grade security
`}

## 2. Customer Segments
${content.customers || `
### Who are our most important customers?
**Primary Segment:** SMB Business Owners (50-500 employees)
- Pain: Manual processes consuming too much time
- Budget: £100-£500/month for productivity tools
- Decision maker: CEO/Operations Manager

**Secondary Segment:** Enterprise Teams
- Pain: Lack of integrated automation solutions
- Budget: £1,000+/month for enterprise tools
- Decision maker: CTO/VP Operations
`}

## 3. Customer Relationships
${content.relationships || `
### What type of relationship do we establish?
- **Self-Service:** Comprehensive onboarding and tutorials
- **Personal Assistance:** Dedicated success manager for Enterprise
- **Community:** User forum and knowledge base
- **Co-creation:** Feature requests and beta testing program
`}

## 4. Channels
${content.channels || `
### How do we reach our customers?
**Digital Channels:**
- Website with free trial signup
- Content marketing (blog, SEO)
- Social media (LinkedIn, Twitter)
- Email marketing campaigns

**Partnership Channels:**
- Integration partnerships
- Reseller network
- Industry consultants
`}

## 5. Revenue Streams
${content.revenue || `
### How do we make money?
**Subscription Revenue (90%):**
- Starter: £29/month
- Professional: £99/month  
- Enterprise: £299/month

**Service Revenue (10%):**
- Setup and consulting: £500-£2,000
- Custom integrations: £1,000-£5,000
- Training packages: £200-£1,000
`}

## 6. Key Resources
${content.resources || `
### What key resources do we need?
**Intellectual Property:**
- Proprietary AI algorithms
- Customer data and insights
- Brand and reputation

**Physical Resources:**
- Cloud infrastructure (AWS/Azure)
- Development tools and software
- Office space and equipment

**Human Resources:**
- Engineering team (AI/ML experts)
- Sales and marketing team
- Customer success team
`}

## 7. Key Activities
${content.activities || `
### What key activities do we perform?
**Product Development:**
- AI model training and optimization
- Software development and testing
- User experience design

**Marketing & Sales:**
- Content creation and SEO
- Lead generation and nurturing
- Customer onboarding

**Operations:**
- Customer support
- Infrastructure management
- Data analysis and insights
`}

## 8. Key Partnerships
${content.partnerships || `
### Who are our key partners?
**Technology Partners:**
- Cloud providers (AWS, Azure, GCP)
- Integration partners (Zapier, Microsoft)
- AI/ML service providers

**Business Partners:**
- Industry consultants
- System integrators
- Reseller network

**Strategic Alliances:**
- Complementary software vendors
- Industry associations
- Academic institutions
`}

## 9. Cost Structure
${content.costs || `
### What are our major costs?
**Technology Costs (40%):**
- Cloud infrastructure: £5K-£20K/month
- Software licenses: £2K-£5K/month
- AI/ML services: £3K-£10K/month

**Personnel Costs (50%):**
- Engineering team: £30K-£50K/month
- Sales & Marketing: £15K-£25K/month
- Operations: £10K-£15K/month

**Other Costs (10%):**
- Legal and compliance: £2K-£5K/month
- Marketing and advertising: £5K-£15K/month
- Office and admin: £3K-£8K/month
`}

---

## Business Model Validation

### Key Assumptions to Test
1. **Customer Problem:** Do SMBs really spend 40+ hours on manual processes?
2. **Solution Fit:** Will customers pay £99/month for our solution?
3. **Market Size:** Are there enough customers in our target segment?
4. **Competition:** Can we differentiate from existing solutions?
5. **Unit Economics:** Can we acquire customers profitably?

### Validation Methods
- Customer interviews (100+ potential users)
- Landing page tests with pricing
- Beta program with real usage data
- Competitive analysis and pricing research
- Financial modeling and sensitivity analysis

---

**Next Steps:**
1. Validate key assumptions through customer research
2. Build MVP to test core value proposition
3. Run pricing experiments
4. Develop go-to-market strategy
5. Create detailed financial projections

*This business model canvas should be updated regularly based on learnings and market feedback.*
`;
}

function generateFinancialModelDocument(content, projectName, clientName) {
  const date = new Date().toLocaleDateString();
  
  return `# ${projectName || 'Startup'} Financial Model & Projections

**Company:** ${clientName || 'Your Startup'}  
**Date:** ${date}  
**Period:** 5-Year Financial Forecast

---

## Executive Summary

${content.summary || `
This financial model projects strong growth with break-even achieved by Month 18 and £25M ARR by Year 5. Key assumptions include 40% monthly growth in early stages, stabilizing at 15% as we mature.
`}

## Revenue Model

### Subscription Tiers
${content.subscriptions || `
**Starter Plan:** £29/month
- Target: Small businesses (1-10 users)
- Features: Basic automation, email support
- Expected mix: 60% of customers

**Professional Plan:** £99/month  
- Target: Growing businesses (11-50 users)
- Features: Advanced automation, priority support
- Expected mix: 35% of customers

**Enterprise Plan:** £299/month
- Target: Large organizations (50+ users)
- Features: Custom integrations, dedicated support
- Expected mix: 5% of customers
`}

### Revenue Projections (5 Years)

${content.revenueProjections || `
**Year 1:**
- Customers: 500 → 2,000
- MRR: £5K → £50K
- ARR: £250K
- Growth Rate: 40% monthly → 15% monthly

**Year 2:**
- Customers: 2,000 → 8,000
- MRR: £50K → £100K
- ARR: £1.2M
- Growth Rate: 15% monthly → 10% monthly

**Year 3:**
- Customers: 8,000 → 20,000
- MRR: £100K → £375K
- ARR: £4.5M
- Growth Rate: 10% monthly → 8% monthly

**Year 4:**
- Customers: 20,000 → 40,000
- MRR: £375K → £1M
- ARR: £12M
- Growth Rate: 8% monthly → 6% monthly

**Year 5:**
- Customers: 40,000 → 65,000
- MRR: £1M → £2.1M
- ARR: £25M
- Growth Rate: 6% monthly → 5% monthly
`}

## Unit Economics

${content.unitEconomics || `
### Customer Acquisition
- **Customer Acquisition Cost (CAC):** £150
- **Payback Period:** 4.2 months
- **Sales Cycle:** 14 days average

### Customer Lifetime Value
- **Average Revenue Per User (ARPU):** £65/month
- **Gross Margin:** 85%
- **Monthly Churn Rate:** 3%
- **Customer Lifetime:** 33 months
- **Lifetime Value (LTV):** £2,145
- **LTV/CAC Ratio:** 14.3:1

### Key Metrics Targets
- **Monthly Recurring Revenue Growth:** 15%+
- **Net Revenue Retention:** 110%+
- **Gross Revenue Retention:** 97%+
- **Customer Satisfaction (NPS):** 50+
`}

## Cost Structure

### Operating Expenses
${content.opex || `
**Personnel (60% of expenses):**
- Engineering: £25K-£150K/month
- Sales & Marketing: £15K-£80K/month
- Customer Success: £8K-£40K/month
- Operations: £10K-£50K/month

**Technology (25% of expenses):**
- Cloud Infrastructure: £3K-£25K/month
- Software Licenses: £2K-£15K/month
- AI/ML Services: £1K-£10K/month

**Marketing (10% of expenses):**
- Digital Advertising: £5K-£30K/month
- Content & SEO: £2K-£10K/month
- Events & PR: £1K-£8K/month

**Other (5% of expenses):**
- Legal & Compliance: £1K-£5K/month
- Office & Admin: £2K-£8K/month
- Insurance & Misc: £1K-£3K/month
`}

## Profitability Analysis

${content.profitability || `
### Path to Profitability
- **Break-even Month:** Month 18
- **Break-even ARR:** £1.8M
- **Break-even Customers:** 12,000

### Margin Analysis
- **Gross Margin:** 85% (industry benchmark: 75-85%)
- **Contribution Margin:** 82% (after variable costs)
- **EBITDA Margin by Year 5:** 25%
- **Net Margin by Year 5:** 20%
`}

## Cash Flow Projections

${content.cashFlow || `
### Working Capital Requirements
- **Cash Burn Rate (Year 1):** £75K/month
- **Peak Cash Need:** £2.5M (Month 15)
- **Cash Flow Positive:** Month 20

### Funding Requirements
- **Seed Round:** £2M (18-month runway)
- **Series A:** £8M (Month 15, growth capital)
- **Series B:** £25M (Month 30, expansion)

### Cash Flow by Year
- **Year 1:** -£900K (investment phase)
- **Year 2:** -£200K (approaching break-even)
- **Year 3:** £1.2M (profitable growth)
- **Year 4:** £4.5M (strong cash generation)
- **Year 5:** £8.2M (mature profitability)
`}

## Sensitivity Analysis

${content.sensitivity || `
### Key Variables Impact
**Customer Acquisition Cost:**
- 50% increase: Delays break-even by 6 months
- 50% decrease: Accelerates break-even by 4 months

**Monthly Churn Rate:**
- 5% churn: Reduces Year 5 ARR to £18M
- 1% churn: Increases Year 5 ARR to £35M

**Average Revenue Per User:**
- 20% increase: Year 5 ARR reaches £30M
- 20% decrease: Year 5 ARR drops to £20M

### Scenario Planning
**Conservative Case (70% probability):**
- Slower growth, higher churn
- Year 5 ARR: £18M
- Break-even: Month 24

**Base Case (50% probability):**
- Current projections
- Year 5 ARR: £25M
- Break-even: Month 18

**Optimistic Case (30% probability):**
- Faster growth, lower churn
- Year 5 ARR: £35M
- Break-even: Month 15
`}

## Key Performance Indicators (KPIs)

${content.kpis || `
### Growth Metrics
- Monthly Recurring Revenue (MRR)
- Annual Recurring Revenue (ARR)
- Customer Count
- Revenue Growth Rate

### Efficiency Metrics
- Customer Acquisition Cost (CAC)
- Lifetime Value (LTV)
- LTV/CAC Ratio
- Payback Period

### Health Metrics
- Monthly Churn Rate
- Net Revenue Retention
- Gross Revenue Retention
- Net Promoter Score (NPS)

### Profitability Metrics
- Gross Margin
- Contribution Margin
- EBITDA Margin
- Cash Burn Rate
`}

## Investment Returns

${content.returns || `
### Investor Returns (Seed Round)
**Investment:** £2M for 20% equity
**Valuation Scenarios (Year 5):**

**Conservative (3x revenue multiple):**
- Company Value: £54M
- Investor Return: £10.8M (5.4x)
- IRR: 40%

**Base Case (4x revenue multiple):**
- Company Value: £100M
- Investor Return: £20M (10x)
- IRR: 58%

**Optimistic (5x revenue multiple):**
- Company Value: £175M
- Investor Return: £35M (17.5x)
- IRR: 75%
`}

---

## Assumptions & Risks

### Key Assumptions
1. Market demand continues to grow at 25% CAGR
2. Competition doesn't significantly impact pricing
3. Customer acquisition costs remain stable
4. Technology infrastructure scales efficiently
5. Regulatory environment remains favorable

### Risk Factors
- **Market Risk:** Economic downturn affecting SMB spending
- **Competition Risk:** Large tech companies entering market
- **Technology Risk:** AI/ML costs increasing faster than expected
- **Execution Risk:** Difficulty hiring qualified talent
- **Regulatory Risk:** Data privacy regulations impacting operations

### Mitigation Strategies
- Diversify customer base across industries
- Build strong competitive moats through IP and data
- Maintain flexible cost structure
- Invest in talent retention and culture
- Proactive compliance and legal framework

---

**Model Validation:**
- Benchmarked against 50+ SaaS companies
- Validated with industry experts and advisors
- Stress-tested with various scenarios
- Updated monthly with actual performance data

*This financial model should be updated regularly and used for strategic decision-making and investor communications.*
`;
}

function generateMarketResearchDocument(content, projectName, clientName) {
  const date = new Date().toLocaleDateString();
  
  return `# ${projectName || 'Startup'} Market Research Report

**Company:** ${clientName || 'Your Startup'}  
**Date:** ${date}  
**Research Period:** ${content.period || 'Q4 2024 - Q1 2025'}

---

## Executive Summary

${content.summary || `
Our market research indicates a significant opportunity in the AI automation space, with a total addressable market of £10B+ and growing at 25% CAGR. Key findings show strong demand from SMBs for affordable, easy-to-use automation solutions.
`}

## Market Size & Opportunity

### Total Addressable Market (TAM)
${content.tam || `
**Global AI Automation Market:**
- Current Size: £10.2B (2024)
- Projected Size: £32.1B (2029)
- CAGR: 25.8%
- Key Drivers: Digital transformation, labor costs, efficiency demands

**Geographic Breakdown:**
- North America: 45% (£4.6B)
- Europe: 30% (£3.1B)
- Asia-Pacific: 20% (£2.0B)
- Rest of World: 5% (£0.5B)
`}

### Serviceable Addressable Market (SAM)
${content.sam || `
**Target Segments:**
- SMB Business Automation: £2.1B
- Enterprise Workflow Tools: £1.8B
- Industry-Specific Solutions: £0.9B
- **Total SAM:** £4.8B

**Growth Factors:**
- 78% of SMBs plan to increase automation spending
- Average automation budget: £15K-£150K annually
- 65% currently use manual processes for core operations
`}

### Serviceable Obtainable Market (SOM)
${content.som || `
**Realistic Market Capture:**
- Year 1-2: 0.01% of SAM = £480K
- Year 3-4: 0.05% of SAM = £2.4M
- Year 5+: 0.15% of SAM = £7.2M

**Market Penetration Strategy:**
- Focus on English-speaking markets initially
- Target specific industries with high automation needs
- Leverage partnerships for faster market entry
`}

## Customer Analysis

### Primary Customer Segment
${content.primaryCustomers || `
**SMB Business Owners (50-500 employees)**

**Demographics:**
- Company Size: 50-500 employees
- Revenue: £5M-£50M annually
- Industries: Professional services, e-commerce, manufacturing
- Decision Maker: CEO, COO, or Operations Manager

**Pain Points:**
- Manual processes consuming 40+ hours/week
- Lack of integration between business tools
- High operational costs due to inefficiency
- Difficulty scaling operations

**Buying Behavior:**
- Research online for 2-4 weeks before purchase
- Prefer free trials and demos
- Budget approval process: 2-6 weeks
- Price sensitivity: High (prefer <£500/month)
`}

### Secondary Customer Segment
${content.secondaryCustomers || `
**Enterprise Teams (500+ employees)**

**Demographics:**
- Company Size: 500+ employees
- Revenue: £50M+ annually
- Industries: Financial services, healthcare, technology
- Decision Maker: CTO, VP Operations, or Department Head

**Pain Points:**
- Legacy systems requiring modernization
- Complex approval processes for new tools
- Need for enterprise-grade security and compliance
- Integration with existing enterprise software

**Buying Behavior:**
- Extensive evaluation process (3-9 months)
- Require pilot programs and POCs
- Multiple stakeholders involved in decision
- Budget: £10K-£100K+ annually
`}

## Competitive Landscape

### Direct Competitors
${content.directCompetitors || `
**Competitor A - Legacy Solution**
- Market Share: 15%
- Pricing: £500-£2,000/month
- Strengths: Established brand, enterprise features
- Weaknesses: Expensive, complex setup, poor UX
- Customer Base: 50,000+ enterprise customers

**Competitor B - Modern Alternative**
- Market Share: 8%
- Pricing: £200-£800/month
- Strengths: Better UX, modern technology
- Weaknesses: Limited features, scaling issues
- Customer Base: 20,000+ SMB customers

**Competitor C - Niche Player**
- Market Share: 5%
- Pricing: £100-£400/month
- Strengths: Industry-specific features
- Weaknesses: Limited market, single industry focus
- Customer Base: 10,000+ industry-specific customers
`}

### Indirect Competitors
${content.indirectCompetitors || `
**Manual Processes**
- Cost: Internal labor costs
- Market Share: 60%+ of potential customers
- Advantages: No software costs, full control
- Disadvantages: Time-consuming, error-prone, doesn't scale

**Generic Automation Tools**
- Examples: Zapier, Microsoft Power Automate
- Market Share: 20%
- Advantages: Flexible, integrates with many tools
- Disadvantages: Requires technical knowledge, limited AI

**Custom Development**
- Cost: £50K-£500K+ for custom solutions
- Market Share: 5%
- Advantages: Perfectly tailored to needs
- Disadvantages: Expensive, long development time, maintenance
`}

## Market Trends

### Technology Trends
${content.techTrends || `
**AI & Machine Learning Adoption**
- 73% of businesses plan to increase AI investment
- AI automation market growing 35% annually
- Focus shifting from rule-based to intelligent automation

**No-Code/Low-Code Movement**
- 65% of businesses prefer visual, no-code solutions
- Citizen developers driving automation adoption
- Demand for user-friendly interfaces increasing

**Integration & Interoperability**
- Average business uses 87 different software tools
- 89% want better integration between tools
- API-first architecture becoming standard
`}

### Business Trends
${content.businessTrends || `
**Remote Work Impact**
- 78% of businesses now permanently remote/hybrid
- Increased need for digital workflow automation
- Focus on productivity and efficiency tools

**Cost Optimization**
- 82% of businesses looking to reduce operational costs
- Automation seen as key to cost reduction
- ROI requirements becoming more stringent

**Digital Transformation**
- 91% of businesses engaged in digital initiatives
- Automation is top priority for 67% of companies
- Budget allocation increasing by 15% annually
`}

## Customer Research Findings

### Survey Results (n=500)
${content.surveyResults || `
**Current State:**
- 78% use manual processes for core operations
- Average time spent on manual tasks: 42 hours/week
- 65% have tried automation tools before
- 43% abandoned previous solutions due to complexity

**Pain Points:**
- Too expensive: 67%
- Too complex to set up: 58%
- Doesn't integrate with existing tools: 52%
- Poor customer support: 41%
- Limited customization: 38%

**Desired Features:**
- Easy setup (5 minutes or less): 89%
- Affordable pricing (<£100/month): 76%
- Pre-built templates: 71%
- Mobile access: 64%
- AI-powered insights: 59%
`}

### Interview Insights (n=50)
${content.interviewInsights || `
**Key Quotes:**
- "We waste so much time on repetitive tasks" - CEO, Marketing Agency
- "Existing solutions are built for enterprises, not businesses like ours" - Operations Manager, E-commerce
- "I need something that works out of the box" - Founder, Consulting Firm

**Common Themes:**
- Simplicity is more important than advanced features
- Price is a major factor in decision-making
- Integration with existing tools is critical
- Customer support quality influences retention
- Mobile access is increasingly important
`}

## Market Entry Strategy

### Go-to-Market Approach
${content.gtmStrategy || `
**Phase 1: Market Validation (Months 1-6)**
- Beta program with 100 early adopters
- Product-market fit validation
- Pricing optimization
- Customer feedback integration

**Phase 2: Market Penetration (Months 7-18)**
- Content marketing and SEO
- Paid advertising (Google, LinkedIn)
- Partnership development
- Referral program launch

**Phase 3: Market Expansion (Months 19+)**
- Geographic expansion
- New customer segments
- Product line extensions
- Channel partnerships
`}

### Pricing Strategy
${content.pricingStrategy || `
**Value-Based Pricing:**
- Starter: £29/month (10x cheaper than alternatives)
- Professional: £99/month (5x cheaper than alternatives)
- Enterprise: £299/month (competitive with alternatives)

**Pricing Psychology:**
- Free trial to reduce risk
- Monthly billing to lower barrier to entry
- Annual discounts to improve retention
- Usage-based pricing for scalability
`}

## Risk Analysis

### Market Risks
${content.marketRisks || `
**Economic Downturn**
- Impact: Reduced SMB spending on software
- Probability: Medium
- Mitigation: Focus on ROI and cost savings messaging

**Increased Competition**
- Impact: Price pressure and customer acquisition challenges
- Probability: High
- Mitigation: Build strong differentiation and customer loyalty

**Technology Disruption**
- Impact: New technologies making current approach obsolete
- Probability: Low
- Mitigation: Continuous innovation and technology monitoring
`}

## Recommendations

### Strategic Recommendations
${content.recommendations || `
1. **Focus on SMB Market First**
   - Largest underserved segment
   - Less competition than enterprise
   - Faster sales cycles

2. **Emphasize Simplicity and Affordability**
   - Key differentiators vs. competitors
   - Addresses main customer pain points
   - Enables rapid market penetration

3. **Build Strong Integration Ecosystem**
   - Critical for customer adoption
   - Creates switching costs
   - Enables network effects

4. **Invest in Customer Success**
   - High churn risk in SMB segment
   - Word-of-mouth is crucial for growth
   - Reduces customer acquisition costs
`}

---

## Methodology

**Research Methods:**
- Industry reports and analyst research
- Customer surveys (n=500)
- In-depth interviews (n=50)
- Competitive analysis
- Market sizing analysis
- Trend analysis

**Data Sources:**
- Gartner, Forrester, IDC reports
- Government statistics
- Industry associations
- Company financial reports
- Customer feedback platforms

*This market research report should be updated quarterly to reflect changing market conditions and new data.*
`;
}

function generateCompetitiveAnalysisDocument(content, projectName, clientName) {
  const date = new Date().toLocaleDateString();
  
  return `# ${projectName || 'Startup'} Competitive Analysis

**Company:** ${clientName || 'Your Startup'}  
**Date:** ${date}  
**Analysis Period:** ${content.period || 'Q4 2024'}

---

## Executive Summary

${content.summary || `
Our competitive analysis reveals a fragmented market with no clear leader, presenting a significant opportunity for a well-positioned solution. Current competitors either focus on enterprise (expensive, complex) or lack AI capabilities (limited functionality).
`}

## Competitive Landscape Overview

### Market Structure
${content.marketStructure || `
**Market Characteristics:**
- Fragmented market with no dominant player
- Mix of legacy enterprise solutions and modern SMB tools
- Growing demand for AI-powered automation
- Price sensitivity in SMB segment

**Competitive Intensity:** Medium-High
- Low barriers to entry for basic features
- High barriers for advanced AI capabilities
- Network effects create switching costs
- Brand loyalty is moderate
`}

## Direct Competitors

### Competitor 1: Enterprise Legacy Solution
${content.competitor1 || `
**Company:** AutomateEnterprise
**Founded:** 2015
**Funding:** £50M Series C
**Employees:** 500+

**Market Position:**
- Market Share: 15%
- Customer Base: 2,000+ enterprise clients
- Geographic Presence: Global
- Target Market: Enterprise (1,000+ employees)

**Product Overview:**
- Comprehensive workflow automation platform
- Enterprise-grade security and compliance
- Complex setup requiring IT involvement
- Extensive customization capabilities

**Pricing:**
- Enterprise: £2,000-£10,000/month
- Implementation: £50,000-£200,000
- Annual contracts required

**Strengths:**
- ✅ Established brand and reputation
- ✅ Comprehensive feature set
- ✅ Enterprise-grade security
- ✅ Strong customer support
- ✅ Extensive integrations

**Weaknesses:**
- ❌ Very expensive for SMBs
- ❌ Complex setup and maintenance
- ❌ Poor user experience
- ❌ Long implementation times
- ❌ Requires technical expertise

**Strategy:**
- Focus on large enterprise deals
- Expand through acquisitions
- Invest heavily in compliance features
- Build partner ecosystem
`}

### Competitor 2: Modern SMB Solution
${content.competitor2 || `
**Company:** FlowEasy
**Founded:** 2019
**Funding:** £15M Series A
**Employees:** 150+

**Market Position:**
- Market Share: 8%
- Customer Base: 15,000+ SMB clients
- Geographic Presence: US, UK, Canada
- Target Market: SMB (50-500 employees)

**Product Overview:**
- User-friendly workflow builder
- Pre-built templates for common use cases
- Cloud-based with mobile access
- Basic AI features (limited)

**Pricing:**
- Starter: £49/month
- Professional: £149/month
- Enterprise: £299/month
- Monthly or annual billing

**Strengths:**
- ✅ Better user experience than legacy solutions
- ✅ Reasonable pricing for SMBs
- ✅ Quick setup and deployment
- ✅ Good customer community
- ✅ Regular feature updates

**Weaknesses:**
- ❌ Limited AI capabilities
- ❌ Fewer integrations than enterprise solutions
- ❌ Scaling issues with larger customers
- ❌ Basic reporting and analytics
- ❌ Limited customization options

**Strategy:**
- Focus on ease of use and quick wins
- Expand integration marketplace
- Move upmarket to larger SMBs
- International expansion
`}

### Competitor 3: AI-Focused Startup
${content.competitor3 || `
**Company:** SmartAutomate
**Founded:** 2021
**Funding:** £8M Seed
**Employees:** 80+

**Market Position:**
- Market Share: 3%
- Customer Base: 5,000+ clients
- Geographic Presence: US, UK
- Target Market: Tech-savvy SMBs

**Product Overview:**
- AI-first automation platform
- Machine learning for process optimization
- Developer-friendly APIs
- Modern, intuitive interface

**Pricing:**
- Basic: £79/month
- Pro: £199/month
- Enterprise: £499/month
- Usage-based pricing for AI features

**Strengths:**
- ✅ Advanced AI capabilities
- ✅ Modern technology stack
- ✅ Strong developer community
- ✅ Innovative features
- ✅ Fast product development

**Weaknesses:**
- ❌ Limited market presence
- ❌ Requires technical knowledge
- ❌ Fewer pre-built templates
- ❌ Higher learning curve
- ❌ Limited enterprise features

**Strategy:**
- Lead with AI innovation
- Build developer ecosystem
- Focus on technical buyers
- Rapid feature development
`}

## Indirect Competitors

### Manual Processes
${content.manualProcesses || `
**Market Share:** 60%+ of potential customers

**Why Customers Choose This:**
- No software costs
- Full control over processes
- No learning curve
- Works with any system

**Disadvantages:**
- Time-consuming and inefficient
- Error-prone
- Doesn't scale
- High labor costs

**Our Advantage:**
- Demonstrate clear ROI and time savings
- Show cost of manual errors
- Emphasize scalability benefits
`}

### Generic Tools (Zapier, Microsoft Power Automate)
${content.genericTools || `
**Market Share:** 20% of potential customers

**Why Customers Choose This:**
- Flexible and customizable
- Integrates with many tools
- Lower cost than specialized solutions
- Familiar brands

**Disadvantages:**
- Requires technical knowledge
- Limited AI capabilities
- Complex for advanced workflows
- Poor user experience

**Our Advantage:**
- Better user experience
- AI-powered automation
- Industry-specific templates
- Superior customer support
`}

## Competitive Positioning

### Positioning Map
${content.positioning || `
**Dimensions: Ease of Use vs. Advanced Features**

**High Ease of Use, Basic Features:**
- Generic tools (Zapier, etc.)
- Simple workflow builders

**High Ease of Use, Advanced Features:**
- **Our Position** 🎯
- AI-powered but user-friendly

**Low Ease of Use, Basic Features:**
- Manual processes
- Basic automation tools

**Low Ease of Use, Advanced Features:**
- Enterprise legacy solutions
- Custom development
`}

### Differentiation Strategy
${content.differentiation || `
**Our Unique Value Proposition:**
"The only AI-powered automation platform that's as easy to use as it is powerful"

**Key Differentiators:**
1. **AI-First Approach:** Built with AI at the core, not bolted on
2. **Simplicity:** 5-minute setup vs. hours/days for competitors
3. **Affordability:** 10x cheaper than enterprise solutions
4. **SMB Focus:** Designed specifically for growing businesses
5. **Mobile-First:** Native mobile experience vs. desktop-only

**Competitive Moats:**
- Proprietary AI algorithms
- Customer data and insights
- Network effects from integrations
- Brand and customer loyalty
`}

## Feature Comparison

### Core Features Matrix
${content.featureMatrix || `
| Feature | Us | Competitor 1 | Competitor 2 | Competitor 3 |
|---------|----|--------------|--------------|--------------|
| AI Automation | ✅ Advanced | ❌ None | ⚠️ Basic | ✅ Advanced |
| Ease of Setup | ✅ 5 minutes | ❌ Days/weeks | ✅ 30 minutes | ⚠️ 2 hours |
| Mobile App | ✅ Native | ❌ None | ⚠️ Web only | ⚠️ Web only |
| Pricing | ✅ £29-299 | ❌ £2K-10K | ✅ £49-299 | ⚠️ £79-499 |
| Integrations | ✅ 200+ | ✅ 500+ | ⚠️ 100+ | ⚠️ 50+ |
| Templates | ✅ 100+ | ⚠️ 50+ | ✅ 150+ | ❌ 20+ |
| Support | ✅ 24/7 chat | ✅ Dedicated | ⚠️ Email | ⚠️ Community |
| Enterprise | ⚠️ Growing | ✅ Strong | ❌ Limited | ❌ Limited |
`}

## Pricing Analysis

### Pricing Comparison
${content.pricingAnalysis || `
**Entry-Level Pricing:**
- Our Solution: £29/month
- Competitor 1: £2,000/month (69x more expensive)
- Competitor 2: £49/month (1.7x more expensive)
- Competitor 3: £79/month (2.7x more expensive)

**Mid-Tier Pricing:**
- Our Solution: £99/month
- Competitor 1: £5,000/month (50x more expensive)
- Competitor 2: £149/month (1.5x more expensive)
- Competitor 3: £199/month (2x more expensive)

**Value Analysis:**
- We offer 80% of enterprise features at 5% of the cost
- Better AI capabilities than most competitors
- Superior user experience across all price points
- Fastest time-to-value in the market
`}

## SWOT Analysis

### Our Strengths
${content.strengths || `
- **AI-First Architecture:** Built for intelligent automation
- **User Experience:** Intuitive, mobile-friendly interface
- **Pricing:** Affordable for SMBs, competitive for enterprise
- **Speed:** Fastest setup and deployment in market
- **Focus:** Laser focus on SMB needs and pain points
`}

### Our Weaknesses
${content.weaknesses || `
- **Brand Recognition:** New brand vs. established competitors
- **Feature Breadth:** Fewer total features than enterprise solutions
- **Enterprise Credibility:** Limited large enterprise customers
- **Integration Count:** Fewer integrations than market leaders
- **Geographic Presence:** Limited to English-speaking markets
`}

### Market Opportunities
${content.opportunities || `
- **Underserved SMB Market:** 60% still use manual processes
- **AI Adoption:** Growing demand for intelligent automation
- **Remote Work:** Increased need for digital workflows
- **Cost Pressure:** Businesses seeking affordable solutions
- **International Expansion:** Untapped global markets
`}

### Market Threats
${content.threats || `
- **Big Tech Entry:** Google, Microsoft, Amazon entering market
- **Economic Downturn:** Reduced SMB software spending
- **Competitive Response:** Existing players copying our approach
- **Technology Disruption:** New automation paradigms
- **Regulatory Changes:** Data privacy and AI regulations
`}

## Competitive Response Strategy

### Defensive Strategies
${content.defensiveStrategies || `
**Against Price Competition:**
- Emphasize total cost of ownership
- Highlight superior ROI and time savings
- Bundle additional value-added services
- Implement customer loyalty programs

**Against Feature Competition:**
- Focus on core use cases that matter most
- Emphasize ease of use over feature count
- Rapid development of high-impact features
- Customer-driven product roadmap

**Against Brand Competition:**
- Build strong customer community
- Invest in content marketing and thought leadership
- Leverage customer success stories
- Partner with industry influencers
`}

### Offensive Strategies
${content.offensiveStrategies || `
**Market Share Capture:**
- Target competitors' dissatisfied customers
- Offer migration assistance and incentives
- Competitive comparison campaigns
- Free trial with competitor feature matching

**Innovation Leadership:**
- Continuous AI capability advancement
- First-to-market with new automation paradigms
- Patent key innovations
- Thought leadership in AI automation

**Market Expansion:**
- Enter new geographic markets
- Expand to adjacent customer segments
- Develop industry-specific solutions
- Strategic partnerships and acquisitions
`}

## Monitoring & Intelligence

### Competitive Intelligence Sources
${content.intelligence || `
**Public Sources:**
- Company websites and blogs
- Press releases and news articles
- Social media and community forums
- Job postings and hiring patterns
- Patent filings and IP activity

**Customer Sources:**
- Win/loss analysis
- Customer feedback and surveys
- Sales team competitive insights
- Support ticket analysis
- Churn analysis and exit interviews

**Industry Sources:**
- Analyst reports and research
- Industry conferences and events
- Partner and vendor feedback
- Investor presentations and earnings calls
- Regulatory filings and financial reports
`}

### Key Metrics to Track
${content.metricsToTrack || `
**Market Metrics:**
- Market share changes
- Customer acquisition rates
- Pricing changes and trends
- Feature release frequency
- Customer satisfaction scores

**Competitive Metrics:**
- Win/loss rates against each competitor
- Deal size and sales cycle comparisons
- Customer churn to competitors
- Feature gap analysis
- Brand sentiment and awareness
`}

---

## Action Items

### Immediate (Next 30 Days)
1. Develop competitive battle cards for sales team
2. Create competitor comparison landing pages
3. Implement competitive win/loss tracking
4. Launch competitive intelligence monitoring

### Short-term (Next 90 Days)
1. Address top 3 feature gaps vs. competitors
2. Develop migration tools for competitor customers
3. Create competitive positioning messaging
4. Train customer success team on competitive responses

### Long-term (Next 12 Months)
1. Build sustainable competitive advantages
2. Expand into underserved market segments
3. Develop strategic partnerships
4. Consider strategic acquisitions

*This competitive analysis should be updated quarterly and used to inform product, marketing, and sales strategies.*
`;
}