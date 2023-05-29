import styles from "./styles.module.scss";

interface PageHeaderProps {
  heading: string;
  subheading: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ heading, subheading }) => {
  return (
    <div className={styles["page-header"]}>
      <h2 className={styles["welcome-heading"]}>{heading}</h2>
      <h4 className={styles["welcome-subheading"]}>{subheading}</h4>
    </div>
  );
};

export default PageHeader;
