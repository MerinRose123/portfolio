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
  title: "Senior Software Engineer | Backend & Cloud Engineer",
  profileImage: "profile.png", // Place your photo in this folder and update the filename


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
    "Senior Application Engineer with 7+ years of experience in backend development, cloud automation, and modernizing large-scale enterprise systems. Skilled in Python, Java, OCI, and CI/CD pipeline engineering with a strong focus on performance optimization and production reliability.",

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
          title: "Senior Software Engineer | Backend & Cloud Engineer",
          dates: "September 2024 – Present",
          bullets: [
            "Revamped backend features of a distributed infrastructure management tool, using Python and Java to power lifecycle management of enterprise environments for 200+ customers globally.",
            "Architected a secure credential management framework leveraging Cloud Vault, centralizing secrets storage and rotation, resulting in a 30% reduction in manual credential administration effort and strengthening platform security.",
            "Solely owned and transformed CI/CD build infrastructure using Jenkins, engineering resource cleanup pipelines that reduced cloud costs by 25% and ensured nightly product automation remained available for release cycles.",
            "Developed AI-powered workflows for debugging, log analysis, database inspection, and documentation generation, improving developer productivity by 30% across Java and Python codebases.",
          ],
        },
        {
          title: "Software Engineer II | Backend Developer",
          dates: "December 2021 – August 2024",
          bullets: [
            "Orchestrated the integration of core Oracle Cloud services (Compute, Storage, Databases, Auto Scaling, Exadata) and third-party solutions (Terraform, OpenSearch), while building resilient REST APIs to optimize data flow and service interoperability.",
            "Led cross-team collaboration with stakeholders to deliver cloud features (password management, instance cloning, image handling) and cross-platform integrations; owned full lifecycle from FDD/TDD creation to production rollout.",
            "Embedded OpenSearch cluster architectures into custom cloud environments used by 200+ enterprise customers, enabling node clustering for enhanced scalability and fault tolerance across large-scale enterprise workflows.",
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
          dates: "July 2019 – November 2021",
          bullets: [
            "Designed a scalable multi-tenant backend application on AWS EC2 using Python, Django, Flask, PostgreSQL, and Celery, establishing microservice-based patterns that improved operational efficiency by 15%.",
            "Built EventOPS, an event management platform featuring rule-based triggers, scheduling engines using Celery and Redis, automated notifications and role-based access control, reducing manual event-management effort by 20%.",
            "Implemented a machine learning-driven system using Pandas, NumPy, and Matplotlib, processing 50,000+ records to surface actionable insights — visualized via a secure Angular dashboard.",
            "Engineered an asynchronous Celery pipeline to generate PDF reports from 16GB+ datasets under memory constraints, leveraging a shared in-memory LRU Cache to eliminate redundant loads - improving user experience by 20%.",
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
    { category: "DevOps & Tools", items: ["Jenkins", "Docker", "Git", "Puppet", "Nginx", "Terraform"] },
    { category: "System Design", items: ["Microservices", "REST APIs", "Architecture", "CI/CD", "Unit Testing", "Oracle Cloud Infrastructure (OCI)"] },
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
        "Engineered an asynchronous Celery pipeline to generate PDF reports from 16GB+ datasets under memory constraints, leveraging a shared in-memory LRU Cache to eliminate redundant loads.",
        "Analyzed and visualized over 50,000 data points using Python libraries like Pandas, NumPy, and Matplotlib to derive actionable insights into piracy trends.",
        "Constructed a responsive front-end using the Angular framework and JavaScript, creating components for data visualization, secure authentication, and robust error handling."
      ],
    },
    {
      name: "EventOPS – Internal Event Management System",
      dates: "2019 – 2021",
      bullets: [
        "Built EventOPS, an event management platform featuring rule-based triggers, scheduling engines using Celery and Redis, automated notifications and role-based access control, reducing manual event-management effort by 20%.",
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
        "University Rank 3 (Top 0.1% of cohort) – Kerala Technological University (KTU)",
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

  // ----------------------------------------------------------
  // 🎯 HOBBIES / INTERESTS
  // Add your hobbies with an emoji icon and a short description.
  // Leave the array empty [] to hide this section entirely.
  // ----------------------------------------------------------
  hobbies: [
    { icon: "🏸", title: "Badminton", description: "My go-to sport for staying fit, having fun, and unwinding after a long day of coding!" },
    { icon: "♟️", title: "Chess", description: "As a university rank holder and team captain, chess sharpens my strategic thinking." },
    { icon: "🎨", title: "Drawing", description: "Drawing allows me to express my creativity and relax through artistic expression." },
  ],
};
