import React, { useState } from 'react';
import { 
  FolderGit2, 
  X, 
  CheckCircle2
} from 'lucide-react';
import { projectCaseStudies } from '../data/portfolio';
import type { ProjectCaseStudy } from '../types';
import { ProjectCard } from './ProjectCard';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectCaseStudy | null>(null);

  return (
    <section id="projects" className="py-20 relative bg-dark-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono uppercase tracking-wider">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>Demonstrated Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Featured <span className="gradient-text-cyan">Analytics Case Studies</span>
            </h2>
          </div>
          <p className="text-slate-400 text-xs sm:text-sm font-mono max-w-md md:text-right">
            Comprehensive breakdown of exploratory analysis, SQL extraction pipelines, predictive baselines, and BI dashboards.
          </p>
        </div>

        {/* 2 Featured Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projectCaseStudies.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onSelectProject={(p) => setSelectedProject(p)}
            />
          ))}
        </div>

        {/* Modal: Deep Dive Case Study */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark-950/85 backdrop-blur-md overflow-y-auto">
            <div className="relative w-full max-w-3xl glass-panel rounded-2xl border border-white/15 p-6 sm:p-8 max-h-[90vh] overflow-y-auto space-y-6 my-8 animate-in fade-in zoom-in-95 duration-200">
              
              {/* Modal Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 p-2 rounded-xl bg-dark-800 text-slate-300 hover:text-white border border-white/10 hover:border-cyan-400"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="space-y-2 pr-10">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                  {selectedProject.category}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  {selectedProject.title}
                </h3>
                <div className="flex flex-wrap gap-2 pt-2">
                  {selectedProject.tools.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 text-xs font-mono font-medium rounded-md bg-dark-900 text-slate-300 border border-white/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Business Problem */}
              <div className="p-4 rounded-xl bg-dark-900 border border-white/10 space-y-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400">
                  Business Objective & Problem Statement
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {selectedProject.businessProblem}
                </p>
              </div>

              {/* Dataset Info */}
              <div className="p-4 rounded-xl bg-dark-900 border border-white/10 space-y-1">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  Dataset Information
                </h4>
                <p className="text-sm text-white font-medium">
                  {selectedProject.dataset}
                </p>
              </div>

              {/* Execution Process Steps */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  Step-by-Step Analytical Process
                </h4>
                <div className="space-y-2">
                  {selectedProject.process.map((step, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-3 rounded-xl bg-dark-900/60 border border-white/5"
                    >
                      <span className="w-6 h-6 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 text-xs font-mono flex items-center justify-center shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {step}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Insights List */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  Documented Insights & Findings
                </h4>
                <div className="space-y-2">
                  {selectedProject.keyInsights.map((insight, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-3 rounded-xl bg-emerald-500/5 border border-emerald-500/15"
                    >
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                      <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                        {insight}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Measured Impact */}
              <div className="p-4 rounded-xl bg-gradient-to-r from-cyan-950/40 via-dark-900 to-emerald-950/40 border border-cyan-500/30 space-y-1">
                <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-400">
                  Documented Outcome & Measured Impact
                </span>
                <p className="text-base font-bold text-white">
                  {selectedProject.outcome}
                </p>
              </div>

              {/* Modal Actions */}
              <div className="pt-2 flex items-center justify-end gap-3 border-t border-white/10">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-5 py-2.5 rounded-xl bg-dark-800 text-slate-300 hover:text-white text-xs font-semibold border border-white/10"
                >
                  Close Case Study
                </button>
                <a
                  href="#showcase"
                  onClick={() => setSelectedProject(null)}
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 text-dark-950 font-bold text-xs"
                >
                  View Interactive Charts
                </a>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
