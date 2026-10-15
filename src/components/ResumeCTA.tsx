import React from 'react';
import { 
  FileDown, 
  CheckCircle2, 
  Mail, 
  FileCheck
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface ResumeCTAProps {
  onOpenResumeModal: () => void;
}

export const ResumeCTA: React.FC<ResumeCTAProps> = ({ onOpenResumeModal }) => {
  const handleOpen = () => {
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.6 }
    });
    onOpenResumeModal();
  };

  return (
    <section className="py-16 relative bg-dark-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="relative rounded-3xl glass-panel p-8 sm:p-12 border border-cyan-500/30 overflow-hidden shadow-2xl">
          
          {/* Subtle Accent Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: CTA Pitch */}
            <div className="lg:col-span-8 space-y-4 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono uppercase tracking-wider">
                <FileCheck className="w-3.5 h-3.5" />
                <span>Recruiter Ready · ATS Formatted</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Review Full <span className="gradient-text-cyan">Professional Resume</span>
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Detailed documentation of technical skills, academic coursework, SQL query architectures, IIT Bombay SINE incubation internship, and verified achievements.
              </p>

              {/* Highlights List */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2 text-xs font-mono text-slate-300">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Available for Immediate Hire
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  Willing to Relocate
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-indigo-400" />
                  English & Tamil
                </span>
              </div>
            </div>

            {/* Right Column: Actions */}
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <button
                onClick={handleOpen}
                className="w-full flex items-center justify-center gap-2.5 py-4 px-6 rounded-2xl bg-gradient-to-r from-cyan-500 via-teal-500 to-emerald-500 text-dark-950 font-bold text-sm shadow-xl shadow-cyan-500/20 hover:brightness-110 active:scale-95 transition-all"
              >
                <FileDown className="w-5 h-5" />
                <span>View & Print Resume</span>
              </button>

              <a
                href="#contact"
                className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl bg-dark-900 hover:bg-dark-850 text-slate-200 border border-white/10 hover:border-cyan-400/40 text-xs font-semibold font-mono transition-all active:scale-95 text-center"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>Connect via Email</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
