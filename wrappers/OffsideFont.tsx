import React, { ReactNode } from 'react'
import { Offside } from "next/font/google";

const offside = Offside({ weight: "400", subsets: ["latin"] });

interface OffsideFontProps {
    children: ReactNode,
    extra?: string
}

function OffsideFont({children, extra}: OffsideFontProps) {
  return (
    <div className={`${offside.className} ${extra && extra}`}>
        {children}
    </div>
  )
}

export default OffsideFont