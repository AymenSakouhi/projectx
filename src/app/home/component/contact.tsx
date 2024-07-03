import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import ComponentsHeaders from "~/app/shared/components/componentsHeaders";
import {
  contactUsData,
  contactUsDataSchema,
} from "~/app/shared/data/contactUsData";
export default function Contact() {
  return (
    <div className="flex h-auto min-h-[90vh] flex-col items-center justify-start pb-[80px] pt-[60px] text-center">
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
      <div>
        <div>
          <input type="text" id="text" placeholder="Your Name*" />
          <input type="email" id="email" placeholder="Your E-mail*" />
          <input type="text" id="subject" placeholder="Subject" />
        </div>
        <div>
          <textarea placeholder="Message*"></textarea>
        </div>
        <button className="mt-[50px] ">SEND MESSAGE</button>
      </div>
    </div>
  );
}
