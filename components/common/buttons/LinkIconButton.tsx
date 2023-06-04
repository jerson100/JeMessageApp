import { FC } from "react";
import { IconType } from "react-icons";
import clsx from "clsx";
import { LinkButtonProps } from "./buttons.interface";
import { ElementSizeTypeE } from "@/consts/form.const";
import LinkButton from "./LinkButton";

interface IconButtonProps extends Omit<LinkButtonProps, "equalsPadding"> {
  icon: IconType;
}

const sizes = {
  small: 16,
  medium: 24,
  large: 32,
  big: 40,
};

export const LinkIconButton: FC<IconButtonProps> = ({
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
    <LinkButton {...props} size={size} equalsPadding>
      <div className={buttonClass}>
        <Icon size={sizes[size] - 5} />
      </div>
    </LinkButton>
  );
};

export default LinkIconButton;
