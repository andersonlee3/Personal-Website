import React from "react";
import "./Journey.css";
import Button from "./Button";
import Card from "./Card";

const Journey = () => {
  return (
    <div>
      <h1 className="journeyH"> My Journey:</h1>
      <Card></Card>
      <h2 className="inProgress">IN PROGRESS...</h2>
    </div>
  );
};

export default Journey;
