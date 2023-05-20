import { IconButton } from "@/components/common/buttons";
import React, { memo } from "react";
import { signIn } from "next-auth/react";
import {
  BsGithub,
  BsGoogle,
  BsTwitter,
  BsTwitch,
  BsLinkedin,
} from "react-icons/bs";

interface LoginProvidersProps {
  loading: boolean;
  setLoading: (loading: boolean) => void;
}

const LoginProviders = ({ loading, setLoading }: LoginProvidersProps) => {
  return (
    <div className="grid grid-cols-5 gap-4 w-full">
      <IconButton
        icon={BsGithub}
        variant="outlined"
        disabled={loading}
        color="gray"
        onClick={async () => {
          setLoading(true);
          await signIn("github", {
            redirect: true,
            callbackUrl: "/",
          });
        }}
      />
      <IconButton
        icon={BsGoogle}
        variant="outlined"
        color="orange"
        disabled={loading}
        onClick={async () => {
          setLoading(true);
          await signIn("google", {
            redirect: true,
            callbackUrl: "/",
          });
        }}
      />
      <IconButton
        icon={BsTwitter}
        variant="outlined"
        disabled={loading}
        onClick={async () => {
          setLoading(true);
          await signIn("twitter", {
            redirect: true,
            callbackUrl: "/",
          });
        }}
      />
      <IconButton
        icon={BsTwitch}
        variant="outlined"
        disabled={loading}
        color="purple"
        onClick={async () => {
          setLoading(true);
          await signIn("twitch", {
            redirect: true,
            callbackUrl: "/",
          });
        }}
      />
      <IconButton
        icon={BsLinkedin}
        variant="outlined"
        disabled={loading}
        onClick={async () => {
          setLoading(true);
          await signIn("linkedin", {
            redirect: true,
            callbackUrl: "/",
          });
        }}
      />
    </div>
  );
};

export default memo(LoginProviders);
