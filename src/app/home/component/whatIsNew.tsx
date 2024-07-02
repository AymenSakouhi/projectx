"use client";
import { useState } from "react";
import ComponentsHeaders from "~/app/shared/components/componentsHeaders";
import { whatsNewData, whatsNewDataSchema } from "@/shared/data/whatsNewData";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SelectedImage from "~/app/shared/components/selectedImage";
export default function WhatIsNew() {
  const [showImage, setShowImage] = useState(false);
  const [imageData, setImageData] = useState({});

  return (
    <div className="flex h-auto flex-col items-center  justify-start pb-[85px] pt-[60px] text-center">
      <ComponentsHeaders
        title={"What's New"}
        text={"Keep up to date with the latest news"}
        context={""}
        paragraph={""}
      />
      <div className="flex h-auto min-h-[500px] w-[80%] flex-row flex-wrap items-center justify-center gap-[33px] text-center">
        {whatsNewData.map((data, index) => {
          try {
            whatsNewDataSchema.parse(data);
            return (
              <div
                key={index}
                className=" flex h-[465px] w-[328px] flex-col text-start "
              >
                <h1 className="mb-[20px] font-openSans text-[16px] font-normal leading-[24px] text-[#a0a0a0]">
                  {data.date}
                </h1>
                <div className="relative   mb-[19px]">
                  <div
                    onClick={() => {
                      setShowImage(true);
                      setImageData(data);
                    }}
                    className=" absolute left-0 top-0 z-[10] flex h-[100%] w-[100%] cursor-pointer flex-col items-center justify-center text-center opacity-0 transition-all duration-500 hover:opacity-100 "
                  >
                    <div className=" flex flex-col items-center justify-center rounded-[50%] bg-[#57509f4f] text-center phone:h-[90px] phone:w-[90px] laptop:h-[150px] laptop:w-[150px] ">
                      <Image
                        src={data.icon}
                        className="h-[28px] w-[28px]"
                        alt=""
                        objectFit="cover"
                      />
                    </div>
                  </div>
                  <img src={`${data.image}`} />
                  <h2 className="absolute bottom-0 right-0 flex h-[40px] w-[44px] flex-col items-center justify-center bg-[#FE6500] text-center font-openSans text-[20px] font-normal leading-[30px] text-[#fff]">
                    {data.classRoom}
                  </h2>
                </div>
                <h1 className="mb-[21px] font-Lato text-[24px] font-normal leading-[29px] text-[#56509f]">
                  {data.title}
                </h1>
                <p className="mb-[20px] font-openSans text-[16px] font-normal leading-[24px] text-[#707070]">
                  {data.description}
                </p>
                <hr className="mb-[14px]" />
                <div className="mb-[5px] mt-[10px] flex w-[100%] flex-row items-start justify-start text-start">
                  <div className="start flex w-[50%] flex-row  items-center justify-start gap-[5px] text-center">
                    <FontAwesomeIcon
                      className="text-[#FE6500] "
                      icon={data.eventIconOne}
                    />
                    <h1 className="font-openSans text-[14px] font-normal leading-[21px] text-[#a0a0a0]">
                      {data.name}
                    </h1>
                  </div>
                  <div className="start flex w-[50%] flex-row  items-center justify-start gap-[5px] text-center">
                    <FontAwesomeIcon
                      className="text-[#FE6500] "
                      icon={data.eventIconTwo}
                    />
                    <h1 className="font-openSans text-[14px] font-normal leading-[21px] text-[#a0a0a0]">
                      {data.eventTags}
                    </h1>
                  </div>
                </div>
              </div>
            );
          } catch (err) {
            console.error(`Error loading  `, err);
            return null;
          }
        })}
      </div>
      <div>
        <button>GO TO BLOG ICONS</button>
      </div>
      <div className={`${!showImage && "hidden"} `}>
        <SelectedImage
          data={imageData}
          showImage={setShowImage}
          galleryData={""}
          setImageData={""}
        />
      </div>
    </div>
  );
}
