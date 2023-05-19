import { FC } from "react";
import Button from "./Button";
import { IconType } from "react-icons";
import clsx from "clsx";
import { ButtonProps } from "./buttons.interface";
import { ElementSizeTypeE } from "@/assets/consts/form.const";

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
  size = ElementSizeTypeE.MEDIUM,
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
