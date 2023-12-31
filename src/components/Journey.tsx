import React from "react";
import "./Journey.css";
import Button from "./Button";
import Card from "./Card";

const Journey = () => {
  return (
    <div>
      <h1 className="journeyH"> My Journey:</h1>
      <div className="container text-center">
        <div className="row">
          <div className="col d-flex justify-content-center text-center">
            <Card
              cardBody="I am currently obtaining my Computer Science degree at UCSB. I plan to
          graduate June 2025. As of now, my current GPA is a 3.45. Learning at
          UCSB has been a vital step for me towards my goal of becoming an elite
          computer scientist."
              cardImg="https://cdn2.webdamdb.com/220th_sm_2vAk1yx1ZCub.jpg?1646347048"
              cardCaption="Computer Science Bachelor of Science"
              title="UCSB (2021-2025)"
            ></Card>
          </div>
          <div className="col d-flex justify-content-center text-center">
            <Card
              cardBody="As the first peer mentors for UCSB CS, we, along with Professor Mirza, Professor Belding, and Professor Majedi are designing a curriculum that will prepare new cs majors for college and the industry. Courses that cover essential knowledge such as daily goal setting are planned and organized weekly. Additional jobs that peer mentors take part of are helping organize panels such as internship panels and helping students with coursework."
              cardCaption="Peer Mentor for University of California - Santa Barbara Computer Science Students"
              cardImg="https://www.engineering.ucsb.edu/sites/engineering.ucsb.edu/files/images/cs-logo.png"
              title="Peer Mentor @ UCSB (9/23-6/24)"
            ></Card>
          </div>
        </div>
        <div className="row">
          <div className="col d-flex justify-content-center text-center">
            <Card
              cardBody="As an instructor, I had the opportunity to teach children of all ages. They attended week-long camps where I would enlighten them about C++, Python, and JavaScript. Conflict usually accompanies children but my team and I were able to prevent these conflicts from escalating, never requiring the help of our regional manager. Additionally, personal ratings from my students and their parents exceeded the average by 90%."
              cardImg="https://rochester.kidsoutandabout.com/sites/default/files/iD%20Tech%20Stacked%20Logo%20%281%29_0.png"
              cardCaption="On-Campus Instructor @ iDTech Camps"
              title="iD Tech Camps (6/22-8/22)"
            ></Card>
          </div>
          <div className="col d-flex justify-content-center text-center">
            <Card
              cardBody="As a sales assistant, I did a variety of tasks. These tasks included: managing products on websites (Newegg, Amazon), utilizing Microsoft Excel to organize sales, printing out shipping labels and corresponding order sheets, and entering invoices into an accounting program."
              cardCaption="Part-Time Sales Assistant @ AMPOWER TECHNOLOGY"
              cardImg="https://cdn.asp.events/CLIENT_CloserSt_D86EA381_5056_B739_5482D50A1A831DDD/sites/DCWS-2023/media/libraries/exhibitors/fa4a89b5-4610-11ee-bff-06bd0f937899-logo.png/fit-in/500x9999/filters:no_upscale()"
              title="AMPOWER TECHNOLOGY (1/20-3/20)"
            ></Card>
          </div>
        </div>
        <div className="row">
          <div className="col d-flex justify-content-center text-center">
            <Card
              cardBody="Throughout my four years at GAWHS, I participated in many extracurriculars while maintaining a 4.32 GPA. As a freshman, I joined the basketball team. As a sophomore, I joined our Associated Student Body. Even though my junior and senior years were ruined by COVID, I went on to stay in these extracurriculars until I graduated. High school has taught me how to be a leader, manage my time, persevere, and be humble."
              cardCaption="4.32 GPA"
              cardImg="https://resources.finalsite.net/images/f_auto,q_auto,t_image_size_2/v1684671335/hlpschoolsorg/ub05pmudi2nu4uwmzmra/GlenAWilsonHighSchool.png"
              title="Glen. A. Wilson High School (2017-2021)"
            ></Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Journey;
