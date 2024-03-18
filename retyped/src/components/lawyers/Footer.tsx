import React from "react";

const Footer: React.FC = () => {
  return (
    <div>
      <div className="">Company Name</div>
      <div className="flex flex-row justify-center">Social Media Accounts</div>
      <div className="grid-cols-3">
        <h3>Links 1</h3>
        <h3>Links 2</h3>
        <h3>Links 3</h3>
      </div>
      <div className="text-center">
        <p>Terms and Policies | Copyright @2024</p>
      </div>
    </div>
  );
};

export default Footer;
