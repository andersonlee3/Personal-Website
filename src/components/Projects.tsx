import "../Styling/Projects.css";
import Project from "./PortfolioCard";
import FitnessAppImg from "../assets/FitnessApp.png";
import BotImg from "../assets/Bot.png";
import BilliardsImg from "../assets/Billiards.png";
import IntelligroceryImg from "../assets/IntelliGrocery.png";
import OysterImg from "../assets/Oyster.png";
import ucsbCoursesImg from "../assets/ucsbCourses.png";

const Projects = () => {
  let fitAppDescriptions = [
    "Implemented using JS and Code.org",
    "Personally designed UI and backend",
    "Assigns different workouts based on user input",
  ];

  let botDescriptions = [
    "Created an automated checkout bot with Node.js and Puppeteer (node.js library)",
    "Utilizes Chromium browsers and asynchronous request handling to checkout any item given a URL",
  ];

  let billiardsDescriptions = [
    "Simulated two balls colliding with each other and boundaries using Python and NumPy",
    "Utilized physics and calculus to simulate the collisions and animations",
  ];

  let intelligroceryDescriptions = [
    "Developed backend logic for a mobile app that helps users find missing ingredients from their pantries based on specific recipes.",
    "Designed the UI/UX and integrated the front-end with an OpenAPI for recipe retrieval using ReactNative, Node.js, and ExpoGo.",
    "Maximized productivity by practicing Agile methodologies such as daily scrums, kanban boards, and heartbeat retrospectives.",
  ];

  let oysterDescriptions = [
    "Worked with a team to develop the backend of an app (Oyster) with Python (FASTAPI) and SQLALCHEMY (SQL) that uses gift card APIs to give cash-back to users through cryptocurrency.",
    "Maximized workflow by participating in Agile Methodologies such as daily stand-ups, user stories, issues, and unit testing.",
    "Made Oyster (application) production ready by implementing logging with a YAML format configuration to log errors.",
    "Resolved double spend problem with database by changing all code from sync to async so that only a single thread runs.",
  ];

  let ucsbCoursesDescriptions = [
    "Worked on a legacy code project using Java, Spring Boot and React for a website that displays UCSB course information.",
    "Increased user productivity by fixing a bug that allowed students to add wrong courses to their personal schedules.",
    "Nurtured an upward trend in users by developing the logic and UI/UX of a component that displays course grade distribution.",
    "Followed Agile Lifestyle that included daily stand-ups, version control, kanban boards, and unit testing to maintain organization.",
  ];

  return (
    <div className="container-fluid p-0">
      <div className="portfolio">
        <h1 className="Projects">Projects:</h1>
        <Project
          title="UCSB Courses Site"
          link="https://github.com/ucsb-cs156-s24/proj-courses-s24-4pm-4"
          inspiration="Inspiration: This was a project that I wanted to work on because it would help refine my React skills and familiarize myself with Java."
          dateCreated="April 2024 - June 2024"
          descriptions={ucsbCoursesDescriptions}
          img={ucsbCoursesImg}
        ></Project>
        <Project
          title="Oyster"
          link="https://github.com/The-world-is-your-Oyster"
          dateCreated="February 2024 - April 2024"
          inspiration="Inspiration: Oyster was my assigned project during my internship at DAuth Network Foundation. As a web3 startup, our main focus was blockchain. Oyster is an application that gives user cash-back in either cash or ton coins, an online currency."
          descriptions={oysterDescriptions}
          img={OysterImg}
        ></Project>
        <Project
          title="Intelligrocery"
          link="https://github.com/ucsb-cs148-w24/project-pj03-intelligrocery"
          dateCreated="January 2024 - March 2024"
          inspiration="Inspiration: As college students, our pantries are extremely messy so we lose track of what ingredients we have. We also have to cook for ourselves. Thus, we created an application that tells users the ingredients they are missing in their pantry based on a recipe."
          descriptions={intelligroceryDescriptions}
          img={IntelligroceryImg}
        ></Project>
        <Project
          title="Billiards Simulation"
          link="https://github.com/andersonlee3/Ball-Simulation"
          dateCreated="June 2023"
          inspiration="Inspiration: One of my hobbies include video games. Oh, another hobby is coding. Well, since these two hobbies go hand in hand, why not try out some physics that would be used in many video games such as billiards?"
          descriptions={billiardsDescriptions}
          img={BilliardsImg}
        ></Project>
        <Project
          title="Automated Checkout Bot"
          link="https://github.com/andersonlee3/Checkout-Bot"
          dateCreated="August 2022"
          inspiration="Inspiration: As a sneakerhead, all the shoes I wanted were limited. Thus, there were bots that made copping these limited shoes way easier. Intrigued, I wanted to replicate a super simple version of these shoe bots."
          descriptions={botDescriptions}
          img={BotImg}
        ></Project>
        <Project
          title="Fitness App"
          link="https://drive.google.com/file/d/15OkS9NDT4sdIKlR66XLqrpTq3c2kCpio/preview"
          dateCreated="April 2019"
          inspiration="Inspiration: I am an athlete. When thinking of a project idea, I was
      motivated to create a fitness app since that is something I would use."
          descriptions={fitAppDescriptions}
          img={FitnessAppImg}
        ></Project>
      </div>
    </div>
  );
};

export default Projects;
