import React, { useState } from 'react';
import { 
  MessageSquare, 
  Brain, 
  Dumbbell, 
  Utensils, 
  Stethoscope, 
  Monitor, 
  Search, 
  Rocket, 
  MapPin, 
  CheckCircle2, 
  Workflow, 
  ChevronDown, 
  Star, 
  Mail, 
  Globe, 
  ChevronRight,
  Target,
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const NICHES = [
  { id: 'whatsapp', icon: MessageSquare, title: 'WhatsApp AI', description: '24/7 Automation' },
  { id: 'ollama', icon: Brain, title: 'Ollama AI', description: 'Local LLMs' },
  { id: 'n8n', icon: Workflow, title: 'n8n Flows', description: 'Zero API Fees' },
  { id: 'gyms', icon: Dumbbell, title: 'Gyms', description: 'Member Booking' },
  { id: 'restaurants', icon: Utensils, title: 'Restaurants', description: 'Order Auto' },
  { id: 'clinics', icon: Stethoscope, title: 'Clinics', description: 'Patient Triage' },
  { id: 'infra', icon: Monitor, title: 'AI Infra', description: 'Server Setup' },
  { id: 'seo', icon: Search, title: 'AI SEO', description: 'Keyword Silos' },
  { id: 'startups', icon: Rocket, title: 'Startups', description: 'Lead Machines' },
  { id: 'kerala', icon: MapPin, title: 'Kerala Local', description: 'Regional Supp' },
];

const STACK_STATS = [
  { label: 'Auto-Resolved Queries', value: '85%' },
  { label: 'Monthly AI Cost', value: '₹0' },
  { label: 'Full Deploy', value: '3 Days' },
  { label: 'Always On', value: '24/7' },
  { label: 'Languages Supported', value: 'EN·ML·HI·TA' },
];

const PRICING = [
  {
    name: 'Starter',
    price: '₹4,999',
    features: [
      '1 WhatsApp AI bot',
      'Ollama (1 model)',
      'n8n (5 workflows)',
      'Cloudflare Tunnel',
      '3 integrations',
      '30-day email support',
    ],
    excluded: ['Custom workflows', 'Onsite support'],
    cta: 'Get Started',
  },
  {
    name: 'Business',
    price: '₹9,999',
    popular: true,
    features: [
      '3 WhatsApp AI bots',
      'Ollama (3 models)',
      'n8n (unlimited workflows)',
      '20+ integrations',
      'CRM + invoice automation',
      'Social media AI pipeline',
      '90-day priority support',
      'API access',
    ],
    cta: 'Deploy Now',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    features: [
      'Unlimited bots + workflows',
      'HPE ML350 server setup',
      'Multi-model Ollama cluster',
      'White-label kit',
      'DPDP compliance review',
      'Onsite support (Kerala)',
      '12-month managed SLA',
      'Staff training included',
    ],
    cta: 'Talk to Us',
  },
];

const TESTIMONIALS = [
  {
    name: 'Arun Kumar',
    role: 'Owner',
    company: 'FitZone Gym, Kakkanad Kochi',
    text: 'CyberTeck deployed our WhatsApp AI on n8n + Ollama. We handle 300+ customer messages/day at ₹0 per message. Before, we spent ₹18,000/month on OpenAI. That cost is completely gone.',
    rating: 5,
  },
  {
    name: 'Meera Nair',
    role: 'Owner',
    company: 'Spice Garden Restaurant, Ernakulam',
    text: 'The restaurant WhatsApp bot was live in 3 days. Handles our entire reservation and order flow. No-shows dropped 35% with automated reminders.',
    rating: 5,
  },
  {
    name: 'Rajan Thomas',
    role: 'CTO',
    company: 'DevForge Solutions, Infopark Kochi',
    text: 'CyberTeck set up Ollama on our server + n8n email automation. Support team handles 60% fewer repetitive emails. Paid for itself in week 1.',
    rating: 5,
  },
];

const FAQS = [
  {
    question: 'What is Ollama local AI and why does it eliminate API costs?',
    answer: 'Ollama allows you to run large language models (LLMs) like Llama 3 or Mistral directly on your own hardware or server. Because the processing happens locally, you don\'t pay per-token or per-message fees to providers like OpenAI or Anthropic.',
  },
  {
    question: 'How do I set up a free WhatsApp AI bot in India?',
    answer: 'We use the official WhatsApp Business API combined with n8n (an open-source automation tool) and Ollama. By self-hosting these, the only cost is your server or electricity, making the AI interactions effectively free.',
  },
];

const KEYWORDS = [
  'whatsapp ai agent free', 'ollama local ai india', 'n8n ollama whatsapp', 'kochi ai automation',
  'local ai no api cost', 'free whatsapp business bot', 'restaurant whatsapp order bot',
  'school ai tutor offline ollama', 'cloudflare tunnel local ollama', 'thrippunithura business ai tools'
];

const SectionHeading = ({ children, badge, subtitle }: { children: React.ReactNode, badge?: string, subtitle?: string }) => (
  <div className="flex flex-col items-center text-center mb-20 px-6">
    {badge && (
      <span className="bg-zinc-900 text-brand-primary text-[10px] font-black px-4 py-1.5 rounded-md uppercase tracking-[0.2em] mb-6 border border-zinc-800">
        {badge}
      </span>
    )}
    <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[0.85] mb-8 italic">
      {children}
    </h2>
    {subtitle && <p className="text-zinc-500 max-w-2xl text-xl font-light leading-relaxed">{subtitle}</p>}
  </div>
);

export const HomePage = () => {
  const [activeNiche, setActiveNiche] = useState(NICHES[0].id);

  // Schema.org JSON-LD
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "CyberTeck",
    "url": "https://cyberteck.in/",
    "logo": "https://cyberteck.in/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-7500555454",
      "contactType": "sales",
      "areaServed": "IN",
      "availableLanguage": ["en", "ml", "hi"]
    },
    "sameAs": [
      "https://facebook.com/cyberteck",
      "https://linkedin.com/company/cyberteck",
      "https://twitter.com/cyberteck"
    ]
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "CyberTeck AI Automation Kochi",
    "image": "https://cyberteck.in/hero.jpg",
    "@id": "https://cyberteck.in/",
    "url": "https://cyberteck.in/",
    "telephone": "+917500555454",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Thrippunithura",
      "addressLocality": "Kochi",
      "addressRegion": "Kerala",
      "postalCode": "682301",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 9.9519,
      "longitude": 76.3503
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    }
  };

  return (
    <div className="min-h-screen grid-bg">
      <Helmet>
        <title>CyberTeck | #1 Zero-Cost AI Automation Kochi Kerala India</title>
        <meta name="description" content="Kochi's premier AI automation firm. Deploy free WhatsApp AI bots, self-hosted Ollama local LLMs, and n8n workflows. Save 90% on AI API costs today. Enterprise AI server builds in Ernakulam." />
        <link rel="canonical" href="https://cyberteck.in/" />
        <meta property="og:title" content="CyberTeck | Zero-Cost AI Automation Kerala India" />
        <meta property="og:description" content="Stop paying for OpenAI API. Deploy local LLMs & n8n workflows for WhatsApp automation in Kerala." />
        <meta name="keywords" content={KEYWORDS.join(', ')} />
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
      </Helmet>
      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-12 mb-12"
          >
            <div className="flex items-center gap-8 mb-10 text-zinc-400 font-black text-[11px] uppercase tracking-[0.3em]">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-brand-primary rounded-full animate-pulse"></span>
                Kerala's Premier AI Authority
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-brand-primary rounded-full"></span>
                Kochi · Calicut · Trivandrum
              </div>
            </div>
            <h1 className="text-[70px] md:text-[160px] font-black uppercase tracking-tighter leading-[0.8] mb-10 italic">
              STOP PAYING<br/>THE AI<br/><span className="text-transparent text-stroke">TAX.</span>
            </h1>
            <p className="text-zinc-400 text-2xl font-light max-w-3xl leading-tight mb-12">
              We engineer enterprise-grade <span className="text-white font-black italic">WhatsApp AI Agents</span> using <span className="text-white font-black italic">Ollama</span> and <span className="text-white font-black italic">n8n</span>. Your servers, your models, <span className="text-brand-primary font-black italic uppercase tracking-widest">zero per-message fees.</span>
            </p>
            
            <div className="flex flex-wrap gap-6">
              <button 
                onClick={() => document.getElementById('clusters')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-brand-primary text-black px-12 py-6 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-white transition-all transform hover:-translate-y-1"
              >
                Explore Technology Clusters
              </button>
              <div className="flex gap-4">
                <div className="bg-zinc-900 border border-zinc-800 px-8 py-5 rounded-2xl flex flex-col justify-center">
                  <span className="text-[10px] font-black uppercase tracking-tighter text-zinc-500">API Message Cost</span>
                  <span className="text-3xl font-black text-zinc-100 italic">₹0.00</span>
                  <span className="text-[10px] font-black uppercase mt-1 text-brand-primary tracking-widest Bird leading-none">Forever Free</span>
                </div>
                <div className="bg-zinc-900 border border-zinc-800 px-8 py-5 rounded-2xl flex flex-col justify-center">
                  <span className="text-[10px] font-black uppercase tracking-tighter text-zinc-500">Local Privacy</span>
                  <span className="text-3xl font-black text-zinc-100 italic">100%</span>
                  <span className="text-[10px] font-black uppercase mt-1 text-brand-primary tracking-widest leading-none">VPC Hosted</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Authority Section / SEO Clusters */}
      <section id="clusters" className="py-24 border-t border-zinc-900 bg-zinc-950/30">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading badge="Authority Pillars" subtitle="Deep-dive into the tech clusters that make zero-cost AI possible for Indian enterprise.">
            The Digital <br/> Sovereign Stack
          </SectionHeading>

          <div className="grid lg:grid-cols-3 gap-12 mb-20">
            <div className="p-10 border border-zinc-900 rounded-[2.5rem] bg-zinc-950/50 hover:bg-zinc-900/50 transition-colors group">
              <div className="w-12 h-12 bg-zinc-900 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand-primary/10 transition-colors">
                <Brain className="text-brand-primary" size={24} />
              </div>
              <h3 className="text-2xl font-black mb-6 italic tracking-tight">Ollama Local LLMs</h3>
              <p className="text-zinc-500 text-sm leading-relaxed mb-6">
                Most Indian businesses are leaking sensitive data to cloud LLM providers. Our <strong>local AI installations in Kochi</strong> ensure that your customer data, internal SOPs, and financial records never leave your building. We leverage <em>Llama 3</em>, <em>Mistral</em>, and <em>DeepSeek</em> on local hardware. No tokens, no internet dependence, 100% speed.
              </p>
              <ul className="space-y-3 text-[10px] font-black text-zinc-400 uppercase tracking-widest">
                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-brand-primary rounded-full"/> Zero Data Leakage</li>
                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-brand-primary rounded-full"/> Offline GPU Inference</li>
                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-brand-primary rounded-full"/> Enterprise Model Hardening</li>
              </ul>
            </div>

            <div className="p-10 border border-zinc-900 rounded-[2.5rem] bg-zinc-950/50 hover:bg-zinc-900/50 transition-colors group">
              <div className="w-12 h-12 bg-zinc-900 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand-primary/10 transition-colors">
                <Workflow className="text-brand-primary" size={24} />
              </div>
              <h3 className="text-2xl font-black mb-6 italic tracking-tight">n8n Automation</h3>
              <p className="text-zinc-500 text-sm leading-relaxed mb-6">
                Replace expensive Zapier subscriptions with self-hosted <strong>n8n automation</strong>. We architect complex logic that integrates WhatsApp, Google Sheets, Tally, and Zoho CRM into a unified execution engine. Infinite workflows with zero per-task costs. Our Kochi-based experts build logic that scales to millions of executions.
              </p>
              <ul className="space-y-3 text-[10px] font-black text-zinc-400 uppercase tracking-widest">
                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-brand-primary rounded-full"/> Multi-Step Logic Flows</li>
                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-brand-primary rounded-full"/> 500+ Native Integrations</li>
                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-brand-primary rounded-full"/> Custom Node Development</li>
              </ul>
            </div>

            <div className="p-10 border border-zinc-900 rounded-[2.5rem] bg-zinc-950/50 hover:bg-zinc-900/50 transition-colors group">
              <div className="w-12 h-12 bg-zinc-900 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand-primary/10 transition-colors">
                <MessageSquare className="text-brand-primary" size={24} />
              </div>
              <h3 className="text-2xl font-black mb-6 italic tracking-tight">WhatsApp AI (Meta)</h3>
              <p className="text-zinc-500 text-sm leading-relaxed mb-6">
                Our <strong>WhatsApp AI for Bharat</strong> understands Hinglish, Malayalam-English, and direct regional queries. We build bots that don't just chat, but <em>act</em>—processing orders, scheduling site visits, and resolving support tickets autonomously. Directly integrated with your local Ollama instance for secure processing.
              </p>
              <ul className="space-y-3 text-[10px] font-black text-zinc-400 uppercase tracking-widest">
                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-brand-primary rounded-full"/> Real-Time Order Tracking</li>
                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-brand-primary rounded-full"/> UPI Payment Integration</li>
                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-brand-primary rounded-full"/> 24/7 Multilingual Support</li>
              </ul>
            </div>
          </div>

          <div className="prose prose-invert max-w-none border-t border-zinc-900 pt-20">
            <h2 className="text-5xl font-black italic tracking-tighter mb-12 text-white">The State of AI Automation in India (2026)</h2>
            <div className="grid md:grid-cols-2 gap-16">
              <div className="text-zinc-400 text-lg leading-relaxed font-light">
                <p className="mb-8">
                  In 2026, the competitive landscape for Indian SMEs has shifted. The early adopters of cloud-based AI are now facing "API Fatigue"—where the monthly bills for OpenAI or Anthropic tokens outweigh the productivity gains. At CyberTeck, we believe the future of AI is <span className="text-white font-black italic underline decoration-brand-primary">sovereign and local.</span>
                </p>
                <p className="mb-8">
                  Our mission in Kerala is to bridge the gap between global LLM research and local business application. By deploying enterprise-grade hardware at <em>Infopark Kochi</em> and providing on-site server audits in <em>Trivandrum</em> and <em>Calicut</em>, we ensure that Kerala's tech ecosystem remains at the forefront of the AI revolution without sacrificing data privacy or financial stability.
                </p>
                <div className="p-8 border border-zinc-800 bg-zinc-900/30 rounded-3xl">
                  <h4 className="text-brand-primary font-black uppercase text-xs tracking-widest mb-4">Regional Technical Leadership</h4>
                  <p className="text-xs font-medium leading-relaxed">
                    We serve the entire South Indian corridor from our HQ in Ernakulam. Our systems are tuned for the "Indian Context"—handling mixed-language queries (Manglish/Hinglish) with native accuracy that generic cloud models often miss.
                  </p>
                </div>
              </div>
              <div className="text-zinc-400 text-lg leading-relaxed font-light">
                <p className="mb-8">
                  Why settle for generic GPT-4 responses? Our specialized deployments allow you to <strong>retrain and fine-tune models</strong> specifically for your industry. Whether it's a legal firm needing to scan 10,000 documents locally or an e-commerce giant automating peak-season WhatsApp support, our technical stack scales with your ambition.
                </p>
                <p className="mb-8">
                  Keyword authority: <em>AI Automation Kochi, WhatsApp Chatbot Kerala, n8n Experts India, Private LLM Installation, Ollama Enterprise Support.</em> We don't just build bots; we build the future of Indian enterprise infrastructure. Our one-time setup fee replaces thousands of dollars in monthly SaaS rent.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="h-40 bg-zinc-900/50 rounded-2xl flex flex-col items-center justify-center p-6 text-center border border-zinc-800 border-dashed">
                    <span className="text-4xl font-black italic text-brand-primary">₹0</span>
                    <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500 mt-2">API Cost Forever</span>
                  </div>
                  <div className="h-40 bg-zinc-900/50 rounded-2xl flex flex-col items-center justify-center p-6 text-center border border-zinc-800 border-dashed">
                    <span className="text-4xl font-black italic text-brand-primary">100%</span>
                    <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500 mt-2">Data Sovereignty</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Badges Scroller */}
      <div className="border-y border-white/5 py-4 overflow-hidden relative glass">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="flex whitespace-nowrap gap-12 px-12 items-center"
        >
          {[...KEYWORDS, ...KEYWORDS].map((k, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <Target size={14} className="text-brand-primary" />
              <span className="font-mono text-sm uppercase text-slate-500 hover:text-brand-primary transition-colors cursor-default">
                {k} <span className="ml-2 opacity-30">·</span>
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Niches Grid */}
      <section id="features" className="py-24 max-w-7xl mx-auto px-6">
        <SectionHeading 
          badge="10 Business Silos" 
          subtitle="Pick your niche below. Each has dedicated products, pricing, and keyword architecture — all built on self-hosted, zero-API-cost open-source tools."
        >
          Industry Specific. <br/> Fully Hardened.
        </SectionHeading>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {NICHES.map((n) => (
            <button
              key={n.id}
              onClick={() => setActiveNiche(n.id)}
              className={`p-8 rounded-2xl transition-all flex flex-col items-center text-center gap-6 group hover:-translate-y-2 ${
                activeNiche === n.id 
                ? 'bg-brand-primary text-black shadow-[0_0_40px_-5px_rgba(34,211,238,0.5)]' 
                : 'bg-zinc-900 border border-zinc-800'
              }`}
            >
              <n.icon size={40} strokeWidth={activeNiche === n.id ? 2.5 : 1} className={activeNiche === n.id ? 'text-black' : 'text-zinc-500'} />
              <div>
                <div className="font-black uppercase tracking-tight text-lg mb-1">{n.title}</div>
                <div className={`text-[9px] uppercase font-black tracking-widest opacity-60 leading-none`}>{n.description}</div>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* WhatsApp Feature Detail */}
      <section id="whatsapp" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: 'Full WhatsApp AI Starter', tag: 'BEST SELLER', price: '₹4,999', stack: 'n8n + Ollama + Cloudflare', link: '/whatsapp-ai/free-bot' },
                { title: 'WhatsApp Lead Machine', tag: 'B2B FLOWS', price: '₹7,999', stack: 'CRM Sync + Leader Score', link: '/whatsapp-ai/lead-machine' },
                { title: 'WhatsApp Invoice AI', tag: 'NEW', price: '₹9,999', stack: 'GST PDF + Razorpay Link', link: '/whatsapp-ai/invoice' },
              ].map((p, idx) => (
                <Link 
                  key={idx}
                  to={p.link}
                  className="glass p-6 rounded-3xl border-l-4 border-l-brand-primary flex flex-col justify-between hover:-translate-y-1 transition-transform"
                >
                  <div>
                    <span className="text-[10px] font-black bg-brand-primary/20 text-brand-primary px-2 py-0.5 rounded-full mb-3 inline-block">
                      {p.tag}
                    </span>
                    <h4 className="text-xl font-black uppercase tracking-tight mb-2 leading-none">{p.title}</h4>
                    <p className="text-zinc-500 text-[10px] font-black tracking-widest uppercase mb-4 leading-snug">{p.stack}</p>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-2xl font-black italic tracking-tighter">{p.price}</span>
                    <div className="w-8 h-8 bg-zinc-800 rounded-full flex items-center justify-center hover:bg-brand-primary hover:text-black cursor-pointer transition-colors">
                      <ChevronRight size={16} />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <span className="text-brand-primary font-black uppercase text-[10px] tracking-[0.3em] mb-4 block">ZERO MONTHLY API FEES</span>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8 leading-[0.85] italic">
              WhatsApp AI <br /> Automation for India
            </h2>
            <p className="text-zinc-500 text-lg font-light mb-10 leading-relaxed">
              Deploy a 24/7 WhatsApp AI agent powered by Ollama local AI and n8n workflows. Zero per-message API cost. Handles bookings, support, orders, leads & follow-ups across any business in Kochi or India.
            </p>
            
            <div className="space-y-4 mb-10 text-zinc-400 font-bold uppercase text-[10px] tracking-widest">
              {[
                'Self-hosted = zero monthly AI cost forever',
                'Supports Malayalam, Hindi, Tamil & English',
                'Native Tally, Zoho & Google Sheets sync',
                'Compliant with DPDP (Data Protection) act'
              ].map((li, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <CheckCircle2 className="text-brand-primary shrink-0 transition-transform" size={14} />
                  <span>{li}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-32 bg-black border-y border-zinc-900">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading 
            badge="Setup Pricing" 
            subtitle="Transparent one-time investment. No per-token or per-message fees forever. We set it up, you own the infrastructure."
          >
            Zero Monthly. <br/> Zero Limits.
          </SectionHeading>
          
          <div className="grid md:grid-cols-3 gap-8">
            {PRICING.map((tier, idx) => (
              <div 
                key={idx} 
                className={`relative bg-zinc-900 p-10 rounded-2xl flex flex-col h-full transform transition-all duration-500 border border-zinc-800 ${tier.popular ? 'border-brand-primary ring-2 ring-brand-primary/20 scale-105 z-10' : 'hover:scale-[1.03]'}`}
              >
                {tier.popular && (
                  <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-primary text-black px-6 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-lg">
                    Highest Intent
                  </span>
                )}
                
                <div className="mb-12">
                  <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 mb-4">{tier.name} Stack</h3>
                  <div className="text-6xl font-black italic tracking-tighter mb-4">
                    {tier.price}
                  </div>
                  <div className="inline-flex items-center gap-2 bg-zinc-800 px-3 py-1 rounded-md">
                    <CheckCircle2 size={12} className="text-brand-primary" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-zinc-300">One-Time Setup Fee</span>
                  </div>
                </div>
                
                <div className="space-y-6 mb-12 flex-grow">
                  {tier.features.map((f, fidx) => (
                    <div key={fidx} className="flex items-start gap-4">
                      <div className="w-5 h-5 bg-zinc-800 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="text-brand-primary" size={12} />
                      </div>
                      <span className="text-zinc-400 text-sm font-medium leading-snug">{f}</span>
                    </div>
                  ))}
                </div>
                
                <button className={`w-full py-5 rounded-lg font-black text-sm uppercase tracking-widest transition-all ${tier.popular ? 'bg-brand-primary text-black hover:bg-white shadow-[0_0_30px_rgba(34,211,238,0.2)]' : 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700'}`}>
                  {tier.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <SectionHeading badge="Client Results" subtitle="What Kerala & India Businesses Say">
          Trusted by 500+ Businesses
        </SectionHeading>
        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <div key={idx} className="p-10 rounded-2xl bg-zinc-900 border border-zinc-800 relative">
              <div className="flex gap-1 mb-8">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={14} fill="#22d3ee" className="text-brand-primary" />
                ))}
              </div>
              <p className="text-zinc-300 text-lg font-light leading-relaxed mb-10 italic">"{t.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-primary/10 flex items-center justify-center font-black text-brand-primary italic">
                  {t.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="font-black uppercase tracking-tight text-white">{t.name}</div>
                  <div className="text-[10px] text-zinc-500 uppercase font-black tracking-[0.2em]">{t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 px-6 max-w-4xl mx-auto">
        <SectionHeading badge="FAQ" subtitle="Every Question Answered">
          Deep-Dive Tech Details
        </SectionHeading>
        
        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <details key={idx} className="bg-zinc-900 border border-zinc-800 rounded-2xl group overflow-hidden">
              <summary className="p-8 cursor-pointer list-none flex items-center justify-between font-black uppercase text-xs tracking-[0.2em] select-none group-open:bg-zinc-800 transition-colors">
                {faq.question}
                <ChevronDown className="group-open:rotate-180 transition-transform text-brand-primary" />
              </summary>
              <div className="p-8 text-zinc-500 font-light text-lg leading-relaxed border-t border-zinc-800">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* GEOGRAPHIC & TOPICAL KEYWORD INDEX (GEO-SEO) */}
      <section className="py-24 border-t border-zinc-900 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="space-y-6">
              <h5 className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-primary">Regional AI Hubs</h5>
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                {[
                  'Kochi', 'Ernakulam', 'Trivandrum', 'Technopark', 'Infopark Kochi', 
                  'Kozhikode', 'Thrissur', 'Kottayam', 'Palakkad', 'Aluva', 
                  'Kakkanad', 'Edappally', 'Calicut', 'Cyberpark'
                ].map((loc) => (
                  <Link key={loc} to={`/locations/${loc.toLowerCase().replace(' ', '-')}`} className="text-zinc-500 text-[10px] font-black uppercase tracking-widest hover:text-white transition-colors">
                    AI Startup {loc}
                  </Link>
                ))}
              </div>
            </div>
            
            <div className="space-y-6">
              <h5 className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-primary">Technical Clusters</h5>
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                {[
                  'Ollama Self-Hosted', 'n8n Automation Experts', 'WhatsApp Business API India', 
                  'Local LLM Implementation', 'Private AI Server Build', 'GPU Optimization Kerala',
                  'Zero-Cost AI Bots', 'Sovereign AI Infrastructure', 'Docker AI Containers'
                ].map((tech) => (
                  <span key={tech} className="text-zinc-500 text-[10px] font-black uppercase tracking-widest cursor-default">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <h5 className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-primary">Industry Vertical AEO</h5>
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                {[
                  'Gym Membership AI', 'Restaurant WhatsApp Order Bot', 'Clinic Patient Triage AI',
                  'Real Estate Lead Agent', 'Education AI Tutor', 'Logistics Fleet Automator',
                  'Hotel Booking AI Bot', 'HR Recruitment AI Agent'
                ].map((niche) => (
                  <Link key={niche} to="/whatsapp-ai" className="text-zinc-500 text-[10px] font-black uppercase tracking-widest hover:text-white transition-colors">
                    {niche}
                  </Link>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <h5 className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">CyberTeck HQ</h5>
              <p className="text-zinc-600 text-[10px] font-black uppercase tracking-widest leading-relaxed">
                Thrippunithura, Kochi, Kerala, 682301<br/>
                India's First Sovereign AI Agency.<br/>
                © 2026 CyberTeck.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
