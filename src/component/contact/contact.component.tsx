import React from "react";
import { useAppSelector } from "../../store/hook.store";
import { SOCIAL_LINKS } from "../constant";

interface IProps {
  id: string;
}

export function Contact(props: IProps) {
  const { theme } = useAppSelector((state) => state.theme);

  return (
    <section
      className={`contact-container ${theme === "dark" ? "dark" : ""}`}
      id={props.id}
    >
      <div className="contact">
        <header className="contact_header">
          <p>
            <span>INTERESTED IN </span>
            <img src="/images/shake-hands.svg" alt="" />
            <span>WORKING TOGETHER</span>
          </p>
        </header>
        <div className="contact_details">
          <p>Contact me</p>
          <a href="mailto:aayushmansharma108@gmail.com">
            aayushmansharma108@gmail.com
          </a>
          <a href="tel:9779810478691">977-9810478691</a>
        </div>
        <ul className="contact_socials">
          {SOCIAL_LINKS.map((item, index) => (
            <a href={item.link}>
              <li key={index}>
                {item.icon}
                {item.id}
              </li>
            </a>
          ))}
        </ul>
      </div>
    </section>
  );
}
