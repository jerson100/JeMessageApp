import { cva } from "class-variance-authority";

export const buttonStyles = cva(
  "flex items-center justify-center focus:outline-none focus:ring-4 focus:border-transparent transition-colors duration-300 whitespace-nowrap select-none",
  {
    variants: {
      color: {
        blue: "hover:bg-blue-600 focus:ring-blue-400",
        red: "hover:bg-red-600 focus:ring-red-400",
        green: "hover:bg-green-600 focus:ring-green-400",
        yellow: "hover:bg-yellow-600 focus:ring-yellow-400",
        gray: "hover:bg-gray-600 focus:ring-gray-400",
        sky: "hover:bg-sky-600 focus:ring-sky-400",
      },
      variant: {
        contained: "text-white",
        outlined: "border hover:text-white",
      },
      fullWidth: {
        true: "w-full",
      },
      rounded: {
        none: "rounded-none",
        small: "rounded-sm",
        medium: "rounded-md",
        large: "rounded-lg",
        full: "rounded-full",
      },
      size: {
        small: "px-3 py-2 text-sm leading-4",
        medium: "px-4 py-2 text-md leading-6",
        large: "px-5 py-3 text-lg leading-8",
        big: "px-6 py-4 text-xl leading-9",
      },
      disabled: {
        true: "bg-opacity-50 cursor-not-allowed pointer-events-none",
      },
    },
    defaultVariants: {
      color: "sky",
      variant: "contained",
      size: "medium",
      rounded: "medium",
      fullWidth: false,
      disabled: false,
    },
    compoundVariants: [
      {
        variant: "contained",
        color: "blue",
        className: "bg-blue-500",
      },
      {
        variant: "contained",
        color: "red",
        className: "bg-red-500",
      },
      {
        variant: "contained",
        color: "green",
        className: "bg-green-500",
      },
      {
        variant: "contained",
        color: "yellow",
        className: "bg-yellow-500",
      },
      {
        variant: "contained",
        color: "gray",
        className: "bg-gray-500",
      },
      {
        variant: "contained",
        color: "sky",
        className: "bg-sky-500",
      },
      {
        variant: "outlined",
        color: "blue",
        className: "border-blue-500 text-blue-500",
      },
      {
        variant: "outlined",
        color: "red",
        className: "border-red-500 text-red-500",
      },
      {
        variant: "outlined",
        color: "green",
        className: "border-green-500 text-green-500",
      },
      {
        variant: "outlined",
        color: "yellow",
        className: "border-yellow-500 text-yellow-500",
      },
      {
        variant: "outlined",
        color: "gray",
        className: "border-gray-500 text-gray-500",
      },
      {
        variant: "outlined",
        color: "sky",
        className: "border-sky-500 text-sky-500",
      },
    ],
  }
);
