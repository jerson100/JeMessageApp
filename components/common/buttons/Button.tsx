import { FC } from "react";
// import clsx from "clsx";
import { buttonStyles } from "./button.style";
import { ButtonProps } from "./buttons.interface";
import { ElementSizeType } from "@/assets/consts/form.const";

export const Button: FC<ButtonProps> = ({
  className,
  children,
  variant = "contained",
  color = "sky",
  size = ElementSizeType.MEDIUM,
  disabled = false,
  rounded = "medium",
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
