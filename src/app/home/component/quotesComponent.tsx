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
      <div className="flex h-[326px] w-[70%] flex-col items-center justify-between text-center">
        <div className="flex h-[100%] w-[100%] flex-col items-center justify-between text-center">
          <div className="flex h-[30%] flex-col items-center justify-center text-center">
            <div className="h-[100px] w-[100px] rounded-[50%] border-2 border-white bg-transparent">
              <img src="" alt="" />
            </div>
          </div>
          <h1 className="font-Lato text-[38px] font-light leading-[46px] text-[#ffff]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam
            veniam velit amet ad accusamus exercitationem architecto possimus
            itaque ducimus natus? Consequatur molestiae voluptatibus officia
            reiciendis voluptatum laudantium, sapiente esse enim.
          </h1>
          <div className="h-[1px] w-[30px] bg-white"></div>
          <p></p>
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
