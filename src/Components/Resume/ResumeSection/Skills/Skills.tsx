import { HTMLAttributes } from "react";
import { resumeSkills } from "../../../../Config/resumeSkills";
import SingleSkill from "./SingleSkill";

interface Props extends HTMLAttributes<HTMLDivElement> {}

const Skills: React.FC<Props> = ({ ...rest }) => {
  return (
    <div
      className="relative grid grid-cols-1 lg:grid-cols-2 h-full w-full gap-4 bg-opacity-80
	overflow-y-auto scale-95 overflow-x-hidden px-1 py-0.5 scrollbar-custom"
      {...rest}
    >
      {resumeSkills.map((skill, index) => (
        <SingleSkill key={index} {...skill} />
      ))}
    </div>
  );
};

export default Skills;
