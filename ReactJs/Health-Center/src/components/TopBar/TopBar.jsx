import styles from "./TopBar.module.css";

function TopBar() {
  return (
    <div className={styles.topBar}>
      <div className={`container ${styles.topBarContent}`}>
        <p>Welcome to a Professional Health Care</p>
        <p>010-060-0160 | 6:00 AM - 10:00 PM (Mon-Fri) | info@company.com</p>
      </div>
    </div>
  );
}

export default TopBar;
