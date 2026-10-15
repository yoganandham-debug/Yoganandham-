import React from 'react';
import { 
  Award, 
  CheckCircle, 
  ExternalLink, 
  ShieldCheck, 
  Sparkles,
  BookOpen
} from 'lucide-react';
import { certifications } from '../data/portfolio';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-20 relative bg-dark-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono uppercase tracking-wider">
            <Award className="w-3.5 h-3.5" />
            <span>Professional Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Industry <span className="gradient-text-cyan">Certifications</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Directly verified certifications showcasing competency in enterprise data analytics simulation and relational SQL query execution.
          </p>
        </div>

        {/* 2 Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="glass-panel p-7 sm:p-8 rounded-2xl border border-white/10 hover:border-cyan-400/40 transition-all duration-300 space-y-5 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* Header Badge */}
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                    {cert.organization}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-emerald-400">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>Verified Completion</span>
                  </div>
                </div>

                {/* Title */}
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-xs font-mono text-slate-400 mt-1">
                    {cert.type}
                  </p>
                </div>

                {/* Topics Covered */}
                <div className="space-y-2 pt-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                    Syllabus & Core Competencies
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {cert.topics.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 text-xs rounded-md bg-dark-900 text-slate-300 border border-white/5 font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Credential Note */}
                <p className="text-xs text-slate-300 leading-relaxed pt-1">
                  {cert.credentialNote}
                </p>
              </div>

              {/* Verified Footer */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1 text-emerald-400">
                  <CheckCircle className="w-3.5 h-3.5" /> Resume Supported
                </span>
                <span className="text-slate-400">Direct Verification</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
