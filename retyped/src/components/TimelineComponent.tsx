import React from "react";

const TimelineComponent: React.FC = () => {
  return (
    <div className="relative">
      <div className="dot" title="current event">
        <div className="dot absolute -top-1 -left-1 group-hover:animate-ping"></div>
      </div>
      <div className="pl-10">
        <span className="timeline-date">13 NOVEMBER 2021</span>
        <h3 className="timeline-title">Event 1</h3>
        <p className="text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum modi,
          reprehenderit iusto explicabo eum mollitia fugiat similique? Dicta
          molestias deserunt, praesentium numquam autem harum neque, architecto
          impedit, enim nemo veniam.
        </p>
      </div>
    </div>
  );
};

export default TimelineComponent;
