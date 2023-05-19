"use client";
import React from "react";
import { ErrorMessage, Field } from "formik";
import { ElementSizeTypeE } from "@/assets/consts/form.const";
import { inputVariantsStyle } from "./input.style";
import { InputPropsType } from "./input.interface";

const Input = ({
  id,
  name,
  placeholder,
  type = "text",
  required = false,
  label,
  size = ElementSizeTypeE.MEDIUM,
}: InputPropsType) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      {label && (
        <div>
          <label
            className="text-sm font-medium text-gray-900 leading-6 w-full"
            htmlFor={id}
          >
            {label}
          </label>
        </div>
      )}
      <Field
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        className={inputVariantsStyle({
          size,
        })}
      />
      <ErrorMessage
        name={name}
        render={(message) => (
          <div className="text-red-500 text-sm">{message}</div>
        )}
      />
    </div>
  );
};

export default Input;
