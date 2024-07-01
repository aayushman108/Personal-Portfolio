import { PortfolioCard } from "../portfolioCard";
import { PORTFOLIO_LIST } from "./contant";

interface IProps {
  id: string;
}

export function Portfolio(props: IProps) {
  return (
    <section
      className="portfolio-container"
      id={props.id}
      aria-labelledby="portfolio-heading"
    >
      <div className="portfolio">
        <h2 className="portfolio_heading" id="portfolio-heading">
          PORTFOLIO
        </h2>
        <ul className="portfolio_list" aria-label="Portfolio projects">
          {PORTFOLIO_LIST.map((item) => (
            <li key={item.id} className="portfolio_list_item">
              <PortfolioCard item={item} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
