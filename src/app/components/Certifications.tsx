import { Award, ExternalLink } from 'lucide-react';

export function Certifications() {
  return (
    <section className="py-24 px-6 bg-slate-900/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-slate-50 mb-4 text-center">
          Certifications
        </h2>
        <p className="text-slate-400 text-center mb-16 max-w-2xl mx-auto">
          Industry-recognized credentials
        </p>

        <div className="max-w-2xl mx-auto">
          <div className="p-8 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-cyan-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/5">
            <div className="flex items-start gap-6">
              {/* Icon */}
              <div className="w-16 h-16 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center flex-shrink-0">
                <Award className="w-8 h-8 text-cyan-400" />
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-slate-50 mb-2">
                  SnowPro Core Certification
                </h3>
                <p className="text-cyan-400 mb-3">Snowflake</p>
                <p className="text-slate-300 leading-relaxed mb-4">
                  Validated expertise in Snowflake's cloud data platform, including architecture, 
                  data loading, modeling, security, and performance optimization.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors text-sm"
                >
                  <span>View Credential</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
