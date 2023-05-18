import Image from "next/image";
import React, { FC, PropsWithChildren } from "react";

const LayoutAuthPage: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="h-full flex items-center justify-center min-h-screen bg-gray-50">
      <div className="px-4 py-6 flex flex-col gap-6 items-center max-w-md w-full">
        <Image
          src={"/assets/image/logo-ms.png"}
          alt="Logo de la aplicación JeMessageApp"
          width={50}
          height={50}
        />
        {children}
      </div>
    </div>
  );
};

export default LayoutAuthPage;
