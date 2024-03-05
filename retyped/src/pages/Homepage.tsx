import React from "react";
import RespSidebar from "../components/RespSidebar";

const Homepage: React.FC = () => {
  return (
    <div className="flex flex-row">
      <RespSidebar />
      <div>
        <h1>The body of the Homepage on the right</h1>
      </div>
    </div>
  );
};

export default Homepage;
