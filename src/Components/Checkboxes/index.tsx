import { ChangeEvent, ReactNode } from "react";
import styles from "./styles.module.scss";

interface ICheckbox {
  checked: boolean;
  label: ReactNode;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Checkboxes: React.FC<ICheckbox> = ({ checked, label, onChange }) => {
  return (
    <label className={styles["checkboxes-wrapper"]}>
      <input
        onChange={onChange}
        type="checkbox"
        checked={checked ? true : false}
        className={styles["checkboxes-field"]}
      />
      <span>{label}</span>
    </label>
  );
};

export default Checkboxes;
