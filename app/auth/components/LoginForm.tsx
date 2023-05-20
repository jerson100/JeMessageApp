"use client";
import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Input } from "@/components/common/inputs";
import { Button } from "@/components/common/buttons";
import TitleSeparator from "@/components/common/TitleSeparator/TitleSeparator";
import Link from "next/link";
import LoginProviders from "./LoginProviders";

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
        <LoginProviders loading={loading} setLoading={setLoading} />
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
