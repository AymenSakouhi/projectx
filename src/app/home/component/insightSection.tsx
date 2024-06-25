import {
  insightSectionCheckBoxData,
  insightSectionBoxData,
} from "@/shared/data/insightSectionData";
import {
  insightSectionCheckBox,
  insightSectionBox,
} from "@/shared/types/models";
import Image from "next/image";

export default function InsightSection() {
  return (
    <div className=" flex  items-center justify-center  bg-[#f5f5f5] pb-[88px] pt-[80px] text-start phone:flex-col laptop:flex-row">
      <div className=" phone:w-[90%] laptop:w-[30%]">
        <h1 className=" mb-[30px] w-[90%] font-Lato font-normal leading-[36px] text-[#56509f] phone:text-[22px] laptop:text-[30px]">
          We have been educating children for over fifteen years. Our goal is to
          create a place that engages each child.
        </h1>
        <p className=" mb-[30px] w-[88%] font-openSans font-normal leading-[24px] text-[#707070] phone:text-[12px] laptop:text-[16px]">
          Praesent arcu gravida vehicula est node maecenas loareet morbi a dosis
          luctus. Urna eget lacinia eleifend praesent luctus a arcu quis
          facilisis venenatis aenean interdum.
        </p>
        <ul className="flex flex-col items-start text-start ">
          {insightSectionCheckBoxData.map(
            (data: insightSectionCheckBox, index: number) => {
              return (
                <li
                  key={index}
                  className="mb-[10px] flex flex-row items-center justify-center text-start"
                >
                  <Image
                    src={data.icon}
                    alt=""
                    className="mr-[15px] h-[15px] w-[15px]"
                  />
                  <p className=" font-openSans font-normal leading-[24px] text-[#707070] phone:text-[12px] laptop:text-[16px]">
                    {data.text}
                  </p>
                </li>
              );
            },
          )}
        </ul>
      </div>
      <div className="flex flex-row flex-wrap items-center justify-center text-center phone:mt-[30px] phone:w-[90%]  laptop:mt-[0] laptop:w-[35%]">
        {insightSectionBoxData.map((data: insightSectionBox, index: number) => {
          return (
            <div
              key={index}
              className="mb-[30px] mr-[16px] flex h-auto w-[297px] flex-col items-center justify-center gap-[20px] text-center"
            >
              <div className="rounded-[50%] bg-white p-[25px] ">
                <Image src={data.img} alt="" className="h-[32px] w-[32px]  " />
              </div>
              <h1 className="font-lato font-normal leading-[29px] text-[#56509f] phone:text-[18px] laptop:text-[24px]">
                {data.title}
              </h1>
              <p className=" font-openSans font-normal leading-[24px] text-[#707070] phone:text-[12px] laptop:text-[16px]">
                {data.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
