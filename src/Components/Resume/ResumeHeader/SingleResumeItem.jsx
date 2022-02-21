const SingleResumeItem = ({
  item,
  index,
  setCurrSelected,
  setCurrItem,
  currSelected,
  currItem,
}) => {
  const cssForSectionHeading = (index) => {
    let cssVal = "";
    if (currSelected === index) {
      if (currItem !== index) {
        cssVal +=
          "bg-blue-200 text-gray-700 sm:shadow-lg shadow-blue-200/30 duration-[400ms]";
      } else {
        cssVal +=
          "bg-blue-600 text-white shadow-lg shadow-blue-600/40 hover:shadow-blue-400/60 ";
      }
    }
    if (currItem !== currSelected && currItem === index) cssVal += "text-white";
    return cssVal;
  };
  return (
    <h3
      className={`block rounded cursor-pointer text-xs sm:text-sm w-24 px-3 sm:px-1 duration-300
							sm:mx-0 sm:w-full text-center py-1 z-10 transition select-none hover:bg-blue-400 
							sm:hover:bg-transparent duration ${cssForSectionHeading(index)} `}
      id={item}
      onClick={() => setCurrSelected(index)}
      onMouseEnter={(e) => setCurrItem(index)}
      onMouseLeave={() => setCurrItem(currSelected)}
      style={{ minWidth: "4rem" }}
    >
      {item}
    </h3>
  );
};

export default SingleResumeItem;
