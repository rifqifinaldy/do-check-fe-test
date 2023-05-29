import PageHeader from "../../Components/Page-Header";
import { IPagesProps } from "../../Routes/App.Routes";

const SecondQuestion: React.FC<IPagesProps> = ({ headers }) => {
  return (
    <>
      <PageHeader heading={headers.title} subheading={headers.subtitle} />
    </>
  );
};

export default SecondQuestion;
