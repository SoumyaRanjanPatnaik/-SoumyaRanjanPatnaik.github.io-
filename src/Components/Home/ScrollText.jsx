export const ScrollText = ({ text, forward, color }) => {
  let elements = [text, text, text, text];
  return (
    <div>
      <h2
        className={`relative  opacity-0 text-8xl text-gray-${color}  whitespace-nowrap font-mono font-bold text__hollow p-5 animate-move-${
          forward ? "forward" : "reverse"
        } inline-block capitalize m-0`}
      >
        {elements.map((text_val, index) => {
          return (
            <span key={index} className="inline-block animate-pulse mx-24">
              {text_val}
            </span>
          );
        })}
      </h2>
    </div>
  );
};
export default ScrollText;
