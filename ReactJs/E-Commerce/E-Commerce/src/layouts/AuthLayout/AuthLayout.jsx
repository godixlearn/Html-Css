import { Outlet } from "react-router";
import styles from "./AuthLayout.module.css";

function AuthLayout() {
  return (
    <div className={styles.layout}>
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
}

export default AuthLayout;
