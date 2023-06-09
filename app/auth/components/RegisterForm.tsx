"use client";
import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Input } from "@/components/common/inputs";
import { Button } from "@/components/common/buttons";
import TitleSeparator from "@/components/common/TitleSeparator/TitleSeparator";
import Link from "next/link";
import LoginProviders from "./LoginProviders";

const AuthRegisterSchema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .min(4, "Name must have at least 4 characters")
    .max(20, "Name must have at most 20 characters")
    .required("Name is required"),
  email: Yup.string()
    .trim()
    .email("Email is not valid")
    .required("Email is required"),
  password: Yup.string().trim().required("Password is required"),
});

const RegisterForm = () => {
  const [loading, setLoading] = useState(false);
  return (
    <Formik
      onSubmit={(values) => console.log(values)}
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}
      validationSchema={AuthRegisterSchema}
    >
      <Form className="w-full flex flex-col gap-6 items-center">
        <Input id="name" name="name" label="Name" size="medium" />
        <Input id="email" name="email" label="Email" />
        <Input
          id="password"
          name="password"
          label="Password"
          type="password"
          autoComplete="new-password"
        />
        <Button type="submit" fullWidth disabled={loading}>
          Register
        </Button>
        <TitleSeparator text="Or continue with" />
        <LoginProviders loading={loading} setLoading={setLoading} />
        <p>
          Already have an account?
          <Link href="/auth/login" className="font-bold underline ml-2">
            Login
          </Link>
        </p>
      </Form>
    </Formik>
  );
};

export default RegisterForm;
