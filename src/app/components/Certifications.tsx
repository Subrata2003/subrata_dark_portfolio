import { useState, useEffect, useRef } from 'react';
import { Award, ExternalLink } from 'lucide-react';

export function Certifications() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <section
      ref={ref}
      className={`py-24 px-6 bg-slate-900/30 transition-all duration-700 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-slate-50 mb-4 text-center">
          Certifications
        </h2>
        <p className="text-slate-400 text-center mb-16 max-w-2xl mx-auto">
          Industry-recognized credentials
        </p>

        <div className="max-w-2xl mx-auto">
          <div
            className={`group p-8 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-cyan-500/30 transition-all duration-500 hover:shadow-lg hover:shadow-cyan-500/10 hover:-translate-y-1 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="flex items-start gap-6">
              {/* Icon */}
              <div className="w-16 h-16 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-cyan-500/20 group-hover:scale-110 transition-all">
                <Award className="w-8 h-8 text-cyan-400" />
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-slate-50 mb-2 group-hover:text-cyan-400 transition-colors">
                  SnowPro Associate : Platform Certification
                </h3>
                <p className="text-cyan-400 mb-3 font-medium">Snowflake</p>
                <p className="text-slate-300 leading-relaxed mb-4">
                  Validated expertise in Snowflake's cloud data platform, including architecture, 
                  data loading, modeling, security, and performance optimization.
                </p>
                <a
                  href="https://achieve.snowflake.com/a5e557a8-447c-47a3-aa24-aac558a98b4f#acc.8WI6Ndw2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium group/link"
                >
                  View Credential
                  <ExternalLink className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
