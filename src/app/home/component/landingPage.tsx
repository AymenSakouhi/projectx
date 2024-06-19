"use client";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

export default function LandingPage() {
  const [transformImg, setTransformImg] = useState(0);
  const [timerInterval, setTimerInterval] = useState(0);

  const imgData = [
    {
      id: 1,
      img: `https://via.placeholder.com/1980x1080`,
    },
    {
      id: 2,
      img: `https://via.placeholder.com/1980x1080`,
    },
    {
      id: 3,
      img: `https://via.placeholder.com/1980x1080`,
    },
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (timerInterval <= 3) {
        setTimerInterval((p) => p + 1);
      } else {
        setTimerInterval(0);
        setTransformImg((prev) => (prev === imgData.length - 1 ? 0 : prev + 1));
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timerInterval]);

  return (
    <div className="relative flex h-[600px] flex-col overflow-hidden">
      <div className="absolute  top-[50%] z-10 flex h-[40px] w-[100%] flex-row items-center justify-between p-[20px] text-center text-white">
        <div
          onClick={() => {
            setTimerInterval(0);
            setTransformImg((prev) =>
              prev === imgData.length - 1
                ? 1
                : prev === 0
                  ? imgData.length - 1
                  : prev - 1,
            );
          }}
          className=" item-center flex cursor-pointer justify-center rounded-[50%] bg-slate-300 p-[6px] text-center hover:bg-[#fe6501]"
        >
          <FontAwesomeIcon
            icon={faChevronLeft}
            style={{ width: "30px", height: "30px" }}
          />
        </div>
        <div
          onClick={() => {
            setTimerInterval(0);
            setTransformImg((prev) =>
              prev === imgData.length - 1 ? 0 : prev + 1,
            );
          }}
          className=" item-center flex cursor-pointer justify-center rounded-[50%] bg-slate-300 p-[6px] text-center hover:bg-[#fe6501]"
        >
          <FontAwesomeIcon
            icon={faChevronRight}
            style={{ width: "30px", height: "30px" }}
          />
        </div>
      </div>

      <div
        className="flex h-[100%] w-[100%] flex-col flex-wrap  rounded-lg transition-all duration-1000 "
        style={{ transform: `translateX(-${transformImg * 100}%)` }}
      >
        {imgData.map((img, index) => {
          return (
            <img
              key={index}
              src={img.img}
              alt="Your image description"
              style={{ width: "100%", height: "100%" }}
              className="  bg-no-repeat object-cover"
            />
          );
        })}
      </div>

      <div className=" absolute bottom-[25px] flex w-[100%] flex-row items-center justify-center gap-[10px] text-center">
        <div
          onClick={() => {
            setTransformImg(0), setTimerInterval(0);
          }}
          style={{ bottom: transformImg === 0 ? "15px" : "" }}
          className="relative h-[12px] w-[40px] cursor-pointer border-[2px] border-[#fe6501] bg-transparent hover:border-[#665bdb]"
        ></div>
        <div
          onClick={() => {
            setTransformImg(1), setTimerInterval(0);
          }}
          style={{ bottom: transformImg === 1 ? "15px" : "" }}
          className="relative h-[12px] w-[40px] cursor-pointer border-[2px] border-[#fe6501] bg-transparent hover:border-[#665bdb]"
        ></div>
        <div
          onClick={() => {
            setTransformImg(2), setTimerInterval(0);
          }}
          style={{ bottom: transformImg === 2 ? "15px" : "" }}
          className="relative h-[12px] w-[40px] cursor-pointer border-[2px] border-[#fe6501] bg-transparent hover:border-[#665bdb]"
        ></div>
      </div>
    </div>
  );
}
