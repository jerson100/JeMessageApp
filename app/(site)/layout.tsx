import { PropsWithChildren } from "react";
import Navigation from "./components/Navigation";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] h-full">
      <Navigation />
      <main className="h-screen overflow-hidden">{children}</main>
    </div>
  );
};

export default Layout;
