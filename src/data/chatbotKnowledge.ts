export interface KnowledgeItem {
  patterns: string[];
  response: string;
  category: string;
}

export const knowledgeBase: KnowledgeItem[] = [
  {
    category: "Introduction",
    patterns: ["who are you", "tell me about yourself", "your name", "introduce yourself", "who is sridhar"],
    response: "I'm Sridhar B, a passionate UI/UX Designer and Java Developer currently pursuing B.Tech in Information Technology at APEC. I combine creative design thinking with technical expertise in Java Full Stack development."
  },
  {
    category: "Education - B.Tech",
    patterns: ["btech", "b.tech", "bachelor", "college", "university", "where do you study", "current education", "undergraduate", "degree"],
    response: "I'm currently pursuing B.Tech in Information Technology at APEC (Aditya Polytechnic and Engineering College), expected to graduate in 2027."
  },
  {
    category: "Education - 12th Grade",
    patterns: ["12th", "twelfth", "intermediate", "plus two", "higher secondary", "12th grade", "class 12", "12th school"],
    response: "I completed my 12th grade from a recognized institution with a strong focus on science and mathematics, which laid the foundation for my technical education."
  },
  {
    category: "Education - 11th Grade",
    patterns: ["11th", "eleventh", "class 11", "11th grade", "11th school"],
    response: "I completed my 11th grade with a focus on science stream, particularly excelling in mathematics and physics."
  },
  {
    category: "Education - 10th Grade",
    patterns: ["10th", "tenth", "sslc", "matriculation", "class 10", "10th grade", "secondary", "10th school"],
    response: "I successfully completed my 10th grade with good academic performance, which helped me build a strong foundation for my higher studies."
  },
  {
    category: "Skills - UI/UX",
    patterns: ["ui", "ux", "design", "wireframe", "prototype", "user experience", "user interface", "design skills", "frontend design", "responsive design"],
    response: "I specialize in UI/UX Design with skills in Wireframing & Prototyping (90%), Responsive Design (95%), Front-End Development (88%), User Research (85%), and Design Systems (82%). I'm passionate about creating intuitive, user-centered designs."
  },
  {
    category: "Skills - Java",
    patterns: ["java", "spring", "spring boot", "backend", "oop", "object oriented", "java skills", "programming", "coding"],
    response: "I'm proficient in Java Development with expertise in Core Java & OOP (92%), Spring Boot (85%), Database Management (88%), RESTful APIs (86%), and Problem Solving (90%). I focus on building scalable backend systems."
  },
  {
    category: "Skills - General",
    patterns: ["skills", "what can you do", "technical skills", "abilities", "competencies", "expertise"],
    response: "I have dual expertise: UI/UX Design (wireframing, prototyping, responsive design) and Java Development (Spring Boot, databases, REST APIs). I've completed 5+ UI/UX projects and 10+ Java applications."
  },
  {
    category: "Projects - UI/UX",
    patterns: ["ui projects", "ux projects", "design projects", "portfolio design", "frontend projects"],
    response: "I've worked on several UI/UX projects including an E-Commerce Dashboard, Portfolio Website Design, and Mobile App Wireframes. Each project focuses on user-centered design and modern aesthetics."
  },
  {
    category: "Projects - Java",
    patterns: ["java projects", "backend projects", "spring boot projects", "coding projects"],
    response: "My Java projects include a Spring Boot REST API with JWT authentication, Library Management System, and Task Management API using microservices architecture. All follow clean architecture principles."
  },
  {
    category: "Projects - All",
    patterns: ["projects", "work", "what have you built", "portfolio projects", "experience"],
    response: "I've completed 15+ projects total: 5+ UI/UX design projects and 10+ Java applications. These include e-commerce dashboards, REST APIs, management systems, and mobile app designs."
  },
  {
    category: "Certifications - HCL",
    patterns: ["hcl", "career craft", "hcl certification", "hcl academy"],
    response: "I'm certified in Java Full Stack Development from HCL Career Craft Academy, which provided comprehensive training in modern Java technologies and full-stack development."
  },
  {
    category: "Certifications - Oracle",
    patterns: ["oracle", "oci", "oracle cloud", "cloud certification"],
    response: "I hold an Oracle Cloud Infrastructure certification, demonstrating my knowledge in cloud computing platforms and infrastructure management."
  },
  {
    category: "Certifications - Internship",
    patterns: ["internship", "retech", "work experience", "training"],
    response: "I completed a Java Full Stack Internship at Retech Pvt Ltd, where I gained hands-on experience in real-world application development and industry best practices."
  },
  {
    category: "Certifications - All",
    patterns: ["certifications", "certificates", "certified", "qualifications"],
    response: "I hold 3 professional certifications: Java Full Stack Development (HCL Career Craft Academy), Oracle Cloud Infrastructure (Oracle), and Java Full Stack Internship (Retech Pvt Ltd)."
  },
  {
    category: "Achievements - Chess",
    patterns: ["chess", "chess champion", "games", "sports"],
    response: "I'm a Zonal Chess Champion! This achievement demonstrates my strategic thinking, patience, and problem-solving abilities - skills that translate well into software development."
  },
  {
    category: "Achievements - Rubik's Cube",
    patterns: ["rubik", "cube", "puzzle", "rubiks cube", "rubix"],
    response: "I'm a skilled Rubik's Cube solver with consistent sub-2 minute solving times. This showcases my pattern recognition, algorithmic thinking, and ability to solve complex problems efficiently."
  },
  {
    category: "Achievements - All",
    patterns: ["achievements", "accomplishments", "awards", "what have you achieved"],
    response: "My notable achievements include being a Zonal Chess Champion and mastering Rubik's Cube solving (sub-2 minutes). Both demonstrate strategic thinking and problem-solving skills."
  },
  {
    category: "Career Goal",
    patterns: ["goal", "career goal", "objective", "ambition", "future plans", "aspiration"],
    response: "My career objective is to become a successful Java Full Stack Developer with strong UI/UX design skills. I aim to create seamless user experiences while building scalable, robust backend systems."
  },
  {
    category: "Work Experience",
    patterns: ["work experience", "job", "employment", "professional experience", "companies worked"],
    response: "As a fresher, I've focused on building my skills through academic projects, certifications, and an internship at Retech Pvt Ltd. I've completed 15+ projects showcasing both design and development expertise."
  },
  {
    category: "Technologies - Frontend",
    patterns: ["frontend", "html", "css", "javascript", "react", "tailwind", "frontend tech"],
    response: "I work with modern frontend technologies including React, Tailwind CSS, and responsive design frameworks. I focus on creating beautiful, accessible user interfaces."
  },
  {
    category: "Technologies - Backend",
    patterns: ["backend", "database", "mysql", "postgresql", "backend tech", "server"],
    response: "My backend tech stack includes Java, Spring Boot, MySQL, PostgreSQL, and REST API development. I follow best practices for building scalable, maintainable systems."
  },
  {
    category: "Age",
    patterns: ["age", "how old", "your age", "born"],
    response: "I'm currently pursuing my B.Tech degree, expected to graduate in 2027. I'm focused on building strong technical skills and gaining practical experience."
  },
  {
    category: "Location",
    patterns: ["location", "where are you from", "city", "place", "residence"],
    response: "I'm based in India, currently studying at APEC and actively looking for opportunities to apply my skills in real-world projects."
  },
  {
    category: "Programming Languages",
    patterns: ["languages", "programming languages", "which language", "coding language"],
    response: "I'm proficient in Java (primary language), JavaScript for frontend development, and SQL for database management. I also work with TypeScript for type-safe React applications."
  },
  {
    category: "Database Skills",
    patterns: ["database", "sql", "mysql", "postgresql", "mongodb", "data management"],
    response: "I have strong database management skills with experience in MySQL, PostgreSQL, and MongoDB. I can design efficient schemas, write optimized queries, and implement proper indexing."
  },
  {
    category: "API Development",
    patterns: ["api", "rest api", "restful", "web services", "endpoints"],
    response: "I'm experienced in building RESTful APIs using Spring Boot with proper authentication, error handling, and documentation. I follow REST principles and best practices."
  },
  {
    category: "Design Tools",
    patterns: ["tools", "software", "design tools", "figma", "adobe"],
    response: "I use industry-standard design tools including Figma for wireframing and prototyping, Adobe XD for design systems, and modern CSS frameworks for implementation."
  },
  {
    category: "Problem Solving",
    patterns: ["problem solving", "algorithms", "logical thinking", "analytical"],
    response: "I have strong problem-solving skills demonstrated through my 90% proficiency rating, chess championship, and Rubik's Cube solving. I enjoy tackling complex algorithmic challenges."
  },
  {
    category: "Learning Approach",
    patterns: ["how do you learn", "learning", "study", "self learning"],
    response: "I'm a continuous learner who combines formal education with self-study, certifications, and hands-on projects. I stay updated with latest technologies and best practices."
  },
  {
    category: "Strengths",
    patterns: ["strengths", "strong points", "what are you good at", "best skills"],
    response: "My key strengths include combining creative design with technical implementation, strong problem-solving abilities, quick learning, and the ability to work on both frontend and backend development."
  },
  {
    category: "Why UI/UX and Java",
    patterns: ["why ui", "why java", "why both", "design and development"],
    response: "I believe in creating complete solutions. UI/UX lets me design beautiful experiences, while Java enables me to build robust backend systems. Together, they allow me to deliver end-to-end solutions."
  },
  {
    category: "Project Management",
    patterns: ["project management", "how do you manage", "organization", "planning"],
    response: "I follow structured approaches to project development, including proper planning, iterative development, version control with Git, and maintaining clean, documented code."
  },
  {
    category: "Git/GitHub",
    patterns: ["git", "github", "version control", "source control"],
    response: "I use Git for version control and GitHub for repository management. You can find my projects and code samples on my GitHub profile."
  },
  {
    category: "Spring Framework",
    patterns: ["spring framework", "spring mvc", "spring security", "dependency injection"],
    response: "I'm proficient with the Spring ecosystem, particularly Spring Boot for rapid application development, Spring MVC for web applications, and Spring Security for authentication."
  },
  {
    category: "Responsive Design",
    patterns: ["responsive", "mobile design", "mobile friendly", "adaptive design"],
    response: "I specialize in responsive design with 95% proficiency. All my projects are fully responsive and work seamlessly across desktop, tablet, and mobile devices."
  },
  {
    category: "Testing",
    patterns: ["testing", "test", "quality", "qa"],
    response: "I understand the importance of testing and follow best practices including unit testing, integration testing, and ensuring code quality through proper testing frameworks."
  },
  {
    category: "Collaboration",
    patterns: ["teamwork", "collaboration", "team player", "working with others"],
    response: "I'm a strong team player with good communication skills. My experience includes collaborative projects during internship and academic work with peers."
  },
  {
    category: "Availability",
    patterns: ["available", "when can you start", "joining", "start date"],
    response: "I'm currently a student expected to graduate in 2027, but I'm open to internship opportunities and part-time roles that align with my academic schedule."
  },
  {
    category: "Contact Information",
    patterns: ["contact", "email", "phone", "reach you", "get in touch"],
    response: "You can reach me via email at sridharb@example.com or connect with me on LinkedIn and GitHub. Feel free to use the contact form on this website!"
  },
  {
    category: "Portfolio",
    patterns: ["portfolio", "website", "this site", "your portfolio"],
    response: "This portfolio showcases my dual expertise in UI/UX Design and Java Development. It features my projects, skills, certifications, and achievements. Feel free to explore!"
  },
  {
    category: "Resume",
    patterns: ["resume", "cv", "curriculum vitae", "download resume"],
    response: "You can download my complete resume using the 'Download Resume' button on the homepage. It contains detailed information about my education, skills, and projects."
  },
  {
    category: "LinkedIn",
    patterns: ["linkedin", "linkedin profile", "professional network"],
    response: "Connect with me on LinkedIn to stay updated with my professional journey. You can find the LinkedIn link in the header and footer of this website."
  },
  {
    category: "Best Project",
    patterns: ["best project", "favorite project", "proud of", "top project"],
    response: "I'm particularly proud of my Spring Boot REST API with JWT authentication and my E-Commerce Dashboard design. Both showcase my technical depth and design sensibility."
  },
  {
    category: "Daily Routine",
    patterns: ["daily routine", "typical day", "schedule"],
    response: "I balance my B.Tech coursework with personal projects, skill development, and staying updated with technology trends. I dedicate time daily to coding and design practice."
  },
  {
    category: "Inspiration",
    patterns: ["inspiration", "inspired by", "role model", "motivation"],
    response: "I'm inspired by developers and designers who create impactful products. I believe in continuous learning and building solutions that make a difference."
  },
  {
    category: "Industry Preference",
    patterns: ["industry", "sector", "domain", "field"],
    response: "I'm open to opportunities in various industries including tech startups, e-commerce, fintech, and any organization that values good design and robust engineering."
  },
  {
    category: "Full Stack",
    patterns: ["full stack", "fullstack", "full-stack developer"],
    response: "Yes, I'm a Full Stack Developer with UI/UX design capabilities on the frontend and Java/Spring Boot expertise on the backend. I can handle end-to-end development."
  },
  {
    category: "Cloud Computing",
    patterns: ["cloud", "aws", "azure", "cloud computing", "cloud platforms"],
    response: "I have knowledge of cloud computing, particularly Oracle Cloud Infrastructure (OCI) through my certification. I understand cloud deployment and infrastructure basics."
  },
  {
    category: "Microservices",
    patterns: ["microservices", "microservice architecture", "distributed systems"],
    response: "I've worked with microservices architecture in my Task Management API project, implementing distributed systems with proper service communication and scalability."
  },
  {
    category: "Security",
    patterns: ["security", "authentication", "authorization", "jwt", "secure"],
    response: "I implement security best practices including JWT authentication, role-based access control, input validation, and secure password handling in my applications."
  },
  {
    category: "Performance",
    patterns: ["performance", "optimization", "speed", "fast"],
    response: "I focus on performance optimization through efficient algorithms, proper database indexing, lazy loading, and following best practices for both frontend and backend development."
  },
  {
    category: "Code Quality",
    patterns: ["code quality", "clean code", "best practices", "coding standards"],
    response: "I follow clean code principles, SOLID design patterns, proper naming conventions, and maintain well-documented code. Code quality is a priority in all my projects."
  },
  {
    category: "Agile",
    patterns: ["agile", "scrum", "methodology", "development process"],
    response: "I'm familiar with Agile methodologies and iterative development. I understand the importance of sprint planning, regular feedback, and continuous improvement."
  },
  {
    category: "Hobbies",
    patterns: ["hobbies", "interests", "free time", "outside work"],
    response: "Beyond coding and design, I enjoy playing chess, solving Rubik's Cube, and exploring new technologies. These hobbies help me develop strategic thinking and problem-solving skills."
  },
  {
    category: "Future Technology",
    patterns: ["future", "next technology", "learning next", "future plans"],
    response: "I'm interested in expanding my knowledge in AI/ML, advanced cloud architectures, and modern DevOps practices. I believe in staying ahead with emerging technologies."
  },
  {
    category: "Remote Work",
    patterns: ["remote", "work from home", "remote work", "wfh"],
    response: "I'm comfortable with remote work and have the necessary setup for effective remote collaboration. I value flexibility and can adapt to various work arrangements."
  },
  {
    category: "Salary Expectations",
    patterns: ["salary", "compensation", "pay", "ctc", "package"],
    response: "As a fresher, I'm more focused on learning opportunities and growth rather than just compensation. I'm open to discussing fair packages based on role and responsibilities."
  },
  {
    category: "Relocation",
    patterns: ["relocate", "relocation", "move", "willing to relocate"],
    response: "I'm open to relocation for the right opportunity that offers good learning and growth prospects. I'm flexible and adaptable to new environments."
  }
];

export const defaultResponse = "That's an interesting question, but I'm specifically designed to answer questions about my education, skills, projects, certifications, and achievements. Please ask me about my background, technical expertise, or professional journey!";

export function findBestMatch(query: string): string {
  const normalizedQuery = query.toLowerCase().trim();

  for (const item of knowledgeBase) {
    for (const pattern of item.patterns) {
      if (normalizedQuery.includes(pattern.toLowerCase())) {
        return item.response;
      }
    }
  }

  return defaultResponse;
}
