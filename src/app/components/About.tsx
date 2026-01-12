import { GraduationCap, Briefcase, Award } from 'lucide-react';

const timeline = [
  {
    icon: GraduationCap,
    year: '2021 - 2025',
    title: 'B.Tech in Computer Science & Engineering',
    organization: 'University',
    description: 'CGPA: 8.90/10.0',
    accent: 'cyan',
  },
  {
    icon: Briefcase,
    year: '2024',
    title: 'AI/ML Intern',
    organization: 'NESAC (ISRO)',
    description: 'Worked on satellite data processing and machine learning applications for space technology.',
    accent: 'cyan',
  },
  {
    icon: Award,
    year: '2024 - Present',
    title: 'Junior AI Engineer',
    organization: 'Thirdeye Data',
    description: 'Developing production AI systems with Snowflake Cortex, LangChain, and agentic AI frameworks.',
    accent: 'cyan',
  },
];

export function About() {
  return (
    <section className="py-24 px-6 bg-slate-900/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-slate-50 mb-4 text-center">
          About Me
        </h2>
        <p className="text-slate-400 text-center mb-16 max-w-3xl mx-auto leading-relaxed">
          I'm a Junior AI Engineer passionate about building intelligent systems that make a real impact. 
          From satellite data processing at ISRO to deploying production AI solutions, I've focused on 
          bridging the gap between cutting-edge research and practical applications.
        </p>

        {/* Timeline */}
        <div className="space-y-8">
          {timeline.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="flex gap-6 group">
                {/* Icon column */}
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors flex-shrink-0">
                    <Icon className="w-5 h-5 text-cyan-400" />
                  </div>
                  {index < timeline.length - 1 && (
                    <div className="w-px h-full bg-slate-700/50 mt-4"></div>
                  )}
                </div>

                {/* Content column */}
                <div className="flex-1 pb-12">
                  <div className="text-sm text-cyan-400 mb-2">{item.year}</div>
                  <h3 className="text-xl font-semibold text-slate-50 mb-1">
                    {item.title}
                  </h3>
                  <div className="text-slate-300 mb-2">{item.organization}</div>
                  <p className="text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
