import React from "react";
import { useParams } from "react-router-dom";

export default function Resume() {
  const { name } = useParams();

  return (
    <div className="container">
      <h2 className="title is-size-2">
        {name.replace("-", " ").toUpperCase()}
      </h2>
      <p>Resume preview will go here</p>
      <br />
      <br />
      <button className="button is-link">Print</button>
    </div>
  );
}
