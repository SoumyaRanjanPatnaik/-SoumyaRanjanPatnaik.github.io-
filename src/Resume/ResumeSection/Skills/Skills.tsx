import { HTMLAttributes } from "react";
import { resumeSkills } from "../../../Config/resumeSkills";
import SingleSkill from "./SingleSkill";

interface Props extends HTMLAttributes<HTMLDivElement> {}

const Skills: React.FC<Props> = ({ ...rest }) => {
  return (
    <div
      className="grid grid-cols-1 lg:grid-cols-2 h-full w-full gap-4 bg-opacity-80
	overflow-y-auto scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-transparent scale-95 pr-6"
      {...rest}
    >
      {resumeSkills.map((skill, index) => (
        <SingleSkill key={index} {...skill} />
      ))}
    </div>
  );
};

export default Skills;
