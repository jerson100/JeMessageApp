import React from "react";
import MobileRoutelist from "./MobileRoutelist";

const MobileNavigation = () => {
  return (
    <nav
      className="block lg:hidden fixed bottom-0 left-0 w-full border-top-gray-200"
      role="navigation"
    >
      <MobileRoutelist />
    </nav>
  );
};

export default MobileNavigation;
