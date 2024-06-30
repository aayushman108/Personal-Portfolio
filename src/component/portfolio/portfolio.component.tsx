import { PortfolioCard } from "../portfolioCard";
import { PORTFOLIO_LIST } from "./contant";

interface IProps {
  id: string;
}

export function Portfolio(props: IProps) {
  return (
    <div className="portfolio-container" id={props.id}>
      <div className="portfolio">
        <h2 className="portfolio_heading">PORTFOLIO</h2>
        <ul className="portfolio_list">
          {PORTFOLIO_LIST.map((item) => (
            <PortfolioCard item={item} />
          ))}
        </ul>
      </div>
    </div>
  );
}
