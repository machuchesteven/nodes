import React from "react";
import Avatar from "./Avatar";

import { SIDENAV_ITEMS } from "../utils/constants";

const RespSidebar: React.FC = () => {
  return (
    <div className="flex flex-col mr-2 w-[10%] md:min-w-[150px] md:w-[20%] lg:w-[15%]  bg-slate-100 h-max">
      <h4 className="font-semibold my-2 text-center">Sidebar</h4>
      <Avatar />
    </div>
  );
};

export default RespSidebar;
