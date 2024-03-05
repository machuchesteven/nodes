import Avatar from "../components/Avatar";

import { SideNavItem } from "./types";

export const SIDENAV_ITEMS: SideNavItem[] = [
  {
    title: "Home",
    path: "/",
    icon: <Avatar />,
  },
  {
    title: "Projects",
    path: "/projects",
    icon: <Avatar />,
  },
  {
    title: "Demos",
    path: "/demos",
    icon: <Avatar />,
    submenu: true,
    subMenuItems: [
      {
        title: "All",
        path: "/projects",
        icon: <Avatar />,
      },
      {
        title: "web-designs",
        path: "/projects/web-designs",
        icon: <Avatar />,
      },
    ],
  },

  {
    title: "Messages",
    path: "/messages",
  },
  {
    title: "Settings",
    path: "/settings",
  },
];
