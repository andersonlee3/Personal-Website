import React, { useState } from "react";
import "animate.css";
import "./Card.css";

interface Props {
  cardBody: string;
  cardImg: string;
  cardCaption: string;
  title: string;
}

const Card = ({ cardBody, cardCaption, cardImg, title }: Props) => {
  const [visibility, setVisibility] = useState(1);

  if (visibility === 0)
    return (
      <div className="card">
        <div className="card-body">{cardBody}</div>
      </div>
    );
  return (
    <div className="card">
      <img className="card-img-top" src={cardImg} alt="picture of logo" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{cardCaption}</p>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => setVisibility(0)}
        >
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Card;
