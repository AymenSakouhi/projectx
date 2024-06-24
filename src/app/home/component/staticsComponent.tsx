"use client";
import Image from "next/image";
import staticsBgImg from "public/staticsBgImg.jpg";
import { useState } from "react";

type informationDataType = {
  title: string;
  description: string;
  number: number;
  id: number;
};

const informationData: informationDataType[] = [
  {
    title: "Our Pupils",
    description: "Pulvinar forte maestro node terminal est elipsis prism.",
    number: 507,
    id: 1,
  },
  {
    title: "Teaching Hours",
    description: "Pulvinar forte maestro node terminal est elipsis.",
    number: 235,
    id: 2,
  },
  {
    title: "Satisfied Parents",
    description: "Pulvinar forte maestro node terminal est elipsis.",
    number: 100,
    id: 3,
  },
  {
    title: "Meals Per Year",
    description: "Pulvinar forte maestro node terminal est elipsis.",
    number: 1050,
    id: 4,
  },
  {
    title: "Morning Session",
    description: "Pulvinar forte maestro node terminal est elipsis.",
    number: 15,
    id: 5,
  },
  {
    title: "Full Daycare",
    description: "Pulvinar forte maestro node terminal est elipsis.",
    number: 25,
    id: 6,
  },
];

export default function StaticsComponent() {
  const [transformImg, setTransformImg] = useState(0);

  return (
    <div className=" relative flex h-auto  flex-col items-center justify-center  pb-[80px] pt-[80px] text-center">
      <Image
        className="z-[-1] m-0 h-[100%] w-[100%] p-0 "
        src={staticsBgImg}
        alt=""
        layout="fill"
        objectFit="cover"
      />

      <div className="flex h-[357px] w-[60%] flex-col items-center justify-center gap-[30px] overflow-hidden transition-all duration-1000">
        <div
          style={{ transform: `translateX(-${transformImg * 25}%)` }}
          className="  flex  w-[100%]  flex-row items-center  justify-start  gap-[1rem] text-center"
        >
          {informationData.map((data: informationDataType) => {
            return (
              <div
                key={data.id}
                className=" mr-[30px] flex w-[240px] flex-col items-center justify-center text-center"
              >
                <div className=" mb-[20px] ml-[30px] mr-[30px] flex h-[176px] w-[176px] flex-col items-center justify-center rounded-[50%] border-[2px] border-white text-center ">
                  <p className=" font-openSans text-[50px] font-light leading-[75px] text-white ">
                    {data.id === 3 ? data.number + "%" : data.number}
                  </p>
                </div>
                <h1 className=" color-white mb-[20px] w-[100%] font-Lato text-[24px] font-normal leading-[29px] text-white">
                  {data.title}
                </h1>
                <p className=" w-[100%] font-openSans text-[16px] font-normal leading-[24px] text-white">
                  {data.description}
                </p>
              </div>
            );
          })}
        </div>
        <div className=" flex h-[auto] w-[auto] flex-row items-center justify-center text-center">
          <button
            onClick={() => {
              setTransformImg((prev) =>
                prev === informationData.length - 1
                  ? 1
                  : prev === 0
                    ? informationData.length - 1
                    : prev - 1,
              );
            }}
            className="m-[3px] h-[12px] w-[45px] cursor-pointer border-2 border-white hover:border-slate-300"
          ></button>
          <div
            className="m-[3px] h-[12px] w-[45px] cursor-pointer border-2 border-white hover:border-slate-300"
            onClick={() => {
              setTransformImg((prev) =>
                prev === informationData.length - 1 ? 0 : prev + 1,
              );
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}
