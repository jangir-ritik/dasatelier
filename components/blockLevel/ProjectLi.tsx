import React from "react";

interface PropsProjectList {
  title: string;
  niche: string;
}

function ProjectLi({ title, niche }: PropsProjectList) {
  return (
    <ul className="flex justify-between items-start group cursor-pointer font-bold text-white py-4">
      <li className="flex items-center gap-2">
        {/* <div className="group-hover:block hidden w-[16px] h-[16px] rounded-full bg-gradient-to-b from-primary to-primary-hover"></div> */}
        <h4 className="uppercase group-hover:text-primary text-left">{title}</h4>
      </li>
      <li className="uppercase text-sm font-normal group-hover:text-primary text-right max-w-[60%] text-subdued text-ellipsis height-[1em] overflow-hidden">
        {niche}
      </li>
    </ul>
  );
}

export default ProjectLi;
