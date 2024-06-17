import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function LandingPage() {
  return (
    <div className="relative flex h-[600px] w-[100%] flex-col ">
      <div className="absolute top-[50%] flex h-[40px] w-[100%] flex-row items-center justify-between p-[20px] text-center text-white">
        <div className=" item-center flex cursor-pointer justify-center rounded-[50%] bg-slate-300 p-[6px] text-center hover:bg-[#fe6501]">
          <FontAwesomeIcon
            icon={faChevronLeft}
            style={{ width: "30px", height: "30px" }}
          />
        </div>
        <div className=" item-center flex cursor-pointer justify-center rounded-[50%] bg-slate-300 p-[6px] text-center hover:bg-[#fe6501]">
          <FontAwesomeIcon
            icon={faChevronRight}
            style={{ width: "30px", height: "30px" }}
          />
        </div>
      </div>
      <div></div>
      <div className="absolute bottom-[15px] flex w-[100%] flex-row items-center justify-center gap-[10px] text-center">
        <div className="relative h-[12px] w-[40px] cursor-pointer border-[3px] border-[#fe6501] bg-transparent hover:border-[#665bdb]"></div>
        <div className="relative h-[12px] w-[40px] cursor-pointer border-[3px] border-[#fe6501] bg-transparent hover:border-[#665bdb]"></div>
        <div className="relative h-[12px] w-[40px] cursor-pointer border-[3px] border-[#fe6501] bg-transparent hover:border-[#665bdb]"></div>
      </div>
    </div>
  );
}
