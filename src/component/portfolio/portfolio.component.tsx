import { useAppSelector } from "../../store/hook.store";
import { PortfolioCard } from "../portfolioCard";
import { PORTFOLIO_LIST } from "./contant";

interface IProps {
  id: string;
}

export function Portfolio(props: IProps) {
  const { theme } = useAppSelector((state) => state.theme);

  return (
    <section
      className={`portfolio-container ${theme === "dark" ? "dark" : ""}`}
      id={props.id}
      aria-labelledby="portfolio-heading"
    >
      <div className="portfolio">
        {/* Portfolio Heading */}
        <h2
          className={`portfolio_heading ${theme === "dark" ? "dark" : ""}`}
          id="portfolio-heading"
        >
          PORTFOLIO
        </h2>
        {/* Portfolio List */}
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
