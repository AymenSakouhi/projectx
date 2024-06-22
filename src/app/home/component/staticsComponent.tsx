import Image from "next/image";
import staticsBgImg from "public/staticsBgImg.jpg";

type informationDataType = {
  title: string;
  description: string;
  number: number;
  id: number;
};

const informationData: informationDataType[] = [
  {
    title: "Our Pupils",
    description: "Pulvinar forte maestro node terminal est elipsis prism.",
    number: 507,
    id: 1,
  },
  {
    title: "Teaching Hours",
    description: "Pulvinar forte maestro node terminal est elipsis.",
    number: 235,
    id: 2,
  },
  {
    title: "Satisfied Parents",
    description: "Pulvinar forte maestro node terminal est elipsis.",
    number: 100,
    id: 3,
  },
  {
    title: "Meals Per Year",
    description: "Pulvinar forte maestro node terminal est elipsis.",
    number: 1050,
    id: 4,
  },
  {
    title: "Morning Session",
    description: "Pulvinar forte maestro node terminal est elipsis.",
    number: 15,
    id: 5,
  },
  {
    title: "Full Daycare",
    description: "Pulvinar forte maestro node terminal est elipsis.",
    number: 25,
    id: 6,
  },
];

export default function StaticsComponent() {
  return (
    <div className=" relative flex h-auto  flex-col items-center justify-center  pb-[80px] pt-[80px] text-center">
      <Image
        className="z-[-1] m-0 h-[100%] w-[100%] p-0 "
        src={staticsBgImg}
        alt=""
        layout="fill"
        objectFit="cover"
      />

      <div className="flex h-[357px] w-[75%] flex-col items-center justify-center gap-[30px]  text-center">
        <div className="  flex  w-[80%] flex-col flex-wrap  items-center justify-start gap-[1rem] overflow-hidden  text-center">
          {informationData.map((data: informationDataType) => {
            return (
              <div
                key={data.id}
                className=" mr-[30px] flex w-[240px] flex-col items-center justify-center text-center"
              >
                <div className=" mb-[20px] ml-[30px] mr-[30px] flex h-[176px] w-[176px] flex-col items-center justify-center rounded-[50%] border-[2px] border-white text-center ">
                  <p className=" font-openSans text-[50px] font-light leading-[75px] text-white ">
                    {data.id === 3 ? data.number + " %" : data.number}
                  </p>
                </div>
                <h1 className=" color-white mb-[20px] w-[100%] font-Lato text-[24px] font-normal leading-[29px] text-white">
                  {data.title}
                </h1>
                <p className=" w-[100%] font-openSans text-[16px] font-normal leading-[24px] text-white">
                  {data.description}
                </p>
              </div>
            );
          })}
        </div>
        <div className=" flex h-[auto] w-[auto] flex-row items-center justify-center text-center">
          <div className="m-[3px] h-[12px] w-[45px] cursor-pointer border-2 border-white hover:border-slate-300"></div>
          <div className="m-[3px] h-[12px] w-[45px] cursor-pointer border-2 border-white hover:border-slate-300"></div>
          <div className="m-[3px] h-[12px] w-[45px] cursor-pointer border-2 border-white hover:border-slate-300"></div>
          <div className="m-[3px] h-[12px] w-[45px] cursor-pointer border-2 border-white hover:border-slate-300"></div>
          <div className="m-[3px] h-[12px] w-[45px] cursor-pointer border-2 border-white hover:border-slate-300"></div>
          <div className="m-[3px] h-[12px] w-[45px] cursor-pointer border-2 border-white hover:border-slate-300"></div>
        </div>
      </div>
    </div>
  );
}
