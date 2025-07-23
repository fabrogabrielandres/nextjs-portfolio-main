import React, { useState } from "react";
import {
  CodeBracketIcon,
  EyeIcon,
  FolderIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { VideoModal } from "./VideoModal";

const ProjectCard = ({
  imgUrl,
  title,
  description,
  gitUrl,
  previewUrl,
  download,
  showVideoModalIcon,
  videoUrl,
}) => {
  const handleClick = async () => {
    const response = await fetch("/api/reference");
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "Reference_FabroGabriel.pdf";
    link.click();
    window.URL.revokeObjectURL(url);
  };

  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <div
        className="h-52 md:h-72 rounded-t-xl relative group bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${imgUrl})` }}
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
          {download ? (
            <span
              onClick={handleClick}
              className="h-14 w-14 ml-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
            >
              <FolderIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
            </span>
          ) : (
            <div className="display flex">
              <Link
                target="_blank"
                href={gitUrl}
                className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
              >
                <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
              </Link>

              <Link
                target="_blank"
                href={previewUrl}
                className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
              >
                <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
              </Link>

              {showVideoModalIcon && (
                <div className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link">
                  <VideoModal
                    trigger={
                      <VideoCameraIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
                    }
                    videoSrc={videoUrl}
                    title="Full Demo"
                  />
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      <div className="text-white rounded-b-xl mt-3 bg-[#181818]py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>

        <p className="text-[#ADB7BE]">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
