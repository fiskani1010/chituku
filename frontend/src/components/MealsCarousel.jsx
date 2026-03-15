import { useEffect, useRef, useState } from "react";
import styles from "./MealsCarousel.module.css";

import hero1 from "../assets/hero1.png";
import hero2 from "../assets/hero2.png";
import hero3 from "../assets/hero3.png";
import special1 from "../assets/special1.png";
import special2 from "../assets/special2.png";

const meals = [
  {
    image: special1,
    title: "Golden Crunch",
    description: "Creamy, crisp, and made for slow cafe moments.",
    price: "MKW 8,500",
  },
  {
    image: hero2,
    title: "Signature Plate",
    description: "A colourful table favourite with warm, satisfying flavour.",
    price: "MKW 12,000",
  },
  {
    image: special2,
    title: "Street Favourite",
    description: "Bold textures and familiar spice in one generous plate.",
    price: "MKW 9,500",
  },
  {
    image: hero1,
    title: "Grill Delight",
    description: "Rich house flavour paired with fresh sides and heat.",
    price: "MKW 11,000",
  },
  {
    image: hero3,
    title: "Cafe Comfort",
    description: "A relaxed, hearty meal built for lunch and dinner.",
    price: "MKW 10,500",
  },
];

const AUTOPLAY_MS = 6800;

function buildWhatsAppUrl(meal) {
  const imageUrl =
    typeof window === "undefined"
      ? meal.image
      : new URL(meal.image, window.location.origin).href;

  const message = [
    "Hello Chituku Deluxe Cafe, I would like to order this meal:",
    `Meal: ${meal.title}`,
    `Price: ${meal.price}`,
    `Description: ${meal.description}`,
    `Image: ${imageUrl}`,
  ].join("\n");

  return `https://wa.me/?text=${encodeURIComponent(message)}`;
}

function getRelativePosition(index, activeIndex, total) {
  const rawOffset = index - activeIndex;
  const half = Math.floor(total / 2);

  if (rawOffset > half) {
    return rawOffset - total;
  }

  if (rawOffset < -half) {
    return rawOffset + total;
  }

  return rawOffset;
}

function getPositionClass(offset) {
  switch (offset) {
    case -2:
      return styles.outerLeft;
    case -1:
      return styles.left;
    case 0:
      return styles.center;
    case 1:
      return styles.right;
    case 2:
      return styles.outerRight;
    default:
      return styles.hidden;
  }
}

export default function MealsCarousel() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(1);

  const goToNext = () => {
    setActiveIndex((current) => (current + 1) % meals.length);
  };

  const goToPrevious = () => {
    setActiveIndex((current) => (current - 1 + meals.length) % meals.length);
  };

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      return undefined;
    }

    const section = sectionRef.current;
    if (!section) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.18,
        rootMargin: "0px 0px -12% 0px",
      },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) {
      return undefined;
    }

    const interval = setInterval(() => {
      goToNext();
    }, AUTOPLAY_MS);

    return () => clearInterval(interval);
  }, [activeIndex, isVisible]);

  return (
    <section
      ref={sectionRef}
      className={`${styles.mealsCarousel} ${isVisible ? styles.visible : ""}`.trim()}
      aria-labelledby="restaurant-meals-title"
    >
      <div className={styles.heading}>
        <span className={styles.eyebrow}>From the kitchen</span>
        <h2 id="restaurant-meals-title">Restaurant meals</h2>
        <p>A slow moving look at the plates people come back for.</p>
      </div>

      <div className={styles.carouselShell}>
        <div className={styles.stageWrap}>
          <button
            type="button"
            className={`${styles.arrow} ${styles.arrowLeft}`.trim()}
            onClick={goToPrevious}
            aria-label="Show previous meal"
          >
            <span aria-hidden="true">&#8249;</span>
          </button>

          <div className={styles.stage} aria-roledescription="carousel">
          {meals.map((meal, index) => {
            const offset = getRelativePosition(index, activeIndex, meals.length);
            const isActive = offset === 0;

            return (
              <article
                key={meal.title}
                className={`${styles.card} ${getPositionClass(offset)}`.trim()}
                aria-hidden={Math.abs(offset) > 1}
              >
                <img src={meal.image} alt={meal.title} />

                <div className={styles.cardBody}>
                  <span className={styles.price}>{meal.price}</span>
                  <h3>{meal.title}</h3>
                  <p>{meal.description}</p>
                  <a
                    className={styles.orderButton}
                    href={buildWhatsAppUrl(meal)}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className={styles.orderIcon} aria-hidden="true">
                      <svg viewBox="0 0 24 24" role="img" focusable="false">
                        <path
                          d="M19.05 4.94A9.77 9.77 0 0 0 12.09 2c-5.42 0-9.83 4.41-9.83 9.83 0 1.73.45 3.42 1.31 4.91L2 22l5.4-1.42a9.8 9.8 0 0 0 4.69 1.2h.01c5.42 0 9.83-4.41 9.83-9.83a9.76 9.76 0 0 0-2.88-7.01Zm-6.96 15.18h-.01a8.14 8.14 0 0 1-4.15-1.14l-.3-.18-3.2.84.86-3.12-.2-.32a8.13 8.13 0 0 1-1.25-4.36c0-4.49 3.65-8.14 8.15-8.14 2.18 0 4.23.85 5.76 2.38a8.1 8.1 0 0 1 2.38 5.76c0 4.49-3.65 8.14-8.14 8.14Zm4.46-6.08c-.24-.12-1.43-.71-1.65-.79-.22-.08-.38-.12-.55.12-.16.24-.63.79-.77.95-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.92-1.17-.71-.64-1.18-1.42-1.32-1.66-.14-.24-.01-.37.11-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.55-1.32-.75-1.8-.2-.48-.4-.41-.55-.42l-.47-.01c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 1.99s.86 2.3.98 2.46c.12.16 1.69 2.58 4.09 3.61.57.25 1.02.4 1.36.51.57.18 1.08.15 1.49.09.45-.07 1.43-.58 1.63-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                    <span>Order</span>
                  </a>
                </div>

                {isActive ? <span className={styles.activeGlow}></span> : null}
              </article>
            );
          })}
          </div>

          <button
            type="button"
            className={`${styles.arrow} ${styles.arrowRight}`.trim()}
            onClick={goToNext}
            aria-label="Show next meal"
          >
            <span aria-hidden="true">&#8250;</span>
          </button>
        </div>

        <div className={styles.indicators} aria-label="Meal carousel indicators">
          {meals.map((meal, index) => (
            <button
              key={meal.title}
              type="button"
              className={`${styles.indicator} ${
                activeIndex === index ? styles.indicatorActive : ""
              }`.trim()}
              onClick={() => setActiveIndex(index)}
              aria-label={`Show ${meal.title}`}
              aria-pressed={activeIndex === index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
