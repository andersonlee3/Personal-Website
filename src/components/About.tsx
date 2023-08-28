import React from "react";
import "./About.css";
import me from "../assets/me.png";
const About = () => {
  return (
    <div>
      <h1 className="myName">Anderson Lee</h1>
      <h2 className="job">Software Engineer</h2>
      <h3 className="contactLinks">
        <p>
          Email: <a href="mailto:andlee523@gmail.com">andlee523@gmail.com</a>{" "}
          LinkedIn:
          <a
            className="liLink"
            href="https://www.linkedin.com/in/anderson-lee-5502a4221/"
            target="_blank"
          >
            {" "}
            <img
              className="liLogo"
              src="https://content.linkedin.com/content/dam/me/brand/en-us/brand-home/logos/In-Blue-Logo.png.original.png"
              width={40}
              alt="LinkedIn Logo"
            />
          </a>
          Github:{" "}
          <a href="https://github.com/andersonlee3" target="_blank">
            <img
              src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
              alt="GitHub Logo"
              width={45}
            />
          </a>
        </p>
      </h3>
      <div>
        <div className="aboutMe">
          <img className="me" src={me} alt="A picture of Anderson" />{" "}
          <h4 className="meHeading">About Me:</h4>
          <p className="intro">
            Hello, my name is Anderson Lee. Welcome to my personal website! Here
            you will learn all about me - such as how I got to where I am today,
            my experience, and even my projects.
          </p>
          <p className="cs">
            In high school, I saw an AP CS course. Intrigued, I opted in to take
            it. Ever since then, my interest in CS has skyrocketed. As college
            approached, I already knew what my major was going to be.
          </p>
          <p className="inspo">
            Working towards my Computer Science Bachelor of Science degree has
            made me come to a realization that CS is intertwined in almost every
            aspect of our lives here in the US. Fascinated, I am trying to
            understand this vast, complex field to its very core. To do this,
            internships are the first step. Now, I'll show you my worth (if
            there is any) so that you'll contact me for an interview.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
