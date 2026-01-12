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
        <h2 className="text-3xl md:text-4xl font-semibold text-slate-50 mb-4 text-center">
          Skills & Technologies
        </h2>
        <p className="text-slate-400 text-center mb-16 max-w-2xl mx-auto">
          A comprehensive toolkit for building modern AI systems
        </p>

        <div className="space-y-10">
          {skillCategories.map((category, index) => (
            <div key={index}>
              <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-4">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 bg-slate-800/50 border border-slate-700/50 text-slate-200 rounded-lg hover:border-cyan-500/30 hover:bg-slate-800 transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
