import React from "react";

export const download = () => {
  const handleClick = async () => {
    const response = await fetch("/api/file?hola");
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "cv.pdf";
    link.click();
    window.URL.revokeObjectURL(url);
  };
  return {handleClick};
};
