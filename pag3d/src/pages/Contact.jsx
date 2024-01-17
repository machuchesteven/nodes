import React, { useState } from "react";

function Contact() {
  const [name, setName] = useState("");

  return (
    <section className="relative flex lg:flex-row flex-col max-container">
      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className="head-text ">Get In Touch</h1>
        <form action="/" className="w-full flex flex-col gap-7 mt-14">
          <label htmlFor="" className="text-black-500 font-semibold">
            <input
              type="text"
              name="name"
              className="input"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        </form>
      </div>
    </section>
  );
}

export default Contact;
