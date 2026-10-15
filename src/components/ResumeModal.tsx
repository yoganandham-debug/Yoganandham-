import React from 'react';
import { 
  X, 
  Printer
} from 'lucide-react';
import { personalInfo, educationHistory } from '../data/portfolio';
import confetti from 'canvas-confetti';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.3 }
    });
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-dark-950/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl glass-panel bg-dark-900 border border-white/15 rounded-3xl p-6 sm:p-10 max-h-[92vh] overflow-y-auto space-y-8 my-6 animate-in zoom-in-95 duration-200 shadow-2xl">
        
        {/* Controls Bar */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10 sticky -top-6 bg-dark-900/95 backdrop-blur-sm z-30 pt-1">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-mono font-semibold text-slate-200">
              ATS-Optimized Resume Document · Yoghanandham E
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-cyan-500/15 hover:bg-cyan-500/25 text-cyan-300 border border-cyan-500/30 text-xs font-mono font-semibold transition-all"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-xl bg-dark-800 text-slate-400 hover:text-white border border-white/10"
              aria-label="Close resume view"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Body */}
        <div className="space-y-6 text-slate-200 font-sans print:text-black print:bg-white print:p-0">
          
          {/* Header */}
          <div className="border-b border-white/10 pb-6 text-center space-y-2">
            <h2 className="text-3xl font-extrabold text-white tracking-tight">
              {personalInfo.name}
            </h2>
            <p className="text-base font-semibold text-cyan-400 tracking-wide font-mono">
              DATA ANALYST
            </p>
            <p className="text-xs text-slate-300 font-mono flex flex-wrap items-center justify-center gap-2 sm:gap-3">
              <span>{personalInfo.location}</span>
              <span>•</span>
              <span>{personalInfo.phone}</span>
              <span>•</span>
              <a href={`mailto:${personalInfo.email}`} className="text-cyan-300 hover:underline">
                {personalInfo.email}
              </a>
              <span>•</span>
              <span>linkedin.com/in/yourname</span>
              <span>•</span>
              <span>github.com/yourusername</span>
            </p>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2">
            <h3 className="text-sm font-bold uppercase tracking-wider text-cyan-400 font-mono border-b border-white/10 pb-1">
              Professional Summary
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {personalInfo.summary}
            </p>
          </div>

          {/* Technical Skills */}
          <div className="space-y-2">
            <h3 className="text-sm font-bold uppercase tracking-wider text-cyan-400 font-mono border-b border-white/10 pb-1">
              Technical Skills
            </h3>
            <div className="space-y-1.5 text-xs text-slate-300">
              <p>
                <strong className="text-white">Languages & Query Tools:</strong> SQL, Python (Pandas, NumPy), Excel (VLOOKUP, Pivot Tables, Macros)
              </p>
              <p>
                <strong className="text-white">Visualization Tools:</strong> Power BI, Tableau, Matplotlib, Seaborn
              </p>
              <p>
                <strong className="text-white">Databases:</strong> MySQL, PostgreSQL, MS SQL Server
              </p>
              <p>
                <strong className="text-white">Concepts:</strong> Statistics & Probability, Data Cleaning, EDA, A/B Testing, Data Modeling, KPI Reporting
              </p>
              <p>
                <strong className="text-white">Other Tools:</strong> MS Excel (Advanced), Google Sheets, Jupyter Notebook, Git/GitHub, Scikit-learn
              </p>
            </div>
          </div>

          {/* Academic Projects */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-cyan-400 font-mono border-b border-white/10 pb-1">
              Academic Projects
            </h3>
            
            {/* Project 1 */}
            <div className="space-y-1.5 text-xs text-slate-300">
              <div className="flex justify-between items-baseline font-bold text-white text-sm">
                <span>Retail Sales Performance Dashboard</span>
                <span className="font-mono text-cyan-300 text-xs">Tools: Power BI, SQL, Excel</span>
              </div>
              <ul className="list-disc pl-5 space-y-1">
                <li>Analyzed 50,000+ retail transaction records to identify sales trends across regions and product categories.</li>
                <li>Built an interactive Power BI dashboard with KPIs for revenue, profit margin, and customer segmentation.</li>
                <li>Wrote optimized SQL queries (joins, subqueries, window functions) to extract and aggregate data from a relational database.</li>
                <li>Presented insights that could support a 12% improvement in inventory planning accuracy.</li>
              </ul>
            </div>

            {/* Project 2 */}
            <div className="space-y-1.5 text-xs text-slate-300">
              <div className="flex justify-between items-baseline font-bold text-white text-sm">
                <span>Customer Churn Analysis</span>
                <span className="font-mono text-cyan-300 text-xs">Tools: Python, Pandas, Matplotlib, Scikit-learn</span>
              </div>
              <ul className="list-disc pl-5 space-y-1">
                <li>Performed exploratory data analysis on a telecom customer dataset to identify churn patterns.</li>
                <li>Cleaned and preprocessed data handling missing values, outliers, and categorical encoding.</li>
                <li>Built visualizations to communicate key churn drivers to a non-technical audience.</li>
                <li>Applied a logistic regression baseline model achieving 82% classification accuracy.</li>
              </ul>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-cyan-400 font-mono border-b border-white/10 pb-1">
              Education
            </h3>
            {educationHistory.map((edu) => (
              <div key={edu.degree} className="flex justify-between items-start text-xs text-slate-300">
                <div>
                  <div className="font-bold text-white text-sm">{edu.degree}</div>
                  <div>{edu.institution}</div>
                </div>
                <div className="text-right font-mono">
                  <div className="text-white">{edu.period}</div>
                  <div className="text-emerald-400 font-bold">CGPA: {edu.cgpa} / {edu.scale}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Internship */}
          <div className="space-y-2">
            <h3 className="text-sm font-bold uppercase tracking-wider text-cyan-400 font-mono border-b border-white/10 pb-1">
              Internship
            </h3>
            <div className="text-xs text-slate-300 space-y-1">
              <div className="flex justify-between font-bold text-white">
                <span>EduPyramids, SINE, IIT Bombay</span>
                <span className="font-mono text-slate-400">Sep 2025 - Nov 2025</span>
              </div>
              <ul className="list-disc pl-5 space-y-0.5">
                <li>Java Business Application development and module verification.</li>
                <li>Python 3.4.3 computational scripting and structured data tasks.</li>
              </ul>
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-2">
            <h3 className="text-sm font-bold uppercase tracking-wider text-cyan-400 font-mono border-b border-white/10 pb-1">
              Certifications
            </h3>
            <ul className="list-disc pl-5 text-xs text-slate-300 space-y-1">
              <li><strong>TATA GenAI Powered Data Analytics Job Simulation</strong> - TATA / Forage</li>
              <li><strong>SQL for Data Science</strong> - Coursera</li>
            </ul>
          </div>

          {/* Achievements & Extra-Curricular */}
          <div className="space-y-2">
            <h3 className="text-sm font-bold uppercase tracking-wider text-cyan-400 font-mono border-b border-white/10 pb-1">
              Achievements & Extra-Curricular
            </h3>
            <ul className="list-disc pl-5 text-xs text-slate-300 space-y-1">
              <li>Participated, Inter-College Data Analytics Hackathon, Mar-2026</li>
              <li>Completed 200+ problems on LeetCode in SQL and Python</li>
              <li>Active member of the college Analytics club</li>
            </ul>
          </div>

          {/* Additional Information */}
          <div className="space-y-2">
            <h3 className="text-sm font-bold uppercase tracking-wider text-cyan-400 font-mono border-b border-white/10 pb-1">
              Additional Information
            </h3>
            <p className="text-xs text-slate-300">
              <strong>Languages Known:</strong> English, Tamil &nbsp;|&nbsp; <strong>Visa Status / Willing to Relocate:</strong> Yes &nbsp;|&nbsp; <strong>Availability:</strong> Immediate
            </p>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
          <p className="text-xs font-mono text-slate-400">
            Source: Official Candidate Resume · Verified
          </p>
          <div className="flex gap-2">
            <button
              onClick={handlePrint}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 text-dark-950 font-bold text-xs"
            >
              Print / Save PDF
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-dark-800 text-slate-300 hover:text-white text-xs font-semibold border border-white/10"
            >
              Close
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
