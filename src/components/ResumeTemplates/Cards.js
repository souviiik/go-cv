import React from "react";
import { Link } from "react-router-dom";

import * as images from "../../assets";

export default function Cards({ name, path, image }) {
  console.log(`images`, images);
  return (
    <div className="column">
      <div className="card">
        <div className="card-image">
          <figure className="image">
            <img src={images[image]} alt={`${name} image`} />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">{name}</p>
            </div>
          </div>
          <Link className="button is-link is-fullwidth" to={`/resume/${path}`}>
            Select
          </Link>
        </div>
      </div>
    </div>
  );
}
