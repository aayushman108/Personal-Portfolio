import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineDateRange } from "react-icons/md";
import { FaLink } from "react-icons/fa6";

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
  return (
    <div className="experience-card-container">
      <div className="experience-card">
        <h3 className="experience-card_designation">
          {props.item.designation}
        </h3>
        <h4 className="experience-card_company">{props.item.company}</h4>
        <div className="experience-card_date-location">
          <div className="experience-card-date">
            <MdOutlineDateRange />
            {props.item.date}
          </div>
          <div className="experience-card-location">
            <FaLocationDot />
            {props.item.location}
          </div>
        </div>
        <a className="experience-card_link" href={props.item.link}>
          <FaLink />
          {props.item.link}
        </a>
        <ul className="experience-card_list">
          {props.item.content.map((item) => (
            <li key={item.id}>
              {item.text} {item.link && <a href={item.link}>~ {item.link}</a>}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
