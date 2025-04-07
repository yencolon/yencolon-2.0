// Set any item to undefined to remove it from the site or to use the default value

import type { start } from "repl";

export const GLOBAL = {
  // Site metadata
  username: "Yen Colon",
  rootUrl: "https://yencolon.com",
  shortDescription: "Software Engineer",
  longDescription: `Software Engineer with over 5 years of experience in Full-stack development using Java, Kotlin, JavaScript, and
TypeScript. I have successfully contributed to diverse projects within the Financial and AI sectors, working
collaboratively in both small and medium-sized teams. My expertise lies in designing scalable solutions,
optimizing system performance, and delivering high-quality code. I am highly adaptable, deeply passionate
about solving complex problems, and thrive in team-oriented environments`,

  // Social media links
  githubProfile: "https://github.com/yencolon",
  twitterProfile: "https://twitter.com/yencolon",
  linkedinProfile: "https://www.linkedin.com/in/yencolon/",

  // Common text names used throughout the site
  employmentHistoryName: "Employment History",
  projectsName: "Projects",
  viewAll: "View All",

  // Common descriptions used throughout the site
  noArticles: "No featured articles yet.",
  noProjects: "No featured projects yet.",


  // Profile image
  profileImage: "me.jpg",

  // Menu items
  menu: {
    home: "/",
    employmentHistory: "/employment-history",
    projects: "/projects",
  },

  // Employment history

  employmentHistory: [
    {
      title: "Software Engineer",
      company: "Wird.",
      description: "",
      bullets: [
        "Microservices Development: Led the creation, review, design, and testing of microservices primarily using Kotlin and Java, ensuring robust and scalable backend architecture.",
        "Cloud Services Management: Utilized Azure cloud services to create functions, queues, and configurations, leveraging cloud technologies to enhance the application's efficiency and performance.",
        "Frontend Component Development: Developed, reviewed, and tested frontend components using technologies like React, Styled Components, and other modern tools, focusing on user experience and visual aesthetics.",
        "Team Leadership: Led the reactive team, overseeing bug reviews and client requirements. Prioritized tasks, managed timelines, and ensured efficient resolution of issues, fostering a collaborative and productive work environment.",
      ],
      startDate: "2021-05",
      endDate: "2024-08",
      city: "Santiago",
      country: "Chile",
      stack: ["Java", "Kotlin", "Spring Boot", "Ktor", "React", "TypeScript", "Azure", "Serverless", "MySql"],
    },
    {
      title: "Full Stack Developer",
      company: "ePayco",
      description: "",
      bullets: [
        "Successfully developed and integrated new components and features into the e-commerce platform, contributing to an enhanced user experience and increased customer satisfaction.",
        "Created a homepage from scratch by integrating other existing products within the company.",
        "I participated in collaborative planning meetings, ensuring coordination between development activities and business objectives.",
      ],
      startDate: "2021-01",
      endDate: "2021-06",
      city: "Medellin",
      country: "Colombia",
      stack: ["React", "Laravel", "Express", "MySql", "JavaScript", "TypeScript"],
    },
    {
      title: "Full Stack Developer",
      company: "Freelance",
      description: "During this period, I primarily worked as a freelancer for specific clients. Here are some of the things I did:",
      bullets: [
        "Developed a platform to create and customize customer service and sales bots using the Telegram API and BotMan with PHP and Laravel.",
        "Created a complete API Rest to manage the platform, including users, clients, bots, and admins.",
        "Created a platform for digital menus for local restaurants using React and Tailwind.",
        "Developed a mobile application for Event Planner Agency Management App, using technologies such as React Native and Express.",
        "Actively participated in client meetings, understanding their needs, and delivering tailored software solutions.",
        "Managed end-to-end software development processes, from conceptualization to deployment, ensuring client satisfaction and project success.",
      ],
      startDate: "2017-08",
      endDate: "2020-12",
      city: "Puerto La Cruz",
      country: "Venezuela",
      stack: ["React Native", "Angular", "Laravel", "Node", "Express", "MySql", "MongoDB", "Tailwind"],
    }
  ],

  // Projects
  projects: [
    {
      title: "Project 1",
      description: "Description of Project 1",
    }
  ]
};
