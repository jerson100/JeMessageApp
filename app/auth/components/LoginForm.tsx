"use client";
import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { BsGithub, BsGoogle } from "react-icons/bs";
import { Input } from "@/components/common/inputs";
import { Button, IconButton } from "@/components/common/buttons";
import TitleSeparator from "@/components/common/TitleSeparator/TitleSeparator";
import Link from "next/link";
import { signIn } from "next-auth/react";

const AuthLoginSchema = Yup.object().shape({
  email: Yup.string()
    .trim()
    .email("Email is not valid")
    .required("El is required"),
  password: Yup.string().trim().required("Password is required"),
});

const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  return (
    <Formik
      onSubmit={(values) => console.log(values)}
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={AuthLoginSchema}
    >
      <Form className="w-full flex flex-col gap-6 items-center">
        <Input id="email" name="email" label="Email" autoComplete="username" />
        <Input
          id="password"
          name="password"
          label="Password"
          autoComplete="current-password"
        />
        <Button type="submit" fullWidth disabled={loading}>
          Sign In
        </Button>
        <TitleSeparator text="Or continue with" />
        <div className="grid grid-cols-2 gap-4 w-full">
          <IconButton
            icon={BsGithub}
            variant="outlined"
            disabled={loading}
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
            disabled={loading}
            onClick={async () => {
              setLoading(true);
              await signIn("google", {
                redirect: true,
                callbackUrl: "/",
              });
            }}
          />
        </div>
        <p>
          New in JeMessageApp?
          <Link href="/auth/register" className="font-bold underline ml-2">
            Create an account
          </Link>
        </p>
      </Form>
    </Formik>
  );
};

export default LoginForm;
