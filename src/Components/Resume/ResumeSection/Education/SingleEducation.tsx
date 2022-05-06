import { EducationType } from "../../../../Config/educationConfig";

interface Props {
  item: EducationType;
}

const SingleEducation: React.FC<Props> = ({ item }) => {
  return (
    <div
      className={`${
        item.disabled && "hidden"
      } relative flex flex-col justify-between items-start w-full h-full
	 bg-white bg-opacity-60 rounded-lg shadow scrollbar-thin
	 transition-all duration-300 ease-in-out p-[2%] gap-8 group pb-6`}
    >
      <div className="flex lg:flex-col gap-y-4 w-full items-center">
        <img
          src={item.logoUrl}
          alt=""
          className="w-36 square shadow-md 
		rounded-full bg-white p-1"
        />
        <div
          className="flex flex-col justify-center w-full h-full px-4 gap-3 
		text-gray-900"
        >
          <div className="leading-4">
            <h3 className="font-bold text-lg">{item.degree}</h3>
            <h3 className="italic">{item.course}</h3>
            <p className="text-xs text-gray-600  italic">
              ({item.startDate} - {item.endDate})
            </p>
          </div>
          <div>
            <h2 className="font-semibold text-sm">{item.school}</h2>
            <p className="text-xs italic">{item.location}</p>
          </div>
          <div className="text-sm font-bold">
            <p>
              {item.type}: {item.grade}
              {item.type === "Percentage" && "%"}
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-y-2 w-full  items-start lg:px-3">
        <div className="h-1 bg-blue-300  w-[80%] rounded-full" />
        <div className="flex self-stretch gap-2">
          <button
            className="px-4 w-full py-1 bg-blue-500 text-white rounded-md "
            onClick={() => window.open(item.url)}
          >
            More Details
          </button>
        </div>
      </div>
    </div>
  );
};
export default SingleEducation;
