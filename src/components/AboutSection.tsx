"use client";

import Image from "next/image";
import React, { useState, useTransition } from "react";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    id: "Soft-Skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Communication</li>
        <li>Active Listening</li>
        <li>Team Work</li>
        <li>Problem Solving</li>
        <li>Customer Focus</li>
      </ul>
    ),
  },
  {
    id: "Hobbies",
    content: (
      <ul className="list-disc pl-2">
        <li>Book Reading</li>
        <li>Playing Guitar</li>
        <li>Watching Movies</li>
        <li>Hiking</li>
      </ul>
    ),
  },
  {
    id: "Goals",
    content: (
      <ul className="list-disc pl-2">
        <li>
          Develop skills beyond coding, such as data analysis, cybersecurity, or
          cloud architecture.
        </li>
        <li>Start a tech-related business or become a co-founder.</li>
        <li>
          Learn about DevOps tools, implement continuous integration and
          deployment (CI/CD), and streamline development workflows.
        </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState("Soft-Skills");
  const [isPending, setTransition] = useTransition();

  const handleTabChange = (id: string) => {
    setTransition(() => {
      setActiveTab(id);
    });
  };

  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 xl:gap-16 items-center md:px-4 py-8 sm:py-16 xl:px-16">
        <Image
          src={"/images/about-me.jpg"}
          height={500}
          width={500}
          alt="pc setup image"
        />
        <div className="flex flex-col h-full mt-4 md:mt-0">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            Software Development Engineer with strong skills in React-Native,
            React. Collaborative team player with a track record of delivering
            high-quality projects. Frontend-developer with proficiency in
            developing android applications and react-based websites. I
            communicate effectively, listen attentively, and adapt quickly to
            changing project requirements.
          </p>
          <div className="flex flex-row mt-8">
            <TabButton
              onSelect={() => handleTabChange("Soft-Skills")}
              isActive={activeTab === "Soft-Skills"}
            >
              Skills
            </TabButton>
            <TabButton
              onSelect={() => handleTabChange("Hobbies")}
              isActive={activeTab === "Hobbies"}
            >
              Hobbies
            </TabButton>
            <TabButton
              onSelect={() => handleTabChange("Goals")}
              isActive={activeTab === "Goals"}
            >
              Goals
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((item) => item.id === activeTab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
