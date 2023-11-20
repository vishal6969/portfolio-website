"use client";

import useGetAnimatedText from "@/hooks/useGetAnimatedText";
import Image from "next/image";
import * as React from "react";

const HeroSection = () => {
  const text = useGetAnimatedText([
    "Vishal",
    "Mobile Developer",
    "Web Developer",
  ]);
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
              Hello, I'm
            </span>
            <br></br>
            {text + "|"}
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6">
            Welcome to my digital space! Explore the fusion of my passion and
            expertise through this portfolio. Dive into a visual journey that
            encapsulates my creative endeavors and professional pursuits. Thank
            you for visiting – let's connect and explore possibilities together.
          </p>
          <div>
            <button className="rounded-full w-full sm:w-fit px-6 py-3 mr-4 text-white bg-white hover:bg-slate-200 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500">
              Hire Me
            </button>
            <button className="rounded-full w-full sm:w-fit px-1 py-1 bg-transparent hover:bg-slate-800 text-white mt-3 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500">
              <span className="block bg-[#121212] hover:bg-slate-800 py-2 px-5 rounded-full">
                Download Resume
              </span>
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src={"/images/profile_photo_2.png"}
              className=" absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="profile image"
              width={300}
              height={200}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
