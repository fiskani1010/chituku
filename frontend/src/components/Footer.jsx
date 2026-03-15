import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

const socialLinks = [
  {
    label: "X",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" role="img" focusable="false" aria-hidden="true">
        <path
          fill="currentColor"
          d="M18.9 3H22l-6.78 7.76L23.2 21h-6.26l-4.9-6.42L6.44 21H3.33l7.25-8.29L1 3h6.42l4.43 5.86L18.9 3Zm-1.1 16.1h1.73L6.46 4.82H4.6L17.8 19.1Z"
        />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" role="img" focusable="false" aria-hidden="true">
        <path
          fill="currentColor"
          d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3A1.96 1.96 0 1 0 5.3 6.91 1.96 1.96 0 0 0 5.25 3Zm4.07 5.5V20h3.38v-6.07c0-3.39 4.37-3.67 4.37 0V20h3.38v-7.24c0-5.63-6.43-5.42-7.75-2.65V8.5H9.32Z"
        />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" role="img" focusable="false" aria-hidden="true">
        <path
          fill="currentColor"
          d="M7.8 3h8.4C19.4 3 21 4.6 21 7.8v8.4c0 3.2-1.6 4.8-4.8 4.8H7.8C4.6 21 3 19.4 3 16.2V7.8C3 4.6 4.6 3 7.8 3Zm-.1 1.8c-1.98 0-2.9.92-2.9 2.9v8.6c0 1.98.92 2.9 2.9 2.9h8.6c1.98 0 2.9-.92 2.9-2.9V7.7c0-1.98-.92-2.9-2.9-2.9H7.7Zm8.95 1.35a1.15 1.15 0 1 1 0 2.3 1.15 1.15 0 0 1 0-2.3ZM12 7.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 0 1 12 7.5Zm0 1.8A2.7 2.7 0 1 0 14.7 12 2.7 2.7 0 0 0 12 9.3Z"
        />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" role="img" focusable="false" aria-hidden="true">
        <path
          fill="currentColor"
          d="M13.5 21v-8.08h2.7l.4-3.15h-3.1V7.76c0-.91.25-1.54 1.56-1.54H16.7V3.4c-.28-.04-1.23-.12-2.34-.12-2.31 0-3.89 1.41-3.89 4v2.49H7.84v3.15h2.63V21h3.03Z"
        />
      </svg>
    ),
  },
];

const siteMapLinks = [
  { to: "/", label: "Homepage" },
  { to: "/menu", label: "Menu" },
  { to: "/gallery", label: "Gallery" },
  { to: "/about", label: "About Chituku" },
  { to: "/contact", label: "Contact Us" },
];

const legalLinks = [
  { to: "/privacy", label: "Privacy Policy" },
  { to: "/terms", label: "Terms of Services" },
  { to: "/contact", label: "Support & Contact" },
];

const directionsUrl =
  "https://www.google.com/maps/dir/?api=1&destination=-11.442014,34.001622&travelmode=driving";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.outerShell}>
        <div className={styles.panel}>
          <span className={styles.lineArtPrimary} aria-hidden="true"></span>
          <span className={styles.lineArtSecondary} aria-hidden="true"></span>
          <span className={styles.lineArtTertiary} aria-hidden="true"></span>

          <div className={styles.contentGrid}>
            <div className={styles.brandColumn}>
              <div className={styles.brandMarkRow}>
                <span className={styles.brandMark} aria-hidden="true">
                  <svg viewBox="0 0 40 40" role="img" focusable="false">
                    <path
                      fill="currentColor"
                      d="M20 4 35 31H5L20 4Zm0 7.3-8.8 15.9h17.6L20 11.3Zm0 4.8-4.3 7.8h8.6L20 16.1Zm0 4.5-1.7 3.1h3.4L20 20.6Z"
                    />
                  </svg>
                </span>
                <div>
                  <h2>Chituku Deluxe Cafe</h2>
                  <p className={styles.brandMini}>Chibavi, Mzuzu</p>
                </div>
              </div>

              <p className={styles.brandText}>
                Fresh meals, welcoming service, and a practical cafe experience
                built for families, students, workers, and everyday visitors in
                Chibavi.
              </p>

              <div className={styles.socials} aria-label="Social media links">
                {socialLinks.map((item) => (
                  <a key={item.label} href={item.href} aria-label={item.label}>
                    {item.icon}
                  </a>
                ))}
              </div>

              <button
                type="button"
                className={styles.backToTop}
                onClick={scrollToTop}
              >
                <span className={styles.backIcon} aria-hidden="true">
                  <svg viewBox="0 0 24 24" role="img" focusable="false">
                    <path
                      fill="currentColor"
                      d="M12 5.5 4.75 12.75l1.5 1.5L12 8.56l5.75 5.69 1.5-1.5L12 5.5Zm0 5.75L4.75 18.5l1.5 1.5L12 14.31 17.75 20l1.5-1.5L12 11.25Z"
                    />
                  </svg>
                </span>
                <span>Back To Top</span>
              </button>
            </div>

            <div className={styles.linkColumns}>
              <section className={styles.linkColumn}>
                <h3>Site Map</h3>
                <nav className={styles.linkList}>
                  {siteMapLinks.map((item) => (
                    <Link key={item.label} to={item.to}>
                      {item.label}
                    </Link>
                  ))}
                </nav>
              </section>

              <section className={styles.linkColumn}>
                <h3>Legal</h3>
                <nav className={styles.linkList}>
                  {legalLinks.map((item) => (
                    <Link key={item.label} to={item.to}>
                      {item.label}
                    </Link>
                  ))}
                </nav>
              </section>

              <section className={styles.linkColumn}>
                <h3>Directions</h3>
                <div className={styles.directionBlock}>
                  <p>Chibavi, Mzuzu, Malawi</p>
                  <p>11deg 26'31.25"S 34deg 00'05.84"E</p>
                  <a href={directionsUrl} target="_blank" rel="noreferrer">
                    Get Directions
                  </a>
                </div>
              </section>
            </div>
          </div>

          <div className={styles.bottomStrip}>
            <p>Copyright {currentYear} Chituku Deluxe Cafe. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
