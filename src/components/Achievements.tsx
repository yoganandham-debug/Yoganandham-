import React from 'react';
import { 
  Trophy, 
  Target, 
  Users, 
  Calendar, 
  Award, 
  CheckCircle2 
} from 'lucide-react';
import { achievements } from '../data/portfolio';

export const Achievements: React.FC = () => {
  const getIcon = (category: string) => {
    switch (category) {
      case 'Hackathon': return <Trophy className="w-5 h-5 text-amber-400" />;
      case 'Coding': return <Target className="w-5 h-5 text-cyan-400" />;
      case 'Community': return <Users className="w-5 h-5 text-emerald-400" />;
      default: return <Award className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="achievements" className="py-20 relative bg-dark-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono uppercase tracking-wider">
            <Trophy className="w-3.5 h-3.5" />
            <span>Honors & Extracurriculars</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Key <span className="gradient-text-cyan">Achievements</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Demonstrated commitment through competitive hackathons, continuous algorithmic problem solving, and analytical community leadership.
          </p>
        </div>

        {/* 3 Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievements.map((item, idx) => (
            <div
              key={idx}
              className="glass-panel p-6 sm:p-7 rounded-2xl border border-white/10 hover:border-cyan-400/40 transition-all flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-xl bg-dark-900 border border-white/5 group-hover:scale-110 transition-transform">
                    {getIcon(item.category)}
                  </div>
                  <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    {item.date}
                  </span>
                </div>

                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-400">
                    {item.category}
                  </span>
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors mt-0.5">
                    {item.title}
                  </h3>
                  <p className="text-xs font-mono text-slate-400 mt-1">
                    {item.subtitle}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs font-mono text-emerald-400">
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Verified Record
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
