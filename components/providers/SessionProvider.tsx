"use client";
import { PropsWithChildren, FC } from "react";
import { SessionProvider as SessionP } from "next-auth/react";
import { Session } from "next-auth";

const SessionProvider: FC<
  PropsWithChildren & {
    session: Session;
  }
> = ({ children, session }) => {
  return <SessionP session={session}>{children}</SessionP>;
};

export default SessionProvider;
