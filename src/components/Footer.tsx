import React from 'react';
import { 
  BarChart3, 
  ArrowUp
} from 'lucide-react';
import { personalInfo } from '../data/portfolio';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark-950 border-t border-white/10 pt-16 pb-12 relative overflow-hidden">
      
      {/* Subtle Bottom Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-white/10">
          
          {/* Col 1: Identity & Brand */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-emerald-400 p-[1.5px] shadow-glow-cyan">
                <div className="w-full h-full bg-dark-950 rounded-[10px] flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-cyan-400" />
                </div>
              </div>
              <div>
                <span className="font-extrabold text-white text-lg tracking-tight">
                  {personalInfo.name}
                </span>
                <p className="text-xs font-mono text-cyan-400">
                  Data Analyst · Business Intelligence
                </p>
              </div>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Transforming raw relational data into actionable insights through SQL, Python, Power BI, and statistical analysis.
            </p>

            <div className="text-xs font-mono text-slate-400 space-y-1">
              <p>📍 {personalInfo.location}</p>
              <p>✉️ {personalInfo.email}</p>
              <p>📞 {personalInfo.phone}</p>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300">
              Quick Portfolio Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs font-mono text-slate-400">
              <a href="#about" className="hover:text-cyan-300 transition-colors">About Mindset</a>
              <a href="#snapshot" className="hover:text-cyan-300 transition-colors">KPI Snapshot</a>
              <a href="#skills" className="hover:text-cyan-300 transition-colors">Technical Stack</a>
              <a href="#projects" className="hover:text-cyan-300 transition-colors">Case Studies</a>
              <a href="#showcase" className="hover:text-cyan-300 transition-colors">Live Dashboards</a>
              <a href="#workflow" className="hover:text-cyan-300 transition-colors">Analytics Lifecycle</a>
              <a href="#education" className="hover:text-cyan-300 transition-colors">Education & Rigor</a>
              <a href="#contact" className="hover:text-cyan-300 transition-colors">Direct Contact</a>
            </div>
          </div>

          {/* Col 3: Direct Profiles & Back to Top */}
          <div className="md:col-span-3 space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300">
                Candidate Status
              </h4>
              <div className="p-3 rounded-xl bg-dark-900 border border-white/5 space-y-1 text-xs font-mono">
                <span className="text-emerald-400 font-semibold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Available Immediately
                </span>
                <p className="text-slate-400">Visa / Relocation: Yes</p>
              </div>
            </div>

            <button
              onClick={scrollToTop}
              className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-dark-800 hover:bg-dark-700 text-xs font-mono text-slate-200 border border-white/10 transition-colors group self-start"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform text-cyan-400" />
            </button>
          </div>

        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <p>
            © {new Date().getFullYear()} {personalInfo.name}. All portfolio claims strictly supported by official resume.
          </p>
          <p className="flex items-center gap-1">
            Built with <span className="text-cyan-400 font-semibold">React</span>, <span className="text-cyan-400 font-semibold">TypeScript</span> & <span className="text-cyan-400 font-semibold">Tailwind CSS</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
