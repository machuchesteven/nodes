import React from "react";

const InformationSection: React.FC = () => {
  return (
    <div className="container my-2 md:my-5">
      <h1 className="font-semibold text-2xl md:text-3xl text-center">
        Information Section
      </h1>
      <div className="avatar bg-neutral-200 mx-auto"></div>
      <p>This is the information section</p>
    </div>
  );
};

export default InformationSection;
