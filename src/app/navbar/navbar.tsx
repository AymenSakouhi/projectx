"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
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
  const [isLaptop, setIsLaptop] = useState(false);

  useEffect(() => {
    const updateMedia = () => {
      setIsLaptop(window.innerWidth >= 1024);
    };

    // Initial check
    updateMedia();

    // Add event listener when component mounts
    window.addEventListener("resize", updateMedia);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener("resize", updateMedia);
    };
  }, []);

  return (
    <div className="laptop:flex-row phone:flex-col laptop:h-[126px] phone:h-auto flex w-[100%] items-center justify-center bg-[#ffffff] text-center ">
      <div className="laptop:w-[50%] phone:w-[100%] flex h-[100%] flex-col items-center justify-center text-center">
        <Image
          className=" tablet:h-[100%]  tablet:w-[189px] h-[100%] w-[100px]"
          src={Logo}
          alt=""
        />
      </div>
      <div className="laptop:w-[50%] phone:w-[100%] laptop:justify-start phone:justify-center flex h-[100%] flex-row items-center text-center">
        {isLaptop ? (
          navData.map((nav: navType, index) => {
            return (
              <Link
                key={index}
                href={nav.path}
                className=" tablet:text-[14px] desktop:text-[18px] phone:text-[13px] laptop:text-[15px] desktop:p-[10px] desktop:pb-[25px] desktop:pt-[30px] laptop:p-[7px] laptop:pb-[20px] laptop:pt-[25px]  flex h-[100%] flex-col  items-center justify-center  text-center font-light  leading-[24px] text-[#665bdb]"
              >
                <p className="laptop:m-[19px] phone:m-[12px] mb-[15px] mt-[0px] ">
                  {nav.icon}
                  {nav.name}
                </p>
              </Link>
            );
          })
        ) : (
          <div className="h-[42px] w-[90%]  border border-slate-300 p-[10px] pl-[20px] pr-[20px]">
            <div className=" flex h-[110%] w-[100%] flex-row justify-between ">
              <p className="text-[#665bdb]">menu</p>
              <div className="flex h-[100%] w-[30px] flex-col  items-center justify-center gap-[7px] text-center">
                <hr className="m-0 h-[8px] w-[100%] bg-[#665bdb] p-0" />
                <hr className="m-0 h-[8px] w-[100%] bg-[#665bdb] p-0" />
                <hr className="m-0 h-[8px] w-[100%] bg-[#665bdb] p-0" />
              </div>
            </div>
            <div>
              {navData.map((nav: navType, index) => {
                return (
                  <Link
                    key={index}
                    href={nav.path}
                    className=" tablet:text-[14px] desktop:text-[18px] phone:text-[13px] laptop:text-[15px] desktop:p-[10px] desktop:pb-[25px] desktop:pt-[30px] laptop:p-[7px] laptop:pb-[20px] laptop:pt-[25px]  flex h-[100%] flex-col  items-center justify-center  text-center font-light  leading-[24px] text-[#665bdb]"
                  >
                    <p className="laptop:m-[19px] phone:m-[12px] mb-[15px] mt-[0px] ">
                      {nav.icon}
                      {nav.name}
                    </p>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
