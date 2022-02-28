import Education from "../Components/Resume/ResumeSection/Education/Education";
import Projects from "../Components/Resume/ResumeSection/Projects/Projects";
import Skills from "../Components/Resume/ResumeSection/Skills/Skills";

export interface resumeItemType {
  name: string;
  component: JSX.Element;
  disabled?: boolean;
}

const resumeItems: resumeItemType[] = [
  {
    name: "Skills",
    component: <Skills />,
  },
  {
    name: "Education",
    component: <Education />,
  },
  {
    name: "Projects",
    component: <Projects />,
    disabled: true,
  },
  {
    name: "Achievements",
    component: <div />,
    disabled: true,
  },
  {
    name: "Publications",
    component: <div />,
    disabled: true,
  },
];

export default resumeItems;
