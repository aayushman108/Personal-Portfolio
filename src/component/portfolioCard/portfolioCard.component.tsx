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
    <div className="portfolio-card-container">
      <div className="portfolio-card">
        <div className="portfolio-card_details">
          <h1 className="portfolio-card_details_title">{props.item.title}</h1>
          <p className="portfolio-card_details_description">
            {props.item.description}
          </p>
        </div>
        <div className="portfolio-card_main">
          <figure className="portfolio-card_main_image">
            <img src={props.item.image} alt={props.item.title} />
          </figure>
          <h4 className="portfolio-card_main_title">{props.item.title}</h4>
        </div>
      </div>
    </div>
  );
}
