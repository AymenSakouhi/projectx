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
import { useState } from "react";

export default function OverViewPage() {
  const [overViewEl, setOverViewEl] = useState(true);

  return (
    <div className="flex h-[564px] flex-row items-center justify-center  bg-[#f5f5f5f5] text-center">
      <div className="flex h-[80%] w-[35%] flex-col items-center justify-start gap-[30px] text-center">
        <div className="flex   w-[100%] flex-row items-center justify-start gap-[19px] text-center">
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
      <div className="flex h-[80%] w-[509px] flex-col items-center justify-start  text-center">
        <div className=" relative flex h-[373px] w-[100%] flex-row justify-between">
          <div className=" absolute top-[50%] flex w-[100%] translate-y-[-50%]  flex-row items-center justify-between text-center ">
            <div className=" item-center flex h-[40px] cursor-pointer justify-center  bg-[#fe6501] p-[6px] text-center text-white hover:bg-[#665bdb]">
              <FontAwesomeIcon
                icon={faChevronLeft}
                style={{ width: "30px", height: "30px" }}
              />
            </div>
            <div className=" item-center flex h-[40px] cursor-pointer justify-center  bg-[#fe6501] p-[6px] text-center text-white hover:bg-[#665bdb]">
              <FontAwesomeIcon
                icon={faChevronRight}
                style={{ width: "30px", height: "30px" }}
              />
            </div>
          </div>

          <Image className="h-[100%] w-[100%]" src={""} alt="" />
        </div>
        <div className="mt-[15px] flex h-[161px] w-[100%] flex-row  items-center justify-center gap-[10px] text-center">
          <Image className="m-0 h-[120px] w-[162px] p-0" src={""} alt="" />
          <Image className="m-0 h-[120px] w-[162px] p-0" src={""} alt="" />
          <Image className="m-0 h-[120px] w-[162px] p-0" src={""} alt="" />
        </div>
        <div className="mt-[4px] flex h-[2px] w-[100%]   flex-row items-center justify-between gap-[10px] text-center">
          <div className=" h-[2px] w-[162px] rounded-[25px] bg-[#fe6501]"></div>
          <div className=" h-[2px] w-[162px] rounded-[25px] bg-[#fe6501]"></div>
          <div className=" h-[2px] w-[162px] rounded-[25px] bg-[#fe6501]"></div>
        </div>
      </div>
    </div>
  );
}

const OverViewElements = () => {
  return (
    <div className={`flex h-[100%] w-[100%] flex-col text-start`}>
      <h1 className="mb-[30px] w-[90%] font-Lato text-[30px] font-normal leading-[36px] text-[rgb(86,80,159)]">
        Our philosophy is learning through play as we offer a stimulating
        environment for children.
      </h1>
      <div>
        <div className="mb-[30px] flex h-[97px] flex-row items-center gap-[26px] text-center">
          <div className="flex h-[80px] w-[80px] flex-col items-center justify-center rounded-[100%] bg-[#fe6501] text-center">
            <Image src={clockIcon} alt="" />
          </div>
          <div className=" flex w-[80%] flex-col items-start justify-start gap-[20px] text-start ">
            <h1 className=" font-lato text-[24px] font-normal leading-[29px] text-[rgb(86,80,159)] ">
              Full Day Sessions
            </h1>
            <p className=" w-[90%] font-openSans text-[16px] font-normal leading-[24px] text-[rgb(112,112,112)]">
              Pulvinar est metro ligula blandit maecenas retrum gravida cuprum.
              Maecenas node estibulum.
            </p>
          </div>
        </div>
        <div className=" mb-[30px] flex h-[97px] flex-row items-center gap-[26px] text-center">
          <div className="flex h-[80px] w-[80px] flex-col items-center justify-center rounded-[100%] bg-[#fe6501] text-center">
            <Image src={connectIcon} alt="" />
          </div>
          <div className=" flex w-[80%] flex-col items-start justify-start gap-[20px] text-start ">
            <h1 className=" font-lato text-[24px] font-normal leading-[29px] text-[rgb(86,80,159)] ">
              Full Day Sessions
            </h1>
            <p className=" w-[90%] font-openSans text-[16px] font-normal leading-[24px] text-[rgb(112,112,112)]">
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
    <div className="flex h-[100%] w-[100%] flex-col justify-center gap-[30px] text-start">
      <div className=" flex h-[97px] flex-row items-center gap-[26px] text-center">
        <div className="flex h-[80px] w-[80px] flex-col items-center justify-center rounded-[100%]  text-center">
          <Image src={pcIcon} alt="" />
        </div>
        <div className=" flex w-[80%] flex-col items-start justify-start gap-[20px] text-start ">
          <h1 className=" font-lato text-[24px] font-normal leading-[29px] text-[rgb(86,80,159)] ">
            Online Access
          </h1>
          <p className=" w-[90%] font-openSans text-[16px] font-normal leading-[24px] text-[rgb(112,112,112)]">
            Pulvinar est metro ligula blandit maecenas retrum gravida cuprum.
            Maecenas node estibulum.
          </p>
        </div>
      </div>
      <div className="  flex h-[97px] flex-row items-center gap-[26px] text-center">
        <div className="flex h-[80px] w-[80px] flex-col items-center justify-center rounded-[100%]  text-center">
          <Image src={heartIcon} alt="" />
        </div>
        <div className=" flex w-[80%] flex-col items-start justify-start gap-[20px] text-start ">
          <h1 className=" font-lato text-[24px] font-normal leading-[29px] text-[rgb(86,80,159)] ">
            Maecenas Node
          </h1>
          <p className=" w-[90%] font-openSans text-[16px] font-normal leading-[24px] text-[rgb(112,112,112)]">
            Pulvinar est metro ligula blandit maecenas retrum gravida cuprum.
            Maecenas node estibulum.
          </p>
        </div>
      </div>
      <div className="  flex h-[97px] flex-row items-center gap-[26px] text-center">
        <div className="flex h-[80px] w-[80px] flex-col items-center justify-center rounded-[100%]  text-center">
          <Image src={cheIcon} alt="" />
        </div>
        <div className=" flex w-[80%] flex-col items-start justify-start gap-[20px] text-start ">
          <h1 className=" font-lato text-[24px] font-normal leading-[29px] text-[rgb(86,80,159)] ">
            Praesent Morbi
          </h1>
          <p className=" w-[90%] font-openSans text-[16px] font-normal leading-[24px] text-[rgb(112,112,112)]">
            Pulvinar est metro ligula blandit maecenas retrum gravida cuprum.
            Maecenas node estibulum.
          </p>
        </div>
      </div>
    </div>
  );
};
