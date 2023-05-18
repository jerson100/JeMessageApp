import { ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "contained" | "outlined";
  color?: "blue" | "red" | "green" | "yellow" | "gray" | "sky";
  size?: "small" | "medium" | "large" | "big";
  disabled?: boolean;
  rounded?: "none" | "small" | "medium" | "large" | "full";
  fullWidth?: boolean;
}
