import * as React from "react";

interface ExperiencePointI {
  index: number;
  title: string;
  subtitle: string;
  description: string;
  duration: string;
}
const ExperiencePoint = ({
  index,
  title,
  subtitle,
  description,
  duration,
}: ExperiencePointI) => {
  const containerStyle =
    index % 2 === 0 ? "border-r-2  border-[#adb7be] text-right" : "";
  const dotStyle = index % 2 === 0 ? "-right-[21.5px]" : "-left-[21.5px]";

  return (
    <div className={`flex-1 p-10 py-12 ${containerStyle}  relative`}>
      <h1 className="text-2xl text-white">{title}</h1>
      <h4 className="text-base text-white">{subtitle}</h4>
      <h4 className="text-sm text-[#adb7be]">{duration}</h4>
      <p className="text-[#adb7be] text-sm mt-2 md:hidden block">{description}</p>
      <div
        className={`border border-[#adb7be] p-3 rounded-full absolute top-1/3 ${dotStyle}`}
      >
        <div className="bg-white p-2 rounded-full" />
      </div>
    </div>
  );
};

export default ExperiencePoint;
