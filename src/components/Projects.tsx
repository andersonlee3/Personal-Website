import React from "react";
import "./Projects.css";
const Projects = () => {
  return (
    <div>
      <h1 className="Projects">Projects:</h1>
      <h2 className="title">Fitness App</h2>
      <iframe
        className="video"
        src="https://drive.google.com/file/d/15OkS9NDT4sdIKlR66XLqrpTq3c2kCpio/preview"
        width="640"
        height="480"
        allow="autoplay"
      ></iframe>
      <div className="captions">
        <h3 className="dateCreated">
          {" "}
          Date: This project was finished in April 2019, my junior year of high
          school.{" "}
        </h3>
        <h3 className="Inspiration">
          Inspiration: I am an athlete. When thinking of a project idea, I was
          motivated to create a fitness app since that I something I would use.
        </h3>
      </div>

      <h3 className="inProgress">IN PROGRESS...</h3>
    </div>
  );
};

export default Projects;
