import { Github, Linkedin, Download, Code2, Palette } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 transition-colors">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8 flex justify-center gap-4">
          <div className="p-4 bg-blue-100 dark:bg-blue-900/30 rounded-full animate-float">
            <Code2 className="w-8 h-8 text-blue-600 dark:text-blue-400" />
          </div>
          <div className="p-4 bg-purple-100 dark:bg-purple-900/30 rounded-full animate-float-delayed">
            <Palette className="w-8 h-8 text-purple-600 dark:text-purple-400" />
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Sridhar B
        </h1>

        <p className="text-2xl md:text-3xl font-semibold text-slate-700 dark:text-slate-300 mb-6">
          UI/UX Designer <span className="text-slate-400 dark:text-slate-500">|</span> Java Developer
        </p>

        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          Crafting elegant user experiences and building robust backend solutions.
          Combining creative design thinking with technical expertise in Java Full Stack development.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <a
            href="#contact"
            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            Get In Touch
          </a>

          <a
            href="/resume.pdf"
            download
            className="px-8 py-4 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2 border border-slate-200 dark:border-slate-700"
          >
            <Download className="w-5 h-5" />
            Download Resume
          </a>
        </div>

        <div className="flex gap-6 justify-center">
          <a
            href="https://github.com/sridharb"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white dark:bg-slate-800 rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-slate-200 dark:border-slate-700"
            aria-label="GitHub Profile"
          >
            <Github className="w-6 h-6 text-slate-700 dark:text-slate-300" />
          </a>

          <a
            href="https://linkedin.com/in/sridharb"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white dark:bg-slate-800 rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-slate-200 dark:border-slate-700"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-6 h-6 text-slate-700 dark:text-slate-300" />
          </a>
        </div>
      </div>
    </section>
  );
}
