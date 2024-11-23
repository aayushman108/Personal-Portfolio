import { useAppSelector } from "../../store/hook.store";
import { AnimateListItem } from "../animateListItem";
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
          {PORTFOLIO_LIST.map((item, index) => (
            <AnimateListItem key={item.id} index={index}>
              <div className="portfolio_list_item">
                <PortfolioCard item={item} />
              </div>
            </AnimateListItem>
          ))}
        </ul>
      </div>
    </section>
  );
}
