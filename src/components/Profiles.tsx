import React from 'react';
import { 
  Code, 
  GitBranch, 
  ExternalLink, 
  Share2
} from 'lucide-react';
import { codingProfiles } from '../data/portfolio';

export const Profiles: React.FC = () => {
  const getIcon = (platform: string) => {
    switch (platform) {
      case 'LeetCode':
        return <Code className="w-5 h-5 text-amber-400" />;
      case 'GitHub':
        return <GitBranch className="w-5 h-5 text-cyan-400" />;
      case 'LinkedIn':
        return (
          <svg className="w-5 h-5 text-blue-400 fill-current" viewBox="0 0 24 24">
            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.53 1.53 0 0 0 1.54-1.53c0-.85-.69-1.54-1.54-1.54a1.54 1.54 0 0 0-1.54 1.54c0 .84.69 1.53 1.54 1.53m1.4 9.74v-8.37H5.06v8.37h2.8z" />
          </svg>
        );
      default:
        return <Share2 className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section className="py-16 relative bg-dark-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-cyan-400">
            Analytics & Coding Presence
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
            Online Profiles & Code Repositories
          </h3>
          <p className="text-slate-400 text-xs sm:text-sm">
            Active platforms showcasing continuous practice in database query optimization and Python analytics.
          </p>
        </div>

        {/* Profiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {codingProfiles.map((profile) => (
            <div
              key={profile.platform}
              className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-cyan-400/40 transition-all flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-xl bg-dark-900 border border-white/5 group-hover:scale-110 transition-transform">
                    {getIcon(profile.platform)}
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-white/5 text-slate-300 border border-white/10">
                    {profile.metrics}
                  </span>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {profile.platform}
                  </h4>
                  <p className="text-xs font-mono text-cyan-400">
                    {profile.highlight}
                  </p>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {profile.details}
                </p>
              </div>

              <a
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2 px-4 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-mono text-slate-200 hover:text-white border border-white/10 transition-colors"
              >
                <span>Visit {profile.platform}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
