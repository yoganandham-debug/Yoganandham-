import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { AnalyticsSnapshot } from './components/AnalyticsSnapshot';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { VisualizationShowcase } from './components/VisualizationShowcase';
import { AnalyticsWorkflow } from './components/AnalyticsWorkflow';
import { Education } from './components/Education';
import { Certifications } from './components/Certifications';
import { Experience } from './components/Experience';
import { Achievements } from './components/Achievements';
import { Profiles } from './components/Profiles';
import { ResumeCTA } from './components/ResumeCTA';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export function App() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-dark-950 text-slate-100 flex flex-col font-sans selection:bg-cyan-500/20 selection:text-cyan-300">
      {/* Sticky Header */}
      <Navbar onOpenResumeModal={() => setIsResumeModalOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero onOpenResumeModal={() => setIsResumeModalOpen(true)} />

        {/* 2. Candidate About & Mindset */}
        <About />

        {/* 3. Analytics KPI Snapshot */}
        <AnalyticsSnapshot />

        {/* 4. Categorized Technical Skills */}
        <Skills />

        {/* 5. Featured Data Analytics Case Studies */}
        <Projects />

        {/* 6. Interactive Visualization Dashboard Showcase */}
        <VisualizationShowcase />

        {/* 7. End-to-End Analytics Workflow */}
        <AnalyticsWorkflow />

        {/* 8. Education & Academic Rigor */}
        <Education />

        {/* 9. Verified Certifications */}
        <Certifications />

        {/* 10. Industry & Incubation Experience */}
        <Experience />

        {/* 11. Achievements & Hackathon Honors */}
        <Achievements />

        {/* 12. Coding Profiles & Repositories */}
        <Profiles />

        {/* 13. Dedicated Resume Callout */}
        <ResumeCTA onOpenResumeModal={() => setIsResumeModalOpen(true)} />

        {/* 14. Direct Contact & Communication */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* ATS Resume Modal (Printable / PDF) */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
  );
}

export default App;
