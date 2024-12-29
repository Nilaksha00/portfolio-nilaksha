import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import { title } from "process";
import { link } from "fs";

export const links = [
  {
    id: 1,
    name: "Profile",
    hash: "#profile",
  },
  {
    id: 2,
    name: "Work Experience",
    hash: "#experience",
  },
  {
    id: 3,
    name: "Education",
    hash: "#education",
  },
  {
    id: 4,
    name: "Tech Stack",
    hash: "#techstack",
  },
  {
    id: 5,
    name: "Projects",
    hash: "#projects",
  },

  // {
  //   id: 6,
  //   name: "Certificates & Awards",
  //   hash: "#awards",
  // },
  // {
  //   id: 7,
  //   name: "Contact",
  //   hash: "#contact",
  // },
] as const;

export const experiencesData = [
  {
    company: "TS Technologies",
    title: "Associate Software Engineer",
    location: "Colombo, Sri Lanka",
    description:
      "Responsible for developing and maintaining the frontend of several high-impact applications, including a digital signage solution utilized by leading companies in the country, a CRM system, and others. Manage all aspects of front-end development, ensuring a seamless user experience, optimal performance, and responsive designs.",
    icon: React.createElement(LuGraduationCap),
    date: " Feb 2024 - Present",
    skills: [
      "Javascript",
      "ReactJS",
      "KanvaJS",
      "ChartJS",
      "Reactstrap",
      "MUI",
      "Bootstrap",
      "HTML & CSS",
    ],
    link: "https://tstpl.com/digital-signage-tstechnologies/",
  },
  // {
  //   company: "Voxitec",
  //   title: "Associate Software Engineer",
  //   location: "Colombo, Sri Lanka",
  //   description:
  //     "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
  //   icon: React.createElement(CgWorkAlt),
  //   date: " April 2023 - February 2024 ",
  // },
  {
    company: "DirectFN",
    title: "Intern Software Engineer",
    location: "Colombo, Sri Lanka",
    description:
      "Worked with the development team to contribute to fintech applications designed to support merchants and stakeholders in making informed decisions. Focused on maintaining application performance by resolving bugs, implementing new features, and ensuring overall system stability.",
    icon: React.createElement(FaReact),
    date: " March - Nov 2022",
    skills: ["Javascript", "EmberJS", "Sass", "HTML"],
    link: "https://directfn.sa/en/pro11",
  },
] as const;

export const educationData = [
  {
    exam: "BSc (Hons) in Information Technology specialized in Software Engineering",
    institute: "SLIIT (Sri Lanka Institute of Information Technology)",
    year: "2020 - 2024",
    description:
      "Graduated with a <b>Second Class Lower Division</b> (CGPA > 3.0) and earned <b>Dean's List recognition</b> in the year 2022 for outstanding academic performance.",
  },
  {
    exam: "GCE Advanced Level Examination",
    institute: "Holy Cross College, Gampaha",
    year: "2019",
    description:
      "Passed the GCE A/L examination, with <b>Combined Mathematics</b>, <b>Physics</b>, and <b>ICT</b>.",
  },
] as const;

export const projectsData = [
  {
    name: "Eye Care",
    title: "Final Year Research Project",
    description:
      "Developed a mobile application using a Deep Learning approach to detect eye diseases using retinal images. The system identifies conditions such as diabetic retinopathy and age-related macular degeneration, to aid eye specialists in making accurate and reliable diagnoses.",
    tags: [
      "Python",
      "Deep Learning",
      "Image Processing",
      "Tensorflow",
      "OpenCV",
      "EfficientNet",
      "Flask",
      "Javascript",
      "React Native",
      "Firebase",
      "Google Colab",
    ],
    imageUrl: corpcommentImg,
  },
  {
    name: "Blog.",
    title: "Blogging Platform",
    description:
      "Secured & responsive web application where users can manage thier blog posts. Techniques such as JWT, protected routes, input validations & password hashing is utilized.",
    tags: [
      "Nextjs",
      "TypeScript",
      "Tailwind CSS",
      "Nodejs",
      "Express",
      "JWT",
      "MongoDB",
      "BCrypt",
    ],
    imageUrl: rmtdevImg,
  },
  {
    name: "",
    title: "Railway Booking Platform",
    description:
      "An android application to view train schedules, reserve train seats and manage existing reservations.",
    tags: ["Java", "C#", "Android Studio", ".NET Core", "MongoDB"],
    imageUrl: wordanalyticsImg,
  },
  {
    name: "",
    title: "Inventory-Order Management Suite",
    description:
      "A web app developed to help a client with a boutique to manage inventory and orders efficiently with a minimal interface.",
    tags: ["Javascript", "React", "Reactstrap", "Firebase"],
    imageUrl: wordanalyticsImg,
  },
  {
    name: "Handyman",
    title: "Handyman Service Application",
    description:
      "A web application developed to offer handyman services for the clients and post thier services. This application primarily focus on improving the security concerns such as Role-based access control, OAuth, input sanitizing and validation, protected routes, sensitive data hashing, user sessions and exception handling.",
    tags: ["Javascript", "React", "Redux", "MUI", "Firebase"],
    imageUrl: wordanalyticsImg,
  },
  {
    name: "DD Footwear ",
    title: " E-commerce Application",
    description:
      "An e-commerce and inventory management system, enabling B2B and B2C sales, stock tracking, and order management",
    tags: [
      "Typescript",
      "Nextjs",
      ".NET Core",
      "MongoDB",
      "Tailwind CSS",
      "Jest",
      "axios",
    ],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  {
    name: "Programming Languages",
    list: [
      "JavaScript (ES6+)",
      "TypeScript",
      "Java",
      "C#",
      "Python",
      "HTML",
      "CSS",
      "Sass",
    ],
  },
  {
    name: "Front-end Technologies",
    list: [
      "React",
      "Next.js",
      "React Native",
      "Android",
      "Redux",
      "Tailwind CSS",
      "GSAP",
      "Framer Motion",
      "Konva",
      "Mapbox GL",
      "Styled Components",
    ],
  },
  {
    name: "Backend-end Technologies",
    list: ["Node.js", ".NET", "Express", "Flask"],
  },
  {
    name: "Databases",
    list: ["MongoDB", "MySQL", "SQLite", "Firebase"],
  },
  {
    name: "Tools & Platforms",
    list: [
      "Git",
      "Bitbucket",
      "Postman",
      "Webpack",
      "Babel",
      "Jest",
      "Figma",
      "VS Code",
      "IntelliJ",
      "Android Studio",
      "Jira",
    ],
  },
] as const;
