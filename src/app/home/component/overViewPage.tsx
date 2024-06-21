import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import clockIcon from "public/overView_Icons/overview_Clock_Icon.png";
import connectIcon from "public/overView_Icons/overview_Connect_Icon.png";

export default function OverViewPage() {
  return (
    <div className="flex h-[564px] flex-row items-center justify-center  bg-[#f5f5f5f5] text-center">
      <div className="flex h-[80%] w-[40%] flex-col items-center justify-start gap-[61px] text-center">
        <div className="flex   w-[100%] flex-row items-center justify-start gap-[19px] text-center">
          <button
            type="button"
            className="overViewBtn relative h-[50px] w-[140px]  p-[15px] pb-[12px] pt-[12px] font-openSans text-[18px] font-normal leading-[27px] text-[rgb(158,158,158)]"
          >
            Overview
          </button>
          <button className="overViewBtn relative h-[50px] w-[140px] p-[15px] pb-[12px] pt-[12px] font-openSans text-[18px] font-normal leading-[27px] text-[rgb(158,158,158)]">
            Our Mission
          </button>
        </div>
        <div>here comes the overview and mission page</div>
      </div>
      <div className="flex h-[80%] w-[509px] flex-col items-center justify-start  text-center">
        <div className=" relative flex h-[373px] w-[100%] flex-row justify-between">
          <div className=" absolute top-[50%] flex w-[100%] flex-row items-center justify-between text-center ">
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

const missionBody = () => {
  return (
    <div>
      <h1 className="text-[rgb(86, 80, 159)] mb-[30px] font-Lato text-[30px] font-normal leading-[36px]">
        Our philosophy is learning through play as we offer a stimulating
        environment for children.
      </h1>
      <div>
        <div className="flex h-[97px] w-[509px] flex-row items-center justify-between text-center">
          <div>
            <Image src={clockIcon} alt="" />
          </div>
          <div>
            <h1 className="font-lato text-[24px] font-normal leading-[29px] ">
              Full Day Sessions
            </h1>
            <p>
              Pulvinar est metro ligula blandit maecenas retrum gravida cuprum.
              Maecenas node estibulum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
