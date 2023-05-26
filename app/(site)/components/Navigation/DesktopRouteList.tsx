"use client";
import useRoutes from "@/app/hooks/useRoutes";
import { LinkIconButton } from "@/components/common/buttons";
import React from "react";

const DesktopRouteList = () => {
  const routes = useRoutes();
  return (
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
    </ul>
  );
};

export default DesktopRouteList;
