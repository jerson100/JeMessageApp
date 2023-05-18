"use client";
import React from "react";
import { ErrorMessage, Field } from "formik";

interface InputProps {
  id: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  label?: string;
}

const Input = ({
  id,
  name,
  placeholder,
  type = "text",
  required = false,
  label,
}: InputProps) => {
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
        className="border-gray-200 border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full"
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
