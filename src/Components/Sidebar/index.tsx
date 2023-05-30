import { menus } from "./sidebar.config";
import styles from "./styles.module.scss";
import { NavLink } from "react-router-dom";

const Sidebar: React.FC = () => {
  return (
    <div className={styles["sidebar"]}>
      <div className={styles["app-logo"]}>
        <h1 className={styles["app-title"]}>Do-Check</h1>
        <h6 className={styles["app-subtitle"]}>FE Test Rifqi Finaldy</h6>
      </div>
      {/* Dekstop Sidebar */}
      <div className={styles["sidebar-menus"]}>
        {menus.map((menu) => {
          return (
            <NavLink
              key={menu.to}
              className={({ isActive }) =>
                isActive ? styles["active-menu"] : styles["inactive-menu"]
              }
              to={menu.to}
            >
              {menu.text}
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
