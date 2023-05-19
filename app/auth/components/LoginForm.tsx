"use client";
import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { BsGithub, BsGoogle } from "react-icons/bs";
import { Input } from "@/components/common/Inputs";
import { Button, IconButton } from "@/components/common/buttons";
import TitleSeparator from "@/components/common/TitleSeparator/TitleSeparator";
import Link from "next/link";

const AuthLoginSchema = Yup.object().shape({
  email: Yup.string()
    .trim()
    .email("Email is not valid")
    .required("El is required"),
  password: Yup.string().trim().required("Password is required"),
});

const LoginForm = () => {
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
        <Input id="email" name="email" label="Email" />
        <Input id="password" name="password" label="Password" />
        <Button type="submit" fullWidth>
          Sign In
        </Button>
        <TitleSeparator text="Or continue with" />
        <div className="grid grid-cols-2 gap-4 w-full">
          <IconButton icon={BsGithub} variant="outlined" />
          <IconButton icon={BsGoogle} variant="outlined" />
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
