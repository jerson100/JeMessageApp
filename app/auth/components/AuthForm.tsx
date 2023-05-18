"use client";
import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { BsGithub, BsGoogle } from "react-icons/bs";
import { Input } from "@/components/common/Input";
import { Button, IconButton } from "@/components/common/buttons";
import TitleSeparator from "@/components/common/TitleSeparator/TitleSeparator";

const AuthFormSchema = Yup.object().shape({
  email: Yup.string()
    .trim()
    .email("El email no es correcto")
    .required("El email es requerido"),
  password: Yup.string().trim().required("La constraseña es requerida"),
});

const AuthForm = () => {
  return (
    <Formik
      onSubmit={(values) => console.log(values)}
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={AuthFormSchema}
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
      </Form>
    </Formik>
  );
};

export default AuthForm;
