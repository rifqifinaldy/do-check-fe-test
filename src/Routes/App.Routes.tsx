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

export const AppRoutes: IRoutes[] = [
  {
    path: "/",
    element: <DefaultLayout />,
    exact: true,
    children: [
      {
        path: "/",
        element: <HomePage />,
        exact: true,
      },
      {
        path: "/first-question",
        element: <FirstQuestion />,
        exact: true,
      },
      {
        path: "/second-question",
        element: <SecondQuestion />,
        exact: true,
      },
      {
        path: "/third-question",
        element: <ThirdQuestion />,
        exact: true,
      },
    ],
  },
];
