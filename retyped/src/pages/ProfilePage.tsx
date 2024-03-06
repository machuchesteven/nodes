import React from "react";

import InformationSection from "../components/InformationSection";
import TimelineSection from "../components/TimelineSection";

const ProfilePage: React.FC = () => {
  return (
    <div>
      <InformationSection />
      <TimelineSection />
    </div>
  );
};

export default ProfilePage;
