import { ButtonHTMLAttributes } from "react";
import { buttonStyles } from "./button.style";
import { VariantProps } from "class-variance-authority";
import { OptionalNonNullableObject } from "@/types";

export interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "disabled" | "color">,
    OptionalNonNullableObject<VariantProps<typeof buttonStyles>> {}
