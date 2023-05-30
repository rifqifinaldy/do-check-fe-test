import { ChangeEvent } from "react";
import styles from "./styles.module.scss";

interface IInputProps {
  label: string;
  type: "text" | "number" | "date";
  id?: string;
  required?: boolean;
  value?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  maxLength?: number;
  minLength?: number;
}

const Input: React.FC<IInputProps> = ({
  id,
  label,
  type,
  required,
  value,
  onChange,
  maxLength,
  minLength,
}) => {
  return (
    <div className={styles["input-group"]}>
      <input
        onChange={onChange}
        id={id}
        className={styles["input-field"]}
        value={value}
        type={type}
        required={required}
        placeholder=" "
        maxLength={maxLength}
        minLength={minLength}
      />
      <label htmlFor={id} className={styles["input-label"]}>
        {label}
      </label>
    </div>
  );
};

export default Input;
