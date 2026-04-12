import { useState, useEffect, useRef } from 'react';
import { ExternalLink, Github, Lock, CheckCircle2, TrendingDown, Database, Building2 } from 'lucide-react';

interface Project {
  title: string;
  tagline: string;
  highlights: string[];
  tech: string[];
  github: string | null;
  demo: string | null;
  wip?: boolean;
  privateRepo?: boolean;
}

const featuredWork = {
  title: 'AI-Powered Conversational Analytics Platform',
  tagline: 'Natural language querying over 4 billion rows of loyalty program data on Snowflake',
  at: 'Thirdeye Data · 2025',
  highlights: [
    'Built and optimised a Snowflake Cortex Analyst semantic model covering all analytical domains — enabling business users to query 4B+ rows of transaction, points, redemption, and account data in plain English',
    'Authored verified queries for all major business question patterns, bypassing LLM generation for high-frequency questions and significantly cutting response latency',
    'Designed a pre-joined Dynamic Table layer with compound clustering keys — eliminating all runtime joins between a multi-billion row fact table and a large dimension table',
    'Implemented a window-function-based incremental refresh pattern using QUALIFY RANK() to reprocess only changed partitions on each cycle, avoiding full rescans of billions of rows',
  ],
  metrics: [
    { value: '~75%', label: 'SQL execution time reduced' },
    { value: '~95%', label: 'Data scanned per query reduced' },
    { value: 'Zero', label: 'Memory spill (was tens of GB)' },
    { value: '~99.9%', label: 'Network bytes on point queries' },
  ],
  tech: ['Snowflake', 'Cortex Analyst', 'Cortex Agent', 'Dynamic Tables', 'Micro-partition Clustering', 'YAML Semantic Modelling', 'SQL', 'Python'],
};

const projects: Project[] = [
  {
    title: 'Gita Wisdom Guide',
    tagline: 'AI-powered spiritual companion rooted in the Bhagavad Gita',
    highlights: [
      'Ask any life question in plain language — receive verse-backed wisdom from Krishna\'s teachings',
      'RAG pipeline with query expansion and multi-theme detection for deeply relevant answers',
      'Conversation memory that maintains context across exchanges for a natural, flowing dialogue',
      'Deployed live — full-stack React + FastAPI architecture on Vercel',
    ],
    tech: ['React 18', 'Vite', 'Tailwind CSS', 'FastAPI', 'ChromaDB', 'Sentence Transformers', 'Gemini 2.5 Flash', 'Python'],
    github: 'https://github.com/Subrata2003/gita-wisdom-guide',
    demo: 'https://gita-wisdom-guide.vercel.app/',
  },
  {
    title: 'Agentic AI Research Platform',
    tagline: 'Autonomous agent that researches any topic and writes the report for you',
    highlights: [
      'Self-plans its own research strategy before searching — no prompt engineering needed',
      'Searches and synthesizes across multiple sources, tracking every citation automatically',
      'Real-time progress updates streamed to a modern web UI as the agent works',
      'Outputs clean, structured, formatted reports ready to use',
    ],
    tech: ['Python', 'FastAPI', 'LangChain', 'Web Search APIs', 'React', 'CLI Interface'],
    github: 'https://github.com/Subrata2003/agentic-ai-research',
    demo: null,
    wip: true,
  },
  {
    title: 'Hallucination Detector',
    tagline: 'Claim-level fact verification for LLM-generated text using RAG + NLI',
    highlights: [
      'Decomposes any LLM output into atomic factual claims using Gemini — zero manual labelling',
      'Hybrid PubMed knowledge base search combining dense vectors + BM25 for recall + precision',
      'Scores each claim locally with a DeBERTa NLI model — no external API calls for inference',
      'Returns a structured per-claim verdict: SUPPORTED / CONTRADICTED / UNVERIFIABLE',
    ],
    tech: ['Python', 'FastAPI', 'Gemini 2.0 Flash Lite', 'Sentence Transformers', 'Qdrant', 'BM25', 'DeBERTa NLI', 'Celery', 'Redis', 'PostgreSQL', 'Streamlit', 'Langfuse', 'Docker'],
    github: null,
    demo: null,
    privateRepo: true,
  },
];

