import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import styles from "./Header.module.css";
import logo from "../assets/logo.png";

export default function Header() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!isMenuOpen) {
      return undefined;
    }

    const { body } = document;
    const previousOverflow = body.style.overflow;
    body.style.overflow = "hidden";

    return () => {
      body.style.overflow = previousOverflow;
    };
  }, [isMenuOpen]);

  return (
    <>
      <header
        className={`${styles.header} ${isHomePage ? styles.homeHeader : ""}`.trim()}
      >
        <button
          type="button"
          className={`${styles.menuToggle} ${
            isMenuOpen ? styles.menuToggleOpen : ""
          }`.trim()}
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={styles.logo}>
          <Link to="/" aria-label="Chituku Deluxe Cafe home">
            <img src={logo} alt="Chituku Deluxe Cafe" />
          </Link>
        </div>

        <nav className={styles.nav}>
          <NavLink to="/menu">Menu</NavLink>
          <NavLink to="/gallery">Gallery</NavLink>
          <NavLink to="/about">About</NavLink>
        </nav>

        <div className={styles.contact}>
          <Link to="/contact">Contact Us</Link>
        </div>
      </header>

      <div
        className={`${styles.mobileOverlay} ${
          isMenuOpen ? styles.mobileOverlayVisible : ""
        }`.trim()}
        onClick={() => setIsMenuOpen(false)}
      />

      <aside
        id="mobile-navigation"
        className={`${styles.mobilePanel} ${
          isMenuOpen ? styles.mobilePanelOpen : ""
        }`.trim()}
        aria-hidden={!isMenuOpen}
      >
        <div className={styles.mobilePanelHeader}>
          <p>Navigation</p>
          <button
            type="button"
            className={styles.mobileClose}
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close navigation menu"
          >
            <span></span>
            <span></span>
          </button>
        </div>

        <nav className={styles.mobileNav}>
          <NavLink to="/menu">Menu</NavLink>
          <NavLink to="/gallery">Gallery</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>

        <div className={styles.mobileContact}>
          <Link to="/contact">Contact Us</Link>
        </div>
      </aside>
    </>
  );
}
