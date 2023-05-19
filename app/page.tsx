import React from "react";
// import { useSession } from "next-auth/react";
// import { Button } from "@/components/common/buttons";
import { getServerSession } from "next-auth";
import LogoutButton from "@/components/common/buttons/LogoutButton";
// import { redirect } from "next/navigation";

const page = async () => {
  //   const { data: session } = useSession({
  //     required: true,
  //     // onUnauthenticated() {
  //     //   redirect("/auth/login");
  //     // },
  //   });
  const session = await getServerSession({});

  return (
    <div>
      <p>{session?.user?.name}</p>
      <p>{session?.user?.email}</p>
      <img src={session?.user?.image || ""} alt={session?.user?.name || ""} />
      <LogoutButton />
    </div>
  );
};

export default page;
