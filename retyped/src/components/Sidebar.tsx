import React from "react";

const Sidebar = (): React.ReactNode => {
  return (
    <div className="fixed top-0 left-0 h-screen  w-16 m-0 py-2 flex-none flex flex-col bg-transparent text-secondary shadow-lg">
      <SidebarIcon icon={<>A</>} />
      <SidebarIcon icon={<>B</>} />
      <SidebarIcon icon={<>C</>} />
      <SidebarIcon icon={<>D</>} />
      <SidebarIcon icon={<>E</>} />
    </div>
  );
};

const SidebarIcon = ({ icon, text = "tooltip" }): React.ReactNode => (
  <div className="Sidebar-icon group my-2">
    {icon}
    <span className="Sidebar-tooltip group-hover:scale-100">{text}</span>
  </div>
);

export default Sidebar;
