import React from "react";
import AzureOriginal from "devicons-react/lib/icons/AzureOriginal";
// this returns certificates and badges


// challenge is,
// whenever a new icons is added, and its icons is available, it should be added to the list
// and the list should be updated
// and the list should be updated in the AchievementsSection.tsx file
// but icons have to be imported from devicons-react



// we will use DevIcons for now to create them
const AchievementComponent: React.FC = () => {
  return (
    <div>
      <div className="flex flex-row p-2 border rounded-md w-[60%] drop-shadow">
        <AzureOriginal
          className="w-[24%] m-[20px] hover:drop-shadow-[0_0_1em_#61dafb] hover:animate-pulse transition-all duration-300 ease-in-out"
          size={50}
        />
        <div className="flex w-[74%] flex-col my-auto">
          <h4 className="text-lg font-semibold text-neutral-800">
            Microsoft Azure Fundamentals
          </h4>
          <p className="text-neutral-600">Microsoft</p>
        </div>
      </div>
    </div>
  );
};

export default AchievementComponent;
