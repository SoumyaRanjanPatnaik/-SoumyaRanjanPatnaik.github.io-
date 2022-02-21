import Education from "./ResumeSection/Education/Education";
import Projects from "./ResumeSection/Projects";
import Skills from "./ResumeSection/Skills/Skills";

const resumeItems: string[] = [
  "Skills",
  "Education",
  "Projects",
  "Achievements",
  "Publications",
];

export const resumeComponents: JSX.Element[] = [
  <Skills />,
  <Education />,
  <Projects />,
  <div />,
  <div />,
];

export default resumeItems;
