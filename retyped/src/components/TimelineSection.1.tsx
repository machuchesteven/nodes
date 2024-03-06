import React from "react";

export const TimelineSection: React.FC = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center mb-20">
        <section className="w-[90%]">
          <div className="sticky top-0 bg-white py-3 z-10 shadow-lg shadow-white">
            <h2 className="group-date">November 2021</h2>
          </div>
          <div className="timeline">
            <div className="relative">
              <div className="dot"></div>
              <div className="pl-10">
                <span className="timeline-date">13 NOVEMBER 2021</span>
                <h3 className="timeline-title">Event 1</h3>
                <p className="text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolorum modi, reprehenderit iusto explicabo eum mollitia
                  fugiat similique? Dicta molestias deserunt, praesentium
                  numquam autem harum neque, architecto impedit, enim nemo
                  veniam.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
