import { useAppSelector } from "../../store/hook.store";

interface IProps {
  item: {
    id: number;
    title: string;
    description: string;
    image: string;
    status: string;
    tech: string;
  };
}
export function PortfolioCard(props: IProps) {
  const { theme } = useAppSelector((state) => state.theme);
  return (
    <article
      className={`portfolio-card-container ${theme === "dark" ? "dark" : ""}`}
      aria-labelledby={`portfolio-title-${props.item.id}`}
    >
      <div className="portfolio-card">
        {/* Portfolio Card Title and Description */}
        <div
          className={`portfolio-card_details ${theme === "dark" ? "dark" : ""}`}
        >
          <h1
            className={`portfolio-card_details_title ${
              theme === "dark" ? "dark" : ""
            }`}
            id={`portfolio-title-${props.item.id}`}
          >
            {props.item.title}
          </h1>
          <p
            className={`portfolio-card_details_description ${
              theme === "dark" ? "dark" : ""
            }`}
            id={`portfolio-description-${props.item.id}`}
          >
            {props.item.description}
          </p>
          <p
            className={`portfolio-card_details_status ${
              theme === "dark" ? "dark" : ""
            }`}
            id={`portfolio-status-${props.item.id}`}
          >
            <span>STATUS</span>
            <br /> {props.item.status}
          </p>
          <p
            className={`portfolio-card_details_tech ${
              theme === "dark" ? "dark" : ""
            }`}
            id={`portfolio-tech-${props.item.id}`}
          >
            <span>TECHNOLOGY</span>
            <br /> {props.item.tech}
          </p>
        </div>
        {/* Portfolio Card Image and Title */}
        <div
          className="portfolio-card_main"
          aria-labelledby={`portfolio-title-${props.item.id}`}
          aria-describedby={`portfolio-description-${props.item.id}`}
        >
          <figure
            className={`portfolio-card_main_image ${
              theme === "dark" ? "dark" : ""
            }`}
          >
            <img src={props.item.image} alt={props.item.title} />
          </figure>
          <h4
            className={`portfolio-card_main_title ${
              theme === "dark" ? "dark" : ""
            }`}
            aria-hidden="true"
          >
            {props.item.title}
          </h4>
        </div>
      </div>
    </article>
  );
}
