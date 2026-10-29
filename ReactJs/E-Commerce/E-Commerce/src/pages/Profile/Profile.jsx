import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, authPersistence } from "../../Config/Firebase";
import styles from "./Profile.module.css";

function Profile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function initializeAuth() {
      try {
        await authPersistence;

        onAuthStateChanged(auth, (currentUser) => {
          setUser(currentUser);
          setLoading(false);
        });
      } catch (error) {
        console.error("Failed to initialize authentication:", error);
        setLoading(false);
      }
    }

    initializeAuth();
  }, []);

  console.log(user);

  if (loading) {
    return <div className={styles.message}>Loading profile...</div>;
  }

  if (!user) {
    return (
      <div className={styles.message}>Please sign in to view your profile.</div>
    );
  }

  return (
    <main className={styles.page}>
      <h1 className={styles.heading}>My Profile</h1>

      <section className={styles.profileCard}>
        <div className={styles.avatarWrapper}>
          {user.photoURL ? (
            <img
              src={user.photoURL}
              alt={user.displayName || "Profile"}
              className={styles.avatar}
              referrerPolicy="no-referrer"
            />
          ) : (
            <div className={styles.avatarPlaceholder}>
              {(user.displayName || user.email || "U")
                .trim()
                .charAt(0)
                .toUpperCase()}
            </div>
          )}
        </div>

        <h2 className={styles.displayName}>
          {user.displayName || "Not provided"}
        </h2>

        <div className={styles.details}>
          <div className={styles.detailItem}>
            <span className={styles.label}>Email Address</span>
            <p className={styles.value}>{user.email || "Not provided"}</p>
          </div>

          <div className={styles.detailItem}>
            <span className={styles.label}>Phone Number</span>
            <p className={styles.value}>{user.phoneNumber || "Not provided"}</p>
          </div>

          <div className={styles.detailItem}>
            <span className={styles.label}>Photo URL</span>
            <p className={styles.value}>{user.photoURL || "Not provided"}</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Profile;
