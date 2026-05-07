import React from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import { SILO_DATA } from '../silos';
import { motion } from 'motion/react';
import { CheckCircle2, MessageSquare, ArrowRight, Home, ChevronRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export const SiloPage = () => {
  const { pillar, sub } = useParams();
  const location = useLocation();
  
  // Construct path from params
  const path = sub ? `${pillar}/${sub}` : pillar || '';
  const content = SILO_DATA[path];
  const canonicalUrl = `https://cyberteck.in/${path}`;

  if (!content) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <Helmet>
          <title>404 - Node Not Found | CyberTeck</title>
          <meta name="robots" content="noindex" />
        </Helmet>
        <h1 className="text-6xl font-black italic tracking-tighter mb-4">404</h1>
        <p className="text-zinc-500 uppercase font-black tracking-widest text-xs">Node Not Found</p>
        <Link to="/" className="mt-8 text-brand-primary font-black uppercase text-xs tracking-[0.2em] hover:text-white transition-colors">
          Return to HQ →
        </Link>
      </div>
    );
  }

  // Schema.org JSON-LD
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": content.title,
    "description": content.subtitle,
    "author": {
      "@type": "Organization",
      "name": "CyberTeck"
    },
    "publisher": {
      "@type": "Organization",
      "name": "CyberTeck",
      "logo": {
        "@type": "ImageObject",
        "url": "https://cyberteck.in/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": canonicalUrl
    }
  };

  const faqSchema = content.faqs ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": content.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  } : null;

  const breadcrumbs = [
    { label: 'Home', path: '/' },
    { label: content.pillar, path: `/${pillar}` },
    ...(sub ? [{ label: content.title.split(' ').slice(0, 3).join(' ') + '...', path: `/${pillar}/${sub}` }] : [])
  ];

  return (
    <motion.div 
      key={location.pathname}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-12"
    >
      <Helmet>
        <title>{content.title} | CyberTeck AI Automation India</title>
        <meta name="description" content={content.subtitle + " " + content.content.substring(0, 100)} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={content.title} />
        <meta property="og:description" content={content.subtitle} />
        <meta property="og:type" content="article" />
        <meta name="keywords" content={content.keywords.join(', ')} />
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>
        {faqSchema && (
          <script type="application/ld+json">
            {JSON.stringify(faqSchema)}
          </script>
        )}
      </Helmet>

      {/* Breadcrumbs for SEO */}
      <nav className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-zinc-500">
        {breadcrumbs.map((bc, i) => (
          <React.Fragment key={bc.path}>
            <Link to={bc.path} className="hover:text-brand-primary transition-colors flex items-center gap-1">
              {i === 0 && <Home size={10} />}
              {bc.label}
            </Link>
            {i < breadcrumbs.length - 1 && <ChevronRight size={10} className="text-zinc-800" />}
          </React.Fragment>
        ))}
      </nav>
      <header>
        <div className="flex items-center gap-3 mb-6">
          <span className="bg-zinc-800 text-brand-primary text-[10px] font-black px-3 py-1 rounded uppercase tracking-[0.2em]">
            {content.pillar}
          </span>
          <div className="h-px bg-zinc-800 flex-grow"></div>
        </div>
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[0.85] mb-8 italic italic">
          {content.title.split(' ').map((word, i) => (
            i === content.title.split(' ').length - 1 ? (
              <span key={i} className="text-transparent text-stroke">{word} </span>
            ) : (
              <span key={i}>{word} </span>
            )
          ))}
        </h1>
        <p className="text-zinc-500 text-2xl font-light leading-relaxed max-w-3xl">
          {content.subtitle}
        </p>
      </header>

      <div className="grid md:grid-cols-12 gap-12">
        <div className="md:col-span-8 space-y-12">
          <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl relative overflow-hidden group">
            <p className="text-zinc-300 text-xl leading-relaxed mb-12 font-medium">
              {content.content}
            </p>
            
            {/* Long Form Content Sections */}
            {content.longSections && content.longSections.map((section, idx) => (
              <div key={idx} className="mb-12 last:mb-0">
                <h3 className="text-2xl font-black uppercase tracking-tight text-white mb-6 italic">
                  {section.heading}
                </h3>
                <div className="text-zinc-400 leading-relaxed space-y-4 text-lg">
                  {section.body.split('\n').map((para, pidx) => (
                    <p key={pidx}>{para}</p>
                  ))}
                </div>
              </div>
            ))}

            <div className="grid sm:grid-cols-2 gap-4 mt-16 pt-16 border-t border-zinc-800">
              {[
                { label: 'Latency', value: '< 200ms' },
                { label: 'Privacy', value: '100% Local' },
                { label: 'Uptime', value: '99.9%' },
                { label: 'Encryption', value: 'AES-256' }
              ].map((stat, i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-zinc-950/50 rounded-xl border border-zinc-800/50">
                  <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">{stat.label}</span>
                  <span className="text-sm font-black text-brand-primary italic">{stat.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ Section */}
          {content.faqs && (
            <div className="space-y-8">
              <div className="flex flex-col items-center text-center">
                <span className="text-brand-primary text-[10px] font-black px-4 py-1.5 rounded-md uppercase tracking-[0.2em] mb-4 border border-zinc-800">
                  Deep Dive FAQ
                </span>
                <h4 className="text-4xl font-black uppercase tracking-tighter italic">Common Questions & Expert Answers</h4>
              </div>
              
              <div className="space-y-4">
                {content.faqs.map((faq, idx) => (
                  <details key={idx} className="bg-zinc-900 border border-zinc-800 rounded-2xl group overflow-hidden">
                    <summary className="p-8 cursor-pointer list-none flex items-center justify-between font-black uppercase text-xs tracking-[0.2em] select-none group-open:bg-zinc-800 transition-colors">
                      {faq.question}
                      <ArrowRight className="group-open:rotate-90 transition-transform text-brand-primary" size={16} />
                    </summary>
                    <div className="p-8 text-zinc-500 font-light text-lg leading-relaxed border-t border-zinc-800">
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          )}
          
          <div className="flex flex-wrap gap-4 pt-12 border-t border-zinc-900">
            {content.keywords.map((k) => (
              <span key={k} className="text-[10px] font-black uppercase tracking-widest text-zinc-600 bg-zinc-950 px-4 py-2 rounded-lg border border-zinc-900">
                # {k.replace(/ /g, '_')}
              </span>
            ))}
          </div>

          {/* Bridge Links (Cross-Silo) */}
          <div className="pt-16 border-t border-zinc-800">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 mb-8">Strategic Ecosystem Bridges</h4>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { title: 'Privacy Compliance', path: '/ollama-local-ai/privacy', desc: 'Secure your data locally.' },
                { title: 'Workflow Mastery', path: '/n8n-automation', desc: 'Infinite automation flows.' },
                { title: 'Hardware Setup', path: '/ai-infra', desc: 'Enterprise server configs.' },
                { title: 'Local Support', path: '/locations/kochi', desc: 'On-site help in Kerala.' }
              ].filter(link => !location.pathname.includes(link.path)).map((link, idx) => (
                <Link 
                  key={idx}
                  to={link.path}
                  className="group p-6 bg-zinc-950 border border-zinc-900 rounded-2xl hover:border-brand-primary/30 transition-all"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-black uppercase tracking-tighter text-white group-hover:text-brand-primary transition-colors">
                      {link.title}
                    </span>
                    <ArrowRight size={14} className="text-zinc-700 group-hover:translate-x-1 transition-all" />
                  </div>
                  <p className="text-zinc-600 text-[10px] uppercase font-black tracking-widest leading-none">
                    {link.desc}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <aside className="md:col-span-4 flex flex-col gap-6">
          <div className="bg-brand-primary p-8 rounded-2xl text-black">
            <h3 className="text-[10px] font-black uppercase tracking-[0.2em] mb-4 opacity-70">Deployment Ready</h3>
            <div className="text-3xl font-black italic tracking-tighter leading-none mb-6">
              Start Your Stack Today.
            </div>
            <a 
              href="https://wa.me/917500555454"
              className="flex items-center justify-between bg-black text-white p-4 rounded-xl font-black uppercase text-xs tracking-widest hover:scale-105 transition-transform"
            >
              Consult Now
              <ArrowRight size={16} />
            </a>
          </div>
          
          <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl">
            <div className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 mb-6">Silo Context</div>
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
                <span className="text-zinc-500 text-[10px] font-black uppercase tracking-widest">Type</span>
                <span className="font-black text-lg italic tracking-tighter uppercase whitespace-nowrap overflow-hidden">Authority Base</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-zinc-500 text-[10px] font-black uppercase tracking-widest">Region</span>
                <span className="font-black text-lg italic tracking-tighter uppercase">Pan India</span>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </motion.div>
  );
};
