import { useEffect, useState } from "react";
import { onAuthStateChanged, updateProfile } from "firebase/auth";
import { auth, authPersistence } from "../../Config/Firebase";
import styles from "./Profile.module.css";

function Profile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [photoURL, setPhotoURL] = useState("");
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    async function initializeAuth() {
      try {
        await authPersistence;

        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
          setUser(currentUser);
          setPhotoURL(currentUser?.photoURL || "");
          setLoading(false);
        });

        return unsubscribe;
      } catch (error) {
        console.error("Failed to initialize authentication:", error);
        setLoading(false);
      }
    }

    let unsubscribe;

    initializeAuth().then((cleanup) => {
      unsubscribe = cleanup;
    });

    return () => unsubscribe?.();
  }, []);

  async function handleSavePhoto() {
    if (!auth.currentUser) return;

    try {
      setSaving(true);

      await updateProfile(auth.currentUser, {
        photoURL: photoURL.trim(),
      });

      setUser({ ...auth.currentUser });
      setIsEditing(false);
    } catch (error) {
      console.error("Firebase error code:", error.code);
      console.error("Firebase error message:", error.message);
      console.error("Full error:", error);
    } finally {
      setSaving(false);
    }
  }

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

          <button
            type="button"
            className={styles.editAvatar}
            onClick={() => {
              setPhotoURL(user.photoURL || "");
              setIsEditing(!isEditing);
            }}
            title="Edit profile picture URL"
          >
            ✎
          </button>
        </div>

        {isEditing && (
          <div className={styles.photoEditor}>
            <input
              type="url"
              placeholder="Enter profile image URL"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
            />

            <div className={styles.editActions}>
              <button type="button" onClick={handleSavePhoto} disabled={saving}>
                {saving ? "Saving..." : "Save"}
              </button>

              <button
                type="button"
                onClick={() => {
                  setPhotoURL(user.photoURL || "");
                  setIsEditing(false);
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        )}

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
