import { useState } from "react";
import "animate.css";
import "../Styling/TimelineCard.css";

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
      <div className="card timeline-card">
        <div className="card-body">
          <p className="card-text">{cardBody}</p>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => setVisibility(1)}
          >
            Front
          </button>
        </div>
      </div>
    );
  return (
    <div className="card">
      <img
        className="card-img-top timeline-card-img"
        src={cardImg}
        alt="picture of logo"
      />
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
