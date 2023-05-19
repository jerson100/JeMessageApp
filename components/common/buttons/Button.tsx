import { FC } from "react";
// import clsx from "clsx";
import { buttonStyles } from "./button.style";
import { ButtonProps } from "./buttons.interface";

export const Button: FC<ButtonProps> = ({
  className,
  children,
  variant = "contained",
  color = "sky",
  size = "medium",
  disabled = false,
  rounded = "medium",
  fullWidth = false,
  ...props
}) => {
  return (
    <button
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
