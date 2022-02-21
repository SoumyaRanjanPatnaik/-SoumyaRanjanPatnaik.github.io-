import { useEffect } from "react";
import { isSkillColorOn, SkillAttributes } from "../../../Config/resumeSkills";

const SingleSkill: React.FC<SkillAttributes> = ({
  Icon,
  skill: skillLevel,
  className,
  name,
  bg_color,
  color,
  bgEnabled,
  iconProps,
}) => {
  const skill_color = color?.split("-").slice(1).join("-");
  useEffect(() => {
    console.log(skill_color);
  });
  return (
    <div
      className="flex p-4 bg-gradient-to-br from-white to-gray-50 
    rounded-xl gap-5 shadow"
    >
      {/* icon  */}
      <div
        className={`flex-shrink-0  h-fit aspect-square ${
        isSkillColorOn && bgEnabled && bg_color
        } p-2 rounded-full shadow-md shadow-gray-400 `}
      >
        <Icon
          className={`text-[3rem] ${
            (isSkillColorOn && color) || "text-gray-700"
          } ${className} `}
        />
      </div>
      <div className="flex flex-1 flex-col justify-center gap-1">
        <span className="font-semibold text-gray-700">{name}</span>
        <ProgressBar skill={skillLevel} />
      </div>
    </div>
  );
};

const ProgressBar: React.FC<Partial<SkillAttributes>> = ({ skill }) => {
  return (
    <div className="flex flex-col text-sm gap-0.5">
      <div className="flex items-center justify-center w-full h-3 bg-gray-200 rounded-full">
        <div
          className="w-8 h-2 "
          style={{
            transform: `scale(${skill},1)`,
          }}
        />
      </div>
      <span>Level: {skill}</span>
    </div>
  );
};

export default SingleSkill;
