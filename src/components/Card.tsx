import React from "react";
import "animate.css";
import "./Card.css";

const Card = () => {
  let visibility = 1;

  if (visibility === 0)
    return (
      <div className="card">
        <div className="card-body">This is some text within a card body.</div>
      </div>
    );
  return (
    <div className="card">
      <img
        className="card-img-top"
        src="https://cdn2.webdamdb.com/220th_sm_2vAk1yx1ZCub.jpg?1646347048"
        alt="picture of UCSB"
      />
      <div className="card-body">
        <h5 className="card-title">UCSB</h5>
        <p className="card-text">
          Computer Science Bachelor of Science (2021-2025)
        </p>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => (visibility = 0)}
        >
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Card;
