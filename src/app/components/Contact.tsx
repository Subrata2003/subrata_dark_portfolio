import { Mail, Github, Linkedin, ExternalLink } from 'lucide-react';

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
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-slate-50 mb-4 text-center">
          Get In Touch
        </h2>
        <p className="text-slate-400 text-center mb-16 max-w-2xl mx-auto">
          I'm always open to discussing new opportunities, collaborations, or interesting AI projects.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {contactLinks.map((contact, index) => {
            const Icon = contact.icon;
            return (
              <a
                key={index}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-cyan-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/5 flex flex-col items-center text-center"
              >
                <div className="w-12 h-12 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-4 group-hover:bg-cyan-500/20 transition-colors">
                  <Icon className="w-5 h-5 text-cyan-400" />
                </div>
                <div className="text-sm text-slate-400 mb-2">{contact.label}</div>
                <div className="text-slate-200 group-hover:text-cyan-400 transition-colors flex items-center gap-2">
                  <span className="text-sm break-all">{contact.value}</span>
                  <ExternalLink className="w-3 h-3 flex-shrink-0" />
                </div>
              </a>
            );
          })}
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
