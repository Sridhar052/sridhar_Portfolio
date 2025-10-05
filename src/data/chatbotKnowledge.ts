export interface KnowledgeItem {
  patterns: string[];
  response: string;
  category: string;
}

export const knowledgeBase: KnowledgeItem[] = [
  {
    category: "Greetings - Hi",
    patterns: ["hi", "hii", "hiiii"],
    response: "Hello! 👋 I'm Sridhar B. You can ask me anything about my education, skills, or achievements."
  },
  {
    category: "Greetings - Hello",
    patterns: ["hello", "helo", "helloo"],
    response: "Hi there! I'm Sridhar B, a fresher and job seeker in Front-End Development and Java (Spring Boot)."
  },
  {
    category: "Greetings - Hey",
    patterns: ["hey", "heyy", "heyyy"],
    response: "Hey! 👋 I'm Sridhar B. Ask me about my education, skills, or career details."
  },
  {
    category: "Introduction - Who Are You",
    patterns: ["who are you", "what are you", "who r u"],
    response: "I'm Sridhar B, an aspiring software developer interested in Java and Front-End Development."
  },
  {
    category: "Introduction - Introduce",
    patterns: ["introduce yourself", "can you introduce yourself", "tell me about you"],
    response: "Sure! I'm Sridhar B, a B.Tech IT student at Adhiparasakthi Engineering College (APEC), passionate about Java and UI/UX Design."
  },
  {
    category: "Introduction - Tell About Yourself",
    patterns: ["tell me about yourself", "about yourself", "about you"],
    response: "I'm Sridhar B, currently pursuing B.Tech in Information Technology at APEC. I'm a fresher, skilled in Java, Front-End Development, and UI/UX Design."
  },
  {
    category: "Introduction - Chatbot Creator",
    patterns: ["who created this chatbot", "who made this", "who built this chatbot", "creator"],
    response: "I, Sridhar B, built this chatbot using Bolt AI as part of my portfolio project."
  },
  {
    category: "Introduction - Name",
    patterns: ["what is your name", "your name", "name"],
    response: "My name is Sridhar B."
  },
  {
    category: "Introduction - Student",
    patterns: ["are you a student", "student", "studying"],
    response: "Yes, I'm a B.Tech IT student at Adhiparasakthi Engineering College (APEC)."
  },
  {
    category: "Introduction - What Do You Do",
    patterns: ["what do you do", "what are you doing", "occupation"],
    response: "I'm a fresher and job seeker, learning and building projects in Java and web development."
  },
  {
    category: "Introduction - Location",
    patterns: ["where are you from", "location", "from where", "which place"],
    response: "I'm from Tamil Nadu, India."
  },
  {
    category: "Introduction - What to Ask",
    patterns: ["what should i ask you", "what can i ask", "what to ask"],
    response: "You can ask me about my education, experience, skills, and achievements."
  },
  {
    category: "Introduction - Fresher",
    patterns: ["are you a fresher", "fresher", "fresh graduate"],
    response: "Yes, I'm a fresher, currently seeking my first job opportunity."
  },
  {
    category: "Introduction - Career Goal",
    patterns: ["what is your career goal", "career goal", "goal", "objective"],
    response: "My goal is to become a skilled software developer, focusing on front-end and Java-based back-end development."
  },
  {
    category: "Introduction - Hobbies",
    patterns: ["what are your hobbies", "hobbies", "hobby", "interests"],
    response: "I enjoy solving the Rubik's Cube, playing chess, and learning new technologies."
  },

  {
    category: "Education - 10th School Name",
    patterns: ["where did you study your 10th", "10th school name", "name of 10th school", "10th school", "government high school sirumailur"],
    response: "I studied my 10th standard at Government High School, Sirumailur."
  },
  {
    category: "Education - 10th Board",
    patterns: ["which board did you study under for 10th", "10th board", "10th state board"],
    response: "I studied under the Tamil Nadu State Board for 10th standard."
  },
  {
    category: "Education - 10th Public Exam",
    patterns: ["did you have a public exam in 10th", "10th public exam", "10th exam", "10th board exam"],
    response: "No, my 10th batch was during COVID, so no public exam was conducted."
  },
  {
    category: "Education - 10th Evaluation",
    patterns: ["how were you evaluated", "10th evaluation", "10th marks evaluation", "internal marks"],
    response: "I was evaluated based on internal and attendance-based marks due to COVID-19."
  },
  {
    category: "Education - 10th Year",
    patterns: ["what year did you complete 10th", "10th year", "when did you finish 10th", "10th completion year"],
    response: "I completed my 10th during the COVID-19 batch."
  },
  {
    category: "Education - 10th School Type",
    patterns: ["was your school government or private", "10th school type", "government school", "private school"],
    response: "My 10th school was a Government school."
  },
  {
    category: "Education - 10th Location",
    patterns: ["where was your 10th school located", "10th school location", "sirumailur"],
    response: "My 10th school was located in Sirumailur, Tamil Nadu."
  },
  {
    category: "Education - 10th Special",
    patterns: ["what was special about your 10th batch", "10th batch", "covid batch"],
    response: "My 10th batch was special because it was a COVID batch with no public exam conducted."
  },

  {
    category: "Education - 11th School",
    patterns: ["where did you study your 11th", "11th school", "11th school name", "kayapakkam high school"],
    response: "I studied my 11th standard at Kayapakkam High School."
  },
  {
    category: "Education - 11th Marks",
    patterns: ["how many marks did you score in 11th", "11th marks", "11th score", "marks in 11th"],
    response: "I scored 376 out of 600 marks in 11th standard."
  },
  {
    category: "Education - 11th Percentage",
    patterns: ["what percentage did you get in 11th", "11th percentage", "11th percent"],
    response: "I scored around 62.6% in 11th standard."
  },
  {
    category: "Education - 11th Group",
    patterns: ["which group did you study in 11th", "11th group", "11th stream", "bio maths"],
    response: "I studied Bio-Maths (Biology + Mathematics) group in 11th standard."
  },
  {
    category: "Education - 11th Board",
    patterns: ["which board was 11th under", "11th board", "11th state board"],
    response: "My 11th was under the Tamil Nadu State Board."
  },
  {
    category: "Education - 11th Subjects",
    patterns: ["what subjects did you study in 11th", "11th subjects", "subjects in 11th"],
    response: "I studied Physics, Chemistry, Biology, and Mathematics in 11th standard."
  },
  {
    category: "Education - 11th Location",
    patterns: ["where is your 11th school located", "11th school location", "kayapakkam"],
    response: "My 11th school is located in Kayapakkam, Tamil Nadu."
  },
  {
    category: "Education - 11th COVID",
    patterns: ["was your 11th also affected by covid", "11th covid", "covid in 11th"],
    response: "Yes, schools were just reopening after COVID during my 11th standard."
  },
  {
    category: "Education - 11th Computer Science",
    patterns: ["did you take computer science in 11th", "11th computer science", "cs in 11th"],
    response: "No, I took the Bio-Maths group, not Computer Science in 11th."
  },

  {
    category: "Education - 12th School",
    patterns: ["where did you study your 12th", "12th school", "12th school name", "thozhupedu government high school"],
    response: "I studied my 12th standard at Thozhupedu Government High School."
  },
  {
    category: "Education - 12th Marks",
    patterns: ["how many marks did you score in 12th", "12th marks", "12th score", "marks in 12th"],
    response: "I scored 446 out of 600 marks in 12th standard."
  },
  {
    category: "Education - 12th Percentage",
    patterns: ["what was your percentage in 12th", "12th percentage", "12th percent"],
    response: "I scored around 74.3% in 12th standard."
  },
  {
    category: "Education - 12th Group",
    patterns: ["which group did you study in 12th", "12th group", "12th stream", "12th bio maths"],
    response: "I studied Bio-Maths (Biology + Mathematics) group in 12th standard."
  },
  {
    category: "Education - 12th Board",
    patterns: ["which board was 12th under", "12th board", "12th state board"],
    response: "My 12th was under the Tamil Nadu State Board."
  },
  {
    category: "Education - 12th Subjects",
    patterns: ["what subjects did you have in 12th", "12th subjects", "subjects in 12th"],
    response: "I studied Physics, Chemistry, Biology, and Mathematics in 12th standard."
  },
  {
    category: "Education - 12th Favorite Subject",
    patterns: ["what was your favorite subject", "favorite subject in 12th", "12th favorite"],
    response: "My favorite subjects were Computer Science and Biology."
  },
  {
    category: "Education - 12th Achievement",
    patterns: ["did you have any achievements in 12th", "12th achievement", "12th accomplishment"],
    response: "Yes, I became a Zonal-level Chess Champion during my 12th standard."
  },
  {
    category: "Education - 12th Chess",
    patterns: ["in which standard did you win the chess competition", "chess in 12th", "when did you win chess"],
    response: "I won the Zonal-level Chess Championship in 12th standard."
  },
  {
    category: "Education - 12th School Type",
    patterns: ["was your 12th school government or private", "12th school type"],
    response: "My 12th school was a Government school."
  },
  {
    category: "Education - 12th Location",
    patterns: ["where was your 12th school located", "12th school location", "thozhupedu"],
    response: "My 12th school was located in Thozhupedu, Tamil Nadu."
  },

  {
    category: "Education - College Degree",
    patterns: ["what degree are you pursuing", "degree", "btech", "b.tech"],
    response: "I'm pursuing B.Tech in Information Technology."
  },
  {
    category: "Education - College Name",
    patterns: ["which college do you study in", "college name", "your college", "apec"],
    response: "I study at Adhiparasakthi Engineering College (APEC)."
  },
  {
    category: "Education - University",
    patterns: ["which university is your college affiliated with", "university", "anna university"],
    response: "My college is affiliated with Anna University."
  },
  {
    category: "Education - Specialization",
    patterns: ["what is your specialization", "specialization", "branch", "it branch"],
    response: "My specialization is Information Technology (IT)."
  },
  {
    category: "Education - Why IT",
    patterns: ["why did you choose it", "why information technology", "why it"],
    response: "I chose IT because I'm passionate about coding and technology."
  },
  {
    category: "Education - Still Studying",
    patterns: ["are you still studying", "currently studying", "student now"],
    response: "Yes, I'm currently pursuing my B.Tech in Information Technology."
  },
  {
    category: "Education - Current Year",
    patterns: ["what year are you studying now", "current year", "which year"],
    response: "I'm in my final year of B.Tech."
  },
  {
    category: "Education - Projects Done",
    patterns: ["have you done any projects", "college projects", "academic projects"],
    response: "Yes, I've done projects like Automata CI/CD Pipeline and Portfolio AI Chatbot."
  },
  {
    category: "Education - Internships",
    patterns: ["have you completed internships", "internship", "training"],
    response: "Yes, I completed a Java Full Stack Internship at Retech Pvt Ltd."
  },
  {
    category: "Education - Certifications",
    patterns: ["what certifications do you have", "certifications", "certificates"],
    response: "I have certifications from HCL Career Craft Academy (Java) and Oracle Cloud Infrastructure."
  },
  {
    category: "Education - College Experience",
    patterns: ["how is your college experience", "college experience", "college life"],
    response: "It's been great, with hands-on learning in IT and exposure to real-world projects."
  },

  {
    category: "Experience - Work Experience",
    patterns: ["do you have any work experience", "work experience", "job experience"],
    response: "I am pursuing a job as a fresher, so I don't have any company experience yet."
  },
  {
    category: "Experience - Worked Before",
    patterns: ["have you worked in any company before", "worked in company", "previous company"],
    response: "No, I am a job seeker and have not worked in any company yet."
  },
  {
    category: "Experience - Professional Experience",
    patterns: ["what professional experience do you have", "professional experience"],
    response: "I don't have professional experience yet, but I've completed internships and projects."
  },
  {
    category: "Experience - Currently Employed",
    patterns: ["are you currently employed", "employed", "working now"],
    response: "No, I'm looking for my first job."
  },
  {
    category: "Experience - Internship Experience",
    patterns: ["do you have internship experience", "internship experience"],
    response: "Yes, I completed internships and training during my B.Tech at Retech Pvt Ltd."
  },
  {
    category: "Experience - Projects",
    patterns: ["what kind of projects have you done", "projects done", "project work"],
    response: "I've done projects like Automata CI/CD Pipeline and AI Chatbot for Portfolio."
  },
  {
    category: "Experience - Why No Work",
    patterns: ["why don't you have work experience", "no work experience", "why no job"],
    response: "I'm a fresher, just starting my professional journey after completing my education."
  },
  {
    category: "Experience - Ready for Job",
    patterns: ["are you ready for a job", "ready for work", "job ready"],
    response: "Yes, I'm fully prepared to start my career with the skills I've gained."
  },
  {
    category: "Experience - Career Objective",
    patterns: ["what is your career objective", "career objective", "professional goal"],
    response: "To apply my skills in Java, Front-End Development, and UI/UX Design in a professional role."
  },
  {
    category: "Experience - Freelance",
    patterns: ["have you done freelance work", "freelance", "freelancing"],
    response: "No, I'm currently seeking my first full-time opportunity."
  },

  {
    category: "Skills - Java",
    patterns: ["java", "spring", "spring boot", "backend", "oop", "object oriented"],
    response: "I'm proficient in Java Development with expertise in Core Java & OOP (92%), Spring Boot (85%), and RESTful APIs (86%). I focus on building scalable backend systems."
  },
  {
    category: "Skills - Frontend",
    patterns: ["frontend", "html", "css", "javascript", "react", "web development"],
    response: "I work with modern frontend technologies including HTML, CSS, JavaScript, React, and responsive design frameworks."
  },
  {
    category: "Skills - UI/UX",
    patterns: ["ui", "ux", "design", "wireframe", "prototype", "user experience"],
    response: "I specialize in UI/UX Design with skills in Wireframing & Prototyping (90%) and Responsive Design (95%). I create intuitive, user-centered designs."
  },
  {
    category: "Skills - Database",
    patterns: ["database", "sql", "mysql", "dbms"],
    response: "I have strong database management skills with experience in MySQL and DBMS. I can design efficient schemas and write optimized queries."
  },
  {
    category: "Skills - All Skills",
    patterns: ["skills", "what can you do", "technical skills", "abilities"],
    response: "My key skills include Java Development, Front-End Development (HTML, CSS, JavaScript, React), UI/UX Design, Spring Boot, DBMS, and MS Office."
  },

  {
    category: "Achievements - Chess",
    patterns: ["chess", "chess champion", "zonal chess"],
    response: "I'm a Zonal-Level Chess Champion! I achieved this during my 12th standard, demonstrating my strategic thinking and problem-solving abilities."
  },
  {
    category: "Achievements - Rubik's Cube",
    patterns: ["rubik", "cube", "puzzle", "rubiks cube"],
    response: "I'm a skilled Rubik's Cube solver with consistent sub-2 minute solving times. This showcases my pattern recognition and algorithmic thinking."
  },

  {
    category: "Projects - Automata",
    patterns: ["automata", "cicd", "ci cd", "pipeline"],
    response: "My project 'Automata CI/CD Pipeline' focuses on automating continuous integration and deployment processes for efficient software delivery."
  },
  {
    category: "Projects - Chatbot",
    patterns: ["chatbot", "ai chatbot", "portfolio chatbot"],
    response: "I built this AI Chatbot using Bolt AI as part of my portfolio project to showcase my skills interactively."
  },

  {
    category: "Contact",
    patterns: ["contact", "email", "phone", "reach you"],
    response: "You can reach me via email or connect with me on LinkedIn and GitHub. Feel free to use the contact form on this portfolio website!"
  },
  {
    category: "Resume",
    patterns: ["resume", "cv", "download resume"],
    response: "You can download my complete resume using the 'Download Resume' button on the homepage."
  }
];

export const defaultResponse = "Ask about me.";

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
