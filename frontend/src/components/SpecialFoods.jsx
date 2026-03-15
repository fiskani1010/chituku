import { useEffect, useRef, useState } from "react";
import "react-photo-view/dist/react-photo-view.css";
import { PhotoProvider, PhotoView } from "react-photo-view";
import styles from "./SpecialFoods.module.css";

import meal1 from "../assets/hero1.png";
import meal2 from "../assets/hero2.png";
import meal3 from "../assets/hero3.png";

const meals = [
  {
    image: meal1,
    title: "Golden Crunch",
    description: "Crisp textures with rich house-made flavour.",
    tag: "Chef pick",
    price: "MKW 8,500",
    variant: "leftCard",
  },
  {
    image: meal2,
    title: "Signature Plate",
    description: "The table favourite built for slow, satisfying bites.",
    tag: "Best seller",
    price: "MKW 12,000",
    variant: "centerCard",
  },
  {
    image: meal3,
    title: "Street Favourite",
    description: "Bold colour, warm spice, and a relaxed cafe feel.",
    tag: "Fresh daily",
    price: "MKW 9,500",
    variant: "rightCard",
  },
];

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

export default function SpecialFoods() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

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
        threshold: 0.22,
        rootMargin: "0px 0px -10% 0px",
      },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`${styles.specialFoods} ${isVisible ? styles.visible : ""}`.trim()}
      aria-labelledby="special-foods-title"
    >
      <div className={styles.headingBox}>
        <span className={styles.eyebrow}>Curated selection</span>
        <h2 id="special-foods-title">Special foods</h2>
        <p>Fresh meals. Great atmosphere.</p>
      </div>

      <PhotoProvider>
        <div className={styles.grid}>
          {meals.map((meal) => (
            <article
              key={meal.title}
              className={`${styles.card} ${styles[meal.variant]}`}
            >
              <PhotoView src={meal.image}>
                <button
                  type="button"
                  className={styles.imageTrigger}
                  aria-label={`Open larger photo for ${meal.title}`}
                >
                  <img src={meal.image} alt={meal.title} />
                  <span className={styles.zoomHint}>Tap to view</span>
                </button>
              </PhotoView>

              <div className={styles.cardBody}>
                <div className={styles.cardMeta}>
                  <span className={styles.cardTag}>{meal.tag}</span>
                  <span className={styles.price}>{meal.price}</span>
                </div>
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
            </article>
          ))}
        </div>
      </PhotoProvider>
    </section>
  );
}
