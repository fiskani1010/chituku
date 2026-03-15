import { useEffect, useRef, useState } from "react";
import styles from "./AboutSection.module.css";
import aboutImage from "../assets/about.png";

export default function AboutSection() {
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
        threshold: 0.25,
        rootMargin: "0px 0px -8% 0px",
      },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`${styles.aboutSection} ${isVisible ? styles.visible : ""}`.trim()}
      aria-labelledby="about-chituku-title"
    >
      <div className={styles.imageFrame}>
        <img src={aboutImage} alt="Chituku Deluxe Cafe interior and food" />
      </div>

      <div className={styles.content}>
        <h2 id="about-chituku-title">About Chituku Deluxe Cafe</h2>
        <p>
          Chituku Deluxe Cafe is a vibrant food spot in Chibavi, Mzuzu, serving
          fresh and delicious meals in a warm and welcoming atmosphere.
        </p>
        <p>
          We offer tasty food for everyone, from elders and families to kids
          and students looking for a quick school lunch.
        </p>
      </div>
    </section>
  );
}
