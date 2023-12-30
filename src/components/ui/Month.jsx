import React from "react";

const Month = ({ text }) => {
  return (
    <div className="bg-white border-[1px] text-xs flex items-center justify-center border-black">
      {text}
    </div>
  );
};

export default Month;
