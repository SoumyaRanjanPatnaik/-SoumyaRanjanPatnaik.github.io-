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
        cssVal += "bg-blue-200 text-gray-700 ";
      } else {
        cssVal += "bg-blue-500 text-white ";
      }
    }
    if (currItem !== currSelected && currItem === index) cssVal += "text-white";
    return cssVal;
  };
  return (
    <h3
      className={`block rounded cursor-pointer text-xs sm:text-base w-24 px-3 sm:px-1
							sm:mx-0 sm:w-full text-center py-1 z-10 transition select-none hover:bg-blue-400 
							sm:hover:bg-transparent ${cssForSectionHeading(index)} `}
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
