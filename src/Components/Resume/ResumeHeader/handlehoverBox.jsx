import resumeItems from "../../../Config/resumeItemsList";

const handleHoverBox = (
  windowWidth,
  windowHeight,
  currItem,
  posRef,
  setCurrDim
) => {
  if (windowWidth <= 640) {
    return;
  }
  const coordParent = document
    .getElementById("tabs-container")
    .getBoundingClientRect();
  const coordChild = document
    .getElementById(resumeItems[currItem].name)
    .getBoundingClientRect();
  const hoverBox = document.getElementById("hover-box");
  posRef.current = {
    top: coordChild["top"] - coordParent["top"],
    left: coordChild["left"] - coordParent["left"],
  };
  hoverBox.style.transform = `translate(${posRef.current["left"]}px, ${posRef.current["top"]}px)`;
  setCurrDim({ width: coordChild["width"], height: coordChild["height"] });
};

export default handleHoverBox;
