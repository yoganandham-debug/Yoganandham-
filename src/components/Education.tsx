import React from 'react';
import { 
  GraduationCap, 
  Calendar, 
  MapPin, 
  Award, 
  BookOpen, 
  CheckCircle2 
} from 'lucide-react';
import { educationHistory } from '../data/portfolio';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 relative bg-dark-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono uppercase tracking-wider">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Qualifications</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education <span className="gradient-text-cyan">& Rigor</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Solid foundations in computer applications, computational logic, statistical analysis, and database management systems.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="max-w-4xl mx-auto relative">
          
          {/* Vertical Connecting Line */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 -translate-x-1/2 w-0.5 bg-gradient-to-b from-cyan-500 via-emerald-500 to-indigo-500 opacity-30" />

          <div className="space-y-12">
            {educationHistory.map((edu, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={edu.degree}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  
                  {/* Timeline Node Badge */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-dark-950 border-2 border-cyan-400 flex items-center justify-center text-cyan-300 shadow-glow-cyan z-20">
                    <GraduationCap className="w-5 h-5" />
                  </div>

                  {/* Spacer for Alternate Column */}
                  <div className="hidden sm:block sm:w-1/2" />

                  {/* Card Content */}
                  <div className="w-full sm:w-1/2 pl-12 sm:pl-0 sm:px-8">
                    <div className="glass-panel p-6 sm:p-7 rounded-2xl border border-white/10 hover:border-cyan-400/40 transition-all space-y-4 group">
                      
                      {/* Top Badges */}
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="px-2.5 py-1 rounded-full text-xs font-mono font-medium bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                          {edu.degreeType}
                        </span>
                        <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                          <Calendar className="w-3.5 h-3.5 text-slate-400" />
                          <span>{edu.period}</span>
                        </div>
                      </div>

                      {/* Degree and College */}
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                          {edu.degree}
                        </h3>
                        <p className="text-sm text-slate-300 font-medium mt-1">
                          {edu.institution}
                        </p>
                        <div className="flex items-center gap-1 text-xs font-mono text-slate-400 mt-1">
                          <MapPin className="w-3.5 h-3.5 text-slate-400" />
                          <span>{edu.location}</span>
                        </div>
                      </div>

                      {/* CGPA Score Box */}
                      <div className="flex items-center justify-between p-3.5 rounded-xl bg-dark-900 border border-white/5">
                        <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                          <Award className="w-4 h-4 text-emerald-400" />
                          Cumulative Score
                        </span>
                        <span className="text-base font-extrabold font-mono text-emerald-400">
                          CGPA: {edu.cgpa} / {edu.scale}
                        </span>
                      </div>

                      {/* Highlights */}
                      <div className="space-y-1.5 pt-1">
                        {edu.highlights.map((h, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-slate-300 leading-relaxed">
                            <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>

                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
