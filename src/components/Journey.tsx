import React from "react";
import "./Journey.css";
import { BsSuitcaseLgFill } from "react-icons/bs";
import Card from "./Card";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { IoSchoolSharp } from "react-icons/io5";

const Journey = () => {
  return (
    <div>
      <h1 className="journeyH"> My Journey:</h1>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="February 2024 - May 2024"
          iconStyle={{
            background: "black",
            color: "white",
            width: "40px",
            height: "40px",
            marginLeft: "-20px",
          }}
          icon={<BsSuitcaseLgFill />}
        >
          <div className="col d-flex justify-content-center text-center">
            <Card
              cardBody="This was my first professional internship experience. The position was fully remote. We used Python, FastAPI, SQLAlchemy, and React to create an application that gives user cash back using blockchain technology when they purchase gift cards. I was tasked with various issues such as logging, resolving the double spend problem by refactoring code, and researching different apis. Additionally, we practiced Agile methodologies such as daily standups and user stories. Overall, I gained experience in working with a team to make products production-ready."
              cardCaption="Full-Stack Engineer Intern"
              cardImg="https://media.licdn.com/dms/image/D560BAQHL-q8yWedD8w/company-logo_200_200/0/1681457347397/dauth_logo?e=2147483647&v=beta&t=zEgF_Hm3ptMcEu3XkOTaHdHRakby3KNDUEf4O-CQTWU"
              title="DAuth Network Foundation"
            ></Card>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="September 2023 - December 2023"
          iconStyle={{
            background: "black",
            color: "white",
            width: "40px",
            height: "40px",
            marginLeft: "-20px",
          }}
          icon={<BsSuitcaseLgFill />}
        >
          <div className="col d-flex justify-content-center text-center">
            <Card
              cardBody="As the first peer mentors for UCSB CS, we, along with Professor Mirza, Professor Belding, and Professor Majedi are designing a curriculum that will prepare new cs majors for college and the industry. Courses that cover essential knowledge such as daily goal setting are planned and organized weekly. Additional jobs that peer mentors take part of are helping organize panels such as internship panels and helping students with coursework."
              cardCaption="UCSB Department of Computer Sciecne"
              cardImg="https://www.engineering.ucsb.edu/sites/engineering.ucsb.edu/files/images/cs-logo.png"
              title="Computer Science Peer Mentor"
            ></Card>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="June 2022 - August 2022"
          iconStyle={{
            background: "black",
            color: "white",
            width: "40px",
            height: "40px",
            marginLeft: "-20px",
          }}
          icon={<BsSuitcaseLgFill />}
        >
          <div className="col d-flex justify-content-center text-center">
            <Card
              cardBody="As an instructor, I had the opportunity to teach children of all ages. They attended week-long camps where I would enlighten them about C++, Python, and JavaScript. Conflict usually accompanies children but my team and I were able to prevent these conflicts from escalating, never requiring the help of our regional manager. Additionally, personal ratings from my students and their parents exceeded the average by 90%."
              cardImg="https://www.teensummercamps.com/cdn/shop/products/13083745-111914d1-2fe3-4ee8-866c-445ec35dfc6b-0-iD-Tech-Company-Logo-Stacked-Tagline_24.png?v=1674582605"
              cardCaption="On-Campus Instructor @ iDTech Camps"
              title="iD Tech Camps"
            ></Card>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2021 - June 2025"
          iconStyle={{
            background: "black",
            color: "white",
            width: "40px",
            height: "40px",
            marginLeft: "-20px",
          }}
          icon={<IoSchoolSharp />}
        >
          <div className="col d-flex justify-content-center text-center">
            <Card
              cardBody="I am an incoming fourth-year student at UCSB obtaining a computer science degree. My expected graduation date is June 2025. As of now, my current GPA is a 3.47. Learning at UCSB has been a blessing for me as it has helped me become prepared for the SWE industry. Some relevant coursework include Advanced Application Programming, Mobile App Development, Human-Computer Interaction, Design
              and Implementation Techniques of Database Systems, Object Oriented Programming, Data Structures and Algorithms, Scientific Computing, Probability and Statistics, Linear Algebra, Compilers, Computer Architecture, Computer Vision (In-Progress), Quantum Computing (In-Progress), Vector Calculus,and Differential Equations."
              cardCaption="Bachelor of Science in Computer Science"
              cardImg="https://brand.ucsb.edu/sites/default/files/images/pages/Visual-Identity/Marks/reversed-wordmark.gif"
              title="UCSB"
            ></Card>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="January 2020 - March 2020"
          iconStyle={{
            background: "black",
            color: "white",
            width: "40px",
            height: "40px",
            marginLeft: "-20px",
          }}
          icon={<BsSuitcaseLgFill />}
        >
          <div className="col d-flex justify-content-center text-center">
            <Card
              cardBody="As a sales assistant, I did a variety of tasks. These tasks included: managing products on websites (Newegg, Amazon), utilizing Microsoft Excel to organize sales, printing out shipping labels and corresponding order sheets, and entering invoices into an accounting program."
              cardCaption="Sales Assistant"
              cardImg="https://cdn.asp.events/CLIENT_CloserSt_D86EA381_5056_B739_5482D50A1A831DDD/sites/DCWS-2023/media/libraries/exhibitors/fa4a89b5-4610-11ee-bff-06bd0f937899-logo.png/fit-in/500x9999/filters:no_upscale()"
              title="AMPOWER TECHNOLOGY"
            ></Card>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2017 - 2021"
          iconStyle={{
            background: "black",
            color: "white",
            width: "40px",
            height: "40px",
            marginLeft: "-20px",
          }}
          icon={<IoSchoolSharp />}
        >
          <div className="col d-flex justify-content-center text-center">
            <Card
              cardBody="Throughout my four years at GAWHS, I participated in many extracurriculars while maintaining a 4.32 GPA. As a freshman, I joined the basketball team. As a sophomore, I joined our Associated Student Body. Even though my junior and senior years were ruined by COVID, I went on to stay in these extracurriculars until I graduated. High school has taught me how to be a leader, manage my time, persevere, and be humble."
              cardCaption="4.32 GPA"
              cardImg="https://resources.finalsite.net/images/f_auto,q_auto,t_image_size_2/v1684671335/hlpschoolsorg/ub05pmudi2nu4uwmzmra/GlenAWilsonHighSchool.png"
              title="Glen. A. Wilson High School"
            ></Card>
          </div>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Journey;
