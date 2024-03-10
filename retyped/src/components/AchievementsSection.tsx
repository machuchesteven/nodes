import React from "react";

import AchievementComponent from "./AchievementComponent";
const AchievementsSection: React.FC = () => {
  return (
    <div className="container">
      <h3 className="text-xl text-center font-semibold my-2 text-neutral-800">Achievements and Certifications</h3>
      <AchievementComponent />
    </div>
  );
};

export default AchievementsSection;
