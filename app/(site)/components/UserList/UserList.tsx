import getUsers from "@/actions/GetUsers";
import React from "react";
import UserItem from "./UserItem";

const UserList = async () => {
  const users = await getUsers();
  return (
    <ul className="flex flex-col gap-4 pb-14 lg:pb-4">
      {users.map((user) => {
        return <UserItem name={user.name || ""} _id={user.id} />;
      })}
    </ul>
  );
};

export default UserList;
