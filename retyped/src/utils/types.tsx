/**
 * Returns the type of Items for the given variable
 */
export type SideNavItem = {
  title: string;
  path: string;
  icon?: JSX.Element;
  submenu?: boolean;
  subMenuItems?: SideNavItem[];
};

/**
 * MenuItemWithSubmenuProps
 */
export type MenuItemWithSubmenuProps = {
  item: SideNavItem;
  toggleOpen: () => void;
};
