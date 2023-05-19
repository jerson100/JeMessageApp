import { FC } from "react";
// import clsx from "clsx";
import { buttonStyles } from "./button.style";
import { ButtonProps } from "./buttons.interface";
import { ElementSizeTypeE } from "@/assets/consts/form.const";
import { RoundedTypeE } from "@/assets/consts/rounded.const";

export const Button: FC<ButtonProps> = ({
  className,
  children,
  variant = "contained",
  color = "sky",
  size = ElementSizeTypeE.MEDIUM,
  disabled = false,
  rounded = RoundedTypeE.MEDIUM,
  fullWidth = false,
  type = "button",
  ...props
}) => {
  return (
    <button
      type={type}
      {...props}
      className={buttonStyles({
        color,
        size,
        disabled,
        rounded,
        fullWidth: fullWidth,
        variant,
      })}
    >
      {children}
    </button>
  );
};

export default Button;
