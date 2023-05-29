import PageHeader from "../../Components/Page-Header";
import { IPagesProps } from "../../Routes/App.Routes";

const ThirdQuestion: React.FC<IPagesProps> = ({ headers }) => {
  return (
    <>
      <PageHeader heading={headers.title} subheading={headers.subtitle} />
      <h2>To do List</h2>
      <form>
        <input type="text" />
      </form>
    </>
  );
};

export default ThirdQuestion;
