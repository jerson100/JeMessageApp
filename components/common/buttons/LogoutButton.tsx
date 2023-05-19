"use client";
import React from "react";
import Button from "./Button";
import { signOut } from "next-auth/react";

const LogoutButton = () => {
  return (
    <Button
      onClick={() =>
        signOut({
          callbackUrl: "/auth/login",
          redirect: true,
        })
      }
    >
      Sign out
    </Button>
  );
};

export default LogoutButton;
