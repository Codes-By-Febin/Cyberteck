import React from 'react';
import { Link } from 'react-router-dom';
import { SILO_DATA } from '../silos';
import { Map as MapIcon, ChevronRight } from 'lucide-react';

export default function Sitemap() {
  const categories = Array.from(new Set(Object.values(SILO_DATA).map(s => s.pillar)));

  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-20">
          <div className="w-16 h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center mb-6 border border-brand-primary/20">
            <MapIcon className="text-brand-primary" size={32} />
          </div>
          <h1 className="text-6xl font-black uppercase tracking-tighter italic mb-4">Website <span className="text-brand-primary">Sitemap</span></h1>
          <p className="text-zinc-500 text-xl font-light uppercase tracking-widest max-w-2xl">
            Complete Index of CyberTeck's Zero-Cost AI Ecosystem
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {categories.map(cat => (
            <div key={cat} className="space-y-6">
              <h2 className="text-2xl font-black uppercase italic tracking-tighter text-white border-l-4 border-brand-primary pl-4">
                {cat}
              </h2>
              <div className="flex flex-col gap-2">
                {Object.entries(SILO_DATA)
                  .filter(([_, data]) => data.pillar === cat)
                  .map(([path, data]) => (
                    <Link
                      key={path}
                      to={`/${path}`}
                      className="group flex items-center justify-between p-4 bg-zinc-900 border border-zinc-800 rounded-xl hover:border-brand-primary/50 transition-all"
                    >
                      <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400 group-hover:text-white transition-colors">
                        {data.title}
                      </span>
                      <ChevronRight size={14} className="text-zinc-700 group-hover:text-brand-primary transition-colors" />
                    </Link>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
