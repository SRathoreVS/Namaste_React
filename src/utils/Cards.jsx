import React from "react";
import "../scss/Card.scss";

const Cards = ({ photos }) => {
  const { title, description, updated_at, created_at, url } = photos;

  return (
    <div className="card-container">
      <img src={url} alt={title} width="300" />
      <div className="decription">
        <h2>{title}</h2>
        <p>{description}</p>
        <p>
          <b>Updated:</b> {new Date(updated_at).toLocaleDateString()}
        </p>
        <p>
          <b>Created:</b> {new Date(created_at).toLocaleDateString()}
        </p>
      </div>
    </div>
  );
};

export default Cards;
