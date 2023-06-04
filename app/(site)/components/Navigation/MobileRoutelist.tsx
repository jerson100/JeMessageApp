"use client";
import useRoutes from "@/hooks/useRoutes";
import { LinkIconButton } from "@/components/common/buttons";

const MobileRoutelist = () => {
  const routes = useRoutes();
  return (
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
  );
};

export default MobileRoutelist;
