import { PropsWithChildren } from "react";
import Navigation from "./components/Navigation";
import EmptyLayout from "./components/EmptyLayout";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] h-full">
      <Navigation />
      <main className="h-screen overflow-hidden">
        <div className="flex h-screen">
          {children}
          <EmptyLayout />
        </div>
      </main>
    </div>
  );
};

export default Layout;
