"use client";
import React, {
  createContext,
  useEffect,
  useRef,
  useState,
} from "react";
import SectionContainer from "./SectionContainer";
import About from "../blockLevel/About";
import ProjectsList from "../blockLevel/ProjectsList";
import ProjectDetail from "../blockLevel/ProjectDetail";

export const ContainerHeightContext = createContext<number | null>(null);

function ContentContainer() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [containerHeight, setContainerHeight] = useState<null | number>(null);

  const updateContainerHeight = () => {
    if (containerRef.current) {
      setContainerHeight(containerRef.current.clientHeight);
    }
  };

  useEffect(() => {
    updateContainerHeight();

    const handleResize = () => {
      updateContainerHeight();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`w-full flex-wrap overflow-hidden divide-x-[1px] divide-muted h-full flex align-start`}
    >
      <ContainerHeightContext.Provider value={containerHeight}>
        <SectionContainer width="30" sectionTitle="About" containerBg="">
          <About />
        </SectionContainer>
        <SectionContainer width="30" sectionTitle="Projects" containerBg="">
          <ProjectsList />
        </SectionContainer>
        <SectionContainer
          width="40"
          sectionTitle="Project Detail"
          containerBg=""
        >
          <ProjectDetail />
        </SectionContainer>
      </ContainerHeightContext.Provider>
    </div>
  );
}

export default ContentContainer;
