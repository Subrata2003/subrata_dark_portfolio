import { motion } from 'motion/react';
import { Bot, Brain, Database } from 'lucide-react';

const focusAreas = [
  {
    icon: Bot,
    title: 'Agentic AI & Generative AI',
    description: 'Building autonomous AI agents and leveraging LLMs to create intelligent, context-aware applications that learn and adapt.',
  },
  {
    icon: Brain,
    title: 'AI & Machine Learning Systems',
    description: 'Designing and deploying scalable ML pipelines, predictive models, and intelligent systems for production environments.',
  },
  {
    icon: Database,
    title: 'Data Platforms & Snowflake',
    description: 'Architecting modern data infrastructure with Snowflake, enabling AI-driven insights and analytics at scale.',
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

export function FocusAreas() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-50 mb-4">What I Do</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Focused on delivering AI solutions that drive business value
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {focusAreas.map((area, index) => {
            const Icon = area.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariant}
                className="group relative p-8 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-cyan-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 hover:-translate-y-2"
              >
                <div className="w-12 h-12 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-6 group-hover:bg-cyan-500/20 group-hover:scale-110 transition-all">
                  <Icon className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-slate-50 mb-3 group-hover:text-cyan-400 transition-colors">
                  {area.title}
                </h3>
                <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                  {area.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
