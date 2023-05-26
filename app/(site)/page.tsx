import React from "react";
// import { useSession } from "next-auth/react";
// import { Button } from "@/components/common/buttons";
// import { getServerSession } from "next-auth";
// import LogoutButton from "@/components/common/buttons/LogoutButton";
import EmptyState from "@/components/common/EmptyState";
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
    <div className="hidden lg:block h-full bg-white pl-80">
      <EmptyState />
    </div>
  );
};

export default page;
