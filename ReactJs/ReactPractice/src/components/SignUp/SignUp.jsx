import { useState } from "react";
import styles from "./SignUp.module.css";

function SignUp({ isSignUp, setIsSignUp }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    alert("Account created for: " + name);
  }

  return (
    <div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h1>Sign Up</h1>

        <input
          className={styles.input}
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

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

        <input
          className={styles.input}
          type="password"
          placeholder="Confirm your password"
          value={confirmPassword}
          onChange={(event) => setConfirmPassword(event.target.value)}
        />

        <button className={styles.button} type="submit">
          Sign Up
        </button>

        <p>
          Already have an account? {isSignUp}
          <span
            className={styles.clickableText}
            onClick={() => setIsSignUp(false)}
          >
            Sign In
          </span>
        </p>
      </form>
    </div>
  );
}

export default SignUp;
