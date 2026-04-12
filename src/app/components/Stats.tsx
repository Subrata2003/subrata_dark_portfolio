import { motion } from 'motion/react';
import { Database, TrendingDown, Award, ShieldCheck } from 'lucide-react';

const stats = [
  { icon: Database,     value: '4B+',  label: 'Rows in Production',    description: 'Largest system handled' },
  { icon: TrendingDown, value: '~75%', label: 'Latency Reduced',       description: 'SQL execution time cut' },
  { icon: Award,        value: '8.90', label: 'CGPA',                  description: 'B.Tech CSE' },
  { icon: ShieldCheck,  value: '1',    label: 'Industry Certification', description: 'SnowPro Associate' },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function Stats() {
  return (
    <section className="py-16 px-6 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariant}
                className="group p-6 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-cyan-500/30 transition-colors duration-300 hover:shadow-lg hover:shadow-cyan-500/10 text-center hover:-translate-y-1 transition-transform"
              >
                <div className="w-12 h-12 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-cyan-500/20 group-hover:scale-110 transition-all">
                  <Icon className="w-6 h-6 text-cyan-400" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-slate-50 mb-2 group-hover:text-cyan-400 transition-colors">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-cyan-400 mb-1">{stat.label}</div>
                <div className="text-xs text-slate-400">{stat.description}</div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
