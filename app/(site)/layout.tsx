import { PropsWithChildren } from "react";
import Navigation from "./components/Navigation";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="grid grid-cols-[auto_1fr] min-h-screen">
      <Navigation />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
