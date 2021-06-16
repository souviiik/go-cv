import React from "react";

export default function H2({ text }) {
  return (
    <>
      <h2 class="title is-2">{text}</h2>
      <hr className="my-5" />
    </>
  );
}
