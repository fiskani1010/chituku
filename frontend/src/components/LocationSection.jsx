import { useEffect, useRef, useState } from "react";
import styles from "./LocationSection.module.css";
import mapImage from "../assets/map.jpeg";

const DESTINATION = "-11.442014,34.001622";
const DESTINATION_LABEL = "Chituku Deluxe Cafe, Chibavi, Mzuzu, Malawi";
const DESTINATION_COORDS = `11deg 26'31.25"S 34deg 00'05.84"E`;
const CONTACT_EMAIL = "hello@chitukudeluxecafe.com";
const CONTACT_PHONE = "+265 999 000 000";

function getMapUrls() {
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_EMBED_KEY;
  const destination = encodeURIComponent(DESTINATION);

  const directionsLink = `https://www.google.com/maps/dir/?api=1&destination=${destination}&travelmode=driving`;

  if (apiKey) {
    return {
      liveMapSrc: `https://www.google.com/maps/embed/v1/directions?key=${apiKey}&destination=${destination}&mode=driving`,
      directionsLink,
      isDirectionsMode: true,
    };
  }

  return {
    liveMapSrc: `https://www.google.com/maps?q=${destination}&z=17&output=embed`,
    directionsLink,
    isDirectionsMode: false,
  };
}

export default function LocationSection() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const { liveMapSrc, directionsLink, isDirectionsMode } = getMapUrls();

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
        threshold: 0.2,
        rootMargin: "0px 0px -10% 0px",
      },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`${styles.locationSection} ${isVisible ? styles.visible : ""}`.trim()}
      aria-labelledby="location-title"
    >
      <div className={styles.header}>
        <span className={styles.eyebrow}>Visit the cafe</span>
        <h2 id="location-title">Find Chituku Deluxe Cafe</h2>
        <p>
          See the location on the map, then open Google Maps for turn-by-turn
          directions to the cafe.
        </p>
      </div>

      <div className={styles.mapPanel}>
        <div className={styles.mapFrame}>
          <iframe
            title="Chituku Deluxe Cafe map"
            src={liveMapSrc}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
          {!isDirectionsMode ? (
            <div className={styles.mapBadge}>
              Directions mode inside the map needs a Google Maps API key
            </div>
          ) : null}
        </div>

        <div className={styles.infoGrid}>
          <div className={`${styles.infoSegment} ${styles.photoSegment}`}>
            <img src={mapImage} alt="Map view around Chituku Deluxe Cafe" />
          </div>

          <div className={`${styles.infoSegment} ${styles.addressSegment}`}>
            <span className={styles.infoLabel}>Address</span>
            <h3>{DESTINATION_LABEL}</h3>
            <p>Chibavi, Mzuzu</p>
            <p>Malawi</p>
            <p>{DESTINATION_COORDS}</p>
          </div>

          <div className={`${styles.infoSegment} ${styles.contactSegment}`}>
            <span className={styles.infoLabel}>Contact Information</span>
            <h3>{CONTACT_PHONE}</h3>
            <p>{CONTACT_EMAIL}</p>
            <p>WhatsApp ordering is available from the meal cards above.</p>
          </div>

          <div className={`${styles.infoSegment} ${styles.actionSegment}`}>
            <a href={directionsLink} target="_blank" rel="noreferrer">
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
