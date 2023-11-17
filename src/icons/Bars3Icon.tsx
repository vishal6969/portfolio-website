import React from "react";
import { IconI } from "./interface";

const Bars3Icon = ({ color, height, width, strokeWidth }: IconI) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={strokeWidth}
      stroke={color}
      className={`w-${width} h-${height}`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
      />
    </svg>
  );
};

Bars3Icon.defaultProps = {
  color: "currentColor",
  height: 6,
  width: 6,
  strokeWidth: 1.5,
};

export default Bars3Icon;
