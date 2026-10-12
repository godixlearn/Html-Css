import styles from "./MainLayout.module.css";

import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className={styles.layout}>
      <Navbar />
      <div className={styles.content}>
        <Sidebar />

        <main className={styles.main}>
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
}
