import React from "react";
import { SOCIAL_LINKS } from "../constant";
import { useAppSelector } from "../../store/hook.store";

interface IProps {
  id: string;
}
export function Home(props: IProps) {
  const { theme } = useAppSelector((state) => state.theme);

  return (
    <section
      className={`home-container ${theme === "dark" ? "dark" : ""}`}
      id={props.id}
      aria-labelledby="home"
    >
      <div className="home">
        {/* Introduction */}
        <div className="home_intro-wrapper">
          <div className="home-intro">
            <span className="greet">HELLO I'M</span>
            <h2 className="intro" id="home-title">
              Aayushman Sharma
            </h2>
            <p className="passion">
              A Passionate <span>Software Engineer</span>
            </p>
          </div>
        </div>
        {/* Hero Image */}
        <div className="home_image">
          <figure className="hero-image">
            <img src="/images/aayushman-sharma.png" alt="Aayushman Sharma" />
          </figure>
        </div>
        {/* Social Media Links List */}
        <ul className="home_social" aria-label="Social media links">
          {SOCIAL_LINKS.map((item) => (
            <li
              key={item.id}
              className={`social-item ${theme === "dark" ? "dark" : ""}`}
            >
              <a
                href={item.link}
                className="social-item_icon"
                aria-label={`${item.id} profile`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
