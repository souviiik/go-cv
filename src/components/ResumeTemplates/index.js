import { useSelector } from "react-redux";

const ResumeTemplates = () => {
  const details = useSelector(({ details }) => details);
  return (
    <div className="container">
      <h2 className="title is-size-2">Select a Resume Template</h2>
      <pre>{JSON.stringify(details, null, 4)}</pre>
    </div>
  );
};

export default ResumeTemplates;
