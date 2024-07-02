import { useEffect, useState } from "react";
import {
  IoMdArrowDropleftCircle,
  IoMdArrowDroprightCircle,
} from "react-icons/io";

import { useSwipeable } from "react-swipeable";
import { ABOUT_ME } from "./constant";
interface IProps {
  id: string;
}

export function About(props: IProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoSlide, setAutoSlide] = useState<boolean>(false);

  const itemCount = ABOUT_ME.length;

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? itemCount - 1 : prevIndex - 1 <= 0 ? 0 : prevIndex - 1
    );
  };

  const handleNext = () => {
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
  };

  const getTransformStyle = () => {
    const translateValue = -(currentIndex * 100);
    return {
      transform: `translateX(${translateValue}%)`,
    };
  };

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
    <section className="about-container" id={props.id}>
      <div className="about">
        <div
          className="carousel-container"
          onMouseEnter={() => setAutoSlide(false)}
          onMouseLeave={() => setAutoSlide(false)}
        >
          <div
            className="carousel"
            style={getTransformStyle()}
            {...swipeHandlers}
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
              >
                <div className="inner">{item.content(handleNext)}</div>
              </div>
            ))}
          </div>
          {/* BUTTONS */}
          <button
            className="button button--prev"
            onClick={() => {
              setAutoSlide(false);
              handlePrev();
            }}
            disabled={currentIndex === 0}
          >
            <IoMdArrowDropleftCircle className="icon" />
          </button>
          <button
            className="button button--next"
            onClick={() => {
              setAutoSlide(false);
              handleNext();
            }}
            disabled={currentIndex === itemCount - 1}
          >
            <IoMdArrowDroprightCircle className="icon" />
          </button>
        </div>
      </div>
    </section>
  );
}
