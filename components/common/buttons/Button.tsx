import { FC } from "react";
// import clsx from "clsx";
import { buttonStyles } from "./button.style";
import { ButtonProps } from "./buttons.interface";
import { ElementSizeTypeE } from "@/assets/consts/form.const";
import { RoundedTypeE } from "@/assets/consts/rounded.const";
import clsx from "clsx";

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
  equalsPadding = false,
  ...props
}) => {
  return (
    <button
      type={type}
      {...props}
      className={clsx(
        buttonStyles({
          color,
          size,
          disabled,
          rounded,
          fullWidth,
          equalsPadding,
          variant,
        }),
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
