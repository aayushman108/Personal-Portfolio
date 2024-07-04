import { BiSolidLeftArrow } from "react-icons/bi";
import { HiArrowLongRight } from "react-icons/hi2";
import { useAppSelector } from "../../../store/hook.store";

interface IProps {
  handleNext: () => void;
}
export function BasicDetails(props: IProps) {
  const { theme } = useAppSelector((state) => state.theme);

  return (
    <section
      className={`basic-details-container ${theme === "dark" ? "dark" : ""}`}
      aria-labelledby="about-me-heading"
    >
      <div className="basic-details">
        {/* My Image */}
        <figure
          className={`basic-details_image ${theme === "dark" ? "dark" : ""}`}
        >
          <img src="/images/aayushmanSharma.jpg" alt="..." />
          <BiSolidLeftArrow
            aria-hidden="true"
            className={`basic-arrow-icon ${theme === "dark" ? "dark" : ""}`}
          />
        </figure>
        {/* Basic Details */}
        <div className="basic-details_content">
          <h2
            id="about-me-heading"
            className={`basic-details_content_heading ${
              theme === "dark" ? "dark" : ""
            }`}
          >
            ABOUT ME
          </h2>
          {/* My Name */}
          <h2
            className={`basic-details_content_name ${
              theme === "dark" ? "dark" : ""
            }`}
          >
            AAYUSHMAN SHARMA
          </h2>
          {/* My Basic description */}
          <p
            className={`basic-details_content_description ${
              theme === "dark" ? "dark" : ""
            }`}
          >
            Proficient Associate Frontend Developer with 8 months of experience
            in web application development. I specialize in modern frontend
            technologies and have a basic foundation in backend development. I
            am dedicated to creating efficient and user-friendly web interfaces
            while continuously learning and applying new technologies.
          </p>
          {/* 
            Button to transition to more details about Me.
            Triggers the handleNext function
          */}
          <button
            className="learn-more-btn"
            onClick={props.handleNext}
            aria-label="Learn more about Aayushman Sharma"
          >
            KNOW MORE ABOUT ME{" "}
            <span className="arrow-icon" aria-hidden="true">
              <HiArrowLongRight size={20} />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
