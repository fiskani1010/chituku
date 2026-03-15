import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AboutSection from "../components/AboutSection";
import LocationSection from "../components/LocationSection";
import MealsCarousel from "../components/MealsCarousel";
import SpecialFoods from "../components/SpecialFoods";
import TestimonialSection from "../components/TestimonialSection";
import styles from "./Home.module.css";

import hero1 from "../assets/hero1.png";
import hero2 from "../assets/hero2.png";
import hero3 from "../assets/hero3.png";

const slides = [
  {
    image: hero1,
    title: "Welcome to Chituku Deluxe Cafe",
    subtitle: "Taste the best food in Chibavi",
  },
  {
    image: hero2,
    title: "Fresh Flavours, Warm Moments",
    subtitle: "Enjoy delicious meals made to satisfy",
  },
  {
    image: hero3,
    title: "Good Food, Great Experience",
    subtitle: "Your favourite spot for tasty bites in Chibavi",
  },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className={styles.home}>
      <section className={styles.hero}>
        <div
          className={styles.backgroundLayer}
          style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
        ></div>
        <div className={styles.overlay}></div>

        <div className={styles.content}>
          <span className={styles.eyebrow}>Deluxe cafe in Chibavi</span>
          <h1>{slides[currentSlide].title}</h1>
          <p>{slides[currentSlide].subtitle}</p>

          <div className={styles.buttons}>
            <Link to="/menu" className={styles.menuBtn}>
              View Menu
            </Link>
            <Link to="/contact" className={styles.orderBtn}>
              Order Now
            </Link>
          </div>

          <div className={styles.indicators} aria-label="Hero slides">
            {slides.map((slide, index) => (
              <button
                key={slide.title}
                type="button"
                className={`${styles.indicator} ${
                  currentSlide === index ? styles.activeIndicator : ""
                }`.trim()}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Show slide ${index + 1}: ${slide.title}`}
                aria-pressed={currentSlide === index}
              />
            ))}
          </div>
        </div>
      </section>

      <div className={styles.specialStage}>
        <div className={styles.specialStagePanel}>
          <SpecialFoods />
        </div>
      </div>

      <AboutSection />
      <MealsCarousel />
      <LocationSection />
      <TestimonialSection />
    </main>
  );
}
