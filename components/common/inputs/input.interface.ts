import { OptionalNonNullableObject } from "@/types";
import { VariantProps } from "class-variance-authority";
import { InputStyleType } from "./input.style";

export interface InputPropsType
  extends OptionalNonNullableObject<VariantProps<InputStyleType>> {
  id: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  label?: string;
  autoComplete?: string;
}
