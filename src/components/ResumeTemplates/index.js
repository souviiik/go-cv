import Cards from "./Cards";

// import { useSelector } from "react-redux";
const templates = [
  {
    name: "Candid",
    image: "candid",
    path: "candid",
  },
  // {
  //   name: "Yellow",
  //   image: "yellow",
  //   path: "yellow",
  // },
  // {
  //   name: "Elegant",
  //   image: "elegant",
  //   path: "elegant",
  // },
  // {
  //   name: "Corporate 1",
  //   image: "corp1",
  //   path: "corporate-1",
  // },
];

const ResumeTemplates = () => {
  // const details = useSelector(({ details }) => details);
  return (
    <div className="container">
      <h2 className="title is-size-2">Select a Resume Template</h2>
      <div className="columns">
        {templates.map((template) => (
          <Cards {...template} key={template.path} />
        ))}
      </div>
    </div>
  );
};

export default ResumeTemplates;
