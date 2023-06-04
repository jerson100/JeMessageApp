import MainLayoutPage from "@/components/common/MainLayoutPage";
import React, { FC, PropsWithChildren } from "react";
import MessageList from "../components/MessageList/MessageList";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <MainLayoutPage title="Messages">
        {/* @ts-expect-error Async Server Component */}
        <MessageList />
      </MainLayoutPage>
      {children}
    </>
  );
};

export default Layout;
