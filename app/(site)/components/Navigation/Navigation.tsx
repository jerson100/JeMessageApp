"use client";
import { DefaultSession } from "next-auth";
import MobileNavigation from "./MobileNavigation";
import useMediaQuery from "@/app/hooks/useMediaQuery";
import DesktopNavigation from "./DesktopNavigation";

const Navigation = ({ user }: Omit<DefaultSession, "expires">) => {
  const matchedDesktop = useMediaQuery("(min-width: 1024px)");
  return (
    <>
      {matchedDesktop ? (
        <DesktopNavigation user={user} />
      ) : (
        <>
          <MobileNavigation />
        </>
      )}
    </>
  );
};

export default Navigation;
