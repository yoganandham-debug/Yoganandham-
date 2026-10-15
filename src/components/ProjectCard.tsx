import React from 'react';
import { 
  Database, 
  TrendingUp, 
  BarChart3, 
  FileText, 
  CheckCircle, 
  Sparkles
} from 'lucide-react';
import type { ProjectCaseStudy } from '../types';

interface ProjectCardProps {
  project: ProjectCaseStudy;
  index: number;
  onSelectProject: (project: ProjectCaseStudy) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, onSelectProject }) => {
  const isPowerBi = project.tools.includes('Power BI');

  return (
    <div className="glass-panel rounded-2xl border border-white/10 overflow-hidden hover:border-cyan-400/40 transition-all duration-300 flex flex-col justify-between group">
      
      {/* Top Banner / Category */}
      <div className="p-6 sm:p-8 space-y-6">
        
        {/* Header Metadata */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
            {isPowerBi ? <BarChart3 className="w-3.5 h-3.5 text-cyan-400" /> : <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />}
            {project.category}
          </span>
          <span className="text-xs font-mono text-slate-400">
            Case Study 0{index + 1}
          </span>
        </div>

        {/* Title & Tools */}
        <div className="space-y-3">
          <h3 className="text-2xl font-extrabold text-white group-hover:text-cyan-300 transition-colors leading-snug">
            {project.title}
          </h3>

          <div className="flex flex-wrap gap-2 pt-1">
            {project.tools.map((tool) => (
              <span
                key={tool}
                className="px-2.5 py-1 text-xs font-semibold rounded-md bg-dark-900 text-slate-200 border border-white/10"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Business Problem Statement */}
        <div className="p-4 rounded-xl bg-dark-950/60 border border-white/5 space-y-1.5">
          <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
            Business Problem
          </span>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {project.businessProblem}
          </p>
        </div>

        {/* Dataset & Scope */}
        <div className="flex items-center gap-2 text-xs font-mono text-slate-400 py-1">
          <Database className="w-4 h-4 text-cyan-400" />
          <span>Dataset: <span className="text-slate-200 font-semibold">{project.dataset}</span></span>
        </div>

        {/* Key Insights Preview */}
        <div className="space-y-2">
          <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
            Key Insights Uncovered
          </span>
          <ul className="space-y-2">
            {project.keyInsights.slice(0, 2).map((insight, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{insight}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* Card Footer: Impact Metric & Actions */}
      <div className="p-6 bg-dark-900/80 border-t border-white/10 space-y-4">
        
        {/* Measured Impact Box */}
        <div className="flex items-center justify-between p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20">
          <div>
            <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider">
              Documented Outcome
            </span>
            <div className="text-sm font-bold text-white">
              {project.accuracyOrImpact}
            </div>
          </div>
          <Sparkles className="w-5 h-5 text-cyan-400 shrink-0" />
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => onSelectProject(project)}
            className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-xs border border-white/15 hover:border-cyan-400/40 transition-all active:scale-95"
          >
            <FileText className="w-4 h-4 text-cyan-400" />
            <span>Full Case Study</span>
          </button>

          <a
            href="#showcase"
            className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-cyan-500/15 hover:bg-cyan-500/25 text-cyan-300 font-semibold text-xs border border-cyan-500/30 transition-all active:scale-95"
          >
            <BarChart3 className="w-4 h-4" />
            <span>Interactive Charts</span>
          </a>
        </div>

      </div>

    </div>
  );
};
