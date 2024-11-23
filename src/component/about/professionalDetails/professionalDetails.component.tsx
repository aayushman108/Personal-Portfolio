// import { SlCalender } from "react-icons/sl";
// import { IoLocationOutline } from "react-icons/io5";
import { useAppSelector } from "../../../store/hook.store";
import { AnimateListItem } from "../../animateListItem";
import { SKILLS } from "../constant";
import { HiArrowLongRight } from "react-icons/hi2";

export function ProfessionalDetails() {
  const { theme } = useAppSelector((state) => state.theme);
  return (
    <div
      className={`professional-details-container ${
        theme === "dark" ? "dark" : ""
      }`}
      aria-labelledby="skills-heading"
    >
      <div className="professional-details">
        {/* <div className="professional-details_education">
          <h2 className="professional-details_education_heading item1">
            EDUCATION
          </h2>
          <div className="professional-details_education_content">
            <h2 className="education">Bachelor's in Mechanical Engineering</h2>
            <h3 className="institute">Pulchowk Campus, IOE, TU</h3>
            <div className="duration-location">
              <span className="duration">
                <SlCalender />
                11/2018 - 04/2023
              </span>
              <span className="location">
                <IoLocationOutline />
                Lalitpur
              </span>
            </div>
          </div>
        </div> */}

        <div className="professional-details_skills item2">
          <h2
            id="skills-heading"
            className={`professional-details_skills_heading ${
              theme === "dark" ? "dark" : ""
            }`}
          >
            SKILLS
          </h2>
          <div className="professional-details_skills_content">
            <p
              className={`short-description ${theme === "dark" ? "dark" : ""}`}
            >
              As a dedicated Associate Software Engineer, I have developed a
              diverse set of skills that enable me to tackle various challenges
              in the tech world. Here&apos;s a comprehensive list of my
              technical skills:
            </p>

            {/* List of Skills */}
            <ul className="skills-list" aria-label="List of technical skills">
              {SKILLS.map((item, index) => (
                <AnimateListItem index={index} key={item.id}>
                  <div className="skills-list_item">
                    <figure className="skills-list_item_image">
                      <img src={item.icon} alt="" aria-hidden="true" />
                    </figure>
                  </div>
                </AnimateListItem>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
