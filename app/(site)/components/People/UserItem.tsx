import Avatar from "@/components/common/Avatar";
import Link from "next/link";
import React from "react";

interface UserItemProps {
  img?: string;
  name: string;
  _id: string;
}

const UserItem = ({ img, name, _id }: UserItemProps) => {
  return (
    <li className="">
      <Link
        href={`/conversation/${_id}`}
        className="flex gap-4 items-center px-4 py-2 hover:bg-gray-200 rounded-md"
      >
        <Avatar src={img} name={name} status={1} />
        <p>{name}</p>
      </Link>
    </li>
  );
};

export default UserItem;
