import { useCallback, useEffect, useState } from "react";
import {
  IoMdArrowDropleftCircle,
  IoMdArrowDroprightCircle,
} from "react-icons/io";

import { useSwipeable } from "react-swipeable";
import { ABOUT_ME } from "./constant";
import { useAppSelector } from "../../store/hook.store";
interface IProps {
  id: string;
}

export function About(props: IProps) {
  const { theme } = useAppSelector((state) => state.theme);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoSlide, setAutoSlide] = useState<boolean>(false);

  //Carousel item count
  const itemCount = ABOUT_ME.length;

  /**
   * Handles the previous button click by updating the currentIndex state.
   */
  const handlePrev = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? itemCount - 1 : prevIndex - 1 <= 0 ? 0 : prevIndex - 1
    );
  }, [itemCount]);

  /**
   * Handles the next button click by updating the currentIndex state.
   */
  const handleNext = useCallback(() => {
    if (autoSlide) {
      setCurrentIndex((prevIndex) =>
        prevIndex === itemCount - 1
          ? 0
          : prevIndex + 1 >= itemCount - 1
          ? itemCount - 1
          : prevIndex + 1
      );
      return;
    }
    setCurrentIndex((prevIndex) =>
      prevIndex === itemCount - 1
        ? prevIndex
        : prevIndex + 1 >= itemCount - 1
        ? itemCount - 1
        : prevIndex + 1
    );
  }, [autoSlide, itemCount]);

  /**
   * Handles the transform style for the carousel.
   * @returns {Object} The transform style.
   */
  const getTransformStyle = () => {
    const translateValue = -(currentIndex * 100);
    return {
      transform: `translateX(${translateValue}%)`,
    };
  };

  /**
   * Sets up an interval for auto-sliding the carousel when autoSlide is true.
   */
  useEffect(() => {
    if (!autoSlide) return;
    const interval = setInterval(() => {
      handleNext();
    }, 2500);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoSlide]);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => handleNext(),
    onSwipedRight: () => handlePrev(),
    trackMouse: true,
  });

  return (
    <section
      className="about-container"
      id={props.id}
      aria-labelledby="about-heading"
    >
      <div className="about" role="region" aria-roledescription="carousel">
        <h2 id="about-heading" className="visually-hidden">
          About Me Section
        </h2>
        <div
          className="carousel-container"
          onMouseEnter={() => setAutoSlide(false)}
          onMouseLeave={() => setAutoSlide(false)}
        >
          <div
            className="carousel"
            style={getTransformStyle()}
            {...swipeHandlers}
            role="list"
          >
            {ABOUT_ME.map((item) => (
              <div
                key={item.id}
                className="carousel_item"
                style={{
                  padding: "0",
                  maxWidth: `100%`,
                  flexBasis: `100%`,
                  aspectRatio: 1,
                }}
                role="listitem"
              >
                <div className="inner">{item.content(handleNext)}</div>
              </div>
            ))}
          </div>
          {/* BUTTONS */}
          {/* Previous Button */}
          <button
            className={`button button--prev ${theme === "dark" ? "dark" : ""}`}
            onClick={() => {
              setAutoSlide(false);
              handlePrev();
            }}
            disabled={currentIndex === 0}
            aria-label="Previous Slide"
            aria-controls={props.id}
            aria-disabled={currentIndex === 0}
          >
            <IoMdArrowDropleftCircle className="icon" />
          </button>
          {/* Next Button */}
          <button
            className={`button button--next ${theme === "dark" ? "dark" : ""}`}
            onClick={() => {
              setAutoSlide(false);
              handleNext();
            }}
            disabled={currentIndex === itemCount - 1}
            aria-label="Next Slide"
            aria-controls={props.id}
            aria-disabled={currentIndex === itemCount - 1}
          >
            <IoMdArrowDroprightCircle className="icon" />
          </button>
        </div>
      </div>
    </section>
  );
}
