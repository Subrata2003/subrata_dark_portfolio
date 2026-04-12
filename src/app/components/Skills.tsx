import { motion } from 'motion/react';

const skillCategories = [
  {
    category: 'Programming Languages',
    skills: ['Python', 'SQL', 'JavaScript', 'TypeScript', 'Java', 'C++'],
  },
  {
    category: 'AI & Machine Learning',
    skills: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'Pandas', 'NumPy', 'OpenCV'],
  },
  {
    category: 'GenAI & LLM Platforms',
    skills: ['LangChain', 'LlamaIndex', 'Snowflake Cortex', 'OpenAI API', 'Hugging Face', 'RAG Pipelines'],
  },
  {
    category: 'Data & Cloud Platforms',
    skills: ['Snowflake', 'AWS', 'Docker', 'Git', 'PostgreSQL', 'MongoDB'],
  },
  {
    category: 'Frameworks & Tools',
    skills: ['FastAPI', 'Flask', 'React', 'Node.js', 'Streamlit', 'Jupyter'],
  },
];

export function Skills() {
  return (
    <section className="py-24 px-6 bg-slate-900/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-50 mb-4">
            Skills & Technologies
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern AI systems
          </p>
        </motion.div>

        <div className="space-y-10">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-4">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2.5 bg-slate-800/50 border border-slate-700/50 text-slate-200 rounded-lg hover:border-cyan-500/50 hover:bg-slate-800 hover:text-cyan-400 hover:scale-105 transition-all duration-200 cursor-default font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
