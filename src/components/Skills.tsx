import { useState } from 'react';
import { Palette, Code2, Sparkles } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  icon: string;
}

export default function Skills() {
  const [activeTab, setActiveTab] = useState<'uiux' | 'java'>('uiux');

  const uiuxSkills: Skill[] = [
    { name: 'Wireframing & Prototyping', level: 90, icon: '✏️' },
    { name: 'Responsive Design', level: 95, icon: '📱' },
    { name: 'Front-End Development', level: 88, icon: '💻' },
    { name: 'User Research', level: 85, icon: '🔍' },
    { name: 'Design Systems', level: 82, icon: '🎨' },
  ];

  const javaSkills: Skill[] = [
    { name: 'Core Java & OOP', level: 92, icon: '☕' },
    { name: 'Spring Boot', level: 85, icon: '🍃' },
    { name: 'Database Management', level: 88, icon: '🗄️' },
    { name: 'RESTful APIs', level: 86, icon: '🔌' },
    { name: 'Problem Solving', level: 90, icon: '🧩' },
  ];

  const currentSkills = activeTab === 'uiux' ? uiuxSkills : javaSkills;

  return (
    <section id="skills" className="py-20 px-6 bg-slate-50 dark:bg-slate-800 transition-colors">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">Technical Expertise</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-800 dark:text-slate-100">
            Skills & Expertise
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A comprehensive blend of design creativity and development proficiency
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab('uiux')}
            className={`group relative px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-3 overflow-hidden ${
              activeTab === 'uiux'
                ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-xl shadow-blue-500/30 scale-105'
                : 'bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:shadow-lg border border-slate-200 dark:border-slate-600'
            }`}
          >
            <div className={`absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${activeTab === 'uiux' ? 'hidden' : ''}`}></div>
            <Palette className="w-5 h-5 relative z-10" />
            <span className="relative z-10">UI/UX Design</span>
          </button>

          <button
            onClick={() => setActiveTab('java')}
            className={`group relative px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-3 overflow-hidden ${
              activeTab === 'java'
                ? 'bg-gradient-to-r from-purple-500 to-purple-600 text-white shadow-xl shadow-purple-500/30 scale-105'
                : 'bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:shadow-lg border border-slate-200 dark:border-slate-600'
            }`}
          >
            <div className={`absolute inset-0 bg-gradient-to-r from-purple-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${activeTab === 'java' ? 'hidden' : ''}`}></div>
            <Code2 className="w-5 h-5 relative z-10" />
            <span className="relative z-10">Java Development</span>
          </button>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl p-8 border border-slate-100 dark:border-slate-800">
            <div className="space-y-6">
              {currentSkills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="group"
                  style={{
                    animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                  }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{skill.icon}</span>
                      <h3 className="text-base font-semibold text-slate-800 dark:text-slate-100">
                        {skill.name}
                      </h3>
                    </div>
                    <span className={`text-lg font-bold px-3 py-1 rounded-lg ${
                      activeTab === 'uiux'
                        ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20'
                        : 'text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/20'
                    }`}>
                      {skill.level}%
                    </span>
                  </div>

                  <div className="relative h-4 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className={`absolute inset-y-0 left-0 rounded-full transition-all duration-1000 ease-out ${
                        activeTab === 'uiux'
                          ? 'bg-gradient-to-r from-blue-500 via-blue-600 to-blue-500'
                          : 'bg-gradient-to-r from-purple-500 via-purple-600 to-purple-500'
                      }`}
                      style={{
                        width: `${skill.level}%`,
                        backgroundSize: '200% 100%',
                        animation: 'shimmer 3s infinite'
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Technical Proficiency</h3>
              <p className="text-blue-50 mb-6 leading-relaxed">
                {activeTab === 'uiux'
                  ? 'Specialized in creating intuitive, user-centered designs that balance aesthetics with functionality. Expert in modern design tools and frameworks.'
                  : 'Proficient in building scalable, maintainable backend systems with Java. Strong foundation in object-oriented programming and enterprise frameworks.'}
              </p>
              <div className="space-y-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold">Average Proficiency</span>
                    <span className="text-2xl font-bold">
                      {Math.round(currentSkills.reduce((acc, skill) => acc + skill.level, 0) / currentSkills.length)}%
                    </span>
                  </div>
                  <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-white rounded-full transition-all duration-1000"
                      style={{ width: `${Math.round(currentSkills.reduce((acc, skill) => acc + skill.level, 0) / currentSkills.length)}%` }}
                    ></div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
                    <div className="text-3xl font-bold mb-1">{currentSkills.length}</div>
                    <div className="text-sm text-blue-50">Core Skills</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
                    <div className="text-3xl font-bold mb-1">{activeTab === 'uiux' ? '3+' : '2+'}</div>
                    <div className="text-sm text-blue-50">Years Experience</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white dark:bg-slate-900 rounded-xl shadow-lg p-6 text-center border border-slate-100 dark:border-slate-800 hover:shadow-xl transition-shadow">
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent mb-2">5+</div>
                <p className="text-slate-600 dark:text-slate-400 text-sm font-medium">UI/UX Projects</p>
              </div>

              <div className="bg-white dark:bg-slate-900 rounded-xl shadow-lg p-6 text-center border border-slate-100 dark:border-slate-800 hover:shadow-xl transition-shadow">
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-purple-500 bg-clip-text text-transparent mb-2">10+</div>
                <p className="text-slate-600 dark:text-slate-400 text-sm font-medium">Java Apps</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-slate-100 to-slate-50 dark:from-slate-800 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="space-y-2">
              <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">15+</div>
              <p className="text-slate-600 dark:text-slate-400 font-medium">Total Projects Completed</p>
            </div>
            <div className="space-y-2">
              <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">3</div>
              <p className="text-slate-600 dark:text-slate-400 font-medium">Professional Certifications</p>
            </div>
            <div className="space-y-2">
              <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">100%</div>
              <p className="text-slate-600 dark:text-slate-400 font-medium">Commitment to Excellence</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
