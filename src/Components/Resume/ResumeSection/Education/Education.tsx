import education from "../../../../Config/educationConfig";
import SingleEducation from "./SingleEducation";

const Education: React.FC = () => {
  return (
    <div className="w-full p-2 gap-5 overflow-y-auto">
      <div className="grid lg:grid-cols-2 gap-5 w-full h-full">
        {education.map((item) => (
          <SingleEducation key={item.school} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Education;
