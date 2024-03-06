import React from "react";

const Footer: React.FC = () => {
  return (
    <div className="container">
      <div className="my-3 md:my-5">
        <p className="text-center text-lg">Social Media Icons</p>
        <div className="flex flex-row justify-between max-w-md mx-auto font-semibold my-2">
          <p className="text-xl">T</p>
          <p className="text-xl">F</p>
          <p className="text-xl">I</p>
          <p className="text-xl">M</p>
        </div>
      </div>
      <div className="flex flex-row my-2">
        <div className="w-[100%] md:w-[40%] flex flex-col">
          <h3 className="font-bold">Overview of Website</h3>
        </div>
        <div className="w-[50%] md:w-[20%] flex flex-col">
          <h3 className="font-bold">First Links</h3>
        </div>
        <div className="w-[50%] md:w-[20%] flex flex-col">
          <h3 className="font-bold">Special Links</h3>
        </div>
        <div className="w-[50%] md:w-[20%] flex flex-col">
          <h3 className="font-bold">Other Projects</h3>
        </div>
      </div>
      <div>
        <p className="text-center">
          Copyright &copy;{" "}
          <a href="https://github.com/machuchesteven">MachuStudio</a> 2024. All
          rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
