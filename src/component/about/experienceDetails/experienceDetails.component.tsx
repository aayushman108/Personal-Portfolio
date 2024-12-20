import { useAppSelector } from "../../../store/hook.store";
import { AnimateListItem } from "../../animateListItem";
import { EXPERIENCE } from "../constant";
import { ExperienceCard } from "../experienceCard";

export function ExperienceDetails() {
  const { theme } = useAppSelector((state) => state.theme);
  return (
    <section
      className={`experience-details-container ${
        theme === "dark" ? "dark" : ""
      }`}
      aria-labelledby="experience-heading"
    >
      <div className="experience-details">
        {/* My Image */}
        {/* <figure className="experience-details_image">
          <img src="/images/aayushmanSharma.jpg" alt="Aayushman Sharma" />
        </figure> */}

        <div className="experience-details-content">
          <h2
            id="experience-heading"
            className={`experience-details_content_heading ${
              theme === "dark" ? "dark" : ""
            }`}
          >
            EXPERIENCE
          </h2>
          {/* List of Experiences */}
          <ul
            className="experience-details_content_list"
            aria-label="List of work experiences"
          >
            {EXPERIENCE.map((item, index) => (
              <AnimateListItem index={index} key={index}>
                <ExperienceCard item={item} />
              </AnimateListItem>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
