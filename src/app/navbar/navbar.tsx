import Link from "next/link";
import React from "react";
import Logo from "public/logo_header.png";
import Image from "next/image";

type navType = {
  name: string;
  path: string;
  icon: React.ReactNode;
};

const navData: navType[] = [
  { name: "Home", path: "/", icon: <></> },
  { name: "Pages", path: "/pages", icon: <></> },
  { name: "Blog", path: "/blog", icon: <></> },
  { name: "Shortcode", path: "/shortcode", icon: <></> },
  { name: "contact", path: "/contact", icon: <></> },
];

export default function Navbar() {
  return (
    <div className="flex-rol flex h-[60px] w-[100%] items-center justify-center bg-[#ffffff] text-center sm:h-[116px]">
      <div className="flex h-[100%] w-[50%] flex-col items-center justify-center text-center">
        <Image
          className=" h-[100%]  w-[100px] sm:h-[100%] sm:w-[189px]"
          src={Logo}
          alt=""
        />
      </div>
      <div className="flex h-[100%] w-[50%] flex-row items-center justify-start text-center">
        {navData.map((nav: navType, index) => {
          return (
            <Link
              key={index}
              href={nav.path}
              className="flex h-[100%] flex-col items-center justify-center p-[10px] pb-[25px] pt-[30px] text-center text-[18px] font-light leading-[24px] text-[#665bdb]"
            >
              <p className="m-[19px] mb-[15px] mt-[0px] ">
                {nav.icon}
                {nav.name}
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
