import { PropsWithChildren } from "react";
import Navigation from "./components/Navigation";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="grid grid-cols-[auto_1fr] h-screen">
      <div className="border border-gray-200 p-4">
        {/* @ts-expect-error Async Server Component */}
        <Navigation />
      </div>
      <div className="p-4">{children}</div>
    </div>
  );
};

export default Layout;
