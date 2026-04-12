import { motion } from 'motion/react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { Mail, Github, Linkedin, ExternalLink, Send, Loader2 } from 'lucide-react';

// Setup: add VITE_FORMSPREE_ID=your_form_id to .env.local
// Get a free form ID at https://formspree.io
const FORMSPREE_ENDPOINT = `https://formspree.io/f/${import.meta.env.VITE_FORMSPREE_ID}`;

interface FormData {
  name: string;
  email: string;
  message: string;
}

const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: 'subratabhuin6@gmail.com',
    href: 'mailto:subratabhuin6@gmail.com',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/Subrata2003',
    href: 'https://github.com/Subrata2003',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/subratabhuin8918',
    href: 'https://www.linkedin.com/in/subratabhuin8918/',
  },
];

export function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        toast.success('Message sent! I\'ll get back to you soon.');
        reset();
      } else {
        toast.error('Something went wrong. Please try again or email me directly.');
      }
    } catch {
      toast.error('Network error. Please check your connection and try again.');
    }
  };

  return (
    <section className="py-24 px-6" id="contact">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-50 mb-4">Get In Touch</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or interesting AI projects.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Left — contact info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-2 flex flex-col gap-4"
          >
            <div className="mb-2">
              <h3 className="text-xl font-semibold text-slate-50 mb-2">Let's connect</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Whether it's a full-time role, a freelance project, or just a conversation about AI —
                drop me a message and I'll reply within 24 hours.
              </p>
            </div>

            {contactLinks.map((contact, index) => {
              const Icon = contact.icon;
              return (
                <motion.a
                  key={index}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-4 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-cyan-500/30 transition-all duration-300 hover:shadow-md hover:shadow-cyan-500/10 hover:-translate-y-0.5"
                >
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center group-hover:bg-cyan-500/20 group-hover:scale-110 transition-all flex-shrink-0">
                    <Icon className="w-4 h-4 text-cyan-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs text-slate-500 font-medium mb-0.5">{contact.label}</div>
                    <div className="text-slate-200 group-hover:text-cyan-400 transition-colors text-sm truncate">
                      {contact.value}
                    </div>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-600 group-hover:text-cyan-400 transition-colors flex-shrink-0" />
                </motion.a>
              );
            })}
          </motion.div>

          {/* Right — contact form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="p-8 rounded-2xl bg-slate-800/50 border border-slate-700/50 space-y-5"
            >
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1.5">
                  Name <span className="text-cyan-400">*</span>
                </label>
                <input
                  {...register('name', { required: 'Name is required' })}
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-lg bg-slate-900/60 border border-slate-700/50 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30 transition-colors text-sm"
                />
                {errors.name && (
                  <p className="mt-1.5 text-xs text-red-400">{errors.name.message}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1.5">
                  Email <span className="text-cyan-400">*</span>
                </label>
                <input
                  {...register('email', {
                    required: 'Email is required',
                    pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Enter a valid email' },
                  })}
                  type="email"
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 rounded-lg bg-slate-900/60 border border-slate-700/50 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30 transition-colors text-sm"
                />
                {errors.email && (
                  <p className="mt-1.5 text-xs text-red-400">{errors.email.message}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1.5">
                  Message <span className="text-cyan-400">*</span>
                </label>
                <textarea
                  {...register('message', {
                    required: 'Message is required',
                    minLength: { value: 20, message: 'Message must be at least 20 characters' },
                  })}
                  rows={5}
                  placeholder="Tell me about your project, opportunity, or just say hi..."
                  className="w-full px-4 py-3 rounded-lg bg-slate-900/60 border border-slate-700/50 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30 transition-colors text-sm resize-none"
                />
                {errors.message && (
                  <p className="mt-1.5 text-xs text-red-400">{errors.message.message}</p>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-cyan-500 hover:bg-cyan-400 disabled:bg-cyan-500/50 text-slate-900 font-semibold rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/20 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:translate-y-0"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Sending…
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="border-t border-slate-800 mt-16 pt-8"
        >
          <p className="text-center text-slate-500 text-sm">
            © 2025 Subrata Bhuin. Built with React & Tailwind CSS.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
