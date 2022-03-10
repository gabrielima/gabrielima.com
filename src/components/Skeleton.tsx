import React from "react";

const Skeleton = () => {
  return (
    <div className="flex animate-pulse flex-row items-center h-full justify-center space-x-5">
      <div className="w-24 bg-gray-300 h-6 rounded-md "></div>
    </div>
  );
};

export default Skeleton;
