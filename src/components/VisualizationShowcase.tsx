import React, { useState } from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  Legend, 
  Cell
} from 'recharts';
import { 
  BarChart3, 
  TrendingUp, 
  Info
} from 'lucide-react';
import { showcaseVisualData } from '../data/portfolio';

export const VisualizationShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'retail' | 'churn'>('retail');
  const [selectedRegion, setSelectedRegion] = useState<string>('All');

  const filteredRegionalData =
    selectedRegion === 'All'
      ? showcaseVisualData.retailRegionalData
      : showcaseVisualData.retailRegionalData.filter((d) => d.region === selectedRegion);

  const colors = ['#06b6d4', '#10b981', '#6366f1', '#f59e0b', '#ec4899'];

  return (
    <section id="showcase" className="py-20 relative bg-dark-900/60 data-dot-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono uppercase tracking-wider">
            <BarChart3 className="w-3.5 h-3.5" />
            <span>Interactive Data Visualization</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Interactive <span className="gradient-text-cyan">Dashboard Showcase</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Live interactive demonstrations illustrating the visualization structures engineered for the Retail Sales Performance and Telecom Churn projects.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-8">
          <div className="glass-panel p-1.5 rounded-2xl border border-white/10 flex gap-2">
            <button
              onClick={() => setActiveTab('retail')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'retail'
                  ? 'bg-gradient-to-r from-cyan-500 to-teal-500 text-dark-950 shadow-md font-bold'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              <BarChart3 className="w-4 h-4" />
              <span>Retail Sales Performance (Power BI)</span>
            </button>
            <button
              onClick={() => setActiveTab('churn')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'churn'
                  ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-dark-950 shadow-md font-bold'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              <TrendingUp className="w-4 h-4" />
              <span>Telecom Churn Predictor (Python / ML)</span>
            </button>
          </div>
        </div>

        {/* TAB 1: RETAIL SALES DASHBOARD */}
        {activeTab === 'retail' && (
          <div className="space-y-6 animate-in fade-in duration-300">
            
            {/* KPI Cards Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="glass-panel p-4 rounded-xl border border-white/10 space-y-1">
                <span className="text-[11px] font-mono text-slate-400">Total Dataset Scope</span>
                <div className="text-2xl font-bold font-mono text-white">50,000+</div>
                <p className="text-[10px] text-cyan-400 font-mono">Aggregated via SQL</p>
              </div>

              <div className="glass-panel p-4 rounded-xl border border-white/10 space-y-1">
                <span className="text-[11px] font-mono text-slate-400">Total Analyzed Revenue</span>
                <div className="text-2xl font-bold font-mono text-cyan-300">$158.0K</div>
                <p className="text-[10px] text-slate-400">5 Regional Hubs</p>
              </div>

              <div className="glass-panel p-4 rounded-xl border border-white/10 space-y-1">
                <span className="text-[11px] font-mono text-slate-400">Top Zone Margin</span>
                <div className="text-2xl font-bold font-mono text-emerald-400">21.9%</div>
                <p className="text-[10px] text-emerald-400 font-mono">South Zone Hub</p>
              </div>

              <div className="glass-panel p-4 rounded-xl border border-white/10 space-y-1">
                <span className="text-[11px] font-mono text-slate-400">Planning Precision Impact</span>
                <div className="text-2xl font-bold font-mono text-amber-400">+12%</div>
                <p className="text-[10px] text-amber-400 font-mono">Inventory Accuracy</p>
              </div>
            </div>

            {/* Filter Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl glass-card border border-white/10">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-slate-400">Region Drill-down:</span>
                <div className="flex flex-wrap gap-1.5">
                  {['All', 'South Zone', 'North Zone', 'West Zone', 'East Zone', 'Central Zone'].map((region) => (
                    <button
                      key={region}
                      onClick={() => setSelectedRegion(region)}
                      className={`px-2.5 py-1 rounded-md text-xs font-mono transition-colors ${
                        selectedRegion === region
                          ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-semibold'
                          : 'bg-dark-900 text-slate-400 hover:text-white border border-white/5'
                      }`}
                    >
                      {region}
                    </button>
                  ))}
                </div>
              </div>

              <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                <Info className="w-3.5 h-3.5 text-cyan-400" />
                Power BI & SQL Aggregation Model
              </span>
            </div>

            {/* Charts Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              
              {/* Regional Revenue Chart */}
              <div className="lg:col-span-7 glass-panel p-6 rounded-2xl border border-white/10 space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-bold text-white">Regional Revenue vs. Profit Breakdown</h3>
                    <p className="text-xs text-slate-400 font-mono">Aggregated from 50,000+ transaction rows</p>
                  </div>
                  <span className="text-xs font-mono text-cyan-400 px-2 py-0.5 rounded bg-cyan-500/10">
                    USD ($)
                  </span>
                </div>

                <div className="h-72 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={filteredRegionalData} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                      <XAxis dataKey="region" stroke="#94a3b8" fontSize={11} tickLine={false} />
                      <YAxis stroke="#94a3b8" fontSize={11} tickLine={false} />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: '#0b0f19',
                          borderColor: 'rgba(255,255,255,0.1)',
                          borderRadius: '8px',
                          color: '#fff',
                          fontSize: '12px'
                        }}
                      />
                      <Legend wrapperStyle={{ fontSize: '11px', paddingTop: '10px' }} />
                      <Bar dataKey="revenue" name="Total Revenue ($)" fill="#06b6d4" radius={[4, 4, 0, 0]} />
                      <Bar dataKey="profit" name="Net Profit ($)" fill="#10b981" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Category Sales Breakdown */}
              <div className="lg:col-span-5 glass-panel p-6 rounded-2xl border border-white/10 space-y-4 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-base font-bold text-white">Category Sales Distribution</h3>
                    <span className="text-xs font-mono text-emerald-400 px-2 py-0.5 rounded bg-emerald-500/10">
                      Share (%)
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 font-mono mb-4">
                    Category inventory alignment uncovered 12% accuracy gain
                  </p>

                  <div className="space-y-4">
                    {showcaseVisualData.retailCategoryData.map((cat, i) => (
                      <div key={cat.category} className="space-y-1.5">
                        <div className="flex justify-between text-xs font-mono">
                          <span className="text-slate-200 font-medium">{cat.category}</span>
                          <span className="text-cyan-300 font-bold">{cat.salesShare}%</span>
                        </div>
                        <div className="w-full bg-dark-900 rounded-full h-2 overflow-hidden border border-white/5">
                          <div
                            className="h-full rounded-full transition-all duration-500"
                            style={{
                              width: `${cat.salesShare}%`,
                              backgroundColor: colors[i % colors.length]
                            }}
                          />
                        </div>
                        <div className="flex justify-between text-[10px] text-slate-400">
                          <span>Turnover Ratio</span>
                          <span className="font-mono text-slate-300">{cat.inventoryTurnover}x / yr</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-dark-950/70 border border-white/5 mt-4 text-xs text-slate-300 font-mono">
                  💡 <span className="text-cyan-300 font-semibold">Insight:</span> Electronics & Fashion drive 65% of volume; buffering these segments resolved stockouts.
                </div>
              </div>

            </div>
          </div>
        )}

        {/* TAB 2: TELECOM CHURN DASHBOARD */}
        {activeTab === 'churn' && (
          <div className="space-y-6 animate-in fade-in duration-300">
            
            {/* KPI Cards Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="glass-panel p-4 rounded-xl border border-white/10 space-y-1">
                <span className="text-[11px] font-mono text-slate-400">Baseline Accuracy</span>
                <div className="text-2xl font-bold font-mono text-emerald-400">82.0%</div>
                <p className="text-[10px] text-emerald-400 font-mono">Logistic Regression</p>
              </div>

              <div className="glass-panel p-4 rounded-xl border border-white/10 space-y-1">
                <span className="text-[11px] font-mono text-slate-400">Recall (At-Risk)</span>
                <div className="text-2xl font-bold font-mono text-cyan-300">84.0%</div>
                <p className="text-[10px] text-slate-400">High sensitivity</p>
              </div>

              <div className="glass-panel p-4 rounded-xl border border-white/10 space-y-1">
                <span className="text-[11px] font-mono text-slate-400">Precision</span>
                <div className="text-2xl font-bold font-mono text-indigo-400">78.0%</div>
                <p className="text-[10px] text-slate-400">True churn identification</p>
              </div>

              <div className="glass-panel p-4 rounded-xl border border-white/10 space-y-1">
                <span className="text-[11px] font-mono text-slate-400">ROC-AUC Score</span>
                <div className="text-2xl font-bold font-mono text-amber-400">85.0%</div>
                <p className="text-[10px] text-amber-400 font-mono">Discriminative power</p>
              </div>
            </div>

            {/* Churn Visuals Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              
              {/* Feature Importance / Churn Drivers */}
              <div className="lg:col-span-7 glass-panel p-6 rounded-2xl border border-white/10 space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-bold text-white">Exploratory Churn Driver Correlation</h3>
                    <p className="text-xs text-slate-400 font-mono">Relative feature importance score (EDA & Logistic Model)</p>
                  </div>
                  <span className="text-xs font-mono text-emerald-400 px-2 py-0.5 rounded bg-emerald-500/10">
                    Feature Impact
                  </span>
                </div>

                <div className="h-72 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={showcaseVisualData.churnDriverData}
                      layout="vertical"
                      margin={{ top: 10, right: 20, left: 40, bottom: 0 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                      <XAxis type="number" stroke="#94a3b8" fontSize={11} domain={[0, 100]} />
                      <YAxis dataKey="factor" type="category" stroke="#94a3b8" fontSize={10} width={130} tickLine={false} />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: '#0b0f19',
                          borderColor: 'rgba(255,255,255,0.1)',
                          borderRadius: '8px',
                          color: '#fff',
                          fontSize: '12px'
                        }}
                      />
                      <Bar dataKey="importance" name="Impact Index (%)" fill="#10b981" radius={[0, 4, 4, 0]}>
                        {showcaseVisualData.churnDriverData.map((_, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={index === 0 ? '#ef4444' : index === 1 ? '#f59e0b' : '#10b981'}
                          />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Model Baseline vs Benchmark */}
              <div className="lg:col-span-5 glass-panel p-6 rounded-2xl border border-white/10 space-y-4 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-base font-bold text-white">Model Metrics vs. Benchmark</h3>
                    <span className="text-xs font-mono text-cyan-400 px-2 py-0.5 rounded bg-cyan-500/10">
                      Scikit-learn
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 font-mono mb-4">
                    Comparison against standard un-tuned industry baseline (70%)
                  </p>

                  <div className="space-y-4">
                    {showcaseVisualData.churnModelConfusionData.map((item) => (
                      <div key={item.metric} className="p-3 rounded-xl bg-dark-900 border border-white/5 space-y-1.5">
                        <div className="flex justify-between text-xs font-mono">
                          <span className="text-slate-300 font-medium">{item.metric}</span>
                          <span className="text-emerald-400 font-bold">{item.value}%</span>
                        </div>
                        <div className="w-full bg-dark-950 rounded-full h-2 overflow-hidden">
                          <div
                            className="bg-gradient-to-r from-emerald-500 to-cyan-400 h-full rounded-full"
                            style={{ width: `${item.value}%` }}
                          />
                        </div>
                        <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                          <span>Heuristic Baseline: {item.benchmark}%</span>
                          <span className="text-emerald-400">+{item.value - item.benchmark}% lift</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-dark-950/70 border border-white/5 mt-4 text-xs text-slate-300 font-mono">
                  🎯 <span className="text-emerald-400 font-semibold">Key Finding:</span> Month-to-month contracts and tenure under 1 year represent 80%+ of avoidable attrition.
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
