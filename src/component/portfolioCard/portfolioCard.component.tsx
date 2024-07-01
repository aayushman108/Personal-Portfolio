interface IProps {
  item: {
    id: number;
    title: string;
    description: string;
    image: string;
  };
}
export function PortfolioCard(props: IProps) {
  return (
    <article
      className="portfolio-card-container"
      aria-labelledby={`portfolio-title-${props.item.id}`}
    >
      <div className="portfolio-card">
        <div className="portfolio-card_details">
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
          <figure className="portfolio-card_main_image">
            <img src={props.item.image} alt={props.item.title} />
          </figure>
          <h4 className="portfolio-card_main_title" aria-hidden="true">
            {props.item.title}
          </h4>
        </div>
      </div>
    </article>
  );
}
