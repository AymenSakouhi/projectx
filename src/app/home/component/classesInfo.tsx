import Image from "next/image";
import tempOrangeStrip from "public/template_content_icons/temp_orange_strip.png";

export default function ClassesInfo() {
  return (
    <div className="flex h-auto flex-col items-center justify-center pb-[80px] pt-[60px] text-center">
      <h1 className=" mb-[15px] font-Lato text-[50px] font-light leading-[50px] text-[#665bdb]">
        Our Classes
      </h1>
      <p className="mb-[30px]  pt-[15px] font-openSans font-medium leading-[25px] text-[rgba(150,149,149,0.55)] phone:text-[15px] laptop:text-[18px]">
        Our preschool program has four dedicated classes
      </p>
      <Image className="mb-[66px]" src={tempOrangeStrip} alt="" />
      <div className="mb-[60px] flex flex-row items-center justify-center gap-[33px] text-center">
        <h1 className="font-lato h-[100%] w-[490px] text-start text-[30px] font-normal leading-[36px] text-[#665bdb]">
          We provided four classes with nine to twenty children each aged twelve
          month to five years of age.
        </h1>
        <p className="h-[100%] w-[490px] text-start font-openSans text-[16px] font-normal leading-[24px] text-[rgba(150,149,149,0.55)]">
          Praesent arcu gravida vehicula est node maecenas loareet morbi a dosis
          luctus. Urna eget lacinia eleifend praesent luctus a arcu quis
          facilisis venenatis. Aenean interdum, nibh vitae sodales, magna ante
          feugiat elit maecenas.
        </p>
      </div>
      <div>
        <div>
          <div>
            <div>
              <h1>Little Lambs</h1>
              <p>Class name</p>
            </div>
            <div>
              <div>
                <h1>3-4</h1>
                <p>Years olds</p>
              </div>
              <img src="" alt="" />
              <div>
                <h1>15</h1>
                <p>Class size</p>
              </div>
            </div>
          </div>
          <div>
            <img src="" alt="" />
            <button>CLICK HERE Icon</button>
          </div>
        </div>
      </div>
    </div>
  );
}
