import React from "react";
// import { useSession } from "next-auth/react";
// import { Button } from "@/components/common/buttons";
// import { getServerSession } from "next-auth";
// import LogoutButton from "@/components/common/buttons/LogoutButton";
import EmptyState from "@/components/common/EmptyState";
import People from "./components/People/People";
// import Link from "next/link";
// import { redirect } from "next/navigation";

const page = async () => {
  //   const { data: session } = useSession({
  //     required: true,
  //     // onUnauthenticated() {
  //     //   redirect("/auth/login");
  //     // },
  //   });
  //   const session = await getServerSession({});

  return (
    <div className="flex h-screen">
      <div className="w-full lg:w-80 h-full">
        <People />
      </div>
      <div className="hidden lg:flex h-full bg-white flex-grow">
        <div className="flex-grow">
          <EmptyState />
        </div>
      </div>
    </div>
  );
};

export default page;
