import React, { useRef } from "react";
import { SOCIAL_LINKS } from "../constant";
import { useAppSelector } from "../../store/hook.store";
import { useScroll, useTransform, motion } from "framer-motion";

interface IProps {
  id: string;
}
export function Home(props: IProps) {
  const { theme } = useAppSelector((state) => state.theme);

  const imageRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({ target: imageRef });

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.28, 0.4, 0.6, 0.8, 1],
    [1, 1, 0.4, 0.2, 1, 1]
  );

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
        <motion.div className="home_image" style={{ opacity }} ref={imageRef}>
          <figure className="hero-image">
            <img src="/images/aayushman-sharma.png" alt="Aayushman Sharma" />
          </figure>
        </motion.div>
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
