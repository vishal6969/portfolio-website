import CodeBracket from "@/icons/CodeBracket";
import Eye from "@/icons/Eye";
import Link from "next/link";
import * as React from "react";
import { UrlObject } from "url";

interface ProjectCardI {
  imgUrl: UrlObject | string;
  title: string;
  description: string;
  gitUrl: UrlObject | string;
  previewUrl: UrlObject | string;
}
const ProjectCard = ({
  imgUrl,
  title,
  description,
  gitUrl,
  previewUrl,
}: ProjectCardI) => {
  return (
    <div>
      <div
        className="h-52 md:h-72 rounded-t-xl relative group"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
      >
        <div className="overlay items-center justify-center absolute w-full h-full top-0 left-0 bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
          <Link
            href={gitUrl}
            className="h-14 w-14 flex items-center justify-center rounded-full relative border border-[#adb7be] hover:border-white group/link mr-2"
          >
            <CodeBracket
              height={40}
              width={40}
              className="text-[#adb7be] cursor-pointer hover:text-white group-hover/link:text-white"
            />
          </Link>
          <Link
            href={previewUrl}
            className="h-14 w-14 flex items-center justify-center rounded-full relative border border-[#adb7be] hover:border-white group/link"
          >
            <Eye
              height={40}
              width={40}
              className="text-[#adb7be] cursor-pointer group-hover/link:text-white"
            />
          </Link>
        </div>
      </div>
      <div className="text-white rounded-b-xl bg-[#181818] px-6 py-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#adb7be]">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
