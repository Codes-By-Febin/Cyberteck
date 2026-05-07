import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { SILO_DATA } from '../silos';
import { ChevronRight, Target, Brain, Workflow, MessageSquare, MapPin, Rocket, Monitor } from 'lucide-react';

export const SiloLayout = () => {
  const pillars = [
    { label: 'WhatsApp AI', path: '/whatsapp-ai', icon: MessageSquare },
    { label: 'Ollama Local AI', path: '/ollama-local-ai', icon: Brain },
    { label: 'n8n Automation', path: '/n8n-automation', icon: Workflow },
    { label: 'AI Infra', path: '/ai-infra', icon: Monitor },
    { label: 'Gyms', path: '/ai-for-gyms', icon: Target },
    { label: 'Restaurants', path: '/ai-for-restaurants', icon: Target },
    { label: 'Clinics', path: '/ai-for-clinics', icon: Target },
    { label: 'Kochi Hub', path: '/locations/kochi', icon: MapPin },
  ];

  return (
    <div className="min-h-screen grid-bg pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12">
        {/* Sidebar Nav */}
        <aside className="lg:col-span-3 space-y-8">
          <div className="glass p-6 rounded-2xl sticky top-32 max-h-[80vh] overflow-y-auto custom-scrollbar">
            <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 mb-6">Exploration Hub</h3>
            <nav className="space-y-1 mb-12">
              {pillars.map((p) => (
                <NavLink
                  key={p.path}
                  to={p.path}
                  className={({ isActive }) => 
                    `flex items-center gap-3 p-3 rounded-xl transition-all font-black uppercase text-[10px] tracking-widest ${
                      isActive || window.location.pathname.startsWith(p.path) ? 'bg-brand-primary text-black shadow-[0_0_20px_rgba(34,211,238,0.3)]' : 'text-zinc-400 hover:bg-zinc-800'
                    }`
                  }
                >
                  <p.icon size={14} />
                  {p.label}
                </NavLink>
              ))}
            </nav>

            {/* Cluster Navigation (Dynamic) */}
            {(() => {
              const currentPillarPath = pillars.find(p => window.location.pathname.startsWith(p.path))?.path;
              if (!currentPillarPath) return null;
              
              const relevantPages = Object.keys(SILO_DATA)
                .filter(path => path.startsWith(currentPillarPath.replace(/^\//, '')) && path !== currentPillarPath.replace(/^\//, ''))
                .slice(0, 15);
              
              if (relevantPages.length === 0) return null;

              return (
                <div className="space-y-4">
                  <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 mb-4">Cluster Content</h3>
                  <div className="flex flex-col gap-1">
                    {relevantPages.map(path => (
                      <NavLink
                        key={path}
                        to={`/${path}`}
                        className={({ isActive }) => 
                          `text-[9px] font-bold uppercase tracking-wider p-2 rounded-lg transition-colors leading-tight ${
                            isActive ? 'text-brand-primary bg-brand-primary/10' : 'text-zinc-500 hover:text-white hover:bg-zinc-800/50'
                          }`
                        }
                      >
                        {path.split('/').pop()?.replace(/-/g, ' ')}
                      </NavLink>
                    ))}
                  </div>
                </div>
              );
            })()}
            
            <div className="mt-12 p-6 bg-brand-primary/10 rounded-2xl border border-brand-primary/20">
              <Rocket size={20} className="text-brand-primary mb-3" />
              <div className="text-[10px] font-black uppercase tracking-widest text-brand-primary mb-1">Scale Fast</div>
              <div className="text-xs text-zinc-400 font-medium">Ready to deploy? Chat with our experts.</div>
              <a href="https://wa.me/917500555454" className="block mt-4 text-xs font-black uppercase tracking-widest text-white hover:text-brand-primary transition-colors">
                Connect Now →
              </a>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="lg:col-span-9">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
