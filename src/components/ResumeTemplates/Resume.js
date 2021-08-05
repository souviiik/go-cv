import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

export default function Resume() {
  const details = useSelector(({ details }) => details);
  const { name } = useParams();

  return (
    <div className="container">
      <Link to="/resume-templates">&lt; back</Link>
      <h2 className="title is-size-2">
        {name.replace("-", " ").toUpperCase()}
      </h2>
      <p>Resume preview will go here</p>
      <pre>{JSON.stringify(details, null, 4)}</pre>
      <br />
      <button className="button is-link">Print</button>
    </div>
  );
}
