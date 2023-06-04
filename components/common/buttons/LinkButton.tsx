import Link from "next/link";
import React, { FC } from "react";
import { LinkButtonProps } from "./buttons.interface";
import { ElementSizeTypeE } from "@/consts/form.const";
import { RoundedTypeE } from "@/consts/rounded.const";
import { buttonStyles } from "./button.style";
import clsx from "clsx";

const LinkButton: FC<LinkButtonProps> = ({
  className,
  children,
  variant = "contained",
  color = "sky",
  size = ElementSizeTypeE.MEDIUM,
  disabled = false,
  rounded = RoundedTypeE.MEDIUM,
  fullWidth = false,
  equalsPadding = false,
  ...props
}) => {
  return (
    <Link
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
    </Link>
  );
};

export default LinkButton;
