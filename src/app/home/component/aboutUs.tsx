import Image from "next/image";
import tempOrangeStrip from "public/template_content_icons/temp_orange_strip.png";
import { contentTempTypes } from "@/shared/types/models";

import contentTempData from "~/app/shared/data/AboutUsData";
import ComponentsHeaders from "~/app/shared/components/componentsHeaders";

export default function AboutUs() {
  return (
    <div className="flex h-[auto] min-h-[684px] flex-col items-center justify-center pb-[50px] pt-[60px] text-center">
      <ComponentsHeaders
        title={"Welcome to Fable"}
        text={"Our preschool program has four dedicated classes"}
        context={""}
        paragraph={""}
      />
      <div className=" flex w-[80%] flex-row  flex-wrap items-center justify-center gap-[33px] text-center ">
        {contentTempData.map((data: contentTempTypes, index: number) => {
          return (
            <div
              key={index}
              className="flex h-[100%] w-[237px] flex-col items-center justify-center gap-[20px] pb-[30px] text-center "
            >
              <div
                style={{ backgroundColor: `${data.color}` }}
                className="mb-[20px] ml-[28px] mr-[28px] flex h-[180px] w-[180px] items-center justify-center overflow-hidden rounded-[100%]  text-center"
              >
                <Image
                  src={data.icon}
                  alt="content temp icon"
                  className="h-[64px] w-[64px]"
                />
              </div>

              <h1 className=" font-lato text-[24px] text-[rgb(86,80,159)]">
                {data.title}
              </h1>

              <p className="font-openSans text-[15px] font-medium leading-[24px] text-[rgb(112,112,112)]">
                {data.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
