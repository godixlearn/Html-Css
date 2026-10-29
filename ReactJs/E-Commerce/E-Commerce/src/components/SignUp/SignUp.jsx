import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./SignUp.module.css";

import { signUp, getAuthErrorMessage } from "../../services/authService";
import { toast } from "react-toastify";

function SignUp() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      await signUp(name, email, password);

      toast.success("Account created successfully!");

      navigate("/home");
    } catch (error) {
      console.error(error.code);
      toast.error(getAuthErrorMessage(error.code));
    }
  }

  return (
    <main className={styles.signupPage}>
      <div className={styles.backgroundCircleOne} />
      <div className={styles.backgroundCircleTwo} />

      <div className={styles.signupCard}>
        <div className={styles.iconBox} aria-hidden="true">
          <svg
            width="25"
            height="25"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M10 17l5-5-5-5" />
            <path d="M15 12H3" />
            <path d="M13 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-6" />
          </svg>
        </div>

        <div className={styles.heading}>
          <h1>Create your account</h1>
          <p>Join us today and discover a better shopping experience.</p>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <span className={styles.inputIcon} aria-hidden="true">
              ♙
            </span>
            <input
              id="signup-name"
              type="text"
              placeholder="Full name"
              aria-label="Full name"
              autoComplete="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
              minLength={2}
            />
          </div>

          <div className={styles.inputGroup}>
            <span className={styles.inputIcon} aria-hidden="true">
              ✉
            </span>
            <input
              id="signup-email"
              type="email"
              placeholder="Email address"
              aria-label="Email address"
              autoComplete="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <span className={styles.inputIcon} aria-hidden="true">
              ♧
            </span>
            <input
              id="signup-password"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              aria-label="Password"
              autoComplete="new-password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
              minLength={8}
            />

            <button
              type="button"
              className={styles.visibilityButton}
              onClick={() => setShowPassword(!showPassword)}
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? "◉" : "◎"}
            </button>
          </div>

          <div className={styles.inputGroup}>
            <span className={styles.inputIcon} aria-hidden="true">
              ♧
            </span>
            <input
              id="signup-confirm-password"
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm password"
              aria-label="Confirm password"
              autoComplete="new-password"
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
              required
              minLength={8}
            />

            <button
              type="button"
              className={styles.visibilityButton}
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              aria-label={
                showConfirmPassword
                  ? "Hide confirm password"
                  : "Show confirm password"
              }
            >
              {showConfirmPassword ? "◉" : "◎"}
            </button>
          </div>

          {error && (
            <p className={styles.error} role="alert">
              {error}
            </p>
          )}

          <button type="submit" className={styles.submitButton}>
            Create Account
            <span aria-hidden="true">→</span>
          </button>
        </form>

        <div className={styles.divider}>
          <span>OR</span>
        </div>

        <p className={styles.signinText}>
          Already have an account? <Link to="/signin">Sign In</Link>
        </p>

        <p className={styles.footerText}>
          By creating an account, you agree to our Terms and Privacy Policy.
        </p>
      </div>
    </main>
  );
}

export default SignUp;
