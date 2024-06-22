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
    <div className=" relative flex h-[357px] flex-col items-center justify-center pb-[80px] pt-[80px] text-center">
      <Image
        className="m-0 h-[100%] w-[100%] p-0 "
        src={staticsBgImg}
        alt=""
        layout="fill"
        objectFit="cover"
      />

      <div className="w-[ flex flex-row items-center justify-center text-center">
        {informationData.map((data: informationDataType) => {
          return <div key={data.id}></div>;
        })}
      </div>
      <div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
