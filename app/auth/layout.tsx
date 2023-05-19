import Image from "next/image";
import React, { FC, PropsWithChildren } from "react";

const LayoutAuthPage: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="pt-12 pb-4 sm:pb-12 md:pb-0 md:pt-0 h-full flex items-center justify-center min-h-screen bg-gray-50">
      <div className="xs:border xs:border-gray-100 xs:rounded-lg xs:shadow-xl px-4 py-6 flex flex-col gap-6 items-center max-w-md w-full bg-white">
        <div className="mt-[-60px]">
          <Image
            src={"/assets/image/logo-ms.png"}
            alt="Logo de la aplicación JeMessageApp"
            width={60}
            height={60}
          />
        </div>
        {children}
      </div>
    </div>
  );
};

export default LayoutAuthPage;
