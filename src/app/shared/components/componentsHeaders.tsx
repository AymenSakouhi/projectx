import Image from "next/image";
import tempOrangeStrip from "public/template_content_icons/temp_orange_strip.png";

type ComponentsHeadersTypes = {
  title: string;
  text: string;
  context: string;
  paragraph: string;
};
export default function ComponentsHeaders({
  title,
  text,
  context,
  paragraph,
}: ComponentsHeadersTypes) {
  return (
    <>
      <div>
        <h1 className=" font-lato mb-[15px] font-light leading-[50px] text-[rgb(86,80,159)] phone:text-[30px] laptop:text-[50px] ">
          {title}
        </h1>
        <p className="mb-[30px] pt-[15px] font-openSans font-medium leading-[25px] text-[rgba(150,149,149,0.55)] phone:text-[15px] laptop:text-[18px]">
          {text}
        </p>
      </div>
      <Image className="mb-[66px]" src={tempOrangeStrip} alt="" />
      {context || paragraph ? (
        <div className="mb-[60px] flex flex-row flex-wrap items-center justify-center gap-[33px] text-center">
          <h1 className="font-lato h-[100%] text-start  font-normal leading-[36px] text-[#665bdb] phone:w-[90%] phone:text-[20px] laptop:w-[490px] laptop:text-[30px]">
            {context}
          </h1>
          <p className="h-[100%] text-start font-openSans font-normal leading-[24px] text-[rgba(150,149,149,0.55)] phone:w-[90%] phone:text-[13px] laptop:w-[490px] laptop:text-[16px]">
            {paragraph}
          </p>
        </div>
      ) : null}
    </>
  );
}
