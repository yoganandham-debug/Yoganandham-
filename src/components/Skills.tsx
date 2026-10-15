import React, { useState } from 'react';
import { Cpu } from 'lucide-react';
import { skillCategories } from '../data/portfolio';
import type { SkillItem } from '../types';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Disciplines' },
    { id: 'languages-query', label: 'Languages & Query' },
    { id: 'visualization', label: 'Visualization & BI' },
    { id: 'databases', label: 'Databases & SQL' },
    { id: 'concepts', label: 'Analytical Concepts' },
    { id: 'tools', label: 'Ecosystem & Tools' },
  ];

  const allSkills: SkillItem[] = skillCategories.flatMap((c) => c.skills);

  const displayedSkills =
    selectedCategory === 'all'
      ? allSkills
      : skillCategories.find((c) => c.id === selectedCategory)?.skills || [];

  const getLevelBadge = (level: SkillItem['level']) => {
    switch (level) {
      case 'Intermediate':
        return {
          label: 'Intermediate',
          badge: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30'
        };
      case 'Working Knowledge':
        return {
          label: 'Working Knowledge',
          badge: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30'
        };
      case 'Familiar':
        return {
          label: 'Familiar',
          badge: 'bg-indigo-500/10 text-indigo-300 border-indigo-500/30'
        };
      default:
        return {
          label: 'Practical',
          badge: 'bg-slate-500/10 text-slate-300 border-slate-500/30'
        };
    }
  };

  return (
    <section id="skills" className="py-20 relative bg-dark-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono uppercase tracking-wider">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Categorized <span className="gradient-text-cyan">Technical Stack</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Strictly derived from project implementations and academic applications, categorized with authentic competency levels rather than exaggerated percentages.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                selectedCategory === cat.id
                  ? 'bg-gradient-to-r from-cyan-500 to-teal-500 text-dark-950 font-bold shadow-md shadow-cyan-500/20'
                  : 'bg-dark-800/80 text-slate-300 hover:text-white hover:bg-dark-800 border border-white/5'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedSkills.map((skill) => {
            const levelInfo = getLevelBadge(skill.level);
            return (
              <div
                key={skill.name}
                className="glass-card p-6 rounded-2xl border border-white/10 flex flex-col justify-between space-y-4 group hover:border-cyan-400/40 transition-all"
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div>
                      <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                        {skill.category}
                      </span>
                      <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {skill.name}
                      </h3>
                    </div>
                    
                    <span
                      className={`px-2.5 py-1 rounded-full text-[11px] font-mono border font-medium whitespace-nowrap ${levelInfo.badge}`}
                    >
                      {levelInfo.label}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {skill.description}
                  </p>
                </div>

                {/* Tags / Sub-skills */}
                {skill.tags && (
                  <div className="pt-3 border-t border-white/5">
                    <div className="flex flex-wrap gap-1.5">
                      {skill.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded text-[11px] font-mono bg-dark-950 text-slate-400 border border-white/5 group-hover:border-cyan-500/20 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Realistic Level Guide */}
        <div className="mt-12 p-4 rounded-xl bg-dark-950/70 border border-white/5 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-mono">
          <span className="text-slate-300 font-semibold">Proficiency Standard:</span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            Intermediate (Active project delivery & advanced queries)
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            Working Knowledge (Practical applications & coursework)
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-indigo-400" />
            Familiar (Baseline conceptual implementation)
          </span>
        </div>

      </div>
    </section>
  );
};
