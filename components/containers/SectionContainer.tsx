import React, { ReactNode } from "react";
import SectionHeading from "../blockLevel/SectionHeading";
import YScrollableContainer from "./YScrollableContainer";
import GradientBlock from "../blockLevel/GradientBlock";

interface PropsSectionContainer {
  children: ReactNode,
  width: string,
  sectionTitle: string,
  containerBg?: string
}

function SectionContainer({ children, width, sectionTitle, containerBg }: PropsSectionContainer) {
  return (
    <div className={`relative ${width == '30' ? 'w-[30%] min-w-[300px]' : 'w-[40%] min-w-[400px]'} grow flex h-full justify-start items-start`}>
      <GradientBlock />
      <SectionHeading title={sectionTitle} />
      <YScrollableContainer extra={`${containerBg}`}>
        {children}
      </YScrollableContainer>
    </div>
  );
}

export default SectionContainer;
