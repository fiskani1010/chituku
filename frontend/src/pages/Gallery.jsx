import "react-photo-view/dist/react-photo-view.css";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { foodItems } from "../data/foodItems";
import styles from "./Gallery.module.css";

export default function Gallery() {
  return (
    <main className={styles.galleryPage}>
      <section className={styles.hero}>
        <span className={styles.eyebrow}>Visual gallery</span>
        <h1>Food gallery</h1>
        <p>
          Browse the full image collection and open any plate for a closer view.
          This gallery uses the same food set as the menu page.
        </p>
      </section>

      <PhotoProvider>
        <div className={styles.masonry}>
          {foodItems.map((item) => (
            <div key={item.id} className={styles.tile}>
              <PhotoView src={item.image}>
                <button
                  type="button"
                  className={styles.photoButton}
                  aria-label={`Open ${item.title} in the gallery`}
                >
                  <div className={styles.frame}>
                    <img src={item.image} alt={item.title} />
                    <div className={styles.caption}>
                      <h2>{item.title}</h2>
                      <p>
                        {item.category} · {item.price}
                      </p>
                    </div>
                  </div>
                </button>
              </PhotoView>
            </div>
          ))}
        </div>
      </PhotoProvider>
    </main>
  );
}
