import * as React from "react";
import { IconI } from "./interface";

const XmarkIcon = ({ color, height, width, strokeWidth }: IconI) => {
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
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
};

XmarkIcon.defaultProps = {
  color: "currentColor",
  height: 6,
  width: 6,
  strokeWidth: 1.5,
};

export default XmarkIcon;
