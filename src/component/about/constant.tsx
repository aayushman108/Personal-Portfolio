import { BasicDetails } from "./basicDetails";
import { ProfessionalDetails } from "./professionalDetails";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaGitAlt, FaNode, FaReact, FaSass } from "react-icons/fa";
import {
  SiExpress,
  SiJavascript,
  SiNextdotjs,
  SiRedux,
  SiTypescript,
} from "react-icons/si";
import { TiHtml5 } from "react-icons/ti";
import { ExperienceDetails } from "./experienceDetails";

export const ABOUT_ME = [
  {
    id: 1,
    content: (handleNext: () => void) => (
      <BasicDetails handleNext={handleNext} />
    ),
  },
  {
    id: 2,
    content: (handleNext: () => void) => (
      <ProfessionalDetails handleNext={handleNext} />
    ),
  },
  {
    id: 3,
    content: (handleNext: () => void) => <ExperienceDetails />,
  },
];

export const SKILLS = [
  { id: 1, skill: "HTML", icon: "/images/html-5.svg" },
  { id: 2, skill: "CSS & SASS", icon: "/images/sass.svg" },
  { id: 3, skill: "Javascript", icon: "/images/javascript.svg" },
  { id: 4, skill: "Typescript", icon: "/images/typescript.svg" },
  { id: 5, skill: "React", icon: "/images/react.svg" },
  { id: 6, skill: "Next", icon: "/images/next.svg" },
  { id: 10, skill: "Redux-toolkit", icon: "/images/redux-toolkit.svg" },
  { id: 11, skill: "Git & Github & GitLab", icon: "/images/git.svg" },
  { id: 7, skill: "Node", icon: "/images/node-js.svg" },
  { id: 8, skill: "Express", icon: "/images/express.svg" },
  { id: 9, skill: "Postgresql", icon: "/images/postgresql.svg" },
];

export const EXPERIENCE = [
  {
    id: 1,
    designation: "Associate Software Engineer",
    company: "Codniv Innovations Pvt. Ltd.",
    date: "02/2024 - Present",
    location: "Kathmandu",
    link: "https://gitlab.com/aayushman108",
    content: [
      {
        id: "1-1",
        text: "Learned and applied React.js fundamentals, including React Router, Redux-toolkit, Next.js, Framer Motion",
      },
      {
        id: "1-2",
        text: "Contributed to 2 real-life dashboard projects and 2 website projects, gaining practical experience in frontend development",
      },
    ],
  },
  {
    id: 2,
    designation: "Software Engineering Intern",
    company: "Leapfrog Technology",
    date: "11/2023 - 01/2024",
    location: "Charkhal Rd, Kathmandu",
    link: "https://github.com/aayushman108",
    content: [
      {
        id: "2-1",
        text: "Gained valuable experience in frontend (HTML, HTML5 Canvas, CSS, Sass, JavaScript, TypeScript), backend (Node.js, Express), and database (PostgreSQL) technologies",
      },
      {
        id: "2-3",
        text: "Completed assignment projects such as Super Mario Game, Todo App, E-Commerce App, and more to enhance skills",
        link: "https://aayushman108.github.io/Projects-Table",
      },
    ],
  },
];
