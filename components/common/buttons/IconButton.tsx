import { FC } from "react";
import Button from "./Button";
import { IconType } from "react-icons";
import { ButtonProps } from "@/types";
import clsx from "clsx";

interface IconButtonProps extends ButtonProps {
  icon: IconType;
}

const sizes = {
  small: 16,
  medium: 24,
  large: 32,
  big: 40,
};

export const IconButton: FC<IconButtonProps> = ({
  icon: Icon,
  size = "medium",
  ...props
}) => {
  const buttonClass = clsx(
    "flex items-center",
    size === "small" && "h-[16px]",
    size === "medium" && "h-[24px]",
    size === "large" && "h-[32px]",
    size === "big" && "h-[40px]"
  );

  return (
    <Button {...props} size={size}>
      <div className={buttonClass}>
        <Icon size={sizes[size] - 5} />
      </div>
    </Button>
  );
};

export default IconButton;
