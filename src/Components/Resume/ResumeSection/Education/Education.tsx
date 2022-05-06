import education from "../../../../Config/educationConfig";
import SingleEducation from "./SingleEducation";

const Education: React.FC = () => {
  return (
    <div
      className="w-full h-full p-2 gap-5 m-auto overflow-y-scroll 
    scroll-bar-custom"
    >
      <div
        className="grid lg:grid-cols-2 p-1 sm:place-content-center gap-5
       w-full m-auto overflow-y-auto"
      >
        {education.map((item) => (
          <SingleEducation key={item.school} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Education;
