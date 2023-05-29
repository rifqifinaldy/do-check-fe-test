import styles from "./styles.module.scss";
import Card from "../../Components/Card";
import PageHeader from "../../Components/Page-Header";
import { useNavigate } from "react-router-dom";
import { IPagesProps } from "../../Routes/App.Routes";

interface ICards {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  slug: string;
}

const HomePage: React.FC<IPagesProps> = ({ headers }) => {
  const navigate = useNavigate();
  const redirect = (url: string) => {
    navigate(url);
  };

  // Card Items
  const cardItems: ICards[] = [
    {
      id: 0,
      title: "First Question",
      subtitle: "Map Array Data",
      image: "https://placehold.co/600x400/118ab2/white?text=1st+Question",
      slug: "/first-question",
    },
    {
      id: 1,
      title: "Second Question",
      subtitle: "Passing Props Via Context",
      image: "https://placehold.co/600x400/118ab2/white?text=2nd+Question",
      slug: "/second-question",
    },
    {
      id: 3,
      title: "Third Question",
      subtitle: "Create, Edit, Delete, Render, To do List",
      image: "https://placehold.co/600x400/118ab2/white?text=3rd+Question",
      slug: "/third-question",
    },
  ];

  return (
    <>
      <PageHeader heading={headers.title} subheading={headers.subtitle} />

      <div className={styles["card-grid"]}>
        {cardItems.map((card) => {
          return (
            <Card
              key={card.id}
              image={card.image}
              title={card.title}
              subtitle={card.subtitle}
              action={() => redirect(card.slug)}
            />
          );
        })}
      </div>
    </>
  );
};

export default HomePage;
