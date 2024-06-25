import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import tempOrangeStrip from "public/template_content_icons/temp_orange_strip.png";
import classesData from "@/shared/data/classesData";
import { classesTypes } from "@/shared/types/models";

export default function ClassesInfo() {
  return (
    <div className="flex h-auto flex-col items-center justify-center pb-[80px] pt-[60px] text-center">
      <h1 className=" mb-[15px] font-Lato font-light leading-[50px] text-[#665bdb] phone:text-[40px] laptop:text-[50px]">
        Our Classes
      </h1>
      <p className="mb-[30px] pt-[15px] font-openSans font-medium leading-[25px] text-[rgba(150,149,149,0.55)] phone:w-[90%] phone:text-[15px] laptop:w-[100%] laptop:text-[18px]">
        Our preschool program has four dedicated classes
      </p>
      <Image className="mb-[66px]" src={tempOrangeStrip} alt="" />
      <div className="mb-[60px] flex flex-row flex-wrap items-center justify-center gap-[33px] text-center">
        <h1 className="font-lato h-[100%] text-start  font-normal leading-[36px] text-[#665bdb] phone:w-[90%] phone:text-[20px] laptop:w-[490px] laptop:text-[30px]">
          We provided four classes with nine to twenty children each aged twelve
          month to five years of age.
        </h1>
        <p className="h-[100%] text-start font-openSans font-normal leading-[24px] text-[rgba(150,149,149,0.55)] phone:w-[90%] phone:text-[13px] laptop:w-[490px] laptop:text-[16px]">
          Praesent arcu gravida vehicula est node maecenas loareet morbi a dosis
          luctus. Urna eget lacinia eleifend praesent luctus a arcu quis
          facilisis venenatis. Aenean interdum, nibh vitae sodales, magna ante
          feugiat elit maecenas.
        </p>
      </div>
      <div className="flex flex-row flex-wrap items-center justify-center text-center phone:w-[95%] laptop:w-[80%]">
        {classesData.map((data: classesTypes, index: number) => {
          return (
            <div
              className=" mb-[30px] flex h-[188px] w-[509px] flex-row items-center justify-center text-center phone:mr-[0] laptop:mr-[32px]"
              key={index}
            >
              <div className=" flex h-[100%] flex-col items-start justify-start bg-[#665bdb] p-[20px] text-start phone:w-[100%] laptop:w-[50%]">
                <h1 className=" m-[0] p-[0] font-Lato text-[24px] font-normal leading-[29px] text-[#fff]">
                  Little Lambs
                </h1>
                <p className=" font-openSans text-[14px] font-normal leading-[21px] text-[#cccae2]">
                  Class name
                </p>

                <div className="mt-[52px] flex h-[50%] w-[100%] flex-row items-center justify-between  text-center  ">
                  <div className="flex flex-col">
                    <h1 className=" font-openSans text-[16px] font-normal leading-[24px] text-white">
                      3-4
                    </h1>
                    <p className="font-openSans text-[14px] font-normal leading-[21px] text-[#cccae2]">
                      Years olds
                    </p>
                  </div>
                  <div className="h-[100%] w-[1px] bg-[rgba(138,138,138,0.74)]"></div>
                  <div className="flex flex-col">
                    <h1 className="font-openSans text-[16px] font-normal leading-[24px] text-white">
                      15
                    </h1>
                    <p className="font-openSans text-[14px] font-normal leading-[21px] text-[#cccae2]">
                      Class size
                    </p>
                  </div>
                </div>
              </div>
              <div className=" relative h-[100%] w-[50%]  phone:hidden laptop:flex">
                <img
                  className=" absolute z-[-1]  h-[100%] w-[100%] bg-no-repeat object-cover"
                  src={data.classImage}
                  alt=""
                />
                <button className=" absolute bottom-0 right-0 z-[1] flex flex-row items-center justify-center gap-[5px] bg-[#fe6500] p-[16px] pl-[20px] pr-[20px] text-center font-openSans text-[14px] font-semibold leading-[14px] text-[#fff] hover:bg-[#665bdb]">
                  CLICK HERE <FontAwesomeIcon icon={faAngleRight} />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
