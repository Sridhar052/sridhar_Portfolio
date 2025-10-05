export interface KnowledgeItem {
  patterns: string[];
  response: string;
  category: string;
}

export const knowledgeBase: KnowledgeItem[] = [
  {
    category: "Greetings - Hello",
    patterns: ["hello", "helo", "helloo", "hellooo"],
    response: "Hello! I'm Sridhar B. You can ask me about my education, skills, or experience."
  },
  {
    category: "Greetings - Hi",
    patterns: ["hi", "hii", "hiiii", "hiii"],
    response: "Hello! I'm Sridhar B. You can ask me about my education, skills, or experience."
  },
  {
    category: "Greetings - Hey",
    patterns: ["hey", "heyy", "heyyy", "heyyyy"],
    response: "Hello! I'm Sridhar B. You can ask me about my education, skills, or experience."
  },
  {
    category: "Introduction - Who Are You",
    patterns: ["who are you", "what are you", "who r u", "who r you"],
    response: "I'm Sridhar B, a B.Tech Information Technology graduate passionate about front-end and Java development."
  },
  {
    category: "Introduction - Introduce",
    patterns: ["introduce yourself", "can you introduce yourself", "tell me about you", "introduction"],
    response: "I'm Sridhar B, a fresher with skills in Java, UI/UX design, and web development. You can ask me about my education or experience."
  },
  {
    category: "Introduction - Tell About Yourself",
    patterns: ["tell me about yourself", "about yourself", "about you"],
    response: "I'm Sridhar B, a B.Tech Information Technology graduate passionate about front-end and Java development."
  },
  {
    category: "Introduction - What Can I Ask",
    patterns: ["what can i ask you", "what should i ask", "what to ask", "what questions"],
    response: "You can ask me about my education, achievements, certifications, and experience."
  },
  {
    category: "Introduction - How Respond",
    patterns: ["how do you respond", "how do you answer", "how does this work", "how chatbot works"],
    response: "I answer queries only related to me. If the question is unrelated, I'll reply with 'Ask about me.'"
  },
  {
    category: "Introduction - Name",
    patterns: ["what is your name", "your name", "name", "whats your name"],
    response: "My name is Sridhar B."
  },
  {
    category: "Introduction - Location",
    patterns: ["where are you from", "location", "from where", "which place", "city"],
    response: "I'm from Tamil Nadu, India."
  },

  {
    category: "Education - 10th School",
    patterns: ["where did you study 10th", "10th school", "10th school name", "name of 10th school", "government high school sirumailur"],
    response: "I completed my 10th at Government High School, Sirumailur. It was a COVID batch, so no public exam was conducted."
  },
  {
    category: "Education - 10th Board",
    patterns: ["which board 10th", "10th board", "10th state board", "board in 10th"],
    response: "I studied under the Tamil Nadu State Board for 10th, 11th, and 12th."
  },
  {
    category: "Education - 10th COVID",
    patterns: ["10th exam", "10th public exam", "covid batch", "no exam in 10th"],
    response: "I completed my 10th at Government High School, Sirumailur. It was a COVID batch, so no public exam was conducted."
  },

  {
    category: "Education - 11th School",
    patterns: ["where did you study 11th", "11th school", "11th school name", "what is your 11th school name", "kayapakkam"],
    response: "I studied 11th at Kayapakkam High School."
  },
  {
    category: "Education - 11th Marks",
    patterns: ["11th marks", "11th score", "how many marks in 11th", "marks in 11th", "11th result"],
    response: "I scored 376 out of 600 marks in my 11th standard."
  },
  {
    category: "Education - 11th Group",
    patterns: ["11th group", "what group in 11th", "11th stream", "group in 11th", "bio maths"],
    response: "I studied the Bio-Maths group under the Tamil Nadu State Board."
  },
  {
    category: "Education - 11th and 12th Group",
    patterns: ["what group did you study", "11th and 12th group", "group in 11th 12th", "which group"],
    response: "I studied the Bio-Maths group under the Tamil Nadu State Board."
  },
  {
    category: "Education - 11th Percentage",
    patterns: ["11th percentage", "11th percent", "percentage in 11th"],
    response: "I scored 376 out of 600 marks in my 11th standard, which is around 62.6%."
  },
  {
    category: "Education - 11th Subjects",
    patterns: ["11th subjects", "subjects in 11th", "what subjects 11th"],
    response: "I studied Physics, Chemistry, Biology, and Mathematics in 11th standard."
  },

  {
    category: "Education - 12th School",
    patterns: ["where did you study 12th", "12th school", "12th school name", "which school 12th", "thozhupedu"],
    response: "I completed my 12th at Thozhupedu Government High School."
  },
  {
    category: "Education - 12th Marks",
    patterns: ["12th marks", "12th score", "what was your 12th mark", "marks in 12th", "12th result", "how many marks 12th"],
    response: "I scored 446 out of 600 marks in my 12th standard."
  },
  {
    category: "Education - 12th Percentage",
    patterns: ["12th percentage", "12th percent", "percentage in 12th"],
    response: "I scored 446 out of 600 marks in my 12th standard, which is around 74.3%."
  },
  {
    category: "Education - 12th Group",
    patterns: ["12th group", "what group in 12th", "12th stream", "group in 12th"],
    response: "I studied the Bio-Maths group under the Tamil Nadu State Board."
  },
  {
    category: "Education - 12th Competition",
    patterns: ["competition in school", "win in 12th", "achievement in 12th", "chess champion", "12th achievement"],
    response: "Yes, I was a zonal-level chess champion during my 12th standard."
  },
  {
    category: "Education - 12th Subjects",
    patterns: ["12th subjects", "subjects in 12th", "what subjects 12th"],
    response: "I studied Physics, Chemistry, Biology, and Mathematics in 12th standard."
  },

  {
    category: "Education - Board",
    patterns: ["which board", "what board", "board you studied", "state board", "education board"],
    response: "I studied under the Tamil Nadu State Board for 10th, 11th, and 12th."
  },

  {
    category: "Education - College Name",
    patterns: ["college name", "what is your college name", "which college", "your college", "where did you study btech", "apec"],
    response: "I completed my B.Tech in Information Technology at APEC."
  },
  {
    category: "Education - Degree",
    patterns: ["what is your degree", "degree", "qualification", "what degree", "btech", "b.tech"],
    response: "I hold a Bachelor of Technology (B.Tech) degree in Information Technology."
  },
  {
    category: "Education - Branch",
    patterns: ["branch", "specialization", "what branch", "it branch", "information technology"],
    response: "I completed my B.Tech in Information Technology at APEC."
  },
  {
    category: "Education - University",
    patterns: ["university", "which university", "affiliated university", "anna university"],
    response: "APEC is affiliated with Anna University."
  },
  {
    category: "Education - College Details",
    patterns: ["tell me about your college", "college details", "college info"],
    response: "I completed my B.Tech in Information Technology at APEC (Adhiparasakthi Engineering College), which is affiliated with Anna University."
  },

  {
    category: "Experience - Work Experience",
    patterns: ["work experience", "do you have work experience", "job experience", "professional experience"],
    response: "I'm a job seeker currently looking for opportunities. I don't have company experience yet."
  },
  {
    category: "Experience - Company Work",
    patterns: ["worked in company", "have you worked", "any company", "company experience"],
    response: "Not yet, but I've completed internships and training during my B.Tech."
  },
  {
    category: "Experience - Experienced",
    patterns: ["are you experienced", "experienced developer", "experience level"],
    response: "I'm a fresher with internship experience and am currently seeking job opportunities."
  },
  {
    category: "Experience - Professional",
    patterns: ["what is your professional experience", "professional work", "career experience"],
    response: "I don't have professional company experience, but I've gained practical skills through training and internships."
  },
  {
    category: "Experience - Job Type",
    patterns: ["what type of jobs", "looking for job", "job seeking", "which job", "job role"],
    response: "I'm seeking opportunities in Front-End Development and Java (Spring Boot)."
  },
  {
    category: "Experience - Fresher",
    patterns: ["fresher", "are you fresher", "fresh graduate", "no experience"],
    response: "I'm a fresher with internship experience and am currently seeking job opportunities."
  },
  {
    category: "Experience - Internship",
    patterns: ["internship", "training", "internship experience", "any internship"],
    response: "Yes, I completed a Java Full Stack Internship at Retech Pvt Ltd during my B.Tech."
  },

  {
    category: "Skills - Java",
    patterns: ["java", "java skills", "spring boot", "backend", "java developer"],
    response: "I'm proficient in Java Development with expertise in Core Java & OOP (92%), Spring Boot (85%), and RESTful APIs (86%)."
  },
  {
    category: "Skills - Frontend",
    patterns: ["frontend", "front end", "html css javascript", "web development", "ui development"],
    response: "I have skills in Front-End Development including HTML, CSS, JavaScript, React, and UI/UX Design."
  },
  {
    category: "Skills - UI/UX",
    patterns: ["ui ux", "design", "ui design", "ux design", "wireframe"],
    response: "I specialize in UI/UX Design with skills in Wireframing & Prototyping (90%) and Responsive Design (95%)."
  },
  {
    category: "Skills - All",
    patterns: ["skills", "what skills", "technical skills", "your skills", "abilities"],
    response: "My key skills include Java Development, Front-End Development (HTML, CSS, JavaScript, React), UI/UX Design, Spring Boot, and DBMS."
  },
  {
    category: "Skills - Database",
    patterns: ["database", "sql", "mysql", "dbms"],
    response: "I have experience in Database Management with MySQL and DBMS. I can design efficient schemas and write optimized queries."
  },

  {
    category: "Achievements - Chess",
    patterns: ["chess", "chess champion", "zonal chess", "competition", "award"],
    response: "Yes, I was a zonal-level chess champion during my 12th standard."
  },
  {
    category: "Achievements - Rubik",
    patterns: ["rubik", "rubiks cube", "cube", "puzzle"],
    response: "I'm a skilled Rubik's Cube solver, which showcases my problem-solving and pattern recognition abilities."
  },
  {
    category: "Achievements - All",
    patterns: ["achievements", "accomplishments", "awards"],
    response: "I was a zonal-level chess champion during my 12th standard and I'm skilled in Rubik's Cube solving."
  },

  {
    category: "Certifications",
    patterns: ["certifications", "certificates", "certified", "training certificates"],
    response: "I have certifications from HCL Career Craft Academy (Java Full Stack) and Oracle Cloud Infrastructure (OCI)."
  },

  {
    category: "Projects",
    patterns: ["projects", "project work", "what projects", "portfolio projects"],
    response: "I've worked on projects including Automata CI/CD Pipeline and this AI-powered Portfolio Chatbot using Bolt AI."
  },
  {
    category: "Projects - Chatbot",
    patterns: ["chatbot project", "ai chatbot", "portfolio chatbot", "this chatbot"],
    response: "I built this AI-powered chatbot using Bolt AI. It's trained on my personal dataset and can answer 100+ questions about my education, achievements, and experience."
  },

  {
    category: "Contact",
    patterns: ["contact", "email", "phone", "reach you", "get in touch"],
    response: "You can reach me through the contact form on this website or connect with me on LinkedIn and GitHub."
  },
  {
    category: "Resume",
    patterns: ["resume", "cv", "download resume"],
    response: "You can download my complete resume using the 'Download Resume' button on the homepage."
  },

  {
    category: "Career - Goal",
    patterns: ["career goal", "future goal", "ambition", "objective"],
    response: "My goal is to become a skilled software developer, focusing on Front-End Development and Java-based back-end development."
  },
  {
    category: "Career - Looking For",
    patterns: ["looking for", "job preference", "preferred role", "which role"],
    response: "I'm seeking opportunities in Front-End Development and Java (Spring Boot)."
  }
];

export const defaultResponse = "Ask about me.";

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
