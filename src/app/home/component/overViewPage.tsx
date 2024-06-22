"use client";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import clockIcon from "public/overView_Icons/overview_Clock_Icon.png";
import connectIcon from "public/overView_Icons/overview_Connect_Icon.png";
import pcIcon from "public/missions_Icons/missions_Com_Icon.png";
import heartIcon from "public/missions_Icons/missions_Heart_Icon.png";
import cheIcon from "public/missions_Icons/missions_Che_Icon.png";
import { useEffect, useState } from "react";

type dataImgTypes = {
  id: number;
  img: string;
};
const imgData: dataImgTypes[] = [
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

export default function OverViewPage() {
  const [overViewEl, setOverViewEl] = useState(true);
  const [transformImg, setTransformImg] = useState(0);
  const [timerInterval, setTimerInterval] = useState(0);

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

    <div className="flex  items-center justify-center bg-[#f5f5f5f5] text-center phone:h-[auto] phone:flex-col phone:pb-[30px] phone:pt-[30px] laptop:h-[564px] laptop:flex-row  laptop:pb-[0] laptop:pt-[0] ">
      <div className="flex flex-col items-center justify-start gap-[30px] text-center phone:h-[auto] phone:w-[90%] tablet:w-[90%] laptop:h-[80%] laptop:w-[35%]">
        <div className="flex w-[100%] flex-row items-center justify-start gap-[19px] text-center">
          <button
            onClick={() => setOverViewEl(true)}
            type="button"
            className={`${overViewEl ? "selectedOverView" : ""} overViewBtn relative h-[50px] w-[140px]  p-[15px] pb-[12px] pt-[12px] font-openSans text-[18px] font-normal leading-[27px] text-[rgb(158,158,158)]`}
          >
            Overview
          </button>
          <button
            onClick={() => setOverViewEl(false)}
            className={`${!overViewEl ? "selectedOverView" : ""} overViewBtn relative h-[50px] w-[140px]  p-[15px] pb-[12px] pt-[12px] font-openSans text-[18px] font-normal leading-[27px] text-[rgb(158,158,158)]`}
          >
            Our Mission
          </button>
        </div>
        <div className="flex flex-row items-center justify-center overflow-hidden">
          <div className={`${overViewEl ? "" : "hidden"}`}>
            <OverViewElements />
          </div>
          <div className={`${!overViewEl ? "" : "hidden"}`}>
            <MissionsElements />
          </div>
        </div>
      </div>
      <div className="flex h-[80%] flex-col items-center justify-start text-center  phone:w-[90%]  laptop:w-[509px]">
        <div className=" relative flex w-[100%] flex-col flex-wrap overflow-hidden phone:h-[275px] laptop:h-[373px]">
          <div className=" absolute top-[50%] z-[10] flex w-[100%] translate-y-[-50%]  flex-row items-center justify-between text-center ">
            <div className=" item-center flex h-[40px] cursor-pointer justify-center  bg-[#fe6501] p-[6px] text-center text-white hover:bg-[#665bdb]">
              <FontAwesomeIcon
                icon={faChevronLeft}
                style={{ width: "30px", height: "30px" }}
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
              />
            </div>
            <div className=" item-center flex h-[40px] cursor-pointer justify-center  bg-[#fe6501] p-[6px] text-center text-white hover:bg-[#665bdb]">
              <FontAwesomeIcon
                onClick={() => {
                  setTimerInterval(0);
                  setTransformImg((prev) =>
                    prev === imgData.length - 1 ? 0 : prev + 1,
                  );
                }}
                icon={faChevronRight}
                style={{ width: "30px", height: "30px" }}
              />
            </div>
          </div>

          <div
            className=" flex h-[100%] w-[100%] flex-col  flex-wrap rounded-lg transition-all duration-1000"
            style={{ transform: `translateX(-${transformImg * 100}%)` }}
          >
            {imgData.map((data: dataImgTypes, index) => {
              return (
                <img
                  key={index}
                  className="h-[100%] w-[100%]"
                  src={data.img}
                  alt=""
                />
              );
            })}
          </div>
        </div>
        <div className="flex w-[100%] flex-row items-center justify-center text-center phone:mt-[5px]  phone:h-[76px] phone:gap-[5px] laptop:mt-[15px] laptop:h-[161px] laptop:gap-[10px]">
          {imgData.map((data: dataImgTypes, index) => {
            return (
              <img
                onClick={() => {
                  setTransformImg(index), setTimerInterval(0);
                }}
                key={index}
                className="m-0 p-0 phone:h-[100%] phone:w-[32%] laptop:h-[100%] laptop:w-[162px] "
                src={data.img}
                alt=""
              />
            );
          })}
        </div>
        <div className="mt-[4px] flex h-[2px] w-[100%] flex-row items-center justify-center text-center transition-all duration-500 phone:gap-[5px] laptop:gap-[10px]">
          <div
            className={`h-[2px] rounded-[25px] phone:w-[32%] laptop:w-[162px]  ${transformImg === 0 && "bg-[#fe6501]"}`}
          ></div>
          <div
            className={`h-[2px]  rounded-[25px] phone:w-[32%] laptop:w-[162px]  ${transformImg === 1 && "bg-[#fe6501]"}`}
          ></div>
          <div
            className={`h-[2px] rounded-[25px] phone:w-[32%] laptop:w-[162px]  ${transformImg === 2 && "bg-[#fe6501]"}`}
          ></div>
        </div>
      </div>
    </div>
  );
}

