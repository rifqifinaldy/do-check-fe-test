import DefaultLayout from "../Layouts";
import FirstQuestion from "../Pages/FirstQuestion";
import HomePage from "../Pages/HomePages";
import SecondQuestion from "../Pages/SecondQuestion";
import ThirdQuestion from "../Pages/ThirdQuestion";

interface IRoutes {
  path: string;
  element: JSX.Element;
  exact: boolean;
  children?: IRoutes[];
}

export interface IPagesProps {
  headers: {
    title: string;
    subtitle: string;
  };
}

// Page Headers Props
const pageHeader = {
  "home-page": {
    title: "Do-Check Frontend Test",
    subtitle: "By Rifqi Finaldy",
  },
  "first-question": {
    title: "First Question",
    subtitle: "Map Array of Passenger Data and Render to the table",
  },
  "second-question": {
    title: "Second Question",
    subtitle: "Passing Props Via Context",
  },
  "third-question": {
    title: "Third Question",
    subtitle: "Create, Render, Update, Delete 'TO DO LIST'",
  },
};

// Default Layout Routes and Element to be rendered
const defaultLayout: IRoutes[] = [
  {
    path: "/",
    element: <HomePage headers={pageHeader["home-page"]} />,
    exact: true,
  },
  {
    path: "/first-question",
    element: <FirstQuestion headers={pageHeader["first-question"]} />,
    exact: true,
  },
  {
    path: "/second-question",
    element: <SecondQuestion headers={pageHeader["second-question"]} />,
    exact: true,
  },
  {
    path: "/third-question",
    element: <ThirdQuestion headers={pageHeader["third-question"]} />,
    exact: true,
  },
];

export const AppRoutes: IRoutes[] = [
  {
    path: "/",
    element: <DefaultLayout />,
    exact: true,
    children: defaultLayout,
  },
];
