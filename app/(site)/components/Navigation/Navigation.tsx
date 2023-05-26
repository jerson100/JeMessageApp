import MobileNavigation from "./MobileNavigation";
import DesktopNavigation from "./DesktopNavigation";

const Navigation = () => {
  return (
    <>
      {/* @ts-expect-error Async Server Component */}
      <DesktopNavigation />
      <MobileNavigation />
    </>
  );
};

export default Navigation;
