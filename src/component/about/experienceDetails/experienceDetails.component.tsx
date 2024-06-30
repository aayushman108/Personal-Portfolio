import { EXPERIENCE } from "../constant";
import { ExperienceCard } from "../experienceCard";

export function ExperienceDetails() {
  return (
    <div className="experience-details-container">
      <div className="experience-details">
        <figure className="experience-details_image">
          <img src="/images/aayushmanSharma.jpg" alt="..." />
        </figure>
        <div className="experience-details-content">
          <h2 className="experience-details_content_heading">EXPERIENCE</h2>
          <ul className="experience-details_content_list">
            {EXPERIENCE.map((item) => (
              <ExperienceCard key={item.id} item={item} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
