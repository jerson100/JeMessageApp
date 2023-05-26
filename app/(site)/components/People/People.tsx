import React from "react";
import UserList from "./UserList";

const People = () => {
  return (
    <div className="flex flex-col gap-4 h-full">
      <h1 className="font-bold text-lg pt-4 px-4">People</h1>
      <div className="flex-grow overflow-auto">
        {/* @ts-expect-error Async Server Component */}
        <UserList />
      </div>
    </div>
  );
};

export default People;
