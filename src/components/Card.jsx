import React from "react";
import "../styles/CardStyle.css";

const Card = ({ heading, description }) => {
  return (
    <div className="card">
      <div className="card-heading">{heading}</div>
      <div className="card-description">{description}</div>
    </div>
  );
};

export default Card;