function FeaturedWorkCard({ isVisible }: { isVisible: boolean }) {
  return (
    <div
      className={`relative rounded-2xl bg-slate-800/60 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-700 hover:shadow-xl hover:shadow-cyan-500/10 overflow-hidden mb-8 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {/* Subtle top glow line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

      <div className="p-8 md:p-10">
        {/* Header row */}
        <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-semibold tracking-widest uppercase bg-cyan-500/15 border border-cyan-500/30 text-cyan-400">
              <Building2 className="w-3 h-3" />
              Enterprise Work
            </span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-semibold tracking-widest uppercase bg-slate-700/60 border border-slate-600/50 text-slate-400">
              <Lock className="w-3 h-3" />
              Proprietary
            </span>
          </div>
          <span className="text-sm text-slate-500 font-medium">{featuredWork.at}</span>
        </div>

        {/* Title + tagline */}
        <h3 className="text-2xl md:text-3xl font-semibold text-slate-50 mb-2 leading-snug">
          {featuredWork.title}
        </h3>
        <p className="text-cyan-400 italic mb-8 text-sm md:text-base">
          {featuredWork.tagline}
        </p>

        {/* Two-column: highlights + metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* What I built */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-4">What I built</p>
            <ul className="space-y-3">
              {featuredWork.highlights.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-500/70 shrink-0 mt-0.5" />
                  <span className="text-slate-300 text-sm leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Results */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <TrendingDown className="w-3.5 h-3.5 text-slate-500" />
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">Results achieved</p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {featuredWork.metrics.map((m, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-slate-900/60 border border-slate-700/50 hover:border-cyan-500/20 transition-colors"
                >
                  <div className="text-2xl font-bold text-cyan-400 mb-1">{m.value}</div>
                  <div className="text-xs text-slate-400 leading-snug">{m.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer: tech + proprietary note */}
        <div className="pt-6 border-t border-slate-700/50 flex flex-col sm:flex-row sm:items-center gap-4 justify-between">
          <div className="flex flex-wrap gap-2">
            {featuredWork.tech.map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 text-xs bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 rounded-md hover:bg-cyan-500/20 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-1.5 text-slate-600 text-xs shrink-0">
            <Database className="w-3.5 h-3.5" />
            <span>4B+ rows · Production</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    if (ref.current) observer.observe(ref.current);
    return () => { if (ref.current) observer.unobserve(ref.current); };
  }, []);

  return (
    <div
      ref={ref}
      className={`group p-8 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-cyan-500/30 transition-all duration-500 hover:shadow-lg hover:shadow-cyan-500/10 flex flex-col hover:-translate-y-2 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Title row */}
      <div className="flex items-start justify-between mb-2 gap-3">
        <div className="flex items-center gap-2 flex-wrap">
          <h3 className="text-xl font-semibold text-slate-50 group-hover:text-cyan-400 transition-colors">
            {project.title}
          </h3>
          {project.wip && (
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold tracking-wide uppercase bg-amber-500/15 border border-amber-500/30 text-amber-400 shrink-0">
              WIP
            </span>
          )}
        </div>
      </div>

      {/* Tagline */}
      <p className="text-sm text-cyan-400 mb-5 italic">{project.tagline}</p>

      {/* Highlights */}
      <ul className="space-y-2.5 mb-6 flex-1">
        {project.highlights.map((point, idx) => (
          <li key={idx} className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-cyan-500/70 shrink-0 mt-0.5" />
            <span className="text-slate-300 text-sm leading-relaxed">{point}</span>
          </li>
        ))}
      </ul>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tech.map((tech, idx) => (
          <span
            key={idx}
            className="px-3 py-1.5 text-xs bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 rounded-md hover:bg-cyan-500/20 transition-colors"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex gap-4 pt-4 border-t border-slate-700/50">
        {project.privateRepo ? (
          <span className="flex items-center gap-2 text-slate-600 text-sm font-medium cursor-not-allowed select-none">
            <Lock className="w-4 h-4" />
            <span>Private Repo</span>
          </span>
        ) : (
          <a
            href={project.github ?? '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors text-sm font-medium group/link"
          >
            <Github className="w-4 h-4 group-hover/link:scale-110 transition-transform" />
            <span>View Code</span>
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors text-sm font-medium group/link"
          >
            <ExternalLink className="w-4 h-4 group-hover/link:scale-110 transition-transform" />
            <span>Live Demo</span>
          </a>
        )}
      </div>
    </div>
  );
}

export function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => { if (ref.current) observer.unobserve(ref.current); };
  }, []);

  return (
    <section
      ref={ref}
      id="projects"
      className={`py-24 px-6 transition-all duration-700 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-slate-50 mb-4 text-center">
          Featured Projects
        </h2>
        <p className="text-slate-400 text-center mb-16 max-w-2xl mx-auto">
          Real-world AI applications solving practical problems
        </p>

        {/* Enterprise work — full-width hero card */}
        <FeaturedWorkCard isVisible={isVisible} />

        {/* Personal projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
