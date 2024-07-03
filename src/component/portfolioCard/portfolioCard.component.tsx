import { useAppSelector } from "../../store/hook.store";

interface IProps {
  item: {
    id: number;
    title: string;
    description: string;
    image: string;
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
        <div
          className={`portfolio-card_details ${theme === "dark" ? "dark" : ""}`}
        >
          <h1
            className="portfolio-card_details_title"
            id={`portfolio-title-${props.item.id}`}
          >
            {props.item.title}
          </h1>
          <p
            className="portfolio-card_details_description"
            id={`portfolio-description-${props.item.id}`}
          >
            {props.item.description}
          </p>
        </div>
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
