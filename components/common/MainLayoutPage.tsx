"use client";
import useConversation from "@/hooks/useConversation";
import clsx from "clsx";
import React, { PropsWithChildren, FC } from "react";

const MainLayoutPage: FC<
  PropsWithChildren & {
    title?: string;
  }
> = ({ children, title = "Title" }) => {
  const { isOpen } = useConversation();
  return (
    <div
      className={clsx("w-full lg:w-80 h-full lg:block", isOpen ? "hidden" : "")}
    >
      <div className="flex flex-col gap-4 h-full">
        <h1 className="font-bold text-lg pt-4 px-4">{title}</h1>
        <div className="flex-grow overflow-auto">{children}</div>
      </div>
    </div>
  );
};

export default MainLayoutPage;
