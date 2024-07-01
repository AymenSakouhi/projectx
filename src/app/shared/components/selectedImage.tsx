import {
  faCaretLeft,
  faCaretRight,
  faPause,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type selectedImageTypes = {
  data: any;
  showImage: any;
  galleryData: any;
  setImageData: any;
};

export default function SelectedImage({
  data,
  showImage,
  galleryData,
  setImageData,
}: selectedImageTypes) {
  const stopPropagation = (event: any) => {
    event.stopPropagation();
  };

  return (
    <div
      className="fixed left-0 top-0 z-[100] flex h-[100%] w-[100%] flex-col items-center gap-[25px] text-center phone:justify-center  laptop:justify-center"
      onClick={() => showImage(false)}
    >
      <div className=" absolute z-[100] h-[100%]  w-[100%] bg-[#1f1f1f50]"></div>
      {galleryData && (
        <div className=" z-[120] mt-[5px] flex h-[30px] w-[160px] flex-row items-center justify-evenly gap-1 bg-[#0e0d0d94] text-center">
          <FontAwesomeIcon
            icon={faCaretLeft}
            className="cursor-pointer text-[25px] text-white hover:text-gray-300"
            onClick={(e) => {
              e.stopPropagation();
              console.log("data.id", data.id);
              const newId = data.id > 1 ? data.id - 1 : galleryData.length;
              const newData = galleryData.find(
                (item: any) => item.id === newId,
              );
              setImageData(newData);
            }}
          />

          <FontAwesomeIcon
            icon={faCaretRight}
            className="cursor-pointer text-[25px] text-white hover:text-gray-300"
            onClick={(e) => {
              e.stopPropagation();
              console.log("data.id", data.id);
              const newId = data.id < galleryData.length ? data.id + 1 : 1;
              const newData = galleryData.find(
                (item: any) => item.id === newId,
              );
              setImageData(newData);
            }}
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
      )}
      <div className=" relative z-[120] border-[10px] border-white phone:h-[50%] phone:w-[98%] laptop:h-[90%] laptop:w-[75%] ">
        <div className=" absolute right-[-5px] top-[-5px] flex flex-col items-center justify-center bg-white text-center">
          <button
            onClick={(e) => {
              stopPropagation(e);
            }}
          ></button>
        </div>
        <img
          src={data.image}
          alt=""
          className="h-[100%] w-[100%] object-cover"
        />
        <div className=" absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
          {data.id}
        </div>

        <div
          onClick={() => showImage(false)}
          className=" absolute flex h-[32px] w-[32px] cursor-pointer flex-col items-center justify-center  rounded-[50%] bg-slate-400 text-center text-white phone:right-[-5px] phone:top-[-5px] laptop:right-[-25px] laptop:top-[-25px]"
        >
          X
        </div>
      </div>
    </div>
  );
}
