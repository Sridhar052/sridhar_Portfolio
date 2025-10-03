import { ExternalLink, Github, Palette, Code2 } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  category: 'uiux' | 'java';
  technologies: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
}

export default function Projects() {
  const projects: Project[] = [
    {
      title: 'E-Commerce Dashboard',
      description: 'Modern admin dashboard with intuitive data visualization and responsive design. Features drag-and-drop functionality and real-time analytics.',
      category: 'uiux',
      technologies: ['Figma', 'React', 'Tailwind CSS', 'Chart.js'],
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
      githubUrl: '#',
      liveUrl: '#'
    },
    {
      title: 'Spring Boot REST API',
      description: 'Scalable RESTful API with JWT authentication, role-based access control, and comprehensive error handling. Integrated with MySQL database.',
      category: 'java',
      technologies: ['Java', 'Spring Boot', 'MySQL', 'JWT'],
      image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=800',
      githubUrl: '#'
    },
    {
      title: 'Portfolio Website Design',
      description: 'Clean and modern portfolio design system with dark mode support. Focused on typography, spacing, and user-centered navigation.',
      category: 'uiux',
      technologies: ['Figma', 'Adobe XD', 'Prototyping'],
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      liveUrl: '#'
    },
    {
      title: 'Library Management System',
      description: 'Full-stack application for managing library operations. Features book tracking, user management, and automated late fee calculations.',
      category: 'java',
      technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'Thymeleaf'],
      image: 'https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&w=800',
      githubUrl: '#'
    },
    {
      title: 'Mobile App Wireframes',
      description: 'Complete wireframe suite for a fitness tracking mobile application. Includes user flows, interactive prototypes, and design documentation.',
      category: 'uiux',
      technologies: ['Figma', 'User Research', 'Prototyping'],
      image: 'https://images.pexels.com/photos/4065876/pexels-photo-4065876.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Task Management API',
      description: 'Microservices-based task management system with real-time notifications. Implements clean architecture and SOLID principles.',
      category: 'java',
      technologies: ['Java', 'Spring Boot', 'MongoDB', 'WebSocket'],
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
      githubUrl: '#'
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-slate-800 dark:text-slate-100">
          Featured Projects
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-16"></div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold ${
                  project.category === 'uiux'
                    ? 'bg-blue-600 text-white'
                    : 'bg-purple-600 text-white'
                }`}>
                  {project.category === 'uiux' ? (
                    <span className="flex items-center gap-1">
                      <Palette className="w-3 h-3" /> UI/UX
                    </span>
                  ) : (
                    <span className="flex items-center gap-1">
                      <Code2 className="w-3 h-3" /> Java
                    </span>
                  )}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      className="flex items-center gap-1 text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      className="flex items-center gap-1 text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
