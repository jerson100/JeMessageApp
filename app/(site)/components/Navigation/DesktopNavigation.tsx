import React from "react";
import Avatar from "@/components/common/Avatar";
import DesktopRouteList from "./DesktopRouteList";
import getUser from "@/app/actions/GetUser";

const DesktopNavigation = async () => {
  const user = await getUser();
  return (
    <div className="hidden lg:flex border border-gray-200 h-screen flex-col justify-between p-4 sticky top-0">
      <nav className="h-full flex flex-col justify-between" role="navigation">
        <DesktopRouteList />
      </nav>
      <div className="flex justify-center">
        <Avatar
          name={user?.name || ""}
          status={1}
          src={user?.image}
          alt={user?.name || ""}
        />
      </div>
    </div>
  );
};

export default DesktopNavigation;
