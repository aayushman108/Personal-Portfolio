import React, { useRef } from "react";
import { SOCIAL_LINKS } from "../constant";
import { useAppSelector } from "../../store/hook.store";
import { useScroll, useTransform, motion } from "framer-motion";

interface IProps {
  id: string;
}

const container = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.5,
      ease: "easeInOut",
    },
  },
};

const child = {
  initial: {
    y: 100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.2,
      ease: [0.47, 0, 0.745, 0.715],
    },
  },
};

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
          <motion.div
            variants={container}
            initial="initial"
            animate="animate"
            className="home-intro"
          >
            <motion.span variants={child} className="greet">
              HELLO I'M
            </motion.span>
            <motion.h2 variants={child} className="intro" id="home-title">
              Aayushman Sharma
            </motion.h2>
            <motion.p variants={child} className="passion">
              A Passionate <span>Software Engineer</span>
            </motion.p>
          </motion.div>
        </div>
        {/* Hero Image */}
        <motion.div className="home_image" style={{ opacity }} ref={imageRef}>
          <figure className="hero-image">
            <img src="/images/aayushman-sharma.png" alt="Aayushman Sharma" />
          </figure>
        </motion.div>
        {/* Social Media Links List */}
        <motion.ul
          variants={container}
          initial="initial"
          animate="animate"
          className="home_social"
          aria-label="Social media links"
        >
          {SOCIAL_LINKS.map((item) => (
            <motion.li
              key={item.id}
              variants={child}
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
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
