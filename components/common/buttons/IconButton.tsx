import { FC } from "react";
import Button from "./Button";
import { IconType } from "react-icons";
import clsx from "clsx";
import { ButtonProps } from "./buttons.interface";
import { ElementSizeTypeE } from "@/assets/consts/form.const";

interface IconButtonProps extends Omit<ButtonProps, "equalsPadding"> {
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
    "flex items-center justify-center",
    size === "small" && "h-[16px] w-[16px]",
    size === "medium" && "h-[24px] w-[24px]",
    size === "large" && "h-[32px] w-[32px]",
    size === "big" && "h-[40px] w-[40px]"
  );
  return (
    <Button {...props} size={size} equalsPadding>
      <div className={buttonClass}>
        <Icon size={sizes[size] - 5} />
      </div>
    </Button>
  );
};

export default IconButton;
