import { motion } from 'motion/react';
import { Download, ChevronDown } from 'lucide-react';

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export function HeroSection() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 relative pt-20">
      <motion.div
        className="max-w-4xl w-full text-center"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {/* Profile photo */}
        <motion.div variants={item} className="flex justify-center mb-8">
          <div className="relative">
            <div className="w-32 h-32 md:w-36 md:h-36 rounded-full p-[3px] bg-gradient-to-br from-cyan-400 via-cyan-500 to-slate-700">
              <img
                src="/profile.png"
                alt="Subrata Bhuin"
                className="w-full h-full rounded-full object-cover object-top bg-slate-800"
              />
            </div>
            {/* Online dot */}
            <span className="absolute bottom-1 right-1 w-4 h-4 bg-cyan-400 rounded-full border-2 border-slate-950 animate-pulse" />
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={item}
          className="text-5xl md:text-6xl lg:text-7xl font-medium text-slate-50 mb-4 tracking-tight"
        >
          Subrata Bhuin
        </motion.h1>

        {/* Title */}
        <motion.p variants={item} className="text-2xl md:text-3xl text-cyan-400 mb-6">
          AI Engineer
        </motion.p>

        {/* Tagline */}
        <motion.p
          variants={item}
          className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Building intelligent systems with Agentic AI, Snowflake Cortex, and cutting-edge
          generative AI technologies to solve real-world problems.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={item}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button
            onClick={scrollToProjects}
            className="px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-slate-900 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/20 hover:-translate-y-0.5 font-medium"
          >
            View Projects
          </button>
          <a
            href="/Subrata_Resume.pdf"
            download="Subrata_Resume.pdf"
            className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-slate-100 rounded-lg transition-all duration-200 border border-slate-700 hover:border-slate-600 font-medium flex items-center gap-2"
          >
            <Download className="w-4 h-4" />
            Download Resume
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer"
        onClick={scrollToProjects}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            scrollToProjects();
          }
        }}
      >
        <ChevronDown className="w-6 h-6 text-slate-600" />
      </motion.div>
    </section>
  );
}
