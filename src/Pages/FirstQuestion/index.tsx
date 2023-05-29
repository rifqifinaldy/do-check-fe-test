import PageHeader from "../../Components/Page-Header";
import Table, { ITableColumns } from "../../Components/Table";
import { IPagesProps } from "../../Routes/App.Routes";
import { IPassenger } from "../../Types-Const/passenger.type";

const FirstQuestion: React.FC<IPagesProps> = ({ headers }) => {
  const passenger: IPassenger[] = [
    {
      id: "KJSD93",
      name: "Maria Anders",
      age: 20,
    },
    {
      id: "KJSD94",
      name: "Francisco Change",
      age: 35,
    },
    {
      id: "KJSD95",
      name: "Anne Angelo",
      age: 28,
    },
  ];

  const columns: ITableColumns[] = [
    {
      key: "id",
      title: "ID",
    },
    {
      key: "name",
      title: "Name",
    },
    {
      key: "age",
      title: "Age",
    },
  ];

  return (
    <>
      <PageHeader heading={headers.title} subheading={headers.subtitle} />
      <Table title="List of Passenger" datas={passenger} columns={columns} />
    </>
  );
};

export default FirstQuestion;
