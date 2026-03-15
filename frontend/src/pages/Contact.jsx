import { useState } from "react";
import styles from "./Contact.module.css";

const WHATSAPP_NUMBER = "265999000000";
const CONTACT_PHONE = "+265 999 000 000";
const CONTACT_EMAIL = "hello@chitukudeluxecafe.com";
const LOCATION = `Chibavi, Mzuzu, Malawi`;

function buildWhatsAppMessage(form) {
  return [
    "Hello Chituku Deluxe Cafe,",
    "",
    "I would like to contact you through the website form.",
    `Name: ${form.name}`,
    `Phone: ${form.phone}`,
    `Topic: ${form.topic}`,
    "",
    "Message:",
    form.message,
  ].join("\n");
}

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    topic: "General enquiry",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const message = buildWhatsAppMessage(form);
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <main className={styles.contactPage}>
      <section className={styles.hero}>
        <span className={styles.eyebrow}>Contact us</span>
        <h1>Send your message straight to WhatsApp.</h1>
        <p>
          Use the form below to send a direct message to Chituku Deluxe Cafe.
          Once you submit, WhatsApp opens with your details already filled in.
        </p>
      </section>

      <div className={styles.content}>
        <section className={styles.infoPanel}>
          <h2>Talk to the cafe</h2>
          <p className={styles.intro}>
            Reach out for menu questions, table enquiries, meal availability,
            or quick ordering support.
          </p>

          <div className={styles.infoList}>
            <div className={styles.infoCard}>
              <span>Phone</span>
              <strong>{CONTACT_PHONE}</strong>
              <p>Use this number for direct WhatsApp follow-up.</p>
            </div>

            <div className={styles.infoCard}>
              <span>Email</span>
              <strong>{CONTACT_EMAIL}</strong>
              <p>Best for formal enquiries and business communication.</p>
            </div>

            <div className={styles.infoCard}>
              <span>Location</span>
              <strong>{LOCATION}</strong>
              <p>Serving Chibavi, Mzuzu with fresh meals and a welcoming cafe space.</p>
            </div>
          </div>

          <a
            className={styles.whatsAppLink}
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noreferrer"
          >
            Open WhatsApp Directly
          </a>
        </section>

        <section className={styles.formPanel}>
          <h2>Contact form</h2>
          <p>
            Fill in your details and your message will be prepared for WhatsApp
            automatically.
          </p>

          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.row}>
              <div className={styles.field}>
                <label htmlFor="name">Your name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="phone">Phone number</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+265 ..."
                  required
                />
              </div>
            </div>

            <div className={styles.field}>
              <label htmlFor="topic">Topic</label>
              <select
                id="topic"
                name="topic"
                value={form.topic}
                onChange={handleChange}
              >
                <option>General enquiry</option>
                <option>Food order</option>
                <option>Table reservation</option>
                <option>Event catering</option>
                <option>Business enquiry</option>
              </select>
            </div>

            <div className={styles.field}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                required
              />
            </div>

            <button type="submit" className={styles.submit}>
              <span className={styles.submitIcon} aria-hidden="true">
                <svg viewBox="0 0 24 24" role="img" focusable="false">
                  <path
                    fill="currentColor"
                    d="M12.02 2C6.5 2 2.03 6.46 2.03 11.97c0 1.76.46 3.46 1.32 4.96L2 22l5.22-1.37a10 10 0 0 0 4.8 1.23h.01c5.51 0 9.97-4.47 9.97-9.98A9.93 9.93 0 0 0 19.1 4.9 9.94 9.94 0 0 0 12.02 2Zm0 18.14h-.01a8.27 8.27 0 0 1-4.21-1.16l-.3-.18-3.1.82.83-3.03-.2-.31a8.24 8.24 0 0 1-1.27-4.42c0-4.57 3.72-8.29 8.3-8.29 2.21 0 4.28.86 5.84 2.42a8.2 8.2 0 0 1 2.43 5.84c0 4.58-3.72 8.31-8.3 8.31Zm4.56-6.2c-.25-.13-1.46-.72-1.69-.8-.23-.08-.39-.13-.56.13-.16.25-.64.8-.79.97-.15.16-.29.18-.54.06-.25-.13-1.05-.39-2-.9-.74-.43-1.24-.96-1.39-1.12-.15-.17-.02-.26.11-.38.11-.11.25-.29.38-.43.13-.15.17-.25.25-.42.08-.17.04-.32-.02-.45-.07-.13-.56-1.34-.77-1.84-.2-.48-.41-.42-.56-.42h-.48c-.17 0-.45.06-.68.32-.23.25-.88.86-.88 2.1s.9 2.44 1.03 2.61c.13.16 1.77 2.7 4.28 3.78.6.26 1.08.41 1.45.52.61.19 1.17.17 1.61.1.49-.07 1.46-.6 1.67-1.18.2-.58.2-1.08.14-1.18-.06-.1-.23-.16-.48-.28Z"
                  />
                </svg>
              </span>
              <span>Send To WhatsApp</span>
            </button>
          </form>

          <p className={styles.note}>
            The current WhatsApp number is using the project placeholder. Replace
            it later with the real cafe number in this page when you have it.
          </p>
        </section>
      </div>
    </main>
  );
}
