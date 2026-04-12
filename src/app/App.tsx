import { Toaster } from 'sonner';
import { HeroSection } from './components/HeroSection';
import { Navigation } from './components/Navigation';
import { FocusAreas } from './components/FocusAreas';
import { Stats } from './components/Stats';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { ScrollToTop } from './components/ScrollToTop';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Background gradient overlay */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 pointer-events-none" />

      {/* Subtle grid pattern */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />

      <Navigation />

      <div className="relative z-10">
        <div id="home">
          <HeroSection />
        </div>
        <FocusAreas />
        <Stats />
        <div id="about">
          <About />
        </div>
        <div id="experience">
          <Experience />
        </div>
        <div id="skills">
          <Skills />
        </div>
        <Projects />
        <Certifications />
        <Contact />
      </div>

      <ScrollToTop />

      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: '#1e293b',
            border: '1px solid rgba(100,116,139,0.3)',
            color: '#f1f5f9',
          },
        }}
      />
    </div>
  );
}
