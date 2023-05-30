import Items from "../../Components/List";
import PageHeader from "../../Components/Page-Header";
import ItemProvider from "../../Context/ItemContext/item.context";
import { IPagesProps } from "../../Routes/App.Routes";
import { Iitem } from "../../Types/item.type";

const SecondQuestion: React.FC<IPagesProps> = ({ headers }) => {
  const items: Iitem[] = [
    {
      id: 1,
      name: "Bread",
      quantity: 20,
      price: 2000,
    },
    {
      id: 2,
      name: "Candy",
      quantity: 2,
      price: 200,
    },
    {
      id: 3,
      name: "Pop corn",
      quantity: 2000,
      price: 750,
    },
  ];

  return (
    <>
      <PageHeader heading={headers.title} subheading={headers.subtitle} />
      <h2>Shopping List</h2>
      <ItemProvider value={items}>
        <Items />
      </ItemProvider>
    </>
  );
};

export default SecondQuestion;
