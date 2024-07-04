import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import dynamic from "next/dynamic";
import { useMemo } from "react";
import ComponentsHeaders from "~/app/shared/components/componentsHeaders";
import {
  contactUsData,
  contactUsDataSchema,
} from "~/app/shared/data/contactUsData";
import Map from "~/app/map";
export default function Contact() {
  const Map = useMemo(
    () =>
      dynamic(() => import("~/app/map"), {
        loading: () => <p>A map is loading</p>,
        ssr: false,
      }),
    [],
  );

  return (
    <div className="  flex h-auto min-h-[90vh] flex-col items-center justify-start pb-[80px] pt-[60px] text-center">
      <div className=" mb-[60px] h-[300px] w-[100%] ">
        <Map posix={[4.79029, -75.69003]} />
      </div>

      <ComponentsHeaders
        title={"Contact Us"}
        text={"Our postal address and contact details"}
        context={""}
        paragraph={""}
      />
      <div className="mb-[50px]  flex flex-row flex-wrap items-center justify-center gap-[33px] text-center ">
        {contactUsData.map((data, index) => {
          try {
            contactUsDataSchema.parse(data);
            return (
              <div key={index} className="h-[235px] w-[220px] ">
                <FontAwesomeIcon
                  style={{
                    height: "32px",
                    width: "32px",
                    marginBottom: "50px",
                  }}
                  className=" text-[#fe6500]"
                  icon={data.icon}
                />
                <h1 className="mb-[20px] font-Lato text-[24px] font-normal leading-[29px] text-[#56509f]">
                  {data.title}
                </h1>
                <div>
                  <p className=" font-openSans text-[16px] font-normal leading-[24px] text-[#707070]">
                    {data.name}
                  </p>
                  <p className=" font-openSans text-[16px] font-normal leading-[24px] text-[#707070]">
                    {data.address}
                  </p>
                  <p className=" font-openSans text-[16px] font-normal leading-[24px] text-[#707070]">
                    {data.postal}
                  </p>
                </div>
              </div>
            );
          } catch (error) {
            console.error(error);
            return null;
          }
        })}
      </div>
      <div className="flex h-auto w-[80%] flex-wrap items-center  justify-center gap-[33px] text-center phone:flex-col laptop:flex-row">
        <div className="flex h-[200px] flex-col items-start justify-start gap-[30px] text-start phone:w-[100%] laptop:w-[30%]">
          <input
            className="w-[100%] rounded-[2px] border-2 border-b-2 border-l-0 border-r-0  border-t-0 border-slate-200  p-[10px] pl-[15px] outline-none  transition-all duration-500 focus:border-[#fe6500]  focus:placeholder:text-slate-300 "
            type="text"
            id="text"
            placeholder="Your Name*"
          />
          <input
            className="w-[100%] rounded-[2px] border-2 border-b-2 border-l-0 border-r-0  border-t-0 border-slate-200  p-[10px] pl-[15px] outline-none  transition-all duration-500 focus:border-[#fe6500]  focus:placeholder:text-slate-300 "
            type="email"
            id="email"
            placeholder="Your E-mail*"
          />
          <input
            className="w-[100%] rounded-[2px] border-2 border-b-2 border-l-0 border-r-0  border-t-0 border-slate-200  p-[10px] pl-[15px] outline-none  transition-all duration-500 focus:border-[#fe6500]  focus:placeholder:text-slate-300 "
            id="subject"
            placeholder="Subject"
          />
        </div>
        <div className=" h-[200px] phone:w-[100%] laptop:w-[30%]">
          <textarea
            placeholder="Message*"
            className="h-[100%] w-[100%] resize-none rounded-[2px] border-2 border-b-2  border-l-0 border-r-0  border-t-0 border-slate-200    p-[10px]  pl-[15px] outline-none transition-all  duration-500 focus:border-[#fe6500] focus:placeholder:text-slate-300"
          ></textarea>
        </div>
        <div className="w-[100%]">
          <button className="mt-[50px] h-[45px] w-[144px] bg-[#fe6500]  font-openSans text-[14px] font-semibold leading-[14px] text-[#ffff] hover:bg-[#56509f] ">
            SEND MESSAGE
          </button>
        </div>
      </div>
    </div>
  );
}
