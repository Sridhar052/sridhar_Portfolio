import { GraduationCap, Target, Lightbulb } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-slate-800 dark:text-slate-100">
          About Me
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-16"></div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex-shrink-0">
                <GraduationCap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100 mb-2">
                  Academic Background
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Pursuing B.Tech in Information Technology at APEC (2027). Building a strong foundation
                  in software engineering, database systems, and modern development practices.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex-shrink-0">
                <Target className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100 mb-2">
                  Career Objective
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Aspiring Java Full Stack Developer with a passion for creating seamless user experiences.
                  Focused on building scalable backend systems while delivering intuitive, user-centered designs.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg flex-shrink-0">
                <Lightbulb className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100 mb-2">
                  My Approach
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Bridging creativity and logic: I combine UI/UX design principles with robust backend
                  development. Every project balances aesthetic appeal with technical excellence and problem-solving.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8 shadow-xl">
              <div className="h-full flex flex-col justify-center space-y-6">
                <div className="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
                  <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2">Frontend Expertise</h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">
                    Responsive design, wireframing, prototyping, and modern UI development
                  </p>
                </div>

                <div className="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
                  <h4 className="text-lg font-semibold text-purple-600 dark:text-purple-400 mb-2">Backend Development</h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">
                    Java, OOP, Spring Boot, database management, and RESTful APIs
                  </p>
                </div>

                <div className="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
                  <h4 className="text-lg font-semibold text-green-600 dark:text-green-400 mb-2">Problem Solver</h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">
                    Analytical thinking meets creative solutions for complex challenges
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
