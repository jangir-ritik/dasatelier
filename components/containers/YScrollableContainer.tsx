"use client"
import React, { ReactNode, useContext } from 'react'
import { ContainerHeightContext } from './ContentContainer'

interface PropsYScrollableContainer {
    children: ReactNode,
    extra?: string
}

function YScrollableContainer({children, extra}: PropsYScrollableContainer) {
  const height = useContext(ContainerHeightContext)
  return (
    <div style={{height: height ? height : undefined}} className={`p-6 flex gap-4 text-subdued py-16 h-0 w-full overflow-y-auto flex-col  ${extra}`}>
        {children}
    </div>
  )
}

export default YScrollableContainer