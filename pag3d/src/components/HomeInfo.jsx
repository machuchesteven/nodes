import React from "react";
import { Link } from "react-router-dom";
const InfoBox = ({ text, link, btnTxt }) => {
  return (
    <div className="info-box">
      {text}
      <Link to={link}>{btnTxt}</Link>
    </div>
  );
};

const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Hi, I am <span className="font-semibold">Machu</span>
      <br />A Software Engineer based in Tanzania
    </h1>
  ),
  2: (
    <InfoBox
      text={
        "Worked with some companies and picked up some skills and Certifications"
      }
    />
  ),
  3: (
    <InfoBox
      text={
        "Went to the university of Dar es Salaam, for an engineering degree"
      }
    />
  ),
  4: (
    <InfoBox
      text={
        "Now, I mostly focus on personal development projects and making the web a better place"
      }
    />
  ),
};

const HomeInfo = ({ currentStage, ...props }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
