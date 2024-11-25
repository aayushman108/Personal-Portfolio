import { useScroll, useTransform, motion, easeInOut } from "framer-motion";
import { useRef } from "react";
import { ABOUT_ME } from "./constant";
import { useAppSelector } from "../../store/hook.store";

interface IProps {
  id: string;
}

export function About(props: IProps) {
  const { theme } = useAppSelector((state) => state.theme);

  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66.67%"], {
    ease: easeInOut,
  });

  return (
    <div
      id={props.id}
      ref={sectionRef}
      className={`about-container ${theme === "dark" ? "dark" : ""}`}
    >
      <div className="about">
        <motion.div style={{ x }}>
          <div className="about__list">
            {ABOUT_ME.map((item) => (
              <div key={item.id} className="about__list__card">
                {item.content}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
