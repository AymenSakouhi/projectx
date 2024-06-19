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

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 136) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`${isFixed ? "fixed" : ""} ${isFixed && "scrollingNavFixed"} ${isFixed && "laptop:h-[90px]"} flex w-[100%] items-center justify-center  overflow-hidden bg-[#ffffff] text-center phone:h-auto phone:flex-col laptop:h-[126px] laptop:flex-row `}
    >
      <div className="flex h-[100%] flex-col items-center justify-center text-center phone:w-[100%] laptop:w-[50%]">
        <Link href="/">
          <Image
            className="h-[100%]  w-[100px] tablet:h-[100%] tablet:w-[189px]"
            src={Logo}
            alt=""
          />
        </Link>
      </div>
      <div className="flex h-[100%] flex-row items-center text-center phone:w-[100%] phone:justify-center laptop:w-[50%] laptop:justify-start">
        <div className="phone:hidden laptop:flex">
          {navData.map((nav: navType, index) => {
            return (
              <Link
                key={index}
                href={nav.path}
                className={`flex h-[100%] flex-col items-center justify-center text-center font-light leading-[24px] text-[#665bdb] hover:bg-[#fe6501] hover:text-white phone:text-[13px]  tablet:text-[14px] laptop:p-[7px]  laptop:pb-[20px]  laptop:pt-[25px] laptop:text-[15px]  desktop:p-[10px] desktop:pb-[25px]  desktop:pt-[30px] desktop:text-[18px]`}
              >
                <FontAwesomeIcon
                  className={`color-[#665bdb] hover:color-white `}
                  style={{
                    height: "40px",
                    width: "40px",
                    display: isFixed ? "none" : "flex",
                  }}
                  icon={nav.icon}
                />

                <p
                  className={`mb-[15px] mt-[0px] flex flex-col phone:m-[12px] laptop:m-[19px] `}
                >
                  {nav.name}
                </p>
              </Link>
            );
          })}
        </div>
        <div className="flex flex-col items-center justify-center text-center phone:w-[100%] laptop:hidden">
          <div
            className="mb-[20px] mt-[20px] h-[42px] w-[90%] overflow-hidden border border-slate-300 "
            style={{ height: `${closeNav}px` }}
            onClick={() => {
              closeNav == 280 ? setCloseNav(40) : setCloseNav(280);
            }}
          >
            <div className=" flex h-[40px] w-[100%] cursor-pointer flex-row items-center justify-between pl-[15px] pr-[15px]  text-center text-[#665bdb] hover:bg-[#fe6501] hover:text-white">
              <p>Menu</p>
              <FontAwesomeIcon
                style={{ height: "25px", width: "25px" }}
                icon={faBars}
              />
            </div>
            <div>
              {navData.map((nav: navType, index) => {
                return (
                  <Link
                    key={index}
                    href={nav.path}
                    className=" flex h-[100%] flex-col items-start justify-start text-start font-light leading-[24px] text-[#665bdb] hover:bg-[#fe6501] hover:text-white phone:text-[13px]  tablet:text-[14px] laptop:p-[7px] laptop:pb-[20px]  laptop:pt-[25px] laptop:text-[15px]  desktop:p-[10px] desktop:pb-[25px]  desktop:pt-[30px] desktop:text-[18px]"
                  >
                    <p className="mb-[15px] mt-[0px] phone:m-[12px] laptop:m-[19px] ">
                      {nav.name}
                    </p>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
