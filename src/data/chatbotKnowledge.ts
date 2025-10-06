export interface KnowledgeItem {
  patterns: string[];
  response: string;
  category: string;
}

export const knowledgeBase: KnowledgeItem[] = [
  {
    category: "Greetings",
    patterns: ["hello", "hi", "hey", "good morning", "good afternoon", "good evening", "greetings", "namaste"],
    response: "Hello! Welcome to B. Sridhar's AI-powered portfolio. I'm your intelligent assistant here to answer any questions about Sridhar's education, skills, certifications, achievements, and career goals. Feel free to ask me anything!"
  },
  {
    category: "Introduction - Who",
    patterns: ["who are you", "who is sridhar", "tell me about sridhar", "about sridhar"],
    response: "I'm B. Sridhar, a motivated fresher specializing in Front-End Development and Java (Spring Boot). I hold a B.Tech degree in Information Technology from APEC College. I'm passionate about creating innovative web solutions and building robust backend systems. I'm actively seeking opportunities in both front-end and back-end development roles."
  },
  {
    category: "Introduction - Tell About Yourself",
    patterns: ["introduce yourself", "tell me about yourself", "about you", "who r u", "your introduction"],
    response: "I'm B. Sridhar, a B.Tech (Information Technology) graduate from APEC College. I'm a fresher with strong skills in Front-End Development, Java (Spring Boot), and UI/UX Design. During my academic journey, I've completed internships and certifications, including Java Full Stack training at Retech Pvt Ltd, HCL Career Craft Academy, and Oracle Cloud Infrastructure. I was also a Zonal-Level Chess Champion in my 12th standard. I'm eager to contribute my skills to innovative projects and grow professionally."
  },
  {
    category: "Introduction - Name",
    patterns: ["what is your name", "your name", "name", "whats your name"],
    response: "My name is B. Sridhar."
  },
  {
    category: "Introduction - Portfolio Purpose",
    patterns: ["what is this portfolio", "portfolio purpose", "why this website", "about this site", "about portfolio"],
    response: "This is my AI-powered personal portfolio — a next-generation approach to digital identity. Unlike traditional static portfolios, this uses Bolt AI to create an intelligent, conversational experience. You can ask me questions naturally and receive instant, accurate answers about my education, skills, projects, and achievements. This portfolio showcases my technical proficiency in front-end development, Java programming, and AI integration."
  },
  {
    category: "Introduction - Chatbot Info",
    patterns: ["what can you do", "how does this work", "chatbot features", "what can i ask", "how to use"],
    response: "I'm an AI-powered chat assistant integrated using Bolt AI and trained on a custom dataset containing B. Sridhar's complete profile. I can answer any question about:\n• Educational background (10th, 11th, 12th, B.Tech)\n• Technical skills and expertise\n• Certifications and training\n• Projects and achievements\n• Career goals and availability\n\nJust ask naturally like you're having a conversation!"
  },
  {
    category: "Introduction - Location",
    patterns: ["where are you from", "location", "hometown", "place", "city"],
    response: "B. Sridhar is from Tamil Nadu, India."
  },

  {
    category: "Career Objective",
    patterns: ["career objective", "objective", "goal", "what do you want", "career goal", "ambition"],
    response: "I'm a motivated fresher specializing in Front-End Development and Java (Spring Boot). I'm actively seeking opportunities in both front-end and back-end development roles where I can apply my technical skills, contribute to innovative projects, and grow as a professional software developer."
  },
  {
    category: "Career - Looking For",
    patterns: ["looking for", "job search", "what jobs", "opportunities", "what role", "position"],
    response: "I'm seeking opportunities in:\n• Front-End Development (HTML, CSS, JavaScript, React)\n• Java Development (Spring Boot)\n• Back-End Development\n• Full-Stack Development roles\n\nI'm particularly interested in roles that allow me to work with modern technologies and contribute to meaningful projects."
  },
  {
    category: "Career - Fresher",
    patterns: ["fresher", "are you fresher", "experience level", "fresh graduate"],
    response: "Yes, I'm a fresher with solid academic credentials and practical experience gained through internships and training programs. While I don't have full-time work experience yet, I've completed a Java Full Stack Internship at Retech Pvt Ltd and earned multiple certifications that validate my technical abilities."
  },

  {
    category: "Education - Overview",
    patterns: ["education", "educational background", "academic", "qualification", "tell me about your education"],
    response: "My educational journey:\n\n🎓 B.Tech in Information Technology – APEC College\n\n📚 12th Grade: Thozhupedu Government Higher Secondary School\n   • 446/600 marks | Bio-Maths Group\n   • Achievement: Zonal-Level Chess Champion\n\n📚 11th Grade: Kayapakkam High School\n   • 376/600 marks | Bio-Maths Group\n\n📚 10th Grade: Government High School, Sirumailur\n   • COVID Batch – No public exam conducted"
  },

  {
    category: "Education - B.Tech",
    patterns: ["btech", "b.tech", "degree", "graduation", "college", "what is your degree"],
    response: "I completed my B.Tech (Bachelor of Technology) in Information Technology from APEC College. This program provided me with strong foundations in programming, software development, database management, and modern technologies like Java and front-end frameworks."
  },
  {
    category: "Education - College Name",
    patterns: ["college name", "which college", "your college", "where did you study", "apec"],
    response: "I studied at APEC College (Adhiparasakthi Engineering College), where I completed my B.Tech in Information Technology."
  },
  {
    category: "Education - Branch",
    patterns: ["branch", "specialization", "stream", "it", "information technology", "what branch"],
    response: "I specialized in Information Technology (IT) during my B.Tech program at APEC College."
  },

  {
    category: "Education - 12th",
    patterns: ["12th", "twelfth", "12th standard", "higher secondary", "12th grade", "12th marks", "12th school"],
    response: "I completed my 12th grade at Thozhupedu Government Higher Secondary School, where I studied the Bio-Maths group. I scored 446 out of 600 marks (74.3%). During this time, I also became a Zonal-Level Chess Champion, demonstrating my strategic thinking and competitive spirit."
  },
  {
    category: "Education - 12th School",
    patterns: ["12th school name", "higher secondary school", "thozhupedu"],
    response: "My 12th standard was completed at Thozhupedu Government Higher Secondary School."
  },
  {
    category: "Education - 12th Marks",
    patterns: ["how many marks in 12th", "12th score", "12th result", "12th percentage"],
    response: "I scored 446 out of 600 marks in my 12th standard, which is approximately 74.3%."
  },

  {
    category: "Education - 11th",
    patterns: ["11th", "eleventh", "11th standard", "11th grade", "11th marks", "11th school"],
    response: "I studied my 11th standard at Kayapakkam High School under the Bio-Maths group. I scored 376 out of 600 marks (62.6%). This year laid the foundation for my interest in both analytical sciences and mathematics."
  },
  {
    category: "Education - 11th School",
    patterns: ["11th school name", "kayapakkam"],
    response: "My 11th standard was completed at Kayapakkam High School."
  },
  {
    category: "Education - 11th Marks",
    patterns: ["how many marks in 11th", "11th score", "11th result", "11th percentage"],
    response: "I scored 376 out of 600 marks in my 11th standard, which is approximately 62.6%."
  },

  {
    category: "Education - 10th",
    patterns: ["10th", "tenth", "10th standard", "sslc", "10th grade", "10th school"],
    response: "I completed my 10th standard at Government High School, Sirumailur. I was part of the COVID batch, so no public examination was conducted. Evaluation was done through internal assessment."
  },
  {
    category: "Education - 10th School",
    patterns: ["10th school name", "sirumailur", "government high school"],
    response: "My 10th standard was completed at Government High School, Sirumailur."
  },

  {
    category: "Education - Group",
    patterns: ["group", "which group", "bio maths", "stream in school", "11th 12th group"],
    response: "I studied the Bio-Maths group (Biology + Mathematics) in both my 11th and 12th standards. This combination helped me develop strong analytical and problem-solving skills."
  },
  {
    category: "Education - Board",
    patterns: ["board", "which board", "state board", "education board"],
    response: "I completed my 10th, 11th, and 12th standards under the Tamil Nadu State Board."
  },

  {
    category: "Skills - Overview",
    patterns: ["skills", "what are your skills", "technical skills", "what can you do", "abilities", "your skills"],
    response: "My core technical skills include:\n\n💻 Java Development\n   • Core Java & Object-Oriented Programming\n   • Spring Boot Framework\n   • RESTful API Development\n\n🎨 Front-End Development\n   • HTML5, CSS3, JavaScript\n   • React.js\n   • Responsive Web Design\n\n✨ UI/UX Design\n   • User Interface Design\n   • User Experience Principles\n   • Wireframing & Prototyping\n\n📊 MS Office\n   • Word, Excel, PowerPoint\n   • Documentation and Presentation"
  },
  {
    category: "Skills - Java",
    patterns: ["java", "java skills", "spring boot", "backend", "java developer", "java development"],
    response: "I have strong expertise in Java Development, including:\n• Core Java and Object-Oriented Programming (OOP)\n• Spring Boot Framework for building robust backend applications\n• RESTful API design and development\n• Understanding of backend architecture and design patterns\n\nI've completed Java Full Stack training at Retech Pvt Ltd and HCL Career Craft Academy, which has solidified my Java skills."
  },
  {
    category: "Skills - Frontend",
    patterns: ["frontend", "front end", "web development", "html css javascript", "react"],
    response: "My Front-End Development skills include:\n• HTML5 for semantic markup\n• CSS3 for styling and animations\n• JavaScript (ES6+) for interactivity\n• React.js for building modern, dynamic web applications\n• Responsive design principles\n• Cross-browser compatibility\n\nI'm passionate about creating beautiful, user-friendly interfaces that provide excellent user experiences."
  },
  {
    category: "Skills - UI/UX",
    patterns: ["ui ux", "design", "user interface", "user experience", "ui design", "ux design"],
    response: "I specialize in UI/UX Design with focus on:\n• Creating intuitive user interfaces\n• Understanding user experience principles\n• Wireframing and prototyping\n• Visual design and layout\n• Accessibility and usability\n• Responsive design across devices\n\nMy design skills complement my development abilities, allowing me to create complete, polished web applications."
  },
  {
    category: "Skills - MS Office",
    patterns: ["ms office", "microsoft office", "office", "word excel powerpoint"],
    response: "I'm proficient in MS Office Suite including:\n• Microsoft Word for documentation\n• Microsoft Excel for data management and analysis\n• Microsoft PowerPoint for presentations\n\nThese skills help me with professional documentation, data organization, and effective communication."
  },

  {
    category: "Certifications - Overview",
    patterns: ["certifications", "certificates", "certified", "training", "courses"],
    response: "I have completed the following certifications and training programs:\n\n🏆 Java Full Stack Internship – Retech Pvt Ltd\n   Hands-on training in full-stack development with Java technologies\n\n🏆 HCL Career Craft Academy – Java Certification\n   Professional Java development certification from HCL\n\n🏆 Oracle Cloud Infrastructure Certification\n   Cloud computing and infrastructure management certification\n\nThese certifications validate my technical expertise and commitment to continuous learning."
  },
  {
    category: "Certifications - Java Full Stack",
    patterns: ["java full stack", "retech", "internship", "full stack training"],
    response: "I completed a Java Full Stack Internship at Retech Pvt Ltd, where I received comprehensive hands-on training in:\n• Java backend development\n• Front-end technologies\n• Database management\n• Full-stack application development\n\nThis internship provided me with practical, real-world development experience."
  },
  {
    category: "Certifications - HCL",
    patterns: ["hcl", "hcl certification", "career craft", "hcl career craft academy"],
    response: "I earned a Java Certification from HCL Career Craft Academy, a prestigious professional training program that provided in-depth knowledge of Java development, best practices, and industry-standard coding techniques."
  },
  {
    category: "Certifications - Oracle",
    patterns: ["oracle", "oci", "oracle cloud", "cloud certification"],
    response: "I hold an Oracle Cloud Infrastructure (OCI) Certification, which demonstrates my understanding of cloud computing concepts, infrastructure management, and Oracle's cloud services platform."
  },

  {
    category: "Achievements - Chess",
    patterns: ["chess", "chess champion", "zonal champion", "competition", "sports"],
    response: "I'm proud to be a Zonal-Level Chess Champion! I achieved this recognition during my 12th standard. Chess has taught me valuable skills like:\n• Strategic thinking and planning\n• Problem-solving under pressure\n• Patience and focus\n• Analytical thinking\n\nThese skills directly translate to software development and debugging complex problems."
  },
  {
    category: "Achievements - Rubik's Cube",
    patterns: ["rubik", "rubiks cube", "cube", "puzzle", "rubik cube"],
    response: "I'm a skilled Rubik's Cube solver! This hobby showcases my:\n• Pattern recognition abilities\n• Algorithmic thinking\n• Spatial reasoning\n• Problem-solving skills\n• Persistence and practice\n\nSolving the Rubik's Cube is much like programming — understanding algorithms, recognizing patterns, and executing precise sequences to achieve the desired result."
  },
  {
    category: "Achievements - All",
    patterns: ["achievements", "accomplishments", "what have you achieved", "awards"],
    response: "My key achievements include:\n\n🏆 Zonal-Level Chess Champion (12th Standard)\n   Demonstrates strategic thinking and competitive excellence\n\n🧩 Rubik's Cube Solver\n   Showcases problem-solving and algorithmic thinking\n\n📜 Multiple Professional Certifications\n   Java Full Stack (Retech Pvt Ltd), HCL Career Craft Academy, Oracle Cloud Infrastructure\n\n💡 AI-Powered Portfolio Project\n   Innovative integration of Bolt AI with web development"
  },

  {
    category: "Experience - Overview",
    patterns: ["experience", "work experience", "professional experience", "do you have experience"],
    response: "I'm a fresher with valuable practical experience gained through:\n\n🔧 Java Full Stack Internship at Retech Pvt Ltd\n   Hands-on training in full-stack development\n\n📚 Academic Projects during B.Tech\n   Real-world application development experience\n\n🎓 Multiple Training & Certification Programs\n   HCL Career Craft Academy and Oracle Cloud Infrastructure\n\nWhile I'm seeking my first full-time role, I bring strong technical skills, practical training experience, and eagerness to contribute and learn."
  },
  {
    category: "Experience - Internship",
    patterns: ["internship", "internship experience", "retech internship", "training experience"],
    response: "I completed a Java Full Stack Internship at Retech Pvt Ltd during my B.Tech. This internship provided:\n• Practical hands-on coding experience\n• Exposure to full-stack development workflow\n• Understanding of professional development practices\n• Experience with Java backend and front-end technologies\n• Real-world project development skills"
  },
  {
    category: "Experience - Work",
    patterns: ["have you worked", "job", "company experience", "working experience"],
    response: "I'm a fresher actively seeking my first full-time opportunity. While I don't have company work experience yet, I've gained substantial practical experience through my Java Full Stack Internship at Retech Pvt Ltd and multiple certification programs. I'm ready to apply my skills in a professional environment."
  },

  {
    category: "Projects - Portfolio",
    patterns: ["projects", "project", "what projects", "portfolio project", "ai portfolio", "this project"],
    response: "One of my standout projects is this AI-Powered Personal Portfolio! \n\nKey Features:\n• Integrated Bolt AI as an intelligent chat assistant\n• Custom-trained dataset with my complete profile\n• Natural language query processing\n• Professional, responsive UI/UX design\n• Real-time conversational responses\n\nThis project demonstrates my ability to:\n✓ Integrate AI technology with web development\n✓ Create user-centric, interactive experiences\n✓ Build modern, responsive front-end applications\n✓ Think innovatively to solve real-world problems\n\nIt transforms a traditional static portfolio into an intelligent, conversational platform that provides instant answers to recruiters and visitors."
  },
  {
    category: "Projects - Innovation",
    patterns: ["innovation", "why ai portfolio", "portfolio features", "what makes this special"],
    response: "This AI-powered portfolio represents innovation in personal branding:\n\n🎯 Problem Solved:\nTraditional portfolios are static and require manual searching. This provides instant, conversational access to information.\n\n🤖 Technology Used:\nBolt AI integration with custom dataset training\n\n💡 Benefits:\n• Instant answers for recruiters\n• Interactive user experience\n• Demonstrates technical proficiency\n• Showcases AI integration skills\n• Professional and memorable presentation\n\nIt's not just a portfolio — it's a demonstration of my technical capabilities and innovative thinking!"
  },

  {
    category: "Why Hire",
    patterns: ["why hire you", "why should we hire", "what makes you special", "your strength", "why choose you"],
    response: "Here's why I'd be a valuable addition to your team:\n\n✅ Strong Technical Foundation\n   Certified in Java Full Stack (HCL, Retech) and Oracle Cloud Infrastructure\n\n✅ Dual Expertise\n   Both front-end development and Java backend skills\n\n✅ Innovative Mindset\n   Created this AI-powered portfolio showcasing modern tech integration\n\n✅ Problem-Solving Skills\n   Demonstrated through Chess Championship and Rubik's Cube solving\n\n✅ Quick Learner\n   Multiple certifications and continuous skill development\n\n✅ Professional Attitude\n   Strong work ethic, team collaboration, and communication skills\n\n✅ Immediate Availability\n   Ready to contribute from day one"
  },

  {
    category: "Strengths",
    patterns: ["strengths", "strong points", "what are your strengths", "best qualities"],
    response: "My key strengths include:\n\n💪 Technical Proficiency: Strong skills in Java, Spring Boot, and Front-End Development\n\n🧠 Problem-Solving: Proven through Chess Championship and programming challenges\n\n📚 Quick Learner: Multiple certifications and ability to adapt to new technologies\n\n🎨 Design Thinking: UI/UX skills for creating user-friendly interfaces\n\n🔄 Full-Stack Mindset: Understanding of both frontend and backend development\n\n🤝 Team Player: Good communication and collaboration skills\n\n⚡ Innovation: Demonstrated by this AI-integrated portfolio project"
  },

  {
    category: "Soft Skills",
    patterns: ["soft skills", "communication", "teamwork", "interpersonal skills"],
    response: "In addition to technical abilities, I possess strong soft skills:\n\n🗣️ Communication: Clear articulation of ideas and technical concepts\n🤝 Teamwork: Collaborative approach to projects\n⏰ Time Management: Balancing multiple tasks effectively\n🎯 Attention to Detail: Ensuring quality in code and design\n💡 Creative Thinking: Innovative problem-solving approach\n📈 Adaptability: Quick to learn new technologies and methodologies\n🏆 Competitive Spirit: Driven to excel (Chess Champion background)"
  },

  {
    category: "Availability",
    patterns: ["availability", "when can you join", "available", "start date", "notice period"],
    response: "I'm immediately available and ready to join! As a fresher, I have no notice period and can start contributing to your team right away. I'm excited and eager to begin my professional journey."
  },

  {
    category: "Contact",
    patterns: ["contact", "how to contact", "reach you", "email", "phone", "get in touch"],
    response: "You can reach me through:\n• Contact form on this portfolio website\n• LinkedIn profile (link available on the portfolio)\n• GitHub profile (link available on the portfolio)\n• Email address (available in the Contact section)\n\nFeel free to connect with me for opportunities, collaborations, or just to discuss technology!"
  },

  {
    category: "Resume",
    patterns: ["resume", "cv", "download resume", "curriculum vitae"],
    response: "You can download my complete resume using the 'Download Resume' button on the portfolio homepage. It contains comprehensive details about my education, skills, certifications, projects, and achievements in a professionally formatted document."
  },

  {
    category: "Hobbies",
    patterns: ["hobbies", "hobby", "interests", "what do you do for fun"],
    response: "My hobbies include:\n\n♟️ Chess: I'm a Zonal-Level Chess Champion\n🧩 Rubik's Cube: I enjoy solving puzzles and complex problems\n💻 Coding: I love exploring new technologies and building projects\n📚 Learning: Constantly upgrading my technical skills through online courses\n\nThese hobbies reflect my analytical mindset and passion for problem-solving!"
  },

  {
    category: "Future Goals",
    patterns: ["future goals", "future plans", "long term goal", "where do you see yourself", "career vision"],
    response: "My future goals include:\n\n📍 Short-term: Secure a position in Front-End or Java Development to gain industry experience\n\n📍 Mid-term: Become a proficient Full-Stack Developer with expertise in modern frameworks and cloud technologies\n\n📍 Long-term: Contribute to impactful projects, mentor junior developers, and potentially lead development teams\n\nI'm committed to continuous learning and growing as a technology professional."
  },

  {
    category: "Learning Approach",
    patterns: ["how do you learn", "learning", "self learning", "continuous learning"],
    response: "My learning approach is:\n\n📚 Structured Learning: Professional certifications (HCL, Oracle, Retech)\n🛠️ Hands-On Practice: Building real projects like this AI portfolio\n💡 Problem-Solving: Learning through challenges and debugging\n🌐 Online Resources: Utilizing documentation, tutorials, and communities\n🔄 Continuous Improvement: Always staying updated with latest technologies\n\nI believe in learning by doing — theory combined with practical implementation!"
  }
];

