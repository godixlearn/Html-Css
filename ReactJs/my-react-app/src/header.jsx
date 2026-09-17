function Header() {
  const styles = {
    header: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "16px 24px",
      backgroundColor: "#ffffff",
      borderBottom: "1px solid #e5e7eb",
    },

    logo: {
      fontSize: "24px",
      fontWeight: "700",
      color: "#f97316",
      margin: 0,
    },

    nav: {
      display: "flex",
      gap: "24px",
    },

    link: {
      textDecoration: "none",
      color: "#374151",
      fontSize: "15px",
    },
  };

  return (
    <header style={styles.header}>
      <h1 style={styles.logo}>GoDix</h1>

      <nav style={styles.nav}>
        <a href="/" style={styles.link}>
          Home
        </a>
        <a href="/assessments" style={styles.link}>
          Assessments
        </a>
        <a href="/skills" style={styles.link}>
          Skills
        </a>
      </nav>
    </header>
  );
}

export default Header;
