"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const PROJECTS_DATA = [
  {
    key: 1,
    title: "Project 1",
    description: "Description Project 1",
    imgUrl: "/images/about-me.jpg",
    tags: ["Web", "All"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    key: 2,
    title: "Project 2",
    description: "Description Project 2",
    imgUrl: "/images/about-me.jpg",
    tags: ["Web", "All"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    key: 3,
    title: "Project 3",
    description: "Description Project 3",
    imgUrl: "/images/about-me.jpg",
    tags: ["Web", "All"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    key: 4,
    title: "Project 4",
    description: "Description Project 4",
    imgUrl: "/images/about-me.jpg",
    tags: ["Mobile", "All"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    key: 5,
    title: "Project 5",
    description: "Description Project 5",
    imgUrl: "/images/about-me.jpg",
    tags: ["Mobile", "All"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    key: 6,
    title: "Project 6",
    description: "Description Project 6",
    imgUrl: "/images/about-me.jpg",
    tags: ["Web", "All"],
    gitUrl: "/",
    previewUrl: "/",
  },
];
const ProjectSection = () => {
  const [activeTag, setActiveTag] = useState("All");

  const handleTagChange = (tag: string) => {
    setActiveTag(tag);
  };
  const filteredProjects = PROJECTS_DATA.filter((project) =>
    project.tags.includes(activeTag)
  );
  return (
    <section>
      <h1 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h1>
      <div className="flex flex-row justify-center items-center gap-2 text-white py-6">
        <ProjectTag
          name="All"
          onClick={handleTagChange}
          isSelected={activeTag === "All"}
        />
        <ProjectTag
          name="Mobile"
          onClick={handleTagChange}
          isSelected={activeTag === "Mobile"}
        />
        <ProjectTag
          name="Web"
          onClick={handleTagChange}
          isSelected={activeTag === "Web"}
        />
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((item) => (
          <ProjectCard {...item} />
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
