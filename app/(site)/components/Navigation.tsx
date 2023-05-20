import React from "react";
import { IconButton } from "@/components/common/buttons";
import { FaCommentDots } from "react-icons/fa";
import { RiGroupFill } from "react-icons/ri";
import { ImExit } from "react-icons/im";
import { getServerSession } from "next-auth";

const Navigation = async () => {
  const session = await getServerSession({});
  return (
    <nav className="h-full flex flex-col justify-between">
      <ul className="flex flex-col gap-4 items-center">
        <li>
          <IconButton icon={FaCommentDots} />
        </li>
        <li>
          <IconButton icon={RiGroupFill} />
        </li>
        <li>
          <IconButton icon={ImExit} />
        </li>
      </ul>
      <div className="flex justify-center">
        <img
          className="rounded-full w-12 h-12"
          src={session?.user?.image || ""}
          alt={session?.user?.name || ""}
        />
      </div>
    </nav>
  );
};

export default Navigation;
