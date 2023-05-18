import { FC } from "react";
import clsx from "clsx";
import { ButtonProps } from "@/types";

export const Button: FC<ButtonProps> = ({
  className,
  children,
  variant = "contained",
  color = "sky",
  size = "medium",
  disabled = false,
  rounded = "medium",
  fullWidth = false,
  ...props
}) => {
  let btnClassName = clsx(
    "flex items-center justify-center focus:outline-none focus:ring-4 focus:border-transparent transition-colors duration-300 whitespace-nowrap text-white select-none",
    {
      "hover:bg-blue-600 focus:ring-blue-400": color === "blue",
      "hover:bg-red-600 focus:ring-red-400": color === "red",
      "hover:bg-green-600 focus:ring-green-400": color === "green",
      "hover:bg-yellow-600 focus:ring-yellow-400": color === "yellow",
      "hover:bg-gray-600 focus:ring-gray-400": color === "gray",
      "hover:bg-sky-600 focus:ring-sky-400": color === "sky",
    },
    {
      "bg-blue-500": variant === "contained" && color === "blue",
      "bg-red-500": variant === "contained" && color === "red",
      "bg-green-500": variant === "contained" && color === "green",
      "bg-yellow-500": variant === "contained" && color === "yellow",
      "bg-gray-500": variant === "contained" && color === "gray",
      "bg-sky-500": variant === "contained" && color === "sky",
    },
    {
      "border border-blue-500 text-blue-500 hover:text-white":
        variant === "outlined" && color === "blue",
      "border border-red-500 text-red-500 hover:text-white":
        variant === "outlined" && color === "red",
      "border border-green-500 text-green-500 hover:text-white":
        variant === "outlined" && color === "green",
      "border border-yellow-500 text-yellow-500 hover:text-white":
        variant === "outlined" && color === "yellow",
      "border border-gray-500 text-gray-500 hover:text-white":
        variant === "outlined" && color === "gray",
      "border border-sky-500 text-sky-500 hover:text-white":
        variant === "outlined" && color === "sky",
    },
    {
      "": rounded === "none",
      "rounded-sm": rounded === "small",
      "rounded-md": rounded === "medium",
      "rounded-lg": rounded === "large",
      "rounded-full": rounded === "full",
    },
    {
      "px-3 py-2 text-sm leading-4": size === "small",
      "px-4 py-2 text-md leading-6": size === "medium",
      "px-5 py-3 text-lg leading-8": size === "large",
      "px-6 py-4 text-xl leading-9": size === "big",
    },
    {
      "bg-opacity-50 cursor-not-allowed pointer-events-none": disabled,
    },
    {
      "w-full": fullWidth,
    }
  );

  return (
    <button {...props} className={btnClassName}>
      {children}
    </button>
  );
};

export default Button;
