import { ElementSizeTypeE } from "@/assets/consts/form.const";
import { RoundedTypeE } from "@/assets/consts/rounded.const";
import { cva } from "class-variance-authority";

export const buttonStyles = cva(
  "flex items-center justify-center focus:outline-none focus:ring-4 focus:border-transparent transition-colors duration-300 whitespace-nowrap select-none",
  {
    variants: {
      color: {
        blue: "hover:bg-blue-600 focus:ring-blue-400 border border-blue-500",
        red: "hover:bg-red-600 focus:ring-red-400 border border-red-500",
        green:
          "hover:bg-green-600 focus:ring-green-400 border border-green-500",
        yellow:
          "hover:bg-yellow-600 focus:ring-yellow-400 border border-yellow-500",
        gray: "hover:bg-gray-600 focus:ring-gray-400 border border-gray-500",
        sky: "hover:bg-sky-600 focus:ring-sky-400 border border-sky-500",
      },
      variant: {
        contained: "text-white",
        outlined: "hover:text-white",
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
        small: "text-sm leading-4",
        medium: "text-md leading-6",
        large: "text-lg leading-8",
        big: "text-xl leading-9",
      },
      disabled: {
        true: "opacity-50 cursor-not-allowed pointer-events-none",
      },
      equalsPadding: {
        true: "",
        false: "",
      },
    },
    defaultVariants: {
      color: "sky",
      variant: "contained",
      size: ElementSizeTypeE.MEDIUM,
      rounded: RoundedTypeE.MEDIUM,
      fullWidth: false,
      disabled: false,
    },
    compoundVariants: [
      {
        equalsPadding: true,
        size: "small",
        className: "px-2 py-2",
      },
      {
        equalsPadding: true,
        size: "medium",
        className: "px-2 py-2",
      },
      {
        equalsPadding: true,
        size: "large",
        className: "px-3 py-3",
      },
      {
        equalsPadding: true,
        size: "big",
        className: "px-4 py-4",
      },
      {
        equalsPadding: false,
        size: "small",
        className: "px-3 py-2",
      },
      {
        equalsPadding: false,
        size: "medium",
        className: "px-4 py-2",
      },
      {
        equalsPadding: false,
        size: "large",
        className: "px-5 py-3",
      },
      {
        equalsPadding: false,
        size: "big",
        className: "px-6 py-4",
      },
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
        className: "text-blue-500",
      },
      {
        variant: "outlined",
        color: "red",
        className: "text-red-500",
      },
      {
        variant: "outlined",
        color: "green",
        className: "text-green-500",
      },
      {
        variant: "outlined",
        color: "yellow",
        className: "text-yellow-500",
      },
      {
        variant: "outlined",
        color: "gray",
        className: "text-gray-500",
      },
      {
        variant: "outlined",
        color: "sky",
        className: "text-sky-500",
      },
    ],
  }
);
