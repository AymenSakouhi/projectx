import Image from "next/image";

export default function QuotesComponent() {
  return (
    <div className="relative flex h-[547px] flex-col items-center justify-between pb-[80px] pt-[80px] text-center ">
      <Image
        src="/quote-bg-img.jpg"
        alt="Quote Background"
        layout="fill"
        objectFit="cover"
        className="z-[-1] m-0 p-0"
      />
      <div className="mb-[40px] flex h-auto flex-col  items-center justify-between text-center phone:w-[98%] laptop:w-[65%]">
        <div className="flex h-[100%] w-[100%] flex-col items-center justify-between text-center">
          <div className="flex h-[30%] flex-col items-center justify-center text-center">
            <div className="flex h-[100px] w-[100px] flex-col items-center justify-center rounded-[50%] border-2 border-white bg-transparent text-center">
              <Image
                src="/quote-text-icon.png"
                alt="Quote text icon"
                width={32}
                height={32}
              />
            </div>
          </div>
          <h1 className="mt-[20px] font-Lato font-light text-[#ffff] phone:text-[16px] phone:leading-[25px] laptop:text-[38px] laptop:leading-[46px]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam
            veniam velit amet ad accusamus exercitationem architecto possimus
            itaque ducimus natus? Consequatur molestiae voluptatibus officia
            reiciendis voluptatum laudantium, sapiente esse enim.
          </h1>
          <div className="mt-[20px] h-[1px] w-[30px] bg-white"></div>
          <p className="mt-[26px] font-openSans text-[16px] font-normal leading-[24px] text-[#ffff] ">
            Ameer Ameen
          </p>
        </div>
      </div>
      <div className=" flex h-[auto] w-[auto] flex-row items-center justify-center text-center">
        <button className="m-[3px] h-[12px] w-[45px] cursor-pointer border-2 border-white hover:border-slate-300"></button>
        <button className="m-[3px] h-[12px] w-[45px] cursor-pointer border-2 border-white hover:border-slate-300"></button>
        <button className="m-[3px] h-[12px] w-[45px] cursor-pointer border-2 border-white hover:border-slate-300"></button>
        <button className="m-[3px] h-[12px] w-[45px] cursor-pointer border-2 border-white hover:border-slate-300"></button>
        <button className="m-[3px] h-[12px] w-[45px] cursor-pointer border-2 border-white hover:border-slate-300"></button>
        <button className="m-[3px] h-[12px] w-[45px] cursor-pointer border-2 border-white hover:border-slate-300"></button>
      </div>
    </div>
  );
}
