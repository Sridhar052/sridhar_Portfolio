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
    category: "Education - 10th Standard",
    patterns: ["10th", "tenth", "sslc", "class 10", "10th standard", "10th board", "10th school", "where did you study 10th", "10th exams", "covid batch"],
    response: "I studied my 10th standard under the State Board (COVID batch) in 2021. Due to COVID-19, the government did not conduct board exams, and I was promoted based on internal evaluation. My 10th batch was specially affected by the pandemic."
  },
  {
    category: "Education - 10th Details",
    patterns: ["10th marks", "10th performance", "10th subjects", "10th evaluation", "how was 10th evaluated"],
    response: "My 10th marks were assessed by the government using internal evaluation due to COVID-19. I studied all standard State Board subjects including Mathematics, Science, and Languages. I also participated in school-level activities and competitions."
  },

  {
    category: "Education - 11th Standard",
    patterns: ["11th", "eleventh", "class 11", "11th standard", "11th school", "where did you study 11th", "kayapakkam"],
    response: "I studied 11th standard at Kayapakkam High School in 2021-2022. I chose the Science stream with Computer Science and scored 376 marks out of 500."
  },
  {
    category: "Education - 11th Details",
    patterns: ["11th marks", "11th subjects", "11th stream", "11th score", "what did you study in 11th", "11th favorite subject"],
    response: "I scored 376 marks in 11th standard. I studied Physics, Chemistry, Mathematics, Computer Science, and languages. My favorite subject was Mathematics. The strong foundation in 11th helped me excel in 12th standard."
  },
  {
    category: "Education - 11th Activities",
    patterns: ["11th competitions", "11th activities", "what did you do in 11th"],
    response: "During 11th standard, I participated in school-level academic and co-curricular competitions. This period provided me with a strong foundation in Science and Computer Science."
  },

  {
    category: "Education - 12th Standard",
    patterns: ["12th", "twelfth", "class 12", "12th standard", "12th school", "where did you study 12th", "thozhupedu", "higher secondary"],
    response: "I studied 12th standard at Thozhupedu Government High School under the State Board. I completed my 12th in 2023, choosing the Science stream with Computer Science, and scored 446 marks out of 500."
  },
  {
    category: "Education - 12th Details",
    patterns: ["12th marks", "12th score", "12th subjects", "12th stream", "12th performance", "strongest subjects in 12th"],
    response: "I scored 446 marks in 12th standard under the State Board. My strongest subjects were Mathematics and Computer Science. I excelled in the Science stream and maintained consistent performance throughout the year."
  },
  {
    category: "Education - 12th Achievements",
    patterns: ["12th achievement", "what did you achieve in 12th", "12th chess", "chess in 12th", "12th activities"],
    response: "In 12th standard, I became a zonal-level chess champion, which is my main recognized achievement. I also participated in various school-level academic and extracurricular activities."
  },

  {
    category: "Education - B.Tech",
    patterns: ["btech", "b.tech", "bachelor", "college", "university", "apec", "engineering", "where do you study", "current education"],
    response: "I'm pursuing B.Tech in Information Technology at Adhiparasakthi Engineering College (APEC), affiliated with Anna University. I joined in 2023 and will graduate in 2027."
  },
  {
    category: "Education - B.Tech Details",
    patterns: ["what branch", "it branch", "information technology", "anna university", "when did you join", "when will you graduate"],
    response: "My branch is Information Technology (IT) at APEC, which is affiliated with Anna University. I joined in 2023 and my expected graduation year is 2027."
  },
  {
    category: "Education - B.Tech Internship",
    patterns: ["internship during btech", "btech internship", "retech internship", "online internship"],
    response: "Yes, I completed a Java Full Stack Internship at Retech Pvt Ltd (online) during my B.Tech. This internship gave me hands-on experience in real-world application development and industry best practices."
  },
  {
    category: "Education - B.Tech Certifications",
    patterns: ["certifications during btech", "btech certifications", "hcl certification", "oracle certification"],
    response: "During B.Tech, I earned certifications from HCL Career Craft Academy (Java Full Stack) and Oracle Cloud Infrastructure (OCI). These certifications enhanced my technical knowledge and industry readiness."
  },
  {
    category: "Education - B.Tech Skills",
    patterns: ["skills gained in btech", "what did you learn in btech", "technical skills btech", "btech technologies"],
    response: "During B.Tech, I gained strong skills in Java, Front-End Development (HTML, CSS, JavaScript), Spring Boot, DBMS (MySQL, NoSQL), UI/UX Design, and Web Technologies including PHP and Servlets."
  },
  {
    category: "Education - B.Tech Projects",
    patterns: ["btech projects", "academic projects", "college projects", "did you work on projects"],
    response: "Yes, I worked on multiple academic and portfolio projects covering both front-end and back-end development. I've completed over 15 projects showcasing my full-stack capabilities."
  },
  {
    category: "Education - Final Year Project",
    patterns: ["final year project", "fyp", "major project", "capstone project"],
    response: "My final year project is 'Automata CI/CD Pipeline' - a project focused on automating continuous integration and deployment processes for efficient software delivery."
  },
  {
    category: "Education - B.Tech Languages",
    patterns: ["programming languages studied", "languages in btech", "which languages did you study"],
    response: "During B.Tech, I studied Java (primary), SQL, HTML, CSS, JavaScript, PHP, and Servlets. I'm most proficient in Java and web technologies."
  },
  {
    category: "Education - B.Tech Database",
    patterns: ["database in btech", "did you study database", "dbms", "mysql in btech"],
    response: "Yes, I studied Database Management Systems (DBMS) including MySQL, NoSQL, and XML. I learned schema design, query optimization, and database implementation."
  },
  {
    category: "Education - B.Tech Activities",
    patterns: ["industrial visits", "college competitions", "btech activities", "workshops"],
    response: "I attended industrial visits, training programs, technical workshops, and coding competitions during B.Tech. These activities enhanced my practical knowledge and industry exposure."
  },
  {
    category: "Education - Soft Skills",
    patterns: ["soft skills", "communication skills", "teamwork", "what soft skills"],
    response: "During B.Tech, I developed essential soft skills including problem-solving, teamwork, communication, time management, and adaptability through various group projects and presentations."
  },

  {
    category: "Skills - UI/UX",
    patterns: ["ui", "ux", "design", "wireframe", "prototype", "user experience", "user interface", "design skills", "frontend design", "responsive design"],
    response: "I specialize in UI/UX Design with skills in Wireframing & Prototyping (90%), Responsive Design (95%), Front-End Development (88%), User Research (85%), and Design Systems (82%). I create intuitive, user-centered designs using Figma and Adobe XD."
  },
  {
    category: "Skills - Java",
    patterns: ["java", "spring", "spring boot", "backend", "oop", "object oriented", "java skills"],
    response: "I'm proficient in Java Development with expertise in Core Java & OOP (92%), Spring Boot (85%), Database Management (88%), RESTful APIs (86%), and Problem Solving (90%). I focus on building scalable, maintainable backend systems."
  },
  {
    category: "Skills - Frontend Technologies",
    patterns: ["frontend", "html", "css", "javascript", "react", "tailwind", "web development"],
    response: "I work with modern frontend technologies including HTML, CSS, JavaScript, React, and Tailwind CSS. I specialize in creating responsive, accessible, and beautiful user interfaces."
  },
  {
    category: "Skills - Backend Technologies",
    patterns: ["backend", "database", "mysql", "postgresql", "server", "backend tech"],
    response: "My backend tech stack includes Java, Spring Boot, MySQL, PostgreSQL, NoSQL databases, and REST API development. I follow best practices for building scalable systems."
  },
  {
    category: "Skills - Programming Languages",
    patterns: ["languages", "programming languages", "which language", "coding language", "proficient in"],
    response: "I'm proficient in Java (primary language), JavaScript, SQL, HTML, CSS, and PHP. I also work with TypeScript for type-safe React applications."
  },
  {
    category: "Skills - Database",
    patterns: ["database", "sql", "mysql", "postgresql", "mongodb", "nosql", "data management"],
    response: "I have strong database management skills with experience in MySQL, PostgreSQL, MongoDB, and NoSQL. I can design efficient schemas, write optimized queries, and implement proper indexing."
  },
  {
    category: "Skills - Tools",
    patterns: ["tools", "software", "design tools", "figma", "adobe", "ms office"],
    response: "I use industry-standard tools including Figma and Adobe XD for design, Git/GitHub for version control, Spring Boot for backend development, and MS Office for documentation and presentations."
  },
  {
    category: "Skills - All",
    patterns: ["skills", "what can you do", "technical skills", "key skills", "abilities"],
    response: "My key skills include Java Development, UI/UX Design, Front-End Development (HTML, CSS, JavaScript, React), Spring Boot, DBMS, REST APIs, and MS Office. I've completed 15+ projects showcasing these skills."
  },

  {
    category: "Projects - UI/UX",
    patterns: ["ui projects", "ux projects", "design projects", "portfolio design", "frontend projects"],
    response: "I've worked on 5+ UI/UX projects including an E-Commerce Dashboard with data visualization, Portfolio Website Design with modern aesthetics, and Mobile App Wireframes. Each project focuses on user-centered design."
  },
  {
    category: "Projects - Java",
    patterns: ["java projects", "backend projects", "spring boot projects", "coding projects"],
    response: "My Java projects include a Spring Boot REST API with JWT authentication, Library Management System with full CRUD operations, and Task Management API using microservices architecture."
  },
  {
    category: "Projects - All",
    patterns: ["projects", "work", "what have you built", "portfolio projects"],
    response: "I've completed 15+ projects: 5+ UI/UX design projects and 10+ Java applications. These showcase my full-stack capabilities from design to deployment."
  },
  {
    category: "Projects - Best",
    patterns: ["best project", "favorite project", "proud of", "top project"],
    response: "I'm particularly proud of my Spring Boot REST API with JWT authentication and my E-Commerce Dashboard design. Both showcase my technical depth in backend security and frontend user experience."
  },
  {
    category: "Projects - Final Year",
    patterns: ["automata", "cicd", "ci cd", "pipeline", "automation project"],
    response: "My final year project 'Automata CI/CD Pipeline' focuses on automating continuous integration and deployment processes, improving software delivery efficiency and reducing manual errors."
  },

  {
    category: "Certifications - HCL",
    patterns: ["hcl", "career craft", "hcl certification", "hcl academy", "hcl java"],
    response: "I'm certified in Java Full Stack Development from HCL Career Craft Academy. This comprehensive training covered modern Java technologies, Spring Boot, and full-stack development practices."
  },
  {
    category: "Certifications - Oracle",
    patterns: ["oracle", "oci", "oracle cloud", "cloud certification", "oracle infrastructure"],
    response: "I hold an Oracle Cloud Infrastructure (OCI) certification, demonstrating my knowledge in cloud computing platforms, infrastructure management, and cloud deployment strategies."
  },
  {
    category: "Certifications - Retech",
    patterns: ["internship", "retech", "retech pvt ltd", "training", "work experience"],
    response: "I completed a Java Full Stack Internship at Retech Pvt Ltd (online), where I gained hands-on experience in real-world application development, industry best practices, and collaborative software development."
  },
  {
    category: "Certifications - All",
    patterns: ["certifications", "certificates", "certified", "qualifications", "how many certifications"],
    response: "I hold 3 professional certifications: Java Full Stack Development (HCL Career Craft Academy), Oracle Cloud Infrastructure (Oracle), and Java Full Stack Internship (Retech Pvt Ltd)."
  },

  {
    category: "Achievements - Chess",
    patterns: ["chess", "chess champion", "zonal chess", "games", "sports", "chess in 12th"],
    response: "I'm a Zonal-Level Chess Champion! I achieved this during my 12th standard. This demonstrates my strategic thinking, patience, and problem-solving abilities - skills that translate well into software development."
  },
  {
    category: "Achievements - Rubik's Cube",
    patterns: ["rubik", "cube", "puzzle", "rubiks cube", "rubix", "solver"],
    response: "I'm a skilled Rubik's Cube solver with consistent sub-2 minute solving times. This showcases my pattern recognition, algorithmic thinking, and ability to solve complex problems efficiently."
  },
  {
    category: "Achievements - All",
    patterns: ["achievements", "accomplishments", "awards", "what have you achieved", "outside academics"],
    response: "My notable achievements include being a Zonal-Level Chess Champion (12th standard) and mastering Rubik's Cube solving (sub-2 minutes). Both demonstrate strategic thinking, problem-solving, and determination."
  },

  {
    category: "Career Goal",
    patterns: ["goal", "career goal", "objective", "ambition", "future plans", "aspiration", "what do you want"],
    response: "My career objective is to become a successful Java Full Stack Developer with strong UI/UX design skills. I aim to create seamless user experiences while building scalable, robust backend systems that solve real-world problems."
  },
  {
    category: "Why Fresher",
    patterns: ["fresher", "no experience", "work experience", "professional experience", "why fresher"],
    response: "As a fresher currently pursuing B.Tech (graduating 2027), I've focused on building strong technical skills through academic projects, certifications, and internship experience. I've completed 15+ projects showcasing both design and development expertise."
  },
  {
    category: "What Makes You Unique",
    patterns: ["unique", "special", "stand out", "different", "why you", "what makes you"],
    response: "I combine technical knowledge (Java, Spring Boot, DBMS) with creative design skills (UI/UX). As a Zonal Chess Champion and Rubik's Cube solver, I bring strategic thinking and problem-solving abilities. I'm eager to learn, adapt quickly, and deliver quality work."
  },

  {
    category: "API Development",
    patterns: ["api", "rest api", "restful", "web services", "endpoints"],
    response: "I'm experienced in building RESTful APIs using Spring Boot with JWT authentication, proper error handling, and documentation. I follow REST principles and implement secure, scalable web services."
  },
  {
    category: "Problem Solving",
    patterns: ["problem solving", "algorithms", "logical thinking", "analytical"],
    response: "I have strong problem-solving skills (90% proficiency) demonstrated through my chess championship, Rubik's Cube solving, and coding projects. I enjoy tackling complex algorithmic challenges."
  },
  {
    category: "Learning Approach",
    patterns: ["how do you learn", "learning", "study", "self learning", "continuous learning"],
    response: "I'm a continuous learner combining formal B.Tech education with self-study, online certifications (HCL, Oracle), hands-on projects, and internship experience. I stay updated with latest technologies and best practices."
  },
  {
    category: "Strengths",
    patterns: ["strengths", "strong points", "what are you good at", "best skills", "advantages"],
    response: "My key strengths include: combining creative design with technical implementation, strong problem-solving abilities (demonstrated through chess and coding), quick learning, full-stack capabilities, and strategic thinking."
  },
  {
    category: "Why UI/UX and Java",
    patterns: ["why ui", "why java", "why both", "design and development", "full stack"],
    response: "I believe in creating complete solutions. UI/UX design lets me create beautiful, intuitive experiences, while Java/Spring Boot enables me to build robust, secure backend systems. Together, I can deliver end-to-end applications."
  },

  {
    category: "Git/GitHub",
    patterns: ["git", "github", "version control", "source control", "repository"],
    response: "I use Git for version control and GitHub for repository management. I follow best practices including meaningful commit messages, branching strategies, and collaborative development workflows."
  },
  {
    category: "Spring Framework",
    patterns: ["spring framework", "spring mvc", "spring security", "dependency injection"],
    response: "I'm proficient with Spring Boot for rapid application development, Spring MVC for web applications, Spring Security for authentication, and understand dependency injection and IoC concepts."
  },
  {
    category: "Responsive Design",
    patterns: ["responsive", "mobile design", "mobile friendly", "adaptive design"],
    response: "I specialize in responsive design (95% proficiency). All my projects are fully responsive and work seamlessly across desktop, tablet, and mobile devices using modern CSS frameworks and media queries."
  },
  {
    category: "Security",
    patterns: ["security", "authentication", "authorization", "jwt", "secure"],
    response: "I implement security best practices including JWT authentication, role-based access control, input validation, secure password handling (hashing), and protection against common vulnerabilities."
  },

  {
    category: "Testing",
    patterns: ["testing", "test", "quality", "qa", "unit testing"],
    response: "I understand the importance of testing and follow best practices including unit testing, integration testing, and ensuring code quality through proper testing frameworks and debugging techniques."
  },
  {
    category: "Collaboration",
    patterns: ["teamwork", "collaboration", "team player", "working with others"],
    response: "I'm a strong team player with good communication skills. My experience includes collaborative projects during my Retech internship and academic group projects at APEC."
  },
  {
    category: "Availability",
    patterns: ["available", "when can you start", "joining", "start date"],
    response: "I'm currently pursuing B.Tech (graduating 2027) and open to internship opportunities and part-time roles that align with my academic schedule. For full-time roles, I'll be available after graduation."
  },

  {
    category: "Contact",
    patterns: ["contact", "email", "phone", "reach you", "get in touch", "how to contact"],
    response: "You can reach me via email at sridharb@example.com or connect with me on LinkedIn and GitHub. Feel free to use the contact form on this portfolio website!"
  },
  {
    category: "Portfolio",
    patterns: ["portfolio", "website", "this site", "your portfolio"],
    response: "This portfolio showcases my dual expertise in UI/UX Design and Java Development. It features my educational background, projects, skills, certifications, and achievements. Feel free to explore all sections!"
  },
  {
    category: "Resume",
    patterns: ["resume", "cv", "curriculum vitae", "download resume"],
    response: "You can download my complete resume using the 'Download Resume' button on the homepage. It contains detailed information about my education (10th, 11th, 12th, B.Tech), skills, projects, and certifications."
  },

  {
    category: "Location",
    patterns: ["location", "where are you from", "city", "place", "residence", "based"],
    response: "I'm based in India, currently studying at APEC (Adhiparasakthi Engineering College). I'm open to relocation for the right opportunities that offer learning and growth."
  },
  {
    category: "Hobbies",
    patterns: ["hobbies", "interests", "free time", "outside work", "what do you do"],
    response: "Beyond coding and design, I enjoy playing chess (Zonal Champion), solving Rubik's Cube (sub-2 minutes), and exploring new technologies. These hobbies sharpen my strategic thinking and problem-solving."
  },
  {
    category: "Industry Preference",
    patterns: ["industry", "sector", "domain", "field", "company type"],
    response: "I'm open to opportunities in various industries including tech startups, e-commerce, fintech, healthcare tech, and any organization that values innovation, good design, and robust engineering."
  },

  {
    category: "Cloud Computing",
    patterns: ["cloud", "aws", "azure", "cloud computing", "cloud platforms"],
    response: "I have knowledge of cloud computing through my Oracle Cloud Infrastructure (OCI) certification. I understand cloud deployment, infrastructure management, and cloud service models."
  },
  {
    category: "Microservices",
    patterns: ["microservices", "microservice architecture", "distributed systems"],
    response: "I've worked with microservices architecture in my Task Management API project, implementing distributed systems with proper service communication, scalability, and fault tolerance."
  },
  {
    category: "Performance",
    patterns: ["performance", "optimization", "speed", "fast", "efficient"],
    response: "I focus on performance optimization through efficient algorithms, proper database indexing, lazy loading, caching strategies, and following best practices for both frontend and backend development."
  },
  {
    category: "Code Quality",
    patterns: ["code quality", "clean code", "best practices", "coding standards"],
    response: "I follow clean code principles, SOLID design patterns, meaningful naming conventions, proper documentation, and maintain well-structured, readable code. Quality is a priority in all my projects."
  },

  {
    category: "Remote Work",
    patterns: ["remote", "work from home", "remote work", "wfh", "online"],
    response: "I'm comfortable with remote work, as demonstrated by my online internship at Retech Pvt Ltd. I have the necessary setup and skills for effective remote collaboration and communication."
  },
  {
    category: "Salary",
    patterns: ["salary", "compensation", "pay", "ctc", "package", "expected salary"],
    response: "As a fresher, I'm more focused on learning opportunities, growth prospects, and skill development rather than just compensation. I'm open to discussing fair packages based on role, responsibilities, and industry standards."
  },
  {
    category: "Relocation",
    patterns: ["relocate", "relocation", "move", "willing to relocate", "transfer"],
    response: "Yes, I'm open to relocation for the right opportunity that offers good learning, growth prospects, and career advancement. I'm flexible and adaptable to new environments."
  },

  {
    category: "State Board",
    patterns: ["state board", "which board", "education board"],
    response: "I completed my 10th and 12th standards under the State Board. My 10th was part of the COVID batch (2021) with internal evaluation, and I scored 446 marks in 12th (2023)."
  },
  {
    category: "COVID Impact",
    patterns: ["covid", "pandemic", "covid batch", "covid impact", "affected by covid"],
    response: "My 10th standard was significantly impacted by COVID-19. The government canceled board exams and promoted students based on internal evaluation. This was a unique challenge that taught me adaptability."
  },
  {
    category: "Favorite Subject",
    patterns: ["favorite subject", "best subject", "which subject do you like", "preferred subject"],
    response: "My favorite subjects are Mathematics and Computer Science. I excelled in both during 11th and 12th, which naturally led me to pursue Information Technology in B.Tech."
  },
  {
    category: "MS Office",
    patterns: ["ms office", "microsoft office", "word", "excel", "powerpoint"],
    response: "Yes, I'm proficient in MS Office including Word for documentation, Excel for data analysis and spreadsheets, and PowerPoint for presentations. These skills are essential for professional communication."
  }
];

export const defaultResponse = "That's an interesting question, but I'm specifically designed to answer questions about Sridhar B's education (10th, 11th, 12th, B.Tech), skills, projects, certifications, and achievements. Please ask me about his background, technical expertise, or professional journey! Try asking about his education, chess achievement, or Java skills.";

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
