import React from "react";
import { LinkIconButton } from "@/components/common/buttons";
import useRoutes from "@/app/hooks/useRoutes";

const MobileNavigation = () => {
  const routes = useRoutes();
  return (
    <nav
      className="fixed bottom-0 left-0 w-full border-top-gray-200"
      role="navigation"
    >
      <ul className="grid grid-cols-3 h-12" role="list">
        {routes.map((route) => (
          <li key={route.label}>
            <LinkIconButton
              icon={route.icon}
              href={route.path}
              onClick={route.onClick}
              color={route.active ? "orange" : "sky"}
              rounded="none"
              size="medium"
              fullWidth
              className="h-full"
            />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MobileNavigation;
