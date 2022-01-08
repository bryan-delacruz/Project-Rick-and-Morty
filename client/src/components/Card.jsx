import React from "react";
import "../css/Card.css";

import { Link } from "react-router-dom";

const Card = ({ name, image, id }) => {
  return (
    <>
      <Link to={`/character
      /${id}`} style={{ textDecoration: "none" }}>
        <div className="card">
          <img src={image} alt="avatar" />
          <h2>{name}</h2>
        </div>
      </Link>
    </>
  );
};

export default Card;
