import { BiSolidLeftArrow } from "react-icons/bi";
import { HiArrowLongRight } from "react-icons/hi2";

interface IProps {
  handleNext: () => void;
}
export function BasicDetails(props: IProps) {
  return (
    <section
      className="basic-details-container"
      aria-labelledby="about-me-heading"
    >
      <div className="basic-details">
        <figure className="basic-details_image">
          <img src="/images/aayushmanSharma.jpg" alt="..." />
          <BiSolidLeftArrow aria-hidden="true" className="basic-arrow-icon" />
        </figure>
        <div className="basic-details_content">
          <h2 id="about-me-heading" className="basic-details_content_heading">
            ABOUT ME
          </h2>
          <h2 className="basic-details_content_name">AAYUSHMAN SHARMA</h2>
          <p className="basic-details_content_description">
            Proficient Associate Frontend Developer with 8 months of experience
            in web application development. Demonstrates strong capability in
            modern frontend technologies, with a basic foundation in backend
            development. Committed to continuous learning and applying
            cutting-edge technologies to create efficient, user-friendly web
            interfaces.
          </p>
          <button
            className="learn-more-btn"
            onClick={props.handleNext}
            aria-label="Learn more about Aayushman Sharma"
          >
            LEARN MORE ABOUT ME{" "}
            <span className="arrow-icon" aria-hidden="true">
              <HiArrowLongRight size={20} />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
