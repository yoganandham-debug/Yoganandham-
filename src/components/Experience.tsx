import React from 'react';
import { 
  Building2, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Sparkles, 
  Code,
  Terminal
} from 'lucide-react';
import { experienceList } from '../data/portfolio';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 relative bg-dark-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono uppercase tracking-wider">
            <Building2 className="w-3.5 h-3.5" />
            <span>Incubation & Internship Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Industry <span className="gradient-text-cyan">Experience</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Hands-on technology immersion under the Society for Innovation and Entrepreneurship (SINE) at IIT Bombay.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="max-w-4xl mx-auto space-y-6">
          {experienceList.map((exp, idx) => (
            <div
              key={idx}
              className="glass-panel p-7 sm:p-8 rounded-2xl border border-white/10 hover:border-cyan-400/40 transition-all duration-300 space-y-5"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-white/10">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2.5 py-0.5 rounded text-xs font-mono font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      {exp.type}
                    </span>
                    <span className="text-xs font-mono text-cyan-400">
                      IIT Bombay Incubated
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    {exp.role}
                  </h3>
                  <p className="text-base text-slate-300 font-medium">
                    {exp.organization}
                  </p>
                  <p className="text-xs text-slate-400 font-mono">
                    {exp.division}
                  </p>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono text-slate-300 px-3.5 py-2 rounded-xl bg-dark-900 border border-white/5 sm:self-start">
                  <Calendar className="w-4 h-4 text-cyan-400" />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Responsibilities */}
              <div className="space-y-3">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  Key Technical Contributions
                </span>
                <div className="space-y-2">
                  {exp.responsibilities.map((resp, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies Utilized */}
              <div className="pt-2">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-2">
                  Technologies Engaged
                </span>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-mono font-medium rounded-lg bg-dark-950 text-cyan-300 border border-cyan-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
