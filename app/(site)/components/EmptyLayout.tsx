"use client";
import EmptyState from "@/components/common/EmptyState";
import useConversation from "@/hooks/useConversation";
import React from "react";
import clsx from "clsx";

const EmptyLayout = () => {
  const { isOpen } = useConversation();
  const _class = clsx(
    "h-full bg-white flex-grow hidden",
    isOpen ? "hidden" : "lg:flex"
  );
  //   console.log(_class);
  return (
    <div className={_class}>
      <div className="flex-grow">
        <EmptyState />
      </div>
    </div>
  );
};

export default EmptyLayout;
