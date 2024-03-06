import React from "react";
import RespSidebar from "../components/RespSidebar";
import { Link } from "react-router-dom";
const Homepage: React.FC = () => {
  return (
    <div className="flex flex-row">
      <RespSidebar />
      <div>
        <h1>The body of the Homepage on the right</h1>
        <button className="mx-2 p-1 border rounded border-gray-800  " title="profile">
          <Link to={"profile"}>Go To Profile</Link>
        </button>
      </div>
    </div>
  );
};

export default Homepage;
