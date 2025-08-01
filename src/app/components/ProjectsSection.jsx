"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "E-commerce Application",
    description:
      "Developed a scalable, high-performance e-commerce platform using Next.js 14, leveraging Server Components and Server Side Rendering (SSR) to optimize speed and SEO. I integrated a secure payment gateway and managed real-time inventory updates for a seamless shopping experience and implemented advanced SEO strategies, such as dynamic metatags and optimized paths, to improve search engine visibility.",
    image: "/images/projects/1.png",
    tag: ["All", "React/Next"],
    gitUrl: "https://github.com/fabrogabrielandres/osloshop",
    previewUrl: "https://osloshop-test.vercel.app/",
    download: false,
    showVideoModalIcon: false,
    videoUrl: "primero ",
  },
  {
    id: 2,
    title: "Oslocase: Modern E-Commerce for Custom Phone Cases",
    description:"Oslocase is a full-stack e-commerce platform designed to deliver a seamless experience for customizing and purchasing personalized phone cases. Built with Next.js (App Router), React Query, Tailwind CSS, and shadcn UI, the app prioritizes performance, responsive design, and intuitive usability.",
    image: "/images/projects/oslocase.png",
    tag: ["All", "React/Next"],
    gitUrl: "https://github.com/fabrogabrielandres/oslocase",
    previewUrl: "https://oslocase.vercel.app/",
    download: false,
    showVideoModalIcon: true,
    videoUrl: "/images/projects/oslocase.mp4",
  },
];
const companiesData = [
  {
    gitUrl: "https://www.piranirisk.com/en/",
    previewUrl: "https://www.piranirisk.com/en/",
    id: 3,
    title: "Pirani",
    description: "Period 02-2021 02-2023",
    image: "/images/projects/2.png",
    download: true,
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="React/Next"
          isSelected={tag === "React/Next"}
        />
        {/* <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        /> */}
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
              showVideoModalIcon={project.showVideoModalIcon}
              videoUrl={project.videoUrl}
            />
          </motion.li>
        ))}
      </ul>

      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Reference
      </h2>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {companiesData.map((project, index) => (
          <>
            <ProjectCard
              key={project.id}
              title={project.title ?? ""}
              description={project.description ? project.description : [""]}
              imgUrl={project.image ?? ""}
              gitUrl={project.gitUrl ?? ""}
              previewUrl={project.previewUrl}
              download={project.download}
            />
          </>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
