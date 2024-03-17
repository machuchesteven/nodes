import React from "react";

const PricingSection: React.FC = () => {
  return (
    <div className="container py-3 md:max-lg:py-5">
      <h2 className="text-xl text-center font-semibold my-2">
        Our Pricing Plan
      </h2>
      <section className="grid md:grid-cols-3 gap-2">
        <div className="flex flex-col p-2 rounded-md">
          <h3 className="text-lg text-center  font-bold my-1">Plan 1</h3>
          <p className="my-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus vel atque voluptates blanditiis. Omnis odio nam
            excepturi ipsum labore dolorem deleniti voluptas vitae obcaecati
            autem! Id natus inventore hic illo.
          </p>
          <span className="my-auto text-xl font-bold">
            45,000/-<span className="text-sm font-bold">month</span>
          </span>
          <button className="alternative-btn">Subscribe</button>
        </div>
        <div className="flex flex-col  p-2 rounded-md">
          <h3 className="text-lg text-center  font-bold my-1">Plan 2</h3>
          <p className="my-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus vel atque voluptates blanditiis. Omnis odio nam
            excepturi ipsum labore dolorem deleniti voluptas vitae obcaecati
            autem! Id natus inventore hic illo.
          </p>
          <div className="">
            <span className="text-xl font-bold">45,000/-</span>
          </div>
          <button className="alternative-btn">Subscribe</button>
        </div>
        <div className="flex flex-col  p-2 rounded-md border-black border-1">
          <h3 className="text-lg text-center font-bold my-1">Gold Plan</h3>
          <p className="my-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus vel atque voluptates blanditiis. Omnis odio nam
            excepturi ipsum labore dolorem deleniti voluptas vitae obcaecati
            autem! Id natus inventore hic illo.
          </p>
          <div className="flex flex-row justify-around">
            <span className="text-xl font-bold">45,000/-</span>
          </div>
          <button className="alternative-btn">Subscribe</button>
        </div>
      </section>
    </div>
  );
};

export default PricingSection;
