import Image from "next/image";
import galleryIcon from "public/gallery_plus_icon.png";
export default function PlusIconImages() {
  return (
    <div className=" flex flex-col items-center justify-center rounded-[50%] bg-[#57509f4f] text-center phone:h-[90px] phone:w-[90px] laptop:h-[150px] laptop:w-[150px] ">
      <Image
        src={galleryIcon}
        className="h-[28px] w-[28px]"
        alt=""
        objectFit="cover"
      />
    </div>
  );
}
