"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import Link from "next/link";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>TypeScript</li>
        <li>React / Angular / Next </li>
        <li>Html</li>
        <li>Css / Tailwind</li>
        <li>Redux/Zustand/NgRx</li>
        <li>RxJs</li>
        <li>ReactQuery</li>
        <li>PostgreSQL</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>
          <Link
            target="_blank"
            href="https://cursos.devtalles.com/certificates/nhoh1ndsen"
          >
            Zustand status manager for react
          </Link>
        </li>
        <li>
          <Link
            target="_blank"
            href="https://cursos.devtalles.com/certificates/e5usgxmaaa"
          >
            Tanstack query a powerful asynchronous state manager
          </Link>
        </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a Frontend Developer with 2 years of experience in designing
            and developing dynamic and responsive user interfaces. My expertise
            lies in using modern technologies such as Angular and React, with
            which I have built efficient, scalable, and user-centered web
            applications. Throughout my career, I have collaborated with
            multidisciplinary teams to implement solutions that meet quality
            standards and client needs. I am passionate about continuous
            learning and staying up-to-date with the latest trends in frontend
            development, as well as contributing innovative ideas that add value
            to projects.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
