import {
  ElementSizeTypeE,
  FormElementSizeConfig,
} from "@/assets/consts/form.const";
import { cva } from "class-variance-authority";

export const inputVariantsStyle = cva(
  "border-gray-200 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full",
  {
    variants: {
      size: FormElementSizeConfig.size,
    },
    defaultVariants: {
      size: ElementSizeTypeE.MEDIUM,
    },
  }
);

export type InputStyleType = typeof inputVariantsStyle;
