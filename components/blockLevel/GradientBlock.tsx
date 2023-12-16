import React from "react";

interface PropsGradientBlock {
  top?: boolean;
}

function GradientBlock({ top }: PropsGradientBlock) {
  return (
    <div
      className={`absolute ${
        top
          ? "top-0 bg-gradient-to-b to-[#0000] from-black h-[10%]"
          : "bottom-0 bg-gradient-to-t from-[#000] to-[#0000] h-[10%]"
      } w-full  pointer-events-none`}
    ></div>
  );
}

export default GradientBlock;
