import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className="styles.footer">
      <div className={`container ${styles.footerContainer}`}>
        <div>
          <h3>Contact Info</h3>
          <p>Fusce at libero iaculis, venenatis augue quis,</p>
          <p>pharetra lorem. Curabitur ut dolor eu elit consequat ultricies.</p>
          <p>
            <i
              className="fa-solid fa-phone"
              style={{ color: "rgb(251, 7, 29)" }}
            ></i>
            010-020-0120
          </p>
          <p>
            <i
              className="fa-solid fa-envelope"
              style={{ color: "rgb(251, 7, 29)" }}
            ></i>
            general@company.com
          </p>
        </div>

        <div>
          <h3>Opening Hours</h3>
          <p>Monday - Friday 06:00 AM - 10:00 PM</p>
          <p>Saturday 09:00 AM - 08:00 PM</p>
          <p>Sunday Closed</p>

          <div className={styles.footerIcons}>
            <i
              className="fa-brands fa-square-instagram"
              style={{ color: "rgb(251, 7, 29)" }}
            ></i>
            <i
              className="fa-brands fa-square-facebook"
              style={{ color: "rgb(251, 7, 29)" }}
            ></i>
            <i
              className="fa-brands fa-square-twitter"
              style={{ color: "rgb(251, 7, 29)" }}
            ></i>
          </div>
        </div>
      </div>

      <p className={styles.footerCopyrights}>
        © 2026 Gowri Shankar. All rights reserved.
      </p>
    </footer>
  );
}
