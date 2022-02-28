import TabsContainer from "./TabsContainer";

const ResumeHeader = ({ selected, item }) => {
  return (
    <div
      className="flex flex-col justify-center py-2 mb-2 overflow-hidden sm:mb-0 
		  sm:pb-28 sm:col-start-1 sm:col-end-4 sm:row-start-1 sm:row-end-3 bg-gradient-to-b 
      from-white to-blue-50 bg-opacity-80 sm:px-4 md:px-7 sm:py-12 min-h-[100px]"
    >
      <div className="flex flex-col items-center w-full">
        <h2 className="w-full text-lg font-bold text-center text-gray-700 sm:text-2xl">
          Resume
        </h2>
        {/*Underline*/}
        <div className="w-1/5 h-0 border-4 border-blue-300 rounded-lg sm:w-1/2" />
      </div>

      <TabsContainer
        {...{
          selected,
          item,
        }}
      />
    </div>
  );
};

export default ResumeHeader;
