import { useEffect, useState } from "react";
import {
  isSkillColorOn,
  SkillAttributes,
} from "../../../../Config/resumeSkills";

const SingleSkill: React.FC<SkillAttributes> = ({
  Icon,
  skill: skillLevel,
  className,
  name,
  bg_color,
  color,
  bgEnabled,
  bar_color,
}) => {
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
        <ProgressBar skill={skillLevel} color={color} bar_color={bar_color} />
      </div>
    </div>
  );
};

const ProgressBar: React.FC<Partial<SkillAttributes>> = ({
  skill,
  color,
  bar_color,
}) => {
  const [progressVal, setProgressVal] = useState(-100);
  useEffect(() => {
    setTimeout(() => {
      setProgressVal(-100 + ((skill - 2) * 100) / 8);
    }, 50);
  }, []);
  return (
    <div className="flex flex-col text-sm gap-0.5">
      <div
        className="relative flex items-center justify-center w-full h-3 bg-gray-200
       rounded-full overflow-hidden "
      >
        <div
          id="progress"
          className={`absolute inset-0 z-50 rounded-full ${
            bar_color || "bg-green-400"
          } transition-all duration-1000 ease-in-out`}
          style={{
            transform: `translateX(${progressVal}%)`,
          }}
        />
      </div>
      <span>Level: {skill}</span>
    </div>
  );
};

export default SingleSkill;
