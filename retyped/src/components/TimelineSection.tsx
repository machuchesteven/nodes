import React from "react";
import TimelineComponent from "./TimelineComponent";

const TimelineSection: React.FC = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center mb-20">
        <section className="w-[90%]">
          <div className="sticky top-0 bg-white py-3 z-10 shadow-lg shadow-white">
            <h2 className="group-date">November 2021</h2>
          </div>
          <div className="timeline">
            <TimelineComponent />
            <TimelineComponent />
            <TimelineComponent />
          </div>
        </section>
        <section className="w-[90%]">
          <div className="sticky top-0 bg-white py-3 z-10 shadow-lg shadow-white">
            <h2 className="group-date">December 2021</h2>
          </div>
          <div className="timeline">
            <TimelineComponent />
            <TimelineComponent />
            <TimelineComponent />
          </div>
        </section>
      </div>
    </div>
  );
};

export default TimelineSection;
