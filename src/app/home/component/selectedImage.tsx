import {
  faCaretLeft,
  faCaretRight,
  faPause,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SelectedImage({ data, showImage }) {
  const stopPropagation = (event) => {
    event.stopPropagation();
  };

  return (
    <div
      className="fixed left-0 top-0 z-[100] flex h-[100%] w-[100%] flex-col items-center justify-start gap-[25px]  text-center"
      onClick={() => showImage(false)}
    >
      <div className=" absolute z-[100] h-[100%]  w-[100%] bg-[#1f1f1f50]"></div>
      <div className=" z-[120] mt-[5px] flex h-[30px] w-[160px] flex-row items-center justify-evenly gap-1 bg-[#0e0d0d94] text-center">
        <FontAwesomeIcon
          icon={faCaretLeft}
          className="cursor-pointer text-[25px] text-white hover:text-gray-300"
          onClick={stopPropagation}
        />
        <FontAwesomeIcon
          icon={faPause}
          className="cursor-pointer text-[17px] text-white hover:text-gray-300"
          onClick={stopPropagation}
        />
        <FontAwesomeIcon
          icon={faCaretRight}
          className="text-[25px] text-white"
          onClick={stopPropagation}
        />
        <FontAwesomeIcon
          onClick={(e) => {
            stopPropagation(e);
            showImage(false);
          }}
          icon={faXmark}
          className="cursor-pointer text-[20px] text-white hover:text-gray-300"
        />
      </div>
      <div className=" relative z-[120] h-[90%] w-[75%] border-[10px] border-white ">
        <button className=" absolute right-[-5px] top-[-5px] flex flex-col items-center justify-center bg-white text-center">
          <button onClick={stopPropagation}></button>
        </button>
        <img src={data} alt="" className="h-[100%] w-[100%] object-cover" />
      </div>
    </div>
  );
}
