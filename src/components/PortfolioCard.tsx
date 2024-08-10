import "../Styling/PortfolioCard.css";
import DescriptionListGroup from "./DescriptionListGroup";

interface Props {
  title: string;
  link: string;
  dateCreated: string;
  inspiration: string;
  descriptions: string[];
}

const Project = ({
  title,
  link,
  dateCreated,
  inspiration,
  descriptions,
}: Props) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 6000, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <div>
      <div className="container">
        <h2 className="title">{title}</h2>
        <div className="row align-items-center">
          <div className="col">
            <img
              className="portfolio-card-img"
              src={link}
              alt="image of project"
            ></img>
          </div>
          <div className="col">
            <div className="card rounded-4 portfolio-card">
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
  );
};

export default Project;
