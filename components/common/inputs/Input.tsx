"use client";
import React from "react";
import { ErrorMessage, Field, FieldProps } from "formik";
import { ElementSizeTypeE } from "@/consts/form.const";
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
  autoComplete = "off",
}: InputPropsType) => {
  //   const field = useField(name);
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
      <Field name={name}>
        {({ field }: FieldProps) => (
          <input
            {...field}
            type={type}
            id={id}
            className={inputVariantsStyle({
              size,
            })}
            autoComplete={autoComplete}
            placeholder={placeholder}
          />
        )}
      </Field>
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
