"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Logo from "public/logo_header.png";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faBlog,
  faContactCard,
  faCut,
  faHome,
  faPager,
} from "@fortawesome/free-solid-svg-icons";

type navType = {
  name: string;
  path: string;
  icon?: any;
};

const navData: navType[] = [
  {
    name: "Home",
    path: "/",
    icon: faHome,
  },
  {
    name: "Pages",
    path: "/pages",
    icon: faPager,
  },
  {
    name: "Blog",
    path: "/blog",
    icon: faBlog,
  },
  {
    name: "Shortcode",
    path: "/shortcode",
    icon: faCut,
  },
  {
    name: "Contact",
    path: "/contact",
    icon: faContactCard,
  },
];

export default function Navbar() {
  const [closeNav, setCloseNav] = useState<number>(40);
  const [isFixed, setIsFixed] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.scrollY;
      if (currentScrollTop > lastScrollTop && currentScrollTop >= 136) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }
      setIsFixed(currentScrollTop >= 136);
      setLastScrollTop(currentScrollTop);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <div
      className={`flex items-center justify-center overflow-hidden bg-[#ffffff] text-center phone:h-auto phone:flex-col laptop:flex-row ${
        isFixed ? "fixed-nav" : "relative h-[106px] w-full"
      } ${!isVisible ? "hidden-nav" : "visible-nav"}`}
    >
      <div className="flex h-full flex-col items-center justify-center text-center phone:w-full laptop:w-1/2">
        <Link href="/">
          <Image
            className="h-full w-[100px] tablet:h-full tablet:w-[189px]"
            src={Logo}
            alt=""
          />
        </Link>
      </div>
      <div className="flex h-full flex-row items-center text-center phone:w-full phone:justify-center laptop:w-1/2 laptop:justify-start">
        <div className="hidden laptop:flex">
          {navData.map((nav: navType, index) => (
            <Link
              key={index}
              href={nav.path}
              className={`flex h-full flex-col ${!isVisible ? "laptop:p-[4px] laptop:pb-[10px] laptop:pt-[12px] laptop:text-[13px]" : ""} items-center justify-center text-center font-light leading-[24px] text-[#665bdb] hover:bg-[#fe6501] hover:text-white phone:text-[13px]  tablet:text-[14px] laptop:p-[7px] laptop:pb-[20px] laptop:pt-[25px] laptop:text-[15px] desktop:p-[10px] desktop:pb-[25px] desktop:pt-[30px] desktop:text-[18px] `}
            >
              <FontAwesomeIcon
                className="color-[#665bdb] hover:color-white"
                style={{ height: "40px", width: "40px" }}
                icon={nav.icon}
              />
              <p className="mb-[15px] mt-[0px] flex flex-col gap-[5px] phone:m-[12px] laptop:m-[19px]">
                {nav.name}
              </p>
            </Link>
          ))}
        </div>
        <div className="flex flex-col items-center justify-center text-center phone:w-full laptop:hidden">
          <div
            className="mb-[20px] mt-[20px] h-[42px] w-[90%] overflow-hidden border border-slate-300"
            style={{ height: `${closeNav}px` }}
            onClick={() => {
              setCloseNav(closeNav === 280 ? 40 : 280);
            }}
          >
            <div className="flex h-[40px] w-full cursor-pointer flex-row items-center justify-between pl-[15px] pr-[15px] text-center text-[#665bdb] hover:bg-[#fe6501] hover:text-white">
              <p>Menu</p>
              <FontAwesomeIcon
                style={{ height: "25px", width: "25px" }}
                icon={faBars}
              />
            </div>
            <div>
              {navData.map((nav: navType, index) => (
                <Link
                  key={index}
                  href={nav.path}
                  className="flex h-full flex-col items-start justify-start text-start font-light leading-[24px] text-[#665bdb] hover:bg-[#fe6501] hover:text-white phone:text-[13px] tablet:text-[14px] laptop:p-[7px] laptop:pb-[20px] laptop:pt-[25px] laptop:text-[15px] desktop:p-[10px] desktop:pb-[25px] desktop:pt-[30px] desktop:text-[18px]"
                >
                  <p className="mb-[15px] mt-[0px] phone:m-[12px] laptop:m-[19px]">
                    {nav.name}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
