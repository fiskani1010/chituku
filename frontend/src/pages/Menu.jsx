import { menuSections } from "../data/foodItems";
import styles from "./Menu.module.css";

const WHATSAPP_NUMBER = "265999000000";

function buildWhatsAppUrl(item) {
  const imageUrl =
    typeof window === "undefined"
      ? item.image
      : new URL(item.image, window.location.origin).href;

  const message = [
    "Hello Chituku Deluxe Cafe, I would like to order this meal:",
    `Meal: ${item.title}`,
    `Category: ${item.category}`,
    `Price: ${item.price}`,
    `Description: ${item.description}`,
    `Image: ${imageUrl}`,
  ].join("\n");

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export default function Menu() {
  return (
    <main className={styles.menuPage}>
      <section className={styles.hero}>
        <span className={styles.eyebrow}>Cafe menu</span>
        <h1>Practical meals, fuller plates, and cafe favourites.</h1>
        <p>
          Every image below comes from the current food collection in this
          project, grouped into menu sections so the route feels like a real
          menu instead of a placeholder page.
        </p>
      </section>

      <div className={styles.sectionList}>
        {menuSections.map((section) => (
          <section key={section.title} className={styles.sectionCard}>
            <div className={styles.sectionHead}>
              <h2>{section.title}</h2>
              <p>{section.description}</p>
            </div>

            <div className={styles.grid}>
              {section.items.map((item) => (
                <article key={item.id} className={styles.itemCard}>
                  <div className={styles.imageWrap}>
                    <img src={item.image} alt={item.title} />
                    <span className={styles.price}>{item.price}</span>
                  </div>

                  <div className={styles.itemBody}>
                    <span className={styles.category}>{item.category}</span>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <a
                      className={styles.orderButton}
                      href={buildWhatsAppUrl(item)}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span className={styles.orderIcon} aria-hidden="true">
                        <svg viewBox="0 0 24 24" role="img" focusable="false">
                          <path
                            fill="currentColor"
                            d="M12.02 2C6.5 2 2.03 6.46 2.03 11.97c0 1.76.46 3.46 1.32 4.96L2 22l5.22-1.37a10 10 0 0 0 4.8 1.23h.01c5.51 0 9.97-4.47 9.97-9.98A9.93 9.93 0 0 0 19.1 4.9 9.94 9.94 0 0 0 12.02 2Zm0 18.14h-.01a8.27 8.27 0 0 1-4.21-1.16l-.3-.18-3.1.82.83-3.03-.2-.31a8.24 8.24 0 0 1-1.27-4.42c0-4.57 3.72-8.29 8.3-8.29 2.21 0 4.28.86 5.84 2.42a8.2 8.2 0 0 1 2.43 5.84c0 4.58-3.72 8.31-8.3 8.31Zm4.56-6.2c-.25-.13-1.46-.72-1.69-.8-.23-.08-.39-.13-.56.13-.16.25-.64.8-.79.97-.15.16-.29.18-.54.06-.25-.13-1.05-.39-2-.9-.74-.43-1.24-.96-1.39-1.12-.15-.17-.02-.26.11-.38.11-.11.25-.29.38-.43.13-.15.17-.25.25-.42.08-.17.04-.32-.02-.45-.07-.13-.56-1.34-.77-1.84-.2-.48-.41-.42-.56-.42h-.48c-.17 0-.45.06-.68.32-.23.25-.88.86-.88 2.1s.9 2.44 1.03 2.61c.13.16 1.77 2.7 4.28 3.78.6.26 1.08.41 1.45.52.61.19 1.17.17 1.61.1.49-.07 1.46-.6 1.67-1.18.2-.58.2-1.08.14-1.18-.06-.1-.23-.16-.48-.28Z"
                          />
                        </svg>
                      </span>
                      <span>Order</span>
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
