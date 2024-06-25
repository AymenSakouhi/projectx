"use client";
import { galleryData } from "@/shared/data/galleryData";
import { galleryDataTypes } from "@/shared/types/models";
import Image from "next/image";
import { useState } from "react";
import SelectedImage from "./selectedImage";

export default function Gallery() {
  const [showImage, setShowImage] = useState(false);
  const [imageData, setImageData] = useState({});

  return (
    <div className="flex h-[245px] flex-row ">
      {galleryData.map((data: galleryDataTypes, index: number) => {
        return (
          <div key={index} className="relative w-[25%] cursor-pointer  ">
            <div
              onClick={() => setShowImage(true)}
              className="hover absolute left-0 top-0 z-[10] flex h-[100%] w-[100%] flex-col items-center justify-center text-center opacity-0 transition-all duration-500 hover:opacity-100 "
            >
              <div className="flex flex-col  items-center justify-center rounded-[50%] bg-[#57509f4f] text-center phone:h-[90px] phone:w-[90px] laptop:h-[150px] laptop:w-[150px] ">
                <Image
                  src={data.galleryIconPlus}
                  className="h-[28px] w-[28px]"
                  alt=""
                  objectFit="cover"
                />
              </div>
            </div>
            <img
              src={data.image}
              className="h-[245px] w-[100%] object-cover"
              alt=""
            />
          </div>
        );
      })}
      <div className={`${!showImage && "hidden"} `}>
        <SelectedImage data={imageData} showImage={setShowImage} />
      </div>
    </div>
  );
}
