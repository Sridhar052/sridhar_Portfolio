import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-slate-300 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Sridhar B
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              UI/UX Designer and Java Developer passionate about creating
              beautiful, functional, and scalable applications.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="#about" className="block text-sm hover:text-blue-400 transition-colors">
                About Me
              </a>
              <a href="#skills" className="block text-sm hover:text-blue-400 transition-colors">
                Skills
              </a>
              <a href="#projects" className="block text-sm hover:text-blue-400 transition-colors">
                Projects
              </a>
              <a href="#contact" className="block text-sm hover:text-blue-400 transition-colors">
                Contact
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Connect</h4>
            <div className="flex gap-4 mb-4">
              <a
                href="https://github.com/sridharb"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/sridharb"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:sridharb@example.com"
                className="p-2 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
            <p className="text-sm text-slate-400">
              sridharb@example.com
            </p>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center">
          <p className="text-sm text-slate-400 flex items-center justify-center gap-2">
            Made with <Heart className="w-4 h-4 text-red-500 fill-current" /> by Sridhar B
            <span className="mx-2">•</span>
            {currentYear}
          </p>
        </div>
      </div>
    </footer>
  );
}
