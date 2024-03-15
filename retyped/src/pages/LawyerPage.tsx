import React from "react";
import EducationCard from "../components/lawyers/EducationCard";

const LawyerPage: React.FC = () => {
  return (
    <div className="container">
      <div className="flex flex-row shadow-sm my-2 rounded-lg p-3">
        <div className="md:w-[80%]">
          <p className="text-lg ">Laywer Page Hamburger to See His Profile</p>
        </div>
        <div className="md:w-[20%]">
          <button title="lyr-cta ">Request Appointment</button>
        </div>
      </div>
      <div className="flex flex-col-reverse md:flex-row container">
        <div className="flex-col w-[100%]">
          <h1 className="text-4xl">Laywer Name</h1>
          <hr className="my-2" />
          <h3 className="text-2xl">Lawyer Education Profile</h3>
          <p className="text-neutral-500 my-2">Education profile</p>
          <div className="my-5">
            <ol className="relative border-s border-gray-200 dark:border-gray-700">
              <EducationCard header="BA in Laws" tagText={"demo"} date="2016" />
              <EducationCard header="BA in Laws" tagText={"demo"} date="2016" />
              <EducationCard header="BA in Laws" tagText={"demo"} date="2016" />
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LawyerPage;
