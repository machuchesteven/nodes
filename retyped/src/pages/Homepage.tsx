import React from "react";
import RespSidebar from "../components/RespSidebar";
import { Link } from "react-router-dom";
const Homepage: React.FC = () => {
  return (
    <div className="flex flex-row">
      <RespSidebar />
      <div>
        <h1>The body of the Homepage on the right</h1>
        <div className="flex flex-row">
          <Link to={"profile"} className="alternative-btn">
            Go To Profile
          </Link>

          <Link to={"law"} className="alternative-btn">
            Law Firm Page
          </Link>
          <Link to={"receipt"} className="alternative-btn">
            Create Receipts
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
