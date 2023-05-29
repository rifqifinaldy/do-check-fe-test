import styles from "./style.module.scss";

interface ICardProps {
  image: string;
  title: string;
  subtitle: string;
  action: (type: any) => void;
}

const Card: React.FC<ICardProps> = ({ image, title, subtitle, action }) => {
  return (
    <div className={styles["card"]} onClick={action}>
      <img alt={title} src={image} className={styles["card-image"]} />
      <div className={styles["card-content"]}>
        <h6 className={styles["card-title"]}>{title}</h6>
        <p className={styles["card-subtitle"]}>{subtitle}</p>
      </div>
    </div>
  );
};

export default Card;
