import { Download, ChevronDown } from 'lucide-react';

export function HeroSection() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 relative">
      <div className="max-w-4xl w-full text-center">
        {/* Small accent badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-8">
          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
          <span className="text-sm text-cyan-400">Available for opportunities</span>
        </div>

        {/* Main heading */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-slate-50 mb-4 tracking-tight">
          Subrata Bhuin
        </h1>

        {/* Title */}
        <p className="text-2xl md:text-3xl text-cyan-400 mb-6">
          Junior AI Engineer
        </p>

        {/* Tagline */}
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed">
          Building intelligent systems with Agentic AI, Snowflake Cortex, and cutting-edge 
          generative AI technologies to solve real-world problems.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button 
            onClick={scrollToProjects}
            className="px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-slate-900 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/20 hover:-translate-y-0.5 font-medium"
          >
            View Projects
          </button>
          <button className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-slate-100 rounded-lg transition-all duration-200 border border-slate-700 hover:border-slate-600 font-medium flex items-center gap-2">
            <Download className="w-4 h-4" />
            Download Resume
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-slate-600" />
      </div>
    </section>
  );
}
