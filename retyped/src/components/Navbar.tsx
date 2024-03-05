import React from "react";
import useScroll from "../utils/use-scroll";
const NavbarOne: React.FC = () => {
  const scrolled = useScroll(5);
  return (
    <div className="py-1 mb-2 sticky inset-x-0 top-0 w-full transition-all border-gray-200">
      <div className="flex py-2 justify-between mb-2 px-2 drop-shadow-sm w-[94%] md:w-[80%] lg:w-[65%] mx-auto  ">
        <h1 className="font-bold ">Stripe</h1>
        <div className="flex row">
          <a className="mx-1 hover:text-sky-500 hover:font-bold" href="#">
            Home
          </a>
          <a className="mx-1 hover:text-sky-500 hover:font-bold" href="#">
            Projects
          </a>
          <a className="mx-1 hover:text-sky-500 hover:font-bold" href="#">
            Contributions
          </a>
        </div>
        <div className="flex row">
          <button className="rounded-2xl border border-black text-black hover:bg-neutral-100 py-1 px-3 text-center">
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

const NavbarTwo: React.FC = () => {
  return (
    <div className="mb-2 py-1 bg-neutral-100">
      <div className="flex flex-row justify-between p-1 px-2 mb-2  w-[94%]  md:w-[80%] lg:w-[65%] mx-auto ">
        <h1 className="font-bold">Next</h1>
        <div className="flex-row space-x-0.5 my-1">
          <a href="#">Home</a>
          <a href="#">Projects</a>
          <a href="#">Contributions</a>
        </div>
      </div>
    </div>
  );
};

const NavbarThree: React.FC = () => {
  return (
    <div className="bg-[#eeeeee] py-2">
      <div className="flex flex-row py-1 px-2 md:px-5 justify-between w-[94%] md:w-[80%] mx-auto ">
        <h1 className="font-bold">TVZ</h1>
        <div className="flex-row">
          <a href="#">Home</a>
          <a href="#">Projects</a>
          <a href="#">Contributions</a>
        </div>
      </div>
    </div>
  );
};

const Navbar: React.FC = () => {
  return (
    <div className="flex flex-col">
      <NavbarOne />
      <NavbarTwo />
      <NavbarThree />
    </div>
  );
};

export default Navbar;
