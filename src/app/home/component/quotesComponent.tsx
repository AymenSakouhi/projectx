"use client";
import Image from "next/image";
import {
  quoteComponentData,
  quoteComponentDataSchema,
} from "@/shared/data/quoteData";
import { useEffect, useState } from "react";

export default function QuotesComponent() {
  const [transformImg, setTransformImg] = useState(0);
  const [timerInterval, setTimerInterval] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (timerInterval <= 3) {
        setTimerInterval((p) => p + 1);
      } else {
        setTimerInterval(0);
        setTransformImg((prev) =>
          prev === quoteComponentData.length - 1 ? 0 : prev + 1,
        );
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timerInterval]);

  return (
    <div className="relative flex h-auto flex-col items-center justify-between pb-[80px] pt-[80px] text-center ">
      <Image
        src="/quote-bg-img.jpg"
        alt="Quote Background"
        layout="fill"
        objectFit="cover"
        className="z-[-1] m-0 p-0"
      />
      <div className="mb-[40px] flex  flex-col items-center justify-between overflow-hidden text-center phone:h-[360px] phone:w-[98%] laptop:h-[460px] laptop:w-[65%]">
        <div
          className=" flex  h-[100%] w-[100%]  flex-col flex-wrap items-center justify-between  text-center transition-all duration-1000 "
          style={{ transform: `translateX(-${transformImg * 100}%)` }}
        >
          {quoteComponentData.map((data, index) => {
            try {
              quoteComponentDataSchema.parse(data);
              return (
                <div
                  key={index}
                  className=" flex h-[100%] w-[100%] flex-col items-center justify-between text-center"
                >
                  <div className="flex h-[30%] flex-col items-center justify-center text-center">
                    <div className="flex h-[100px] w-[100px] flex-col items-center justify-center rounded-[50%] border-2 border-white bg-transparent text-center">
                      <Image
                        src={`${data.image}`}
                        alt="Quote text icon"
                        width={32}
                        height={32}
                      />
                    </div>
                  </div>
                  <h1 className="mt-[20px] font-Lato font-light text-[#ffff] phone:text-[16px] phone:leading-[25px] laptop:text-[38px] laptop:leading-[46px]">
                    {data.quoteText}
                  </h1>
                  <div className="mt-[20px] h-[1px] w-[30px] bg-white"></div>
                  <p className="mt-[26px] font-openSans text-[16px] font-normal leading-[24px] text-[#ffff] ">
                    {data.name}
                  </p>
                </div>
              );
            } catch (err) {
              console.error("Error parsing quote data:", err);
              return null;
            }
          })}
        </div>
      </div>

      <div className="  flex h-[auto] w-[auto] flex-row items-center justify-center text-center">
        <button
          onClick={() => {
            setTransformImg(0), setTimerInterval(0);
          }}
          style={{ bottom: transformImg === 0 ? "15px" : "" }}
          className=" relative m-[3px] h-[12px] w-[45px] cursor-pointer border-2 border-white hover:border-slate-300"
        ></button>
        <button
          onClick={() => {
            setTransformImg(1), setTimerInterval(0);
          }}
          style={{ bottom: transformImg === 1 ? "15px" : "" }}
          className="relative m-[3px] h-[12px] w-[45px] cursor-pointer border-2 border-white hover:border-slate-300"
        ></button>
        <button
          onClick={() => {
            setTransformImg(2), setTimerInterval(0);
          }}
          style={{ bottom: transformImg === 2 ? "15px" : "" }}
          className="relative m-[3px] h-[12px] w-[45px] cursor-pointer border-2 border-white hover:border-slate-300"
        ></button>
        <button
          onClick={() => {
            setTransformImg(3), setTimerInterval(0);
          }}
          style={{ bottom: transformImg === 3 ? "15px" : "" }}
          className="relative m-[3px] h-[12px] w-[45px] cursor-pointer border-2 border-white hover:border-slate-300"
        ></button>
        <button
          onClick={() => {
            setTransformImg(4), setTimerInterval(0);
          }}
          style={{ bottom: transformImg === 4 ? "15px" : "" }}
          className="relative m-[3px] h-[12px] w-[45px] cursor-pointer border-2 border-white hover:border-slate-300"
        ></button>
        <button
          onClick={() => {
            setTransformImg(5), setTimerInterval(0);
          }}
          style={{ bottom: transformImg === 5 ? "15px" : "" }}
          className="relative m-[3px] h-[12px] w-[45px] cursor-pointer border-2 border-white hover:border-slate-300"
        ></button>
      </div>
    </div>
  );
}
