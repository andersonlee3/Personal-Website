import "../Styling/PortfolioCard.css";
import DescriptionListGroup from "./DescriptionListGroup";

interface Props {
  title: string;
  link: string;
  dateCreated: string;
  inspiration: string;
  descriptions: string[];
  img: string;
}

const Project = ({
  title,
  link,
  dateCreated,
  inspiration,
  descriptions,
  img,
}: Props) => {
  return (
    <div>
      <div className="container">
        <h2 className="title">{title}</h2>
        <div className="card rounded-4 portfolio-card">
          <div className="row align-items-center">
            <div className="col portfolio-card-img-col">
              <img
                className="portfolio-card-img"
                src={img}
                alt="image of project"
              ></img>
            </div>
            <div className="col">
              <div className="card-body">
                <div className="captions">
                  <h3 className="dateCreated">{dateCreated}</h3>
                  <h3 className="inspiration">{inspiration}</h3>
                  <h3 className="implementation">Implementation:</h3>
                  <DescriptionListGroup
                    descriptions={descriptions}
                  ></DescriptionListGroup>
                  <a
                    href={link}
                    className="card-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Link to Project
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
