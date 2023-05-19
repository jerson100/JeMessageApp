import {
  ElementSizeTypeE,
  FormElementSizeConfig,
} from "@/assets/consts/form.const";
import { cva } from "class-variance-authority";

export const inputVariantsStyle = cva(
  "border-gray-200 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full",
  {
    variants: {
      size: {
        small: "px-3 py-2 text-sm leading-4",
        medium: "px-4 py-2 text-md leading-6",
        large: "px-5 py-3 text-lg leading-8",
        big: "px-6 py-4 text-xl leading-9",
      },
    },
    defaultVariants: {
      size: ElementSizeTypeE.MEDIUM,
    },
  }
);

export type InputStyleType = typeof inputVariantsStyle;
