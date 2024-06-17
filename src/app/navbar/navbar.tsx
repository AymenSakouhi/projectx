"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Logo from "public/logo_header.png";
import Image from "next/image";
import homeIcon from "public/icons8-home-120.png";
import blogIcon from "public/icons8-blog-dotted-96.png";
import pageIcon from "public/icons8-page-96.png";
import shortIcon from "public/icons8-chemical-96.png";
import contactIcon from "public/icons8-contact-us-96.png";

type navType = {
  name: string;
  path: string;
  icon?: any;
};

const navData: navType[] = [
  {
    name: "Home",
    path: "/",
    icon: homeIcon,
  },
  {
    name: "Pages",
    path: "/pages",
    icon: pageIcon,
  },
  {
    name: "Blog",
    path: "/blog",
    icon: blogIcon,
  },
  {
    name: "Shortcode",
    path: "/shortcode",
    icon: shortIcon,
  },
  {
    name: "Contact",
    path: "/contact",
    icon: contactIcon,
  },
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
    <div className="flex w-[100%] items-center justify-center bg-[#ffffff] text-center phone:h-auto phone:flex-col laptop:h-[126px] laptop:flex-row ">
      <div className="flex h-[100%] flex-col items-center justify-center text-center phone:w-[100%] laptop:w-[50%]">
        <Image
          className=" h-[100%]  w-[100px] tablet:h-[100%] tablet:w-[189px]"
          src={Logo}
          alt=""
        />
      </div>
      <div className="flex h-[100%] flex-row items-center text-center phone:w-[100%] phone:justify-center laptop:w-[50%] laptop:justify-start">
        {isLaptop ? (
          navData.map((nav: navType, index) => {
            return (
              <Link
                key={index}
                href={nav.path}
                className=" flex h-[100%] flex-col items-center justify-center text-center font-light leading-[24px] text-[#665bdb] phone:text-[13px]  tablet:text-[14px] laptop:p-[7px] laptop:pb-[20px]  laptop:pt-[25px] laptop:text-[15px]  desktop:p-[10px] desktop:pb-[25px]  desktop:pt-[30px] desktop:text-[18px]"
              >
                <p className="mb-[15px] mt-[0px] flex flex-col gap-[5px] phone:m-[12px] laptop:m-[19px] ">
                  <Image
                    src={nav.icon}
                    alt="navIcon"
                    style={{ height: "100%" }}
                  />
                  {nav.name}00
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
                    className=" flex h-[100%] flex-col items-center justify-center text-center font-light leading-[24px] text-[#665bdb] phone:text-[13px]  tablet:text-[14px] laptop:p-[7px] laptop:pb-[20px]  laptop:pt-[25px] laptop:text-[15px]  desktop:p-[10px] desktop:pb-[25px]  desktop:pt-[30px] desktop:text-[18px]"
                  >
                    <p className="mb-[15px] mt-[0px] phone:m-[12px] laptop:m-[19px] ">
                      <Image src={nav.icon} alt="navIcon" />

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
