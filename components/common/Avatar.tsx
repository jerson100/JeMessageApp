import clsx from "clsx";
import Image from "next/image";
import React from "react";

interface AvatarProps {
  src?: string | null;
  alt?: string;
  name: string;
  status?: 1 | 0;
}

const Avatar = ({ src, alt = "", status = 0, name }: AvatarProps) => {
  const _statusClassNames = clsx(
    "absolute right-0 top-0 w-2 h-2 rounded-full outline outline-4 outline-white",
    status ? "bg-green-400" : "bg-red-400"
  );
  return (
    <div className="relative flex justify-center items-center rounded-full w-12 h-12 bg-gray-400">
      {src ? (
        <Image
          width={48}
          height={48}
          src={src}
          alt={alt}
          className="rounded-full"
          title={alt}
        />
      ) : (
        <span className="text-white text-xl font-bold">
          {name[0].toUpperCase()}
        </span>
      )}
      <div className={_statusClassNames}></div>
    </div>
  );
};

export default Avatar;
