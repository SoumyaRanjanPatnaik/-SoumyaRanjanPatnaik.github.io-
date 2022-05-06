import resumeItems from "../../../Config/resumeItemsList";

interface Props {
  current: number;
}

const ResumeSection: React.FC<Props> = ({ current }) => {
  return (
    <div
      id="resume-section"
      className="sm:col-start-4 sm:col-end-13 sm:row-start-1 sm:row-span-2 row-start-2 
      row-end-6 p-2 scroll-bar-custom"
    >
      {resumeItems[current].component}
    </div>
  );
};
export default ResumeSection;
