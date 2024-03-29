import React from "react";
import { Link } from "react-router-dom";
import NavbarSection from "../components/lawyers/NavbarSection";
import PricingSection from "../components/lawyers/PricingSection";
const LawFirmPage: React.FC = () => {
  return (
    <>
      <NavbarSection />
      <div className="container">
        <div className="flex h-[75vh] w-full">
          <div className="my-auto">
            <div className="hero align-middle my-auto">
              <h1 className="text-4xl font-semibold">
                Looking for Quality Legal Services?
              </h1>
              <div>
                <p className="w-[60%] py-5 md:py-10 ">
                  Bridge the gap between lawyers and cases seamlessly. Your
                  gateway to legal connections and case solutions.
                </p>

                <button type="button" className="alternative-btn">
                  Request Legal Aid
                </button>
                <Link to={"/lawyer"} className="alternative-btn">
                  Lawyers Profiles
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr />
      <div className="container px-5">
        <div className="container -mt-10 rounded-lg bg-neutral-950 text-neutral-200 p-5">
          <div className="grid grid-cols-4 gap-2 py-3">
            <div className="flex flex-row">
              <h2 className="text-xl text-center w-[95%]">
                <span className="text-4xl font-semibold">100</span>
                <br />
                Cases
              </h2>
              <div className="inline-block  min-h-[1em] w-0.5 self-stretch bg-neutral-100 dark:bg-white/10"></div>
            </div>
            <div className="flex flex-row">
              <h2 className="text-xl text-center w-[95%]">
                <span className="text-4xl font-semibold">100</span>
                <br />
                Cases
              </h2>
              <div className="inline-block  min-h-[1em] w-0.5 self-stretch bg-neutral-100 dark:bg-white/10"></div>
            </div>
            <div className="flex flex-row">
              <h2 className="text-xl text-center w-[95%]">
                <span className="text-4xl font-semibold">100</span>
                <br />
                Cases
              </h2>
              <div className="inline-block  min-h-[1em] w-0.5 self-stretch bg-neutral-100 dark:bg-white/10"></div>
            </div>
            <div className="flex flex-row">
              <h2 className="text-xl text-center w-full">
                <span className="text-4xl font-semibold">100</span>
                <br />
                Cases
              </h2>
            </div>
          </div>
        </div>
      </div>
      <PricingSection />
    </>
  );
};

export default LawFirmPage;
