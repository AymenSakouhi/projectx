import Image from "next/image";
import bagIcon from "public/tempelate_content_icons/bag_icon.png";

export default function ContentTemplate() {
  return (
    <div className="flex h-[auto] min-h-[684px] flex-col items-center justify-center pb-[50px] pt-[60px] text-center">
      <div>
        <h1 className=" font-lato mb-[15px] font-light leading-[50px] text-[rgb(86,80,159)] phone:text-[30px] laptop:text-[50px] ">
          Welcome to Fable
        </h1>
        <p className="mb-[30px] pt-[15px] font-openSans font-medium leading-[25px] text-[rgb(112,112,112)] phone:text-[15px] laptop:text-[18px]">
          Fable daycare, preschool, and kindergarten
        </p>
      </div>
      <div className="  mb-[66px]">this is orange line between</div>
      <div className="mt-[66px] flex w-[80%] flex-row  flex-wrap items-center justify-center gap-[33px] text-center ">
        <div className="flex h-[auto] w-[237px] flex-col items-center justify-center gap-[20px] pb-[30px] text-center ">
          <div className="mb-[20px] ml-[28px] mr-[28px] flex h-[180px] w-[180px] items-center justify-center overflow-hidden rounded-[100%] bg-[#fe6501] text-center">
            <Image
              src={bagIcon}
              alt="content temp icon"
              className="h-[64px] w-[64px]"
            />
          </div>

          <h1 className=" font-lato text-[24px] text-[rgb(86,80,159)]">
            Morbi Etos
          </h1>

          <p className="font-openSans text-[16px] font-medium leading-[24px] text-[rgb(112,112,112)]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
            laudantium
          </p>
        </div>
        <div className="flex h-[auto] w-[237px] flex-col items-center justify-center gap-[20px] pb-[30px] text-center ">
          <div className="mb-[20px] ml-[28px] mr-[28px] flex h-[180px] w-[180px] items-center justify-center overflow-hidden rounded-[100%] bg-[#fe6501] text-center">
            <Image
              src={bagIcon}
              alt="content temp icon"
              className="h-[64px] w-[64px]"
            />
          </div>

          <h1 className=" font-lato text-[24px] text-[rgb(86,80,159)]">
            Morbi Etos
          </h1>

          <p className="font-openSans text-[16px] font-medium leading-[24px] text-[rgb(112,112,112)]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
            laudantium
          </p>
        </div>
        <div className="flex h-[auto] w-[237px] flex-col items-center justify-center gap-[20px] pb-[30px] text-center ">
          <div className="mb-[20px] ml-[28px] mr-[28px] flex h-[180px] w-[180px] items-center justify-center overflow-hidden rounded-[100%] bg-[#fe6501] text-center">
            <Image
              src={bagIcon}
              alt="content temp icon"
              className="h-[64px] w-[64px]"
            />
          </div>

          <h1 className=" font-lato text-[24px] text-[rgb(86,80,159)]">
            Morbi Etos
          </h1>

          <p className="font-openSans text-[16px] font-medium leading-[24px] text-[rgb(112,112,112)]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
            laudantium
          </p>
        </div>
        <div className="flex h-[auto] w-[237px] flex-col items-center justify-center gap-[20px] pb-[30px] text-center ">
          <div className="mb-[20px] ml-[28px] mr-[28px] flex h-[180px] w-[180px] items-center justify-center overflow-hidden rounded-[100%] bg-[#fe6501] text-center">
            <Image
              src={bagIcon}
              alt="content temp icon"
              className="h-[64px] w-[64px]"
            />
          </div>

          <h1 className=" font-lato text-[24px] text-[rgb(86,80,159)]">
            Morbi Etos
          </h1>

          <p className="font-openSans text-[16px] font-medium leading-[24px] text-[rgb(112,112,112)]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
            laudantium
          </p>
        </div>
      </div>
    </div>
  );
}
