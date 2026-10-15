import React, { useState } from 'react';
import { 
  GitBranch, 
  Database, 
  Filter, 
  LineChart, 
  Cpu, 
  BarChart3, 
  TrendingUp, 
  CheckCircle2, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { analyticsWorkflow } from '../data/portfolio';
import { WorkflowStep } from '../types';

export const AnalyticsWorkflow: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(1);

  const currentStep = analyticsWorkflow.find((s) => s.step === activeStep) || analyticsWorkflow[0];

  const getStepIcon = (step: number) => {
    switch (step) {
      case 1: return <GitBranch className="w-4 h-4 text-cyan-400" />;
      case 2: return <Database className="w-4 h-4 text-emerald-400" />;
      case 3: return <Filter className="w-4 h-4 text-indigo-400" />;
      case 4: return <LineChart className="w-4 h-4 text-amber-400" />;
      case 5: return <Cpu className="w-4 h-4 text-cyan-400" />;
      case 6: return <BarChart3 className="w-4 h-4 text-emerald-400" />;
      case 7: return <TrendingUp className="w-4 h-4 text-amber-400" />;
      default: return <Sparkles className="w-4 h-4 text-cyan-400" />;
    }
  };

  return (
    <section id="workflow" className="py-20 relative bg-dark-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono uppercase tracking-wider">
            <GitBranch className="w-3.5 h-3.5" />
            <span>Structured Methodology</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            End-to-End <span className="gradient-text-cyan">Analytics Lifecycle</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            The systematic process applied from raw database queries to executive presentation and measurable impact.
          </p>
        </div>

        {/* Interactive Step Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2 mb-10">
          {analyticsWorkflow.map((step) => {
            const isCurrent = step.step === activeStep;
            return (
              <button
                key={step.step}
                onClick={() => setActiveStep(step.step)}
                className={`p-3 rounded-xl border transition-all text-left space-y-1.5 ${
                  isCurrent
                    ? 'bg-cyan-500/15 border-cyan-400/50 shadow-glow-cyan'
                    : 'bg-dark-900/60 border-white/5 hover:border-white/20'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`text-[10px] font-mono font-bold ${isCurrent ? 'text-cyan-300' : 'text-slate-400'}`}>
                    STEP 0{step.step}
                  </span>
                  {getStepIcon(step.step)}
                </div>
                <div className={`text-xs font-bold truncate ${isCurrent ? 'text-white' : 'text-slate-300'}`}>
                  {step.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Step Deep Dive Card */}
        <div className="glass-panel p-6 sm:p-10 rounded-3xl border border-white/10 relative overflow-hidden">
          
          {/* Subtle Ambient Background Highlight */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Details */}
            <div className="lg:col-span-8 space-y-5">
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-cyan-500 to-emerald-400 text-dark-950 font-mono font-extrabold flex items-center justify-center text-sm shadow-md">
                  0{currentStep.step}
                </span>
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-cyan-400">
                    Phase Execution
                  </span>
                  <h3 className="text-2xl font-extrabold text-white">
                    {currentStep.action}
                  </h3>
                </div>
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {currentStep.description}
              </p>

              {/* Tools and Deliverables */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-dark-900 border border-white/5 space-y-2">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                    Applied Tools & Techniques
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {currentStep.tools.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 text-xs font-medium rounded-md bg-dark-950 text-cyan-300 border border-cyan-500/20"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-dark-900 border border-white/5 space-y-2">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                    Key Deliverable
                  </span>
                  <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-emerald-400">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>{currentStep.deliverable}</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: Workflow Interactive Navigation */}
            <div className="lg:col-span-4 p-6 rounded-2xl bg-dark-900/80 border border-white/5 space-y-4">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                Pipeline Progression
              </h4>

              <div className="space-y-2">
                {analyticsWorkflow.map((s) => (
                  <button
                    key={s.step}
                    onClick={() => setActiveStep(s.step)}
                    className={`w-full flex items-center justify-between p-2 rounded-lg text-xs font-mono transition-colors ${
                      s.step === activeStep
                        ? 'bg-cyan-500/20 text-cyan-300 font-bold'
                        : 'text-slate-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <span>0{s.step}. {s.title}</span>
                    {s.step === activeStep && <ArrowRight className="w-3.5 h-3.5 text-cyan-400" />}
                  </button>
                ))}
              </div>

              <div className="pt-2 flex justify-between gap-2 border-t border-white/10">
                <button
                  disabled={activeStep === 1}
                  onClick={() => setActiveStep((prev) => Math.max(1, prev - 1))}
                  className="px-3 py-1.5 rounded-lg bg-dark-800 text-xs font-mono text-slate-300 hover:text-white disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  ← Previous
                </button>
                <button
                  disabled={activeStep === 7}
                  onClick={() => setActiveStep((prev) => Math.min(7, prev + 1))}
                  className="px-3 py-1.5 rounded-lg bg-cyan-500/20 text-xs font-mono text-cyan-300 hover:bg-cyan-500/30 disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  Next Phase →
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
