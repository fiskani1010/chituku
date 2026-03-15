import AboutSection from "../components/AboutSection";
import styles from "./About.module.css";

export default function About() {
  return (
    <main className={styles.aboutPage}>
      <section className={styles.hero}>
        <span className={styles.eyebrow}>About the cafe</span>
        <h1>About Chituku Deluxe Cafe</h1>
        <p>
          This page now connects directly to the same about section already used
          on the home page, so the navigation leads to real content instead of a
          blank route.
        </p>
      </section>

      <AboutSection />
    </main>
  );
}
