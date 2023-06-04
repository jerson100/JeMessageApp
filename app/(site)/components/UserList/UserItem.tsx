"use client";
import Avatar from "@/components/common/Avatar";
import { Conversation } from "@prisma/client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-hot-toast";
import clsx from "clsx";

interface UserItemProps {
  img?: string;
  name: string;
  _id: string;
}

const UserItem = ({ img, name, _id }: UserItemProps) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleClick = async () => {
    setLoading(true);
    try {
      const response = await fetch(`/api/conversations`, {
        method: "POST",
        body: JSON.stringify({
          isGroup: false,
          userId: _id,
        }),
      });
      const data = await response.json();
      if (response.ok) {
        const { id }: Conversation = data;
        toast.success("Conversation created");
        router.push(`/conversations/${id}`);
      } else if (response.status === 401 || response.status === 403) {
        toast.error("You are not authorized to perform this action");
        router.push("/login");
      } else {
        throw data.message;
      }
    } catch (e) {
      toast.error(typeof e === "string" ? (e as string) : "An error occurred");
      console.log(e);
    } finally {
      setLoading(false);
    }
  };
  const classLoading = clsx(
    "flex gap-4 items-center px-4 py-2 hover:bg-gray-200 rounded-md cursor-pointer",
    {
      "animate-pulse bg-gray-200": loading,
    }
  );
  return (
    <li className="">
      <div
        // href={`/conversation/${_id}`}
        onClick={handleClick}
        className={classLoading}
      >
        <Avatar src={img} name={name} status={1} />
        <p>{name}</p>
      </div>
    </li>
  );
};

export default UserItem;
