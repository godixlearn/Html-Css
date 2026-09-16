function Hero() {
  const styles = {
    hero: {
      padding: "60px 40px",
      textAlign: "center",
      backgroundColor: "#f8fafc",
    },

    title: {
      fontSize: "40px",
      marginBottom: "10px",
      color: "#1f2937",
    },

    subtitle: {
      fontSize: "18px",
      color: "#6b7280",
      marginBottom: "30px",
    },

    topic: {
      fontSize: "24px",
      color: "#1f2937",
      marginBottom: "15px",
    },

    list: {
      listStyle: "none",
      padding: 0,
      marginBottom: "30px",
      color: "#4b5563",
      lineHeight: "2",
    },

    button: {
      padding: "12px 24px",
      border: "none",
      borderRadius: "6px",
      backgroundColor: "#f97316",
      color: "#ffffff",
      fontSize: "16px",
      cursor: "pointer",
    },
  };

  return (
    <section style={styles.hero}>
      <h1 style={styles.title}>Welcome guys</h1>

      <p style={styles.subtitle}>Learn React with JavaScript</p>

      <h2 style={styles.topic}>Today's Topic</h2>

      <ul style={styles.list}>
        <li>What is React?</li>
        <li>What is Component?</li>
        <li>What is JSX?</li>
      </ul>

      <button style={styles.button}>Start Learning</button>
    </section>
  );
}

export default Hero;
