import React from "react";
import { SOCIAL_LINKS } from "../constant";

interface IProps {
  id: string;
}
export function Home(props: IProps) {
  return (
    <section className="home-container" id={props.id}>
      <div className="home">
        <div className="home_intro-wrapper">
          <div className="home-intro">
            <span className="greet">HELLO I'M</span>
            <h2 className="intro">Aayushman Sharma</h2>
            <p className="passion">
              A Passionate <span>Software Engineer</span>
            </p>
          </div>
        </div>
        <div className="home_image-links">
          <figure className="hero-image">
            <img src="/images/aayushman-sharma.png" alt="Aayushman Sharma" />
          </figure>
        </div>
        <ul className="home_social" aria-label="Social media links">
          {SOCIAL_LINKS.map((item) => (
            <li key={item.id} className="social-item">
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
