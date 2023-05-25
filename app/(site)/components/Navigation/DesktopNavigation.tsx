import React from "react";
import { LinkIconButton } from "@/components/common/buttons";
import { DefaultSession } from "next-auth";
import useRoutes from "@/app/hooks/useRoutes";
import UserImage from "@/components/common/UserImage";

const DesktopNavigation = ({ user }: Omit<DefaultSession, "expires">) => {
  const routes = useRoutes();
  return (
    <div className="border border-gray-200 h-screen flex flex-col justify-between p-4 sticky top-0">
      <nav className="h-full flex flex-col justify-between" role="navigation">
        <ul className="flex flex-col gap-4 items-center">
          {routes.map((route) => (
            <li key={route.label}>
              <LinkIconButton
                color={route.active ? "orange" : "sky"}
                icon={route.icon}
                href={route.path}
                onClick={route.onClick}
              />
            </li>
          ))}
          {/* <li>
            <IconButton icon={FaCommentDots} />
          </li>
          <li>
            <IconButton icon={RiGroupFill} />
          </li>
          <li>
            <IconButton icon={ImExit} />
          </li> */}
        </ul>
      </nav>
      <div className="flex justify-center">
        <UserImage
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
