import styles from "./styles.module.scss";

export enum ButtonVariant {
  PRIMARY = "btn-primary",
  SECONDARY = "btn-secondary",
}

interface IButtonProps {
  children: JSX.Element | string;
  onClick?: (e: React.MouseEvent<HTMLElement>, params?: any) => void;
  type?: "submit" | "button";
  disabled?: boolean;
  block?: boolean;
  variant: ButtonVariant;
}

const Button: React.FC<IButtonProps> = ({
  children,
  type,
  onClick,
  disabled,
  variant,
  block,
}) => {
  return (
    <button
      className={`${styles[variant]} ${
        block ? styles["btn-block"] : styles[""]
      }`}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
