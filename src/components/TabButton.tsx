import * as React from "react";

interface TabButtonI {
  isActive: boolean;
  onSelect: () => void;
  children: string;
}
const TabButton = ({ isActive, onSelect, children }: TabButtonI) => {
  const buttonClasses = isActive
    ? "text-white border-b border-purple-500"
    : "text-[#adb7be]";
  return (
    <button onClick={onSelect} className="mr-3 font-semibold hover:text-white">
      <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
        {children}
      </p>
    </button>
  );
};

export default TabButton;
