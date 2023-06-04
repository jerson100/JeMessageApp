import React from "react";
import MainLayoutPage from "@/components/common/MainLayoutPage";
import UserList from "./components/UserList";

const HomePage = async () => {
  return (
    <div className="w-full lg:w-80 h-full">
      <MainLayoutPage title="People">
        {/* @ts-expect-error Async Server Component */}
        <UserList />
      </MainLayoutPage>
    </div>
  );
};

export default HomePage;
