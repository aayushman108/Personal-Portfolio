import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineDateRange } from "react-icons/md";
import { FaLink } from "react-icons/fa6";
import { useAppSelector } from "../../../store/hook.store";

interface Props {
  item: {
    id: number;
    designation: string;
    company: string;
    date: string;
    location: string;
    link: string;
    content: { id: string; text: string; link?: string }[];
  };
}
export function ExperienceCard(props: Props) {
  const { theme } = useAppSelector((state) => state.theme);

  return (
    <article
      className={`experience-card-container ${theme === "dark" ? "dark" : ""}`}
      aria-labelledby={`job-title-${props.item.id}`}
    >
      <div className="experience-card">
        {/* My Designation */}
        <h3
          id={`job-title-${props.item.id}`}
          className={`experience-card_designation ${
            theme === "dark" ? "dark" : ""
          }`}
        >
          {props.item.designation}
        </h3>
        {/* Company */}
        <h4
          id={`company-name-${props.item.id}`}
          className="experience-card_company"
        >
          {props.item.company}
        </h4>
        {/* Date and Location */}
        <div className="experience-card_date-location">
          <div
            className="experience-card-date"
            aria-label={`Employment period: ${props.item.date}`}
          >
            <MdOutlineDateRange aria-hidden="true" />
            {props.item.date}
          </div>
          <div
            className="experience-card-location"
            aria-label={`Location: ${props.item.location}`}
          >
            <FaLocationDot aria-hidden="true" />
            {props.item.location}
          </div>
        </div>
        {/* Link to My Github and GitLab */}
        <a
          className={`experience-card_link ${theme === "dark" ? "dark" : ""}`}
          href={props.item.link}
        >
          <FaLink aria-hidden="true" />
          {props.item.link}
        </a>
        {/* <ul
          className="experience-card_list"
          aria-label="Job responsibilities and achievements"
        >
          {props.item.content.map((item) => (
            <li key={item.id}>
              {item.text} {item.link && <a href={item.link}>~ {item.link}</a>}
            </li>
          ))}
        </ul> */}
      </div>
    </article>
  );
}
