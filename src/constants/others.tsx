import { FaReact, FaNodeJs, FaFigma, FaGitAlt, FaPython } from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiMongodb,
  SiVite,
  SiFramer,
  SiFirebase,
} from "react-icons/si";

export const skills = [
  { name: "React", icon: <FaReact />, level: 95 },
  { name: "TypeScript", icon: <SiTypescript />, level: 90 },
  { name: "Next.js", icon: <SiNextdotjs />, level: 88 },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, level: 92 },
  { name: "Framer Motion", icon: <SiFramer />, level: 80 },
  { name: "Vite", icon: <SiVite />, level: 85 },

  { name: "Node.js", icon: <FaNodeJs />, level: 88 },
  { name: "Python", icon: <FaPython />, level: 55 },
  // { name: "PostgreSQL", icon: <SiPostgresql />, level: 82 },
  { name: "MongoDB", icon: <SiMongodb />, level: 80 },
  // { name: "GraphQL", icon: <SiGraphql />, level: 70 },
  { name: "Firebase", icon: <SiFirebase />, level: 85 },

  { name: "Figma", icon: <FaFigma />, level: 87 },
  { name: "Git", icon: <FaGitAlt />, level: 93 },
  // { name: "Docker", icon: <FaDocker />, level: 72 },
];
