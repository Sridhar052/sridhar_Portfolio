import { useState } from 'react';
import { Palette, Code2 } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  color: string;
}

export default function Skills() {
  const [activeTab, setActiveTab] = useState<'uiux' | 'java'>('uiux');

  const uiuxSkills: Skill[] = [
    { name: 'Wireframing & Prototyping', level: 90, color: 'blue' },
    { name: 'Responsive Design', level: 95, color: 'blue' },
    { name: 'Front-End Development', level: 88, color: 'blue' },
    { name: 'User Research', level: 85, color: 'blue' },
    { name: 'Design Systems', level: 82, color: 'blue' },
  ];

  const javaSkills: Skill[] = [
    { name: 'Core Java & OOP', level: 92, color: 'purple' },
    { name: 'Spring Boot', level: 85, color: 'purple' },
    { name: 'Database Management', level: 88, color: 'purple' },
    { name: 'RESTful APIs', level: 86, color: 'purple' },
    { name: 'Problem Solving', level: 90, color: 'purple' },
  ];

  const currentSkills = activeTab === 'uiux' ? uiuxSkills : javaSkills;

  return (
    <section id="skills" className="py-20 px-6 bg-slate-50 dark:bg-slate-800 transition-colors">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-slate-800 dark:text-slate-100">
          Skills & Expertise
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-12"></div>

        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab('uiux')}
            className={`px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 ${
              activeTab === 'uiux'
                ? 'bg-blue-600 text-white shadow-lg scale-105'
                : 'bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:shadow-md'
            }`}
          >
            <Palette className="w-5 h-5" />
            UI/UX Design
          </button>

          <button
            onClick={() => setActiveTab('java')}
            className={`px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 ${
              activeTab === 'java'
                ? 'bg-purple-600 text-white shadow-lg scale-105'
                : 'bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:shadow-md'
            }`}
          >
            <Code2 className="w-5 h-5" />
            Java Development
          </button>
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl p-8 md:p-12">
          <div className="space-y-8">
            {currentSkills.map((skill, index) => (
              <div key={skill.name} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100">
                    {skill.name}
                  </h3>
                  <span className={`text-sm font-bold ${
                    skill.color === 'blue'
                      ? 'text-blue-600 dark:text-blue-400'
                      : 'text-purple-600 dark:text-purple-400'
                  }`}>
                    {skill.level}%
                  </span>
                </div>

                <div className="h-3 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-1000 ease-out ${
                      skill.color === 'blue'
                        ? 'bg-gradient-to-r from-blue-500 to-blue-600'
                        : 'bg-gradient-to-r from-purple-500 to-purple-600'
                    }`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-white dark:bg-slate-900 rounded-xl shadow-lg text-center">
            <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">5+</div>
            <p className="text-slate-600 dark:text-slate-400">UI/UX Projects</p>
          </div>

          <div className="p-6 bg-white dark:bg-slate-900 rounded-xl shadow-lg text-center">
            <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">10+</div>
            <p className="text-slate-600 dark:text-slate-400">Java Applications</p>
          </div>

          <div className="p-6 bg-white dark:bg-slate-900 rounded-xl shadow-lg text-center">
            <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">3</div>
            <p className="text-slate-600 dark:text-slate-400">Certifications</p>
          </div>
        </div>
      </div>
    </section>
  );
}
