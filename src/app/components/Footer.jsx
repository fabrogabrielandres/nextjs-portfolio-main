import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div
        className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2"
        // className="container p-12 flex justify-between"
      >
        <Image
          src="/images/prueba.png"
          alt="hero image"
          width={50}
          height={50}
          style={{
            height: "100%",
            height: "100%",
          }}
        />
        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
