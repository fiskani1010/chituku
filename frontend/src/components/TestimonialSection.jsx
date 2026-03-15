import { useEffect, useRef, useState } from "react";
import styles from "./TestimonialSection.module.css";

const testimonials = [
  {
    name: "Thoko Banda",
    role: "Teacher",
    message:
      "The food is always warm, fresh, and served quickly. It has become one of my most reliable lunch stops in Mzuzu.",
    initials: "TB",
    toneStart: "#f59e0b",
    toneEnd: "#facc15",
  },
  {
    name: "Peter Mhone",
    role: "Student",
    message:
      "I like the portions, the taste, and how easy it is to order when I am in a rush between classes.",
    initials: "PM",
    toneStart: "#38bdf8",
    toneEnd: "#2563eb",
  },
  {
    name: "Mercy Gondwe",
    role: "Parent",
    message:
      "The atmosphere feels welcoming for families, and the meals are practical, filling, and consistently well prepared.",
    initials: "MG",
    toneStart: "#fb7185",
    toneEnd: "#be185d",
  },
  {
    name: "George Chirwa",
    role: "Business Owner",
    message:
      "Chituku Deluxe Cafe gets the balance right between good flavour, quick service, and a place you actually want to stay in.",
    initials: "GC",
    toneStart: "#22c55e",
    toneEnd: "#15803d",
  },
  {
    name: "Ruth Nkhoma",
    role: "University Student",
    message:
      "It is one of the best spots for a proper meal in Chibavi. The quality feels consistent every time I visit.",
    initials: "RN",
    toneStart: "#a855f7",
    toneEnd: "#7c3aed",
  },
  {
    name: "Kelvin Phiri",
    role: "Driver",
    message:
      "The service is fast without feeling rushed, and the meals are satisfying enough to keep me going through the day.",
    initials: "KP",
    toneStart: "#f97316",
    toneEnd: "#ea580c",
  },
];

const AUTOPLAY_MS = 5600;

function getCardsPerView(width) {
  if (width <= 680) {
    return 1;
  }

  if (width <= 1024) {
    return 2;
  }

  return 3;
}

function chunkTestimonials(cardsPerView) {
  const slides = [];

  for (let index = 0; index < testimonials.length; index += cardsPerView) {
    slides.push(testimonials.slice(index, index + cardsPerView));
  }

  return slides;
}

export default function TestimonialSection() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [cardsPerView, setCardsPerView] = useState(() => {
    if (typeof window === "undefined") {
      return 3;
    }

    return getCardsPerView(window.innerWidth);
  });
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = chunkTestimonials(cardsPerView);

  useEffect(() => {
    if (typeof window === "undefined") {
      return undefined;
    }

    const handleResize = () => {
      setCardsPerView(getCardsPerView(window.innerWidth));
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setActiveSlide((current) => {
      if (current < slides.length) {
        return current;
      }

      return 0;
    });
  }, [slides.length]);

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
        rootMargin: "0px 0px -10% 0px",
      },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible || slides.length <= 1) {
      return undefined;
    }

    const interval = setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, AUTOPLAY_MS);

    return () => clearInterval(interval);
  }, [activeSlide, isVisible, slides.length]);

  return (
    <section
      ref={sectionRef}
      className={`${styles.testimonials} ${isVisible ? styles.visible : ""}`.trim()}
      aria-labelledby="testimonials-title"
    >
      <div className={styles.header}>
        <span className={styles.eyebrow}>Customer voices</span>
        <h2 id="testimonials-title">From Our Customers</h2>
        <p>
          What people remember most is the balance of flavour, warmth, and a
          place that feels easy to come back to.
        </p>
      </div>

      <div className={styles.carousel}>
        <div
          className={styles.track}
          style={{ transform: `translateX(-${activeSlide * 100}%)` }}
        >
          {slides.map((slide, slideIndex) => (
            <div
              key={`slide-${slideIndex}`}
              className={styles.slide}
              aria-hidden={activeSlide !== slideIndex}
            >
              {slide.map((item) => (
                <article key={item.name} className={styles.card}>
                  <div className={styles.cardTop}>
                    <div
                      className={styles.avatar}
                      style={{
                        background: `linear-gradient(135deg, ${item.toneStart} 0%, ${item.toneEnd} 100%)`,
                      }}
                    >
                      <span>{item.initials}</span>
                    </div>

                    <div className={styles.identity}>
                      <h3>{item.name}</h3>
                      <p>{item.role}</p>
                      <span className={styles.stars} aria-label="5 out of 5 stars">
                        ★★★★★
                      </span>
                    </div>
                  </div>

                  <p className={styles.message}>{item.message}</p>
                  <span className={styles.quoteMark} aria-hidden="true">
                    ”
                  </span>
                </article>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className={styles.indicators} aria-label="Testimonial slides">
        {slides.map((_, index) => (
          <button
            key={`indicator-${index}`}
            type="button"
            className={`${styles.indicator} ${
              activeSlide === index ? styles.indicatorActive : ""
            }`.trim()}
            onClick={() => setActiveSlide(index)}
            aria-label={`Show testimonial slide ${index + 1}`}
            aria-pressed={activeSlide === index}
          />
        ))}
      </div>
    </section>
  );
}
