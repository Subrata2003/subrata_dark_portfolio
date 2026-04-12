import { motion } from 'motion/react';
import { Briefcase, MapPin } from 'lucide-react';

const experiences = [
  {
    company: 'Thirdeye Data',
    role: 'AI Engineer',
    period: 'Mar 2025 - Present',
    location: 'Kolkata, West Bengal',
    responsibilities: [
      'Architecting and deploying production-grade AI systems using Snowflake Cortex and LangChain',
      'Building agentic AI workflows for automated decision-making and intelligent process automation',
      'Implementing RAG (Retrieval-Augmented Generation) pipelines for enterprise knowledge systems',
      'Optimizing ML model performance and reducing inference latency by 40%',
      'Collaborating with cross-functional teams to integrate AI solutions into existing data platforms',
    ],
  },
  {
    company: 'NESAC (ISRO)',
    role: 'AI/ML Intern',
    period: 'May 2024 - Aug 2024',
    location: 'Shillong, India',
    responsibilities: [
      'Developed machine learning models for satellite image processing and geospatial data analysis',
      'Implemented computer vision algorithms for automated feature extraction from remote sensing data',
      'Built data pipelines for processing large-scale satellite datasets',
      'Collaborated with scientists on research projects involving space technology applications',
      'Presented findings and technical reports to senior researchers and management',
    ],
  },
];

export function Experience() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-50 mb-4">Experience</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Real-world AI development in production environments
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: index * 0.15 }}
              className="group p-8 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-cyan-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 hover:-translate-y-1"
            >
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6 gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center group-hover:bg-cyan-500/20 group-hover:scale-110 transition-all">
                      <Briefcase className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-50 group-hover:text-cyan-400 transition-colors">
                        {exp.role}
                      </h3>
                      <p className="text-cyan-400">{exp.company}</p>
                    </div>
                  </div>
                </div>
                <div className="text-slate-400 text-sm space-y-1 md:text-right">
                  <div className="font-medium">{exp.period}</div>
                  <div className="flex items-center gap-1 md:justify-end">
                    <MapPin className="w-3 h-3" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              {/* Responsibilities */}
              <ul className="space-y-3">
                {exp.responsibilities.map((responsibility, idx) => (
                  <li key={idx} className="flex gap-3 text-slate-300 group-hover:text-slate-200 transition-colors">
                    <span className="text-cyan-400 mt-1.5 flex-shrink-0">•</span>
                    <span className="leading-relaxed">{responsibility}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
