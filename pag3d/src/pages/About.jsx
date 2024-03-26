import React from "react";

function About() {
  return (
    <section className="relative flex lg:flex-row flex-col max-container">
      <div className="container mx-auto">
        <h1 className="text-3xl">Profile</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <button className="my-2 btn-alt">Download CV</button>
      </div>
      <div className="w-full md:w-[30%]">
        <h3 className="text-center md:text-left text-2xl font-semibold">
          Development Stack
        </h3>
        <div class="inline-flex items-center justify-center w-full relative">
          <hr class="w-64 h-px my-auto bg-gray-200 border-0 dark:bg-gray-700" />
          <span class="absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900">
            or1
          </span>
        </div>
        <section></section>
      </div>
    </section>
  );
}

export default About;