export const defaultResponse = "I'm here to answer questions about B. Sridhar — his education, skills, certifications, achievements, and career goals. Feel free to ask me anything about his professional profile!";

function normalizeText(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .replace(/whats/g, 'what is')
    .replace(/wheres/g, 'where is')
    .replace(/hows/g, 'how is')
    .replace(/youre/g, 'you are')
    .replace(/im/g, 'i am')
    .replace(/dont/g, 'do not')
    .replace(/didnt/g, 'did not')
    .replace(/cant/g, 'can not')
    .replace(/wont/g, 'will not')
    .replace(/isnt/g, 'is not')
    .replace(/arent/g, 'are not')
    .replace(/ur/g, 'your')
    .replace(/u/g, 'you')
    .replace(/r/g, 'are')
    .replace(/\bu\b/g, 'you')
    .replace(/\bur\b/g, 'your')
    .replace(/\br\b/g, 'are')
    .replace(/\btell\s+abt\b/g, 'tell about')
    .replace(/\babt\b/g, 'about')
    .replace(/\bpls\b/g, 'please')
    .replace(/\bplz\b/g, 'please')
    .replace(/\bthnks\b/g, 'thanks')
    .replace(/\bthnx\b/g, 'thanks')
    .replace(/\bskls\b/g, 'skills')
    .replace(/\bprjct\b/g, 'project')
    .replace(/\bprjcts\b/g, 'projects')
    .replace(/\bstd\b/g, 'standard')
    .replace(/\bstndrd\b/g, 'standard')
    .replace(/\bclg\b/g, 'college')
    .replace(/\buniv\b/g, 'university')
    .replace(/\bexp\b/g, 'experience')
    .replace(/\bcert\b/g, 'certification')
    .replace(/\bcerts\b/g, 'certifications');
}

function calculateSimilarity(text1: string, text2: string): number {
  const words1 = text1.split(' ').filter(w => w.length > 0);
  const words2 = text2.split(' ').filter(w => w.length > 0);

  let matches = 0;
  for (const word1 of words1) {
    for (const word2 of words2) {
      if (word1 === word2 || word1.includes(word2) || word2.includes(word1)) {
        matches++;
        break;
      }
    }
  }

  return matches / Math.max(words1.length, words2.length);
}

export function findBestMatch(query: string): string {
  const normalizedQuery = normalizeText(query);

  let bestMatch: KnowledgeItem | null = null;
  let bestScore = 0;

  for (const item of knowledgeBase) {
    for (const pattern of item.patterns) {
      const normalizedPattern = normalizeText(pattern);

      if (normalizedQuery.includes(normalizedPattern) || normalizedPattern.includes(normalizedQuery)) {
        return item.response;
      }

      const similarity = calculateSimilarity(normalizedQuery, normalizedPattern);
      if (similarity > bestScore && similarity > 0.4) {
        bestScore = similarity;
        bestMatch = item;
      }
    }
  }

  if (bestMatch && bestScore > 0.4) {
    return bestMatch.response;
  }

  return defaultResponse;
}