const OverViewElements = () => {
  return (
    <div className={`flex h-[100%] w-[100%] flex-col text-start`}>
      <h1 className="mb-[30px]  font-Lato font-normal leading-[36px] text-[rgb(86,80,159)] phone:w-[100%] phone:text-[18px] laptop:w-[90%] laptop:text-[30px]">
        Our philosophy is learning through play as we offer a stimulating
        environment for children.
      </h1>
      <div>
        <div className="mb-[30px] flex flex-row items-center text-center phone:h-[auto] phone:gap-[15px] laptop:h-[97px] laptop:gap-[26px]">
          <div className="flex flex-col  items-center justify-center  rounded-[100%] bg-[#fe6501] text-center phone:h-[60px] phone:w-[60px] laptop:h-[80px] laptop:w-[80px]">
            <Image src={clockIcon} alt="" />
          </div>
          <div className=" flex  flex-col items-start justify-start gap-[20px] text-start phone:w-[70%] laptop:w-[80%] ">
            <h1 className=" font-lato font-normal leading-[29px] text-[rgb(86,80,159)] phone:text-[16px] laptop:text-[24px] ">
              Full Day Sessions
            </h1>
            <p className="  font-openSans font-normal leading-[24px] text-[rgb(112,112,112)] phone:w-[100%] phone:text-[11px] phone:text-[16px] laptop:w-[90%] laptop:text-[16px]">
              Pulvinar est metro ligula blandit maecenas retrum gravida cuprum.
              Maecenas node estibulum.
            </p>
          </div>
        </div>
        <div className=" mb-[30px] flex flex-row items-center text-center phone:h-[auto] phone:gap-[15px] laptop:h-[97px] laptop:gap-[26px]">
          <div className="flex flex-col items-center justify-center rounded-[100%] bg-[#fe6501] text-center phone:h-[60px] phone:w-[60px] laptop:h-[80px] laptop:w-[80px]">
            <Image src={connectIcon} alt="" />
          </div>
          <div className=" flex  flex-col items-start justify-start gap-[20px] text-start phone:w-[70%] laptop:w-[80%] ">
            <h1 className=" font-lato font-normal leading-[29px] text-[rgb(86,80,159)] phone:text-[16px] laptop:text-[24px] ">
              Full Day Sessions
            </h1>
            <p className=" font-openSans font-normal leading-[24px] text-[rgb(112,112,112)] phone:w-[100%] phone:text-[11px] laptop:w-[90%] laptop:text-[16px]">
              Pulvinar est metro ligula blandit maecenas retrum gravida cuprum.
              Maecenas node estibulum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const MissionsElements = () => {
  return (
    <div className="flex h-[100%] w-[100%] flex-col justify-end gap-[15px] text-start">
      <div className=" mb-[10px] flex flex-row items-center text-center phone:h-[auto] phone:gap-[15px] laptop:h-[97px] laptop:gap-[26px]">
        <div className="flex flex-col items-center justify-center rounded-[100%]  text-center phone:h-[60px] phone:w-[60px] laptop:h-[80px] laptop:w-[80px]">
          <Image src={pcIcon} alt="" />
        </div>
        <div className=" flex w-[80%] flex-col items-start justify-start gap-[20px] text-start ">
          <h1 className=" font-lato font-normal leading-[29px] text-[rgb(86,80,159)] phone:text-[16px] laptop:text-[24px] ">
            Online Access
          </h1>
          <p className=" font-openSans font-normal leading-[24px] text-[rgb(112,112,112)] phone:w-[100%] phone:text-[11px] laptop:w-[90%] laptop:text-[16px]">
            Pulvinar est metro ligula blandit maecenas retrum gravida cuprum.
            Maecenas node estibulum.
          </p>
        </div>
      </div>
      <div className=" mb-[10px] flex flex-row items-center text-center phone:h-[auto] phone:gap-[15px] laptop:h-[97px] laptop:gap-[26px]">
        <div className="flex flex-col items-center justify-center rounded-[100%]  text-center phone:h-[60px] phone:w-[60px] laptop:h-[80px] laptop:w-[80px]">
          <Image src={heartIcon} alt="" />
        </div>
        <div className=" flex w-[80%] flex-col items-start justify-start gap-[20px] text-start ">
          <h1 className=" font-lato font-normal leading-[29px] text-[rgb(86,80,159)] phone:text-[16px] laptop:text-[24px] ">
            Maecenas Node
          </h1>
          <p className="font-openSans font-normal leading-[24px] text-[rgb(112,112,112)] phone:w-[100%] phone:text-[11px] laptop:w-[90%] laptop:text-[16px]">
            Pulvinar est metro ligula blandit maecenas retrum gravida cuprum.
            Maecenas node estibulum.
          </p>
        </div>
      </div>
      <div className=" mb-[10px] flex flex-row items-center text-center phone:h-[auto] phone:gap-[15px] laptop:h-[97px] laptop:gap-[26px]">
        <div className="flex flex-col items-center justify-center rounded-[100%]  text-center phone:h-[60px] phone:w-[60px] laptop:h-[80px] laptop:w-[80px]">
          <Image src={cheIcon} alt="" />
        </div>
        <div className=" flex w-[80%] flex-col items-start justify-start gap-[20px] text-start ">
          <h1 className=" font-lato font-normal leading-[29px] text-[rgb(86,80,159)] phone:text-[16px] laptop:text-[24px]  ">
            Praesent Morbi
          </h1>
          <p className=" font-openSans font-normal leading-[24px] text-[rgb(112,112,112)] phone:w-[100%] phone:text-[11px] laptop:w-[90%] laptop:text-[16px]">
            Pulvinar est metro ligula blandit maecenas retrum gravida cuprum.
            Maecenas node estibulum.
          </p>
        </div>
      </div>
    </div>
  );
};
