import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Database, 
  BarChart2, 
  TrendingUp, 
  FileDown, 
  MapPin, 
  CheckCircle,
  Code2
} from 'lucide-react';
import { personalInfo } from '../data/portfolio';

interface HeroProps {
  onOpenResumeModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResumeModal }) => {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Typing animation for supported titles
  useEffect(() => {
    const currentTitle = personalInfo.dynamicTitles[currentTitleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting && displayText === currentTitle) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setCurrentTitleIndex((prev) => (prev + 1) % personalInfo.dynamicTitles.length);
      } else {
        setDisplayText(
          isDeleting
            ? currentTitle.substring(0, displayText.length - 1)
            : currentTitle.substring(0, displayText.length + 1)
        );
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentTitleIndex]);

  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden data-grid-bg">
      {/* Dynamic Ambient Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-cyan-500/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-[420px] h-[420px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-[350px] h-[350px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline, Bio & CTAs */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Status Pills */}
            <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-semibold backdrop-blur-sm shadow-sm">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span>Open for Data Analyst Roles</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs font-medium">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                <span>{personalInfo.location} · Relocation: Yes</span>
              </div>
            </div>

            {/* Main Name & Title */}
            <div className="space-y-2">
              <p className="text-xs sm:text-sm font-mono tracking-widest text-slate-400 uppercase">
                Hello, I am
              </p>
              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
                {personalInfo.name}
              </h1>
              
              <div className="h-10 sm:h-12 flex items-center justify-center lg:justify-start gap-2 text-xl sm:text-2xl font-bold">
                <span className="text-slate-400">Specializing as</span>
                <span className="gradient-text-cyan font-mono border-b-2 border-cyan-400/30 pb-0.5">
                  {displayText}
                  <span className="inline-block w-0.5 h-6 bg-cyan-400 ml-1 animate-pulse" />
                </span>
              </div>
            </div>

            {/* Concise Value Statement */}
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Analytical fresher with a strong foundation in <span className="text-cyan-300 font-semibold">statistics</span>, <span className="text-cyan-300 font-semibold">SQL query optimization</span>, and <span className="text-emerald-300 font-semibold">Power BI & Tableau dashboards</span>. Proven experience analyzing <span className="text-white font-semibold underline decoration-cyan-400/50">50,000+ retail records</span> and developing an <span className="text-white font-semibold underline decoration-emerald-400/50">82% accuracy customer churn baseline model</span>.
            </p>

            {/* Recruiter Quick Badges */}
            <div className="pt-1">
              <p className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2.5">
                Core Stack Focus
              </p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
                {['SQL', 'Python (Pandas)', 'Power BI', 'Tableau', 'Excel (Advanced)', 'MySQL', 'EDA & Stats'].map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 text-xs font-medium rounded-md bg-dark-800 text-slate-200 border border-white/10 hover:border-cyan-400/40 hover:text-cyan-300 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-3 flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <a
                href="#projects"
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-teal-500 to-emerald-500 text-dark-950 font-bold text-sm shadow-lg shadow-cyan-500/20 hover:brightness-110 active:scale-95 transition-all"
              >
                <span>View Analytics Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#showcase"
                className="flex items-center gap-2 px-5 py-3.5 rounded-xl bg-dark-800/80 hover:bg-dark-800 text-slate-200 border border-white/10 hover:border-cyan-400/40 font-semibold text-sm transition-all active:scale-95 shadow-glass"
              >
                <BarChart2 className="w-4 h-4 text-cyan-400" />
                <span>Interactive Dashboard</span>
              </a>

              <button
                onClick={onOpenResumeModal}
                className="flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 font-semibold text-sm transition-all active:scale-95"
              >
                <FileDown className="w-4 h-4 text-emerald-400" />
                <span>Resume View</span>
              </button>
            </div>

            {/* Availability Footer Note */}
            <div className="flex items-center justify-center lg:justify-start gap-4 pt-2 text-xs text-slate-400 font-mono">
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                Joining: Immediate
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                IIT Bombay Incubator Intern
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                200+ LeetCode Solved
              </span>
            </div>

          </div>

          {/* Right Column: Interactive Analytics Dashboard Card Mockup */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Decorative Frame Glow */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-500/30 via-indigo-500/20 to-emerald-500/30 blur-xl opacity-75" />

              {/* Main Analytics Control Card */}
              <div className="relative rounded-2xl glass-panel p-6 shadow-2xl border border-white/10 space-y-5">
                
                {/* Header with KPI status */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div className="flex items-center gap-2.5">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    <span className="text-xs font-mono text-slate-400 ml-2">analytics_pipeline.sql</span>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                    LIVE METRICS
                  </span>
                </div>

                {/* Primary Metric 1: Retail Sales Volume */}
                <div className="p-4 rounded-xl bg-dark-900/80 border border-white/5 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-slate-400 flex items-center gap-1.5">
                      <Database className="w-3.5 h-3.5 text-cyan-400" />
                      Retail Transactions Aggregated
                    </span>
                    <span className="text-xs font-mono text-emerald-400 font-semibold">+12% Accuracy</span>
                  </div>
                  <div className="flex items-baseline justify-between">
                    <span className="text-3xl font-extrabold text-white tracking-tight font-mono">
                      50,000+
                    </span>
                    <span className="text-xs text-slate-400 font-mono">
                      SQL Window Queries
                    </span>
                  </div>
                  <div className="w-full bg-dark-800 rounded-full h-1.5 overflow-hidden">
                    <div className="bg-gradient-to-r from-cyan-400 to-emerald-400 h-full rounded-full w-[88%]" />
                  </div>
                </div>

                {/* Metric 2 & 3 in 2-Column Grid */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3.5 rounded-xl bg-dark-900/80 border border-white/5 space-y-1">
                    <span className="text-[11px] font-medium text-slate-400 flex items-center gap-1">
                      <TrendingUp className="w-3 h-3 text-emerald-400" />
                      Churn Predictor
                    </span>
                    <div className="text-2xl font-bold text-emerald-400 font-mono">82%</div>
                    <p className="text-[10px] text-slate-400">Baseline accuracy (LogReg)</p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-dark-900/80 border border-white/5 space-y-1">
                    <span className="text-[11px] font-medium text-slate-400 flex items-center gap-1">
                      <Code2 className="w-3 h-3 text-indigo-400" />
                      LeetCode
                    </span>
                    <div className="text-2xl font-bold text-indigo-400 font-mono">200+</div>
                    <p className="text-[10px] text-slate-400">SQL & Python Solved</p>
                  </div>
                </div>

                {/* Analytics Workflow Snippet */}
                <div className="p-3.5 rounded-xl bg-dark-900/60 border border-white/5 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-mono text-slate-300">Data-to-Insights Process</span>
                    <span className="text-[10px] text-cyan-400 font-mono">7 Stages</span>
                  </div>
                  <div className="flex items-center justify-between gap-1 text-[11px] font-mono text-slate-400">
                    <span className="px-1.5 py-0.5 rounded bg-white/5 text-cyan-300">SQL Ingest</span>
                    <span>→</span>
                    <span className="px-1.5 py-0.5 rounded bg-white/5 text-emerald-300">Clean EDA</span>
                    <span>→</span>
                    <span className="px-1.5 py-0.5 rounded bg-white/5 text-indigo-300">Power BI</span>
                    <span>→</span>
                    <span className="px-1.5 py-0.5 rounded bg-white/5 text-amber-300">Impact</span>
                  </div>
                </div>

                {/* Candidate Badge */}
                <div className="pt-2 flex items-center justify-between text-xs text-slate-400 border-t border-white/10">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span className="font-medium text-slate-300">M.Sc & BCA Graduate</span>
                  </div>
                  <span className="font-mono text-slate-400">CGPA 7.5 / 7.1</span>
                </div>

              </div>

              {/* Floating Pill Accent Top Right */}
              <div className="hidden sm:flex absolute -top-4 -right-4 glass-card px-3.5 py-2 rounded-xl items-center gap-2 shadow-lg border border-cyan-400/30 animate-float-slow">
                <BarChart2 className="w-4 h-4 text-cyan-400" />
                <span className="text-xs font-semibold text-slate-200">Power BI & Tableau</span>
              </div>

              {/* Floating Pill Accent Bottom Left */}
              <div className="hidden sm:flex absolute -bottom-4 -left-4 glass-card px-3.5 py-2 rounded-xl items-center gap-2 shadow-lg border border-emerald-400/30">
                <Database className="w-4 h-4 text-emerald-400" />
                <span className="text-xs font-semibold text-slate-200">SQL Joins & Window Fns</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
