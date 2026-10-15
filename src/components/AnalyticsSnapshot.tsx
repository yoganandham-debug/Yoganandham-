import React from 'react';
import { 
  Database, 
  Target, 
  TrendingUp, 
  Code2, 
  Award, 
  Building2, 
  BarChart3, 
  Activity 
} from 'lucide-react';
import { snapshotMetrics } from '../data/portfolio';

export const AnalyticsSnapshot: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Database': return <Database className="w-5 h-5 text-cyan-400" />;
      case 'Target': return <Target className="w-5 h-5 text-emerald-400" />;
      case 'TrendingUp': return <TrendingUp className="w-5 h-5 text-amber-400" />;
      case 'Code2': return <Code2 className="w-5 h-5 text-indigo-400" />;
      case 'Award': return <Award className="w-5 h-5 text-cyan-400" />;
      case 'Building2': return <Building2 className="w-5 h-5 text-blue-400" />;
      default: return <Activity className="w-5 h-5 text-cyan-400" />;
    }
  };

  const getBorderColor = (accent: string) => {
    switch (accent) {
      case 'cyan': return 'hover:border-cyan-400/40 hover:shadow-glow-cyan';
      case 'emerald': return 'hover:border-emerald-400/40 hover:shadow-glow-emerald';
      case 'amber': return 'hover:border-amber-400/40';
      case 'indigo': return 'hover:border-indigo-400/40 hover:shadow-glow-indigo';
      case 'blue': return 'hover:border-blue-400/40';
      default: return 'hover:border-cyan-400/40';
    }
  };

  const getBadgeStyle = (accent: string) => {
    switch (accent) {
      case 'cyan': return 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20';
      case 'emerald': return 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20';
      case 'amber': return 'bg-amber-500/10 text-amber-300 border-amber-500/20';
      case 'indigo': return 'bg-indigo-500/10 text-indigo-300 border-indigo-500/20';
      case 'blue': return 'bg-blue-500/10 text-blue-300 border-blue-500/20';
      default: return 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20';
    }
  };

  return (
    <section id="snapshot" className="py-20 relative bg-dark-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono uppercase tracking-wider">
              <BarChart3 className="w-3.5 h-3.5" />
              <span>Evidence-Based Analytics</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Candidate <span className="gradient-text-cyan">Analytics Snapshot</span>
            </h2>
          </div>
          <p className="text-slate-400 text-xs sm:text-sm font-mono max-w-md md:text-right">
            Verified key performance indicators directly documented across academic, competitive, and incubation projects.
          </p>
        </div>

        {/* 6 Metric KPI Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {snapshotMetrics.map((item) => (
            <div
              key={item.id}
              className={`glass-panel p-6 rounded-2xl border border-white/10 transition-all duration-300 ${getBorderColor(
                item.accent
              )} group relative overflow-hidden`}
            >
              {/* Subtle top indicator bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-xl bg-dark-900 border border-white/5 group-hover:scale-110 transition-transform">
                  {getIcon(item.iconName)}
                </div>
                <span className={`px-2.5 py-1 rounded-full text-xs font-mono font-medium border ${getBadgeStyle(item.accent)}`}>
                  {item.label}
                </span>
              </div>

              <div className="space-y-1">
                <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono tracking-tight group-hover:text-cyan-300 transition-colors">
                  {item.value}
                </div>
                <p className="text-xs text-slate-400 font-medium leading-relaxed">
                  {item.subtext}
                </p>
              </div>

              {/* Data bar visualization */}
              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>Verified Metric</span>
                <span className="text-cyan-400">● Documented</span>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Analytical Callout Banner */}
        <div className="mt-10 p-5 rounded-2xl glass-card border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
            <p className="text-xs sm:text-sm text-slate-300">
              <span className="font-semibold text-white">No fabricated metrics:</span> All performance statistics are strictly anchored in documented project queries, machine learning validation, and academic submissions.
            </p>
          </div>
          <a
            href="#projects"
            className="px-4 py-2 rounded-lg bg-dark-800 text-cyan-300 hover:text-white border border-cyan-500/20 hover:border-cyan-400 text-xs font-mono font-medium transition-colors whitespace-nowrap"
          >
            Review Project Evidence →
          </a>
        </div>

      </div>
    </section>
  );
};
