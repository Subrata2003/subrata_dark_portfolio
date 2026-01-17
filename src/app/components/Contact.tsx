import { useState, useEffect, useRef } from 'react';
import { Mail, Github, Linkedin, ExternalLink, Send } from 'lucide-react';

const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: 'subrata.bhuin@example.com',
    href: 'mailto:subrata.bhuin@example.com',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/subratabhuin',
    href: 'https://github.com/subratabhuin',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/subratabhuin',
    href: 'https://linkedin.com/in/subratabhuin',
  },
];

export function Contact() {
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
      className={`py-24 px-6 transition-all duration-700 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-slate-50 mb-4 text-center">
          Get In Touch
        </h2>
        <p className="text-slate-400 text-center mb-16 max-w-2xl mx-auto">
          I'm always open to discussing new opportunities, collaborations, or interesting AI projects.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contactLinks.map((contact, index) => {
            const Icon = contact.icon;
            return (
              <a
                key={index}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group p-6 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-cyan-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 flex flex-col items-center text-center hover:-translate-y-1 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-4 group-hover:bg-cyan-500/20 group-hover:scale-110 transition-all">
                  <Icon className="w-5 h-5 text-cyan-400" />
                </div>
                <div className="text-sm text-slate-400 mb-2 font-medium">{contact.label}</div>
                <div className="text-slate-200 group-hover:text-cyan-400 transition-colors flex items-center gap-2">
                  <span className="text-sm break-all">{contact.value}</span>
                  <ExternalLink className="w-3 h-3 flex-shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </a>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className={`text-center mb-12 transition-all duration-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`} style={{ transitionDelay: '300ms' }}>
          <a
            href="mailto:subrata.bhuin@example.com"
            className="inline-flex items-center gap-2 px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-slate-900 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/20 hover:-translate-y-0.5 font-medium"
          >
            <Send className="w-4 h-4" />
            Send me a message
          </a>
        </div>

        {/* Footer */}
        <div className="border-t border-slate-800 pt-8">
          <p className="text-center text-slate-500 text-sm">
            © 2025 Subrata Bhuin. Built with React & Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  );
}
