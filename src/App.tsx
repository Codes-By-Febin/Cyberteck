import React, { useState } from 'react';
import { 
  MessageSquare, 
  Globe, 
  Mail, 
  X,
  Menu,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { SiloLayout } from './components/SiloLayout';
import { SiloPage } from './pages/SiloPage';
import Sitemap from './pages/Sitemap';

// --- Navbar Component ---
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between glass rounded-full px-8 py-3">
        <Link to="/" className="flex items-baseline gap-2">
          <span className="text-3xl font-black tracking-tighter text-brand-primary italic">CT</span>
          <span className="text-xl font-black tracking-tight uppercase hidden sm:block">CyberTeck</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-10 text-[11px] uppercase tracking-[0.2em] font-black text-zinc-400">
          <Link to="/" className="hover:text-brand-primary transition-colors uppercase">Home</Link>
          <Link to="/whatsapp-ai" className="hover:text-brand-primary transition-colors uppercase">WhatsApp AI</Link>
          <Link to="/ollama-local-ai" className="hover:text-brand-primary transition-colors uppercase">Local AI</Link>
          <Link to="/n8n-automation" className="hover:text-brand-primary transition-colors uppercase">n8n</Link>
        </div>
        
        <div className="flex items-center gap-4">
          <a href="https://wa.me/917500555454" className="hidden sm:flex items-center gap-2 bg-white text-black px-6 py-2.5 rounded-full font-black text-xs uppercase hover:bg-brand-primary transition-colors">
            +91 75005 55454
          </a>
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-24 left-6 right-6 glass rounded-3xl p-8 flex flex-col gap-6 text-center border-2 border-brand-primary/20"
          >
            <Link to="/" onClick={() => setIsOpen(false)} className="text-2xl font-black uppercase tracking-tight">Home</Link>
            <Link to="/whatsapp-ai" onClick={() => setIsOpen(false)} className="text-2xl font-black uppercase tracking-tight">WhatsApp AI</Link>
            <Link to="/ollama-local-ai" onClick={() => setIsOpen(false)} className="text-2xl font-black uppercase tracking-tight">Local AI</Link>
            <Link to="/n8n-automation" onClick={() => setIsOpen(false)} className="text-2xl font-black uppercase tracking-tight">n8n Automation</Link>
            <a href="https://wa.me/917500555454" className="bg-brand-primary text-black py-4 rounded-full font-black text-lg uppercase tracking-tight">
              Contact Expert
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

// --- Footer Component ---
const Footer = () => (
  <footer className="py-24 px-6 border-t border-zinc-900 bg-zinc-950">
    <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-16">
      <div className="md:col-span-5">
        <div className="flex items-baseline gap-2 mb-8">
          <span className="text-4xl font-black tracking-tighter text-brand-primary italic">CT</span>
          <span className="text-2xl font-black tracking-tight uppercase">CyberTeck</span>
        </div>
        <p className="text-zinc-500 text-lg font-light leading-relaxed mb-10 max-w-md">
          Kochi's leading AI automation company. Self-hosted Ollama AI, n8n workflows, and WhatsApp bots on open-source infrastructure. Zero monthly AI API costs.
        </p>
        <div className="flex gap-4">
          <a href="#" className="w-12 h-12 bg-zinc-900 border border-zinc-800 rounded-lg flex items-center justify-center text-zinc-400 hover:text-brand-primary transition-colors"><Globe size={20} /></a>
          <a href="#" className="w-12 h-12 bg-zinc-900 border border-zinc-800 rounded-lg flex items-center justify-center text-zinc-400 hover:text-brand-primary transition-colors"><Mail size={20} /></a>
          <a href="https://wa.me/917500555454" className="w-12 h-12 bg-zinc-900 border border-zinc-800 rounded-lg flex items-center justify-center text-zinc-400 hover:text-brand-primary transition-colors"><MessageSquare size={20} /></a>
        </div>
      </div>
      
      <div className="md:col-span-3">
        <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-600 mb-10">Product Suite</h4>
        <ul className="space-y-4 text-zinc-400 font-bold uppercase text-xs tracking-widest">
          <li><Link to="/whatsapp-ai" className="hover:text-brand-primary transition-colors">WhatsApp AI Bot</Link></li>
          <li><Link to="/ollama-local-ai" className="hover:text-brand-primary transition-colors">Ollama Local LLM</Link></li>
          <li><Link to="/n8n-automation" className="hover:text-brand-primary transition-colors">n8n Automation</Link></li>
          <li><Link to="/ollama-local-ai/enterprise" className="hover:text-brand-primary transition-colors">AI Server Setup</Link></li>
          <li><Link to="/n8n-automation/social-media" className="hover:text-brand-primary transition-colors">SEO Content Hub</Link></li>
        </ul>
      </div>
      
      <div className="md:col-span-4">
        <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-600 mb-10">Local HQ</h4>
        <div className="text-zinc-400 mb-8 font-light text-xl leading-relaxed">
          Infopark Phase 2, Kakkanad,<br />
          Kochi, Kerala — 682042 — India
        </div>
        <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-xl">
          <span className="text-[10px] font-black uppercase tracking-widest text-zinc-600 block mb-2">Direct Channel</span>
          <a href="mailto:hello@cyberteck.in" className="text-xl font-black text-brand-primary hover:text-white transition-colors block">
            hello@cyberteck.in
          </a>
        </div>
      </div>
    </div>
    
    <div className="max-w-7xl mx-auto mt-24 pt-10 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="text-zinc-600 font-bold uppercase text-[10px] tracking-[0.2em] flex items-center gap-4">
        <span>MADE IN KERALA 🇮🇳</span>
        <span className="w-1 h-1 bg-zinc-800 rounded-full"></span>
        <span>INFOPARK, KAKKANAD</span>
        <span className="w-1 h-1 bg-zinc-800 rounded-full"></span>
        <span>DPDP COMPLIANT</span>
      </div>
      
      <div className="flex gap-8 text-zinc-600 font-bold uppercase text-[10px] tracking-widest">
        <Link to="/sitemap" className="hover:text-zinc-400 transition-colors">Sitemap</Link>
        <a href="#" className="hover:text-zinc-400 transition-colors">Privacy</a>
        <a href="#" className="hover:text-zinc-400 transition-colors">Terms</a>
        <a href="#" className="hover:text-zinc-400 transition-colors">Security</a>
      </div>
      
      <div className="flex items-center gap-3 bg-zinc-900/50 border border-zinc-800 px-5 py-2 rounded-full">
        <div className="w-1.5 h-1.5 bg-brand-primary rounded-full animate-pulse shadow-[0_0_8px_rgba(34,211,238,0.5)]"></div>
        <span className="text-zinc-500 font-black uppercase text-[9px] tracking-widest">Nodes Operational</span>
      </div>
    </div>
  </footer>
);

import { HelmetProvider } from 'react-helmet-async';

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <div className="min-h-screen grid-bg">
        <Navbar />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sitemap" element={<Sitemap />} />
          <Route element={<SiloLayout />}>
            <Route path="/:pillar" element={<SiloPage />} />
            <Route path="/:pillar/:sub" element={<SiloPage />} />
          </Route>
        </Routes>

        <Footer />

        {/* Floating Action Button (WhatsApp) */}
        <a 
          href="https://wa.me/917500555454" 
          className="fixed bottom-8 right-8 z-[100] w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all group"
        >
          <MessageSquare size={32} />
          <div className="absolute right-20 bg-white text-black px-4 py-2 rounded-xl text-sm font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl">
            Chat with AI Agent
          </div>
        </a>
      </div>
    </BrowserRouter>
  </HelmetProvider>
  );
}
