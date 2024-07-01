"use client";
import { galleryData, galleryDataSchema } from "~/app/shared/data/galleryData";
import Image from "next/image";
import { useState } from "react";
import SelectedImage from "./selectedImage";
import CallToAction from "~/app/shared/components/callToAction";

export default function Gallery() {
  const [showImage, setShowImage] = useState(false);
  const [imageData, setImageData] = useState({});

  const clickedImage = (data: any) => {
    galleryDataSchema.parse(data);
    setImageData(data);
  };

  return (
    <>
      <div className="flex h-[245px] flex-row ">
        {galleryData.map((data) => {
          try {
            galleryDataSchema.parse(data);
            return (
              <div key={data.id} className="relative w-[25%] cursor-pointer  ">
                <div
                  onClick={() => {
                    setShowImage(true);
                    clickedImage(data);
                  }}
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
          } catch (err) {
            console.error("there is error in gallery :", err);
            return null;
          }
        })}
        <div className={`${!showImage && "hidden"} `}>
          <SelectedImage
            data={imageData}
            showImage={setShowImage}
            galleryData={galleryData}
            setImageData={setImageData}
          />
        </div>
      </div>

      <CallToAction
        title={"See Our Kindergarten Photo Gallery!"}
        text={"VIEW GALLERY"}
      />
    </>
  );
}
