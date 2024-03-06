import React from "react";

import InformationSection from "../components/InformationSection";
import TimelineSection from "../components/TimelineSection";
import AchievementsSection from "../components/AchievementsSection";
const ProfilePage: React.FC = () => {
  return (
    <div>
      <InformationSection />
      <AchievementsSection />
      <TimelineSection />
    </div>
  );
};

export default ProfilePage;
