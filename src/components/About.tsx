import React from 'react';
import { 
  UserCheck, 
  Target, 
  Sparkles, 
  Database, 
  BarChart, 
  CheckCircle2, 
  MapPin, 
  Globe, 
  Clock, 
  Languages,
  Layers,
  BrainCircuit
} from 'lucide-react';
import { personalInfo } from '../data/portfolio';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 relative bg-dark-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono uppercase tracking-wider">
            <UserCheck className="w-3.5 h-3.5" />
            <span>Profile & Mindset</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Bridging Raw Relational Data to <span className="gradient-text-cyan">Strategic Business Decisions</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            A methodical approach focused on data integrity, exploratory rigor, and executive visual clarity.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Summary & Candidate Specifics */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Professional Summary Card */}
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                  <BrainCircuit className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Professional Summary</h3>
                  <p className="text-xs font-mono text-cyan-400">Data Analyst · Fresher</p>
                </div>
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {personalInfo.summary}
              </p>

              <div className="p-4 rounded-xl bg-dark-950/70 border border-white/5 space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-cyan-400 uppercase tracking-wider font-mono">
                  <Target className="w-3.5 h-3.5" />
                  <span>Career Objective</span>
                </div>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {personalInfo.careerObjective}
                </p>
              </div>

              {/* Verified Candidate Attributes */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-dark-950/40 border border-white/5 space-y-1">
                  <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1">
                    <Clock className="w-3 h-3 text-cyan-400" /> Availability
                  </span>
                  <div className="text-sm font-semibold text-white">{personalInfo.availability}</div>
                </div>

                <div className="p-3 rounded-xl bg-dark-950/40 border border-white/5 space-y-1">
                  <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1">
                    <Globe className="w-3 h-3 text-emerald-400" /> Relocation
                  </span>
                  <div className="text-sm font-semibold text-emerald-400">Open to Relocate</div>
                </div>

                <div className="p-3 rounded-xl bg-dark-950/40 border border-white/5 space-y-1 col-span-2 sm:col-span-1">
                  <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1">
                    <Languages className="w-3 h-3 text-indigo-400" /> Languages
                  </span>
                  <div className="text-sm font-semibold text-white">English, Tamil</div>
                </div>
              </div>
            </div>

            {/* Target Roles Card */}
            <div className="glass-panel p-6 rounded-2xl border border-white/10 space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                Target Opportunities
              </h4>
              <div className="flex flex-wrap gap-2">
                {personalInfo.targetRoles.map((role) => (
                  <span
                    key={role}
                    className="px-3 py-1.5 rounded-lg text-xs font-medium bg-cyan-500/10 text-cyan-300 border border-cyan-500/20"
                  >
                    {role}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: 4-Pillar Analytical Framework */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-sm font-mono uppercase tracking-wider text-slate-400 px-1">
              Core Analytical Disciplines
            </h3>

            {/* Discipline 1 */}
            <div className="glass-card p-5 rounded-2xl border border-white/10 space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
                    <Database className="w-4 h-4" />
                  </div>
                  <h4 className="font-semibold text-sm text-white">SQL & Relational Aggregation</h4>
                </div>
                <span className="text-[11px] font-mono text-cyan-400">Querying</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Proficient in multi-table JOINs, subqueries, and window functions across MySQL, PostgreSQL, and MS SQL Server to extract and restructure 50,000+ transactional records.
              </p>
            </div>

            {/* Discipline 2 */}
            <div className="glass-card p-5 rounded-2xl border border-white/10 space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                    <BarChart className="w-4 h-4" />
                  </div>
                  <h4 className="font-semibold text-sm text-white">Python EDA & Statistical Modeling</h4>
                </div>
                <span className="text-[11px] font-mono text-emerald-400">Analysis</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Utilizing Pandas, NumPy, and Scikit-learn for handling missing values, outlier detection, distribution analysis, and baseline classification models achieving 82% accuracy.
              </p>
            </div>

            {/* Discipline 3 */}
            <div className="glass-card p-5 rounded-2xl border border-white/10 space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400">
                    <Layers className="w-4 h-4" />
                  </div>
                  <h4 className="font-semibold text-sm text-white">Power BI & Tableau Storytelling</h4>
                </div>
                <span className="text-[11px] font-mono text-indigo-400">Visualization</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Translating intricate metrics into intuitive executive dashboards, interactive KPI cards, customer segmentation visuals, and regional performance trends.
              </p>
            </div>

            {/* Discipline 4 */}
            <div className="glass-card p-5 rounded-2xl border border-white/10 space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400">
                    <Target className="w-4 h-4" />
                  </div>
                  <h4 className="font-semibold text-sm text-white">Actionable Business Impact</h4>
                </div>
                <span className="text-[11px] font-mono text-amber-400">Impact</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Focusing on business outcomes—such as the 12% improvement potential identified in inventory planning accuracy—to ensure data work creates tangible operational value.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
