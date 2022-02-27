import {
  SiArduino,
  SiCplusplus,
  SiExpress,
  SiJavascript,
  SiMongodb,
  SiNestjs,
  SiPostgresql,
  SiPython,
  SiTypescript,
} from "react-icons/si";
import { FaJava, FaReact, FaRust } from "react-icons/fa";
import { ImHtmlFive, ImTree } from "react-icons/im";
import { IoLogoCss3 } from "react-icons/io";
import { IconBaseProps, IconType } from "react-icons/lib";
export interface SkillAttributes {
  Icon: IconType;
  iconProps?: IconBaseProps;
  name: string;
  skill: number;
  className?: string;
  bg_color?: string;
  color?: string;
  bgEnabled?: boolean;
  bar_color?: string;
}

export const isSkillColorOn: boolean = true;
export const isProgressColorOn: boolean = true;

export const resumeSkills: SkillAttributes[] = [
  {
    Icon: SiCplusplus,
    name: "C++",
    skill: 8.7,
    color: "text-blue-700",
    bar_color: "bg-blue-700",
    className: "scale-105",
  },
  {
    Icon: FaJava,
    name: "Java",
    skill: 6.2,
    color: "text-red-600",
    bar_color: "bg-red-600",
  },
  {
    Icon: FaRust,
    name: "Rust",
    skill: 6.8,
    color: "text-red-700",
    bar_color: "bg-red-700",
    className: "scale-110",
  },
  {
    Icon: FaReact,
    name: "ReactJs",
    skill: 9.3,
    color: "text-cyan-500",
    bar_color: "bg-cyan-500",
  },
  {
    Icon: ImTree,
    name: "Data Structures and Algorithms",
    skill: 8.5,
    color: "text-white",
    bar_color: "bg-purple-600",
    bgEnabled: true,
    bg_color: "bg-purple-600",
    className: "scale-75",
  },
  {
    Icon: ImHtmlFive,
    color: "text-orange-600",
    bar_color: "bg-orange-600",
    name: "HTML",
    skill: 7.3,
    className: "p-1",
  },
  {
    Icon: IoLogoCss3,
    color: "text-blue-600",
    bar_color: "bg-blue-600",
    name: "CSS",
    skill: 7.8,
  },
  {
    Icon: SiJavascript,
    name: "JavaScript",
    skill: 8.3,
    color: "text-yellow-400",
    bar_color: "bg-yellow-400",
    className: "bg-gray-700 scale-75",
  },
  {
    Icon: SiTypescript,
    name: "TypeScript",
    skill: 8.1,
    color: "text-blue-500",
    bar_color: "bg-blue-500",
    className: "scale-[0.8] shadow-lg",
  },
  {
    Icon: SiPython,
    name: "Python",
    skill: 8.0,
    bgEnabled: true,
    // color: "text-[rgb(255,230,10)]",
    color: "text-yellow-300",
    bar_color: "bg-yellow-500",
    bg_color: "bg-blue-600",
  },
  {
    Icon: SiExpress,
    name: "ExpressJs",
    skill: 8.4,
    color: "text-white",
    bar_color: "bg-gray-700",
    bgEnabled: true,
    bg_color: "bg-gray-700",
  },
  {
    Icon: SiPostgresql,
    name: "PostgreSQL",
    skill: 7.9,
    color: "text-gray-200",
    bar_color: "bg-blue-700",
    bgEnabled: true,
    bg_color: "bg-blue-700",
    className: "p-2 scale-105",
  },
  {
    Icon: SiMongodb,
    name: "MongoDB",
    skill: 7.4,
    color: "text-green-700",
    bar_color: "bg-green-700",
  },
  {
    Icon: SiNestjs,
    name: "NestJs",
    skill: 7.9,
    color: "text-red-700",
    bar_color: "bg-red-700",
  },
  {
    Icon: SiArduino,
    name: "Arduino",
    skill: 8.1,
    color: "text-teal-500",
    bar_color: "bg-teal-500",
  },
];
