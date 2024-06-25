import {
  faCaretLeft,
  faCaretRight,
  faForwardFast,
  faPause,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SelectedImage(image: any) {
  return (
    <div className="fixed left-0 top-0 z-[115] flex h-[100%] w-[100%] flex-col items-center justify-start gap-[25px] bg-[#1f1f1f50] text-center">
      <div className="mt-[5px] flex h-[30px] w-[160px] flex-row items-center justify-evenly gap-1 bg-[#0e0d0d94] text-center">
        <FontAwesomeIcon
          icon={faCaretLeft}
          className="cursor-pointer text-[25px] text-white hover:text-gray-300"
        />
        <FontAwesomeIcon
          icon={faPause}
          className="cursor-pointer text-[17px] text-white hover:text-gray-300"
        />
        <FontAwesomeIcon
          icon={faCaretRight}
          className="text-[25px] text-white"
        />
        <FontAwesomeIcon
          icon={faXmark}
          className="cursor-pointer text-[20px] text-white hover:text-gray-300"
        />
      </div>
      <div>
        <button></button>
        <img src="" alt="" />
      </div>
    </div>
  );
}
