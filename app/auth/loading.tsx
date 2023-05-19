import React from "react";
import { BounceLoader } from "react-spinners";

const loading = () => {
  return (
    <div className="flex items-center justify-center min-h-[200px]">
      <BounceLoader color="#36d7b7" />
    </div>
  );
};

export default loading;
