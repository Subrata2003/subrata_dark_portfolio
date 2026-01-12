import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Enterprise RAG System',
    problem: 'Building intelligent knowledge retrieval for enterprise documents',
    tech: ['LangChain', 'Snowflake Cortex', 'Python', 'FastAPI'],
    description: 'Production-grade RAG pipeline with vector search, enabling natural language queries over enterprise knowledge bases with 95% relevance accuracy.',
    github: '#',
    demo: '#',
  },
  {
    title: 'Agentic Workflow Automation',
    problem: 'Automating complex business processes with AI agents',
    tech: ['LangChain', 'OpenAI', 'React', 'PostgreSQL'],
    description: 'Multi-agent system for automated decision-making and task orchestration, reducing manual processing time by 60%.',
    github: '#',
    demo: '#',
  },
  {
    title: 'Satellite Image Classifier',
    problem: 'Automated land-use classification from satellite imagery',
    tech: ['PyTorch', 'OpenCV', 'Python', 'GIS Tools'],
    description: 'Deep learning model for multi-class satellite image segmentation achieving 92% accuracy on remote sensing datasets.',
    github: '#',
    demo: null,
  },
  {
    title: 'Snowflake ML Pipeline',
    problem: 'End-to-end ML deployment on Snowflake platform',
    tech: ['Snowflake', 'Python', 'SQL', 'Streamlit'],
    description: 'Scalable ML pipeline leveraging Snowflake\'s native ML capabilities for predictive analytics on large datasets.',
    github: '#',
    demo: '#',
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-slate-50 mb-4 text-center">
          Featured Projects
        </h2>
        <p className="text-slate-400 text-center mb-16 max-w-2xl mx-auto">
          Real-world AI applications solving practical problems
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group p-8 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-cyan-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/5 flex flex-col"
            >
              {/* Title */}
              <h3 className="text-xl font-semibold text-slate-50 mb-3 group-hover:text-cyan-400 transition-colors">
                {project.title}
              </h3>

              {/* Problem statement */}
              <p className="text-sm text-cyan-400 mb-4 italic">
                {project.problem}
              </p>

              {/* Description */}
              <p className="text-slate-300 leading-relaxed mb-6 flex-1">
                {project.description}
              </p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-xs bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4">
                <a
                  href={project.github}
                  className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors text-sm"
                >
                  <Github className="w-4 h-4" />
                  <span>Code</span>
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors text-sm"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Demo</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
