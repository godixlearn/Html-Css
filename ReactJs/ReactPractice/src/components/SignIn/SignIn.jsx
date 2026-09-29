import { useState } from "react";
import styles from "./SignIn.module.css";

function SignIn({ isSignUp, setIsSignUp }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    alert(
      "this is your Email: " + email + " this is your password: " + password,
    );
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Sign In</h1>

      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />

        <input
          className={styles.input}
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />

        <button className={styles.button} type="submit">
          Sign In
        </button>
      </form>

      <p>
        Don't have an account? {isSignUp}
        <span
          className={styles.clickableText}
          onClick={() => setIsSignUp(true)}
        >
          Sign Up
        </span>
      </p>
    </div>
  );
}

export default SignIn;
