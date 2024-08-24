const NavigationMenu = ({ children, className }) => {
  return <nav className={className}>{children}</nav>;
};

const NavigationMenuList = ({ children }) => {
  return <ul className="nav-menu-list">{children}</ul>;
};

const NavigationMenuItem = ({ children }) => {
  return <li className="nav-menu-item">{children}</li>;
};

const NavigationMenuLink = ({ children, className }) => {
  return <a className={className}>{children}</a>;
};

const NavigationMenuTrigger = ({ children }) => {
  return <button className="nav-menu-trigger">{children}</button>;
};

export {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
};
