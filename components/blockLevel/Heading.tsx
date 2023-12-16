import React from "react";
import { Offside } from "next/font/google";

const offside = Offside({ weight: "400", subsets: ["latin"] });

function Heading() {
  return (
    <div className="border-y-[1px] border-muted w-full text-center">
      <h1 className={`text-${[8.5 * 1.6]}vw ${offside.className} select-none leading-tight text-[8.5vw]`}>
        DAS ATELIER
      </h1>
    </div>
  );
}

export default Heading;
