import { Award, Trophy, Briefcase } from 'lucide-react';

export default function Certifications() {
  const certifications = [
    {
      title: 'Java Full Stack Development',
      issuer: 'HCL Career Craft Academy',
      icon: Award,
      color: 'blue'
    },
    {
      title: 'Oracle Cloud Infrastructure',
      issuer: 'Oracle',
      icon: Award,
      color: 'red'
    },
    {
      title: 'Java Full Stack Internship',
      issuer: 'Retech Pvt Ltd',
      icon: Briefcase,
      color: 'purple'
    }
  ];

  const achievements = [
    {
      title: 'Rubik\'s Cube Solver',
      description: 'Master solver with consistent sub-2 minute solving times',
      icon: Trophy,
      color: 'yellow'
    },
    {
      title: 'Zonal Chess Champion',
      description: 'Winner of regional chess championship demonstrating strategic thinking',
      icon: Trophy,
      color: 'green'
    }
  ];

  return (
    <section id="certifications" className="py-20 px-6 bg-slate-50 dark:bg-slate-800 transition-colors">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-slate-800 dark:text-slate-100">
          Certifications & Achievements
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-16"></div>

        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-slate-800 dark:text-slate-100 mb-8 flex items-center gap-2">
            <Award className="w-6 h-6 text-blue-600" />
            Professional Certifications
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => {
              const Icon = cert.icon;
              return (
                <div
                  key={index}
                  className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className={`w-14 h-14 rounded-lg flex items-center justify-center mb-4 ${
                    cert.color === 'blue' ? 'bg-blue-100 dark:bg-blue-900/30' :
                    cert.color === 'red' ? 'bg-red-100 dark:bg-red-900/30' :
                    'bg-purple-100 dark:bg-purple-900/30'
                  }`}>
                    <Icon className={`w-7 h-7 ${
                      cert.color === 'blue' ? 'text-blue-600 dark:text-blue-400' :
                      cert.color === 'red' ? 'text-red-600 dark:text-red-400' :
                      'text-purple-600 dark:text-purple-400'
                    }`} />
                  </div>

                  <h4 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-2">
                    {cert.title}
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">
                    {cert.issuer}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-slate-800 dark:text-slate-100 mb-8 flex items-center gap-2">
            <Trophy className="w-6 h-6 text-yellow-600" />
            Notable Achievements
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div
                  key={index}
                  className="bg-white dark:bg-slate-900 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex items-start gap-4"
                >
                  <div className={`w-14 h-14 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    achievement.color === 'yellow' ? 'bg-yellow-100 dark:bg-yellow-900/30' :
                    'bg-green-100 dark:bg-green-900/30'
                  }`}>
                    <Icon className={`w-7 h-7 ${
                      achievement.color === 'yellow' ? 'text-yellow-600 dark:text-yellow-400' :
                      'text-green-600 dark:text-green-400'
                    }`} />
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-2">
                      {achievement.title}
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
