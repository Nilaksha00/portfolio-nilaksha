import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import { title } from "process";

export const links = [
  {
    id: 1,
    name: "About",
    hash: "#about",
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
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: " Feb 2024 - Present",
    skills: ["Javascript", "ReactJS", "EmberJS", "Sass"],
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
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: " March - Nov 2022",
    skills: ["Javascript", "EmberJS", "Sass"],
  },
] as const;

export const educationData = [
  {
    exam: "BSc (Hons) in Information Technology specialized in Software Engineering",
    institute: "SLIIT (Sri Lanka Intitute of Information Technology)",
    year: "2020 - 2024",
    description: "",
  },
  {
    exam: "GCE Advanced Level Examination",
    institute: "Holy Cross College, Gampaha",
    year: "2019",
    description: "Passed the examination in physical science stream.",
  },
] as const;

export const projectsData = [
  {
    name: "dsds",
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    name: "dsds",
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    name: "dsds",
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },

  {
    name: "dsds",
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  {
    name: "Programming Languages",
    list: [
      "JavaScript(ES6+)",
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
      "Node.js",
      "React Native",
      "Tailwind CSS",
      "Styled Components",
      "Framer Motion",
      "MapGL",
      "Konva",
      "Redux",
      "Express",
      "Flask",
    ],
  },
  {
    name: "Backend-end Technologies",
    list: [
      "React",
      "Next.js",
      "Node.js",
      "React Native",
      "Tailwind CSS",
      "Styled Components",
      "Framer Motion",
      "MapGL",
      "Konva",
      "Redux",
      "Express",
      "Flask",
    ],
  },
  {
    name: "Databases",
    list: [
      "React",
      "Next.js",
      "Node.js",
      "React Native",
      "Tailwind CSS",
      "Styled Components",
      "Framer Motion",
      "MapGL",
      "Konva",
      "Redux",
      "Express",
      "Flask",
    ],
  },
  {
    name: "Tools & Platforms",
    list: [
      "React",
      "Next.js",
      "Node.js",
      "React Native",
      "Tailwind CSS",
      "Styled Components",
      "Framer Motion",
      "MapGL",
      "Konva",
      "Redux",
      "Express",
      "Flask",
    ],
  },
  // "HTML",
  // "CSS",
  // "JavaScript",
  // "TypeScript",
  // "React",
  // "Next.js",
  // "Node.js",
  // "Git",
  // "Tailwind",
  // "Prisma",
  // "MongoDB",
  // "Redux",
  // "GraphQL",
  // "Apollo",
  // "Express",
  // "PostgreSQL",
  // "Python",
  // "Django",
  // "Framer Motion",
] as const;
