// ============================================================
// 📝 PORTFOLIO CONFIGURATION
// ============================================================
// Edit this file to customize YOUR portfolio!
// All your personal data lives here — no need to touch HTML or CSS.
// ============================================================

const CONFIG = {

  // ----------------------------------------------------------
  // 🧑 PERSONAL INFO
  // ----------------------------------------------------------
  name: "Merin Rose Tom",
  title: "Senior Software Engineer | Backend Developer",
  profileImage: "profile.png", // Place your photo in this folder and update the filename

  // ----------------------------------------------------------
  // 📬 CONTACT
  // ----------------------------------------------------------
  email: "merin.pottananickal@gmail.com",
  address: "Kazhakkoottam, Thiruvananthapuram, Kerala, India",

  // ----------------------------------------------------------
  // 🔗 SOCIAL LINKS
  // Add or remove links as needed. Supported icons:
  // linkedin, github, leetcode, globe (for websites), medium
  // ----------------------------------------------------------
  socialLinks: [
    { icon: "linkedin", label: "LinkedIn", url: "https://linkedin.com/in/merin-rose-tom" },
    { icon: "github", label: "GitHub", url: "https://github.com/MerinRose123" },
    { icon: "leetcode", label: "LeetCode", url: "https://leetcode.com/u/merin_tom" },
    { icon: "medium", label: "Medium", url: "https://merin-rose-tom.medium.com" },
  ],

  // ----------------------------------------------------------
  // 📝 SUMMARY / ABOUT
  // ----------------------------------------------------------
  summary:
    "Senior Application Engineer with 6+ years of experience in backend development, cloud automation, and modernizing large-scale enterprise systems. Skilled in Python, Java, OCI, and CI/CD pipeline engineering with a strong focus on performance optimization and production reliability.",

  // ----------------------------------------------------------
  // 💼 WORK EXPERIENCE
  // ----------------------------------------------------------
  experience: [
    {
      company: "Oracle",
      location: "Thiruvananthapuram, India",
      overallDates: "December 2021 – Present",
      roles: [
        {
          title: "Senior Software Engineer | Python, Java, Cloud",
          dates: "September 2024 – Present",
          bullets: [
            "Enhanced and maintained core features of PeopleSoft Cloud Manager, a critical tool for streamlining the deployment and maintenance of PeopleSoft environments on OCI, serving over 200 customers globally.",
            "Facilitated the integration of Cloud Manager with various Oracle Cloud services, troubleshooting complex customer issues to boost application performance and user experience.",
            "Collaborated with QA and tools teams to streamline test automation workflows, creating automation scripts in shell to improve product quality and development efficiency by 5%.",
          ],
        },
        {
          title: "Software Engineer II | Backend Developer",
          dates: "December 2021 – August 2024",
          bullets: [
            "Architected and implemented innovative cloud solutions on the Oracle Cloud platform using Java, Python, and PeopleCode, and modernized legacy systems.",
            "Managed the full lifecycle of custom image creation and build processes for the Cloud Manager, ensuring consistent, efficient, and reliable environment provisioning.",
            "Integrated third-party solutions, including OpenSearch and Cobol, into existing PeopleSoft applications to ensure seamless data flow and enhanced functionality.",
          ],
        },
      ],
    },
    {
      company: "InApp Information Technologies",
      location: "Thiruvananthapuram, India",
      overallDates: "July 2019 – November 2021",
      roles: [
        {
          title: "Software Engineer | Full Stack Developer",
          dates: "July 2020 – November 2021",
          bullets: [
            "Created a Python-based machine learning system to automatically process digital documents and detect piracy levels, serving as a core component of the Gordian project.",
            "Contributed to the back-end architecture design using Django and Flask, including database modeling with PostgreSQL and asynchronous task management with Celery.",
            "Constructed a responsive front-end using the Angular framework and JavaScript, creating components for data visualization, secure authentication, and robust error handling.",
          ],
        },
        {
          title: "Programmer Trainee | Python Programmer",
          dates: "July 2019 – June 2020",
          bullets: [
            "Managed the full software development lifecycle from client interaction and customer support to code optimization, database design, and debugging.",
            "Gained hands-on experience with Python and frameworks like Django and Flask while contributing to the development of internal systems.",
          ],
        },
      ],
    },
  ],

  // ----------------------------------------------------------
  // 🛠️ SKILLS
  // Group your skills by category
  // ----------------------------------------------------------
  skills: [
    { category: "Programming", items: ["Python", "Java", "JavaScript", "Shell Script"] },
    { category: "Frameworks", items: ["Django", "Flask", "Angular"] },
    { category: "Databases", items: ["Oracle", "PostgreSQL", "MySQL", "MongoDB"] },
    { category: "Cloud", items: ["Oracle Cloud Infrastructure (OCI)"] },
    { category: "DevOps & Tools", items: ["Jenkins", "Docker", "Git", "Puppet", "Nginx", "Terraform"] },
    { category: "System Design", items: ["Microservices", "REST APIs", "Architecture", "CI/CD", "Unit Testing"] },
    { category: "Other", items: ["Data Structures & Algorithms", "Third-Party Integration", "Debugging", "Client Interaction"] },
  ],

  // ----------------------------------------------------------
  // 🚀 PROJECTS
  // ----------------------------------------------------------
  projects: [
    {
      name: "PeopleSoft Cloud Manager",
      dates: "2021 – Present",
      bullets: [
        "Engineered common process automation for resource cleanup and prerequisite installation, resulting in a 10% reduction in developer time and improved performance optimization.",
        "Architected and built a secure password management feature using OCI Vault, centralizing password storage and rotation, resulting in a 30% security enhancement.",
        "Designed and deployed an internal CI/CD pipeline using Jenkins to automate builds and testing framework, accelerating build times by 25% and elevating code quality by 30%.",
      ],
    },
    {
      name: "Gordian – Piracy Detection System",
      dates: "2020 – 2021",
      bullets: [
        "Created an automated PDF report generation system that outputs piracy detection results, boosting user experience by 20% through clear and comprehensive reports.",
        "Analyzed and visualized over 50,000 data points using Python libraries like Pandas, NumPy, and Matplotlib to derive actionable insights into piracy trends.",
      ],
    },
    {
      name: "EventOPS – Internal Event Management System",
      dates: "2019 – 2021",
      bullets: [
        "Constructed and released backend microservices architecture utilizing Django and Flask, optimizing system efficiency by 15% through optimized code and scalable architecture.",
        "Designed and established a comprehensive unit testing framework using Django multi-tenancy architecture, increasing unit test coverage by 30%.",
      ],
    },
  ],

  // ----------------------------------------------------------
  // 🎓 EDUCATION
  // ----------------------------------------------------------
  education: [
    {
      degree: "Bachelor of Technology, Information Technology",
      institution: "GEC Barton Hill",
      location: "Thiruvananthapuram, India",
      dates: "2015 – 2019",
      gpa: "8.93",
      highlights: [
        "University Rank 3 – Kerala Technological University (KTU)",
        "College Class Representative / Leader (2018 – 2019)",
      ],
    },
  ],

  // ----------------------------------------------------------
  // 🏆 ACHIEVEMENTS / AWARDS
  // ----------------------------------------------------------
  achievements: [
    {
      title: "Appreciation for Excellent Performance",
      dates: "June 2021 – November 2021",
      description: "Issued by CEO of InApp for boosting efficiency of EventOPS by 20%.",
    },
    {
      title: "University Women's Chess Team Captain & Champion",
      dates: "July 2017 – July 2018",
      description:
        "Captained a 5-member team and won the university women's chess championship, demonstrating leadership and strategic thinking.",
    },
  ],

  // ----------------------------------------------------------
  // 📜 CERTIFICATIONS
  // ----------------------------------------------------------
  certifications: [
    { name: "OCI 2024 Generative AI Certified Professional", issuer: "Oracle", date: "June 2024" },
    { name: "HackerRank Python Certificate", issuer: "HackerRank", date: "May 2024" },
    { name: "OCI Foundations 2021 Certified Associate", issuer: "Oracle", date: "December 2021" },
  ],
};
