import React from "react";

interface TitleSeparatorProps {
  text: string;
}

const TitleSeparator = ({ text }: TitleSeparatorProps) => {
  return (
    <div className="relative w-full">
      <div className="left-0 top-1/2 translate-y-(calc(100%-4px)) absolute w-full h-[2px] bg-gray-200 z-10"></div>
      <p className="relative z-20 text-center">
        <span className="bg-white px-4">{text}</span>
      </p>
    </div>
  );
};

export default TitleSeparator;
