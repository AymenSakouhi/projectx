"use client";
import Image from "next/image";
import staticsBgImg from "public/staticsBgImg.jpg";
import { useEffect, useState } from "react";
import {
  StaticsComponentData,
  StaticsComponentDataSchema,
} from "~/app/shared/data/staticsComponentData";

export default function StaticsComponent() {
  const totalItems = StaticsComponentData.length;
  const itemsToShow = 4;
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % totalItems);
  };

  const handlePrev = () => {
    setIndex((prevIndex) => (prevIndex - 1 + totalItems) % totalItems);
  };

  const getVisibleItems = () => {
    const visibleItems = [];
    for (let i = 0; i < itemsToShow; i++) {
      visibleItems.push(StaticsComponentData[(index + i) % totalItems]);
    }
    return visibleItems;
  };

  return (
    <div className="relative flex h-auto flex-col items-center justify-center pb-[80px] pt-[80px] text-center">
      <Image
        className="z-[-1] m-0 h-[100%] w-[100%] p-0"
        src={staticsBgImg}
        alt=""
        layout="fill"
        objectFit="cover"
      />

      <div className="flex h-[357px] w-[60%] flex-col items-center justify-center gap-[30px] overflow-hidden transition-all  duration-1000">
        <div className="flex w-[100%] flex-row items-center justify-start gap-[1rem] text-center transition-all duration-1000">
          {getVisibleItems().map((data: any) => {
            try {
              StaticsComponentDataSchema.parse(data);
              return (
                <div
                  key={data.id}
                  className="mr-[30px] flex w-[240px] flex-col items-center justify-center text-center"
                >
                  <div className="mb-[20px] ml-[30px] mr-[30px] flex h-[176px] w-[176px] flex-col items-center justify-center rounded-[50%] border-[2px] border-white text-center">
                    <p className="font-openSans text-[50px] font-light leading-[75px] text-white">
                      {data.id === 3 ? data.number + "%" : data.number}
                    </p>
                  </div>
                  <h1 className="color-white mb-[20px] w-[100%] font-Lato text-[24px] font-normal leading-[29px] text-white">
                    {data.title}
                  </h1>
                  <p className="w-[100%] font-openSans text-[16px] font-normal leading-[24px] text-white">
                    {data.description}
                  </p>
                </div>
              );
            } catch (err) {
              console.error(err);
              return null;
            }
          })}
        </div>
        <div className="flex h-[auto] w-[auto] flex-row items-center justify-center text-center">
          <button
            onClick={handlePrev}
            className="m-[3px] h-[12px] w-[45px] cursor-pointer border-2 border-white hover:border-slate-300"
          ></button>
          <button
            className="m-[3px] h-[12px] w-[45px] cursor-pointer border-2 border-white hover:border-slate-300"
            onClick={handleNext}
          ></button>
        </div>
      </div>
    </div>
  );
}
