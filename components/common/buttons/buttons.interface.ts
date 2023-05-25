import { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import { buttonStyles } from "./button.style";
import { VariantProps } from "class-variance-authority";
import { OptionalNonNullableObject } from "@/types";
import { LinkProps } from "next/link";

export interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "disabled" | "color">,
    OptionalNonNullableObject<VariantProps<typeof buttonStyles>> {}

export type LinkButtonProps = Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  "disabled" | "color"
> &
  OptionalNonNullableObject<VariantProps<typeof buttonStyles>> &
  LinkProps;
