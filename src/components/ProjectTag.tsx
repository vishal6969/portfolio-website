import * as React from "react";

interface ProjectTagI {
  name: string;
  onClick: (name: string) => void;
  isSelected: boolean;
}
const ProjectTag = ({ name, onClick, isSelected }: ProjectTagI) => {
  const buttonClass = isSelected
    ? "text-white border-purple-500"
    : "text-[#adb7be] border-slate-600 hover:border-white";
  return (
    <button
      onClick={() => onClick(name)}
      className={`rounded-full border-2 py-3 px-6 text-xl cursor-pointer ${buttonClass}`}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
