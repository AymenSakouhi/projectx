import React from "react";
import bgCallTAction from "public/callToActionBg.png";
import Image from "next/image";

type callToActionBgTypes = {
  title: string;
  text: string;
};

export default function CallToAction({ title, text }: callToActionBgTypes) {
  return (
    <div className="relative flex h-[167px] w-full items-center justify-center bg-cover bg-center text-center phone:flex-col laptop:flex-row">
      <Image
        src={bgCallTAction}
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        className="absolute z-[-1]"
      />
      <div className="flex h-full w-full items-center justify-center phone:w-[100%] laptop:w-[45%]">
        <h1 className="font-Lato font-light leading-[46px] text-white phone:text-[14px] laptop:text-[38px]">
          {title}
        </h1>
      </div>
      <div className="flex h-full w-full items-center justify-center phone:w-[100%] laptop:w-[45%]">
        <button
          className=" border-[3px] border-white bg-transparent font-semibold text-white hover:bg-white  hover:text-[#665bdb] phone:h-[40px] phone:w-[110px] phone:text-[13px] laptop:h-[46px] laptop:w-[148px] laptop:text-[14px]"
          aria-label="Learn more about how to enroll your child to a class"
        >
          {text}
        </button>
      </div>
    </div>
  );
}
