import styles from "./styles.module.scss";
import { Outlet } from "react-router-dom";
import Sidebar from "../Components/Sidebar";

const DefaultLayout = () => {
  return (
    <div className={styles["layout"]}>
      <Sidebar />
      <main className={styles["content"]}>
        <Outlet />
      </main>
    </div>
  );
};

export default DefaultLayout;
