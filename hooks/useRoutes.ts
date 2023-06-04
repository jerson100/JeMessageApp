import { usePathname } from "next/navigation";
import { HiChat, HiUsers } from "react-icons/hi";
import { HiArrowLeftOnRectangle } from "react-icons/hi2";
import { useMemo } from "react";
import { signOut } from "next-auth/react";

const useRoutes = () => {
  const pathname = usePathname();
  const routes = useMemo(() => {
    return [
      {
        label: "Chat",
        path: "/conversations",
        icon: HiChat,
        active: pathname === "/conversations",
      },
      {
        label: "Users",
        path: "/",
        icon: HiUsers,
        active: pathname === "/",
      },
      {
        label: "Logout",
        path: "#",
        icon: HiArrowLeftOnRectangle,
        active: pathname === "/logout",
        onClick: () => {
          signOut();
        },
      },
    ];
  }, [pathname]);
  return routes;
};

export default useRoutes;
