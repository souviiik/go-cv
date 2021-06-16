import React from "react";
import H2 from "./common/H2";

export default function Education() {
  return (
    <div>
      <H2 text="Education" />
      <ul>
        <li>Course / Degree</li>
        <li>School / University</li>
        <li>Score</li>
        <li>Passing Year</li>
      </ul>
      <button className="button is-success"><i className="fas fa-plus"></i> Add</button>
    </div>
  );
}
