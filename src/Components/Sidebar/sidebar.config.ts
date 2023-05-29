interface ISidebarMenus {
  to: string;
  text: string;
}

export const menus: ISidebarMenus[] = [
  {
    to: "/",
    text: "Home Page",
  },
  {
    to: "/first-question",
    text: "1st Question",
  },
  {
    to: "/second-question",
    text: "2nd Question",
  },
  {
    to: "/third-question",
    text: "3rd Question",
  },
];
