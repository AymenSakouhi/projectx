import { insightSectionCheckBoxData } from "@/shared/data/insightSectionData";

export default function InsightSection() {
  return (
    <div className="flex h-auto flex-row items-center justify-center pb-[88px] pt-[80px] text-center">
      <div className="w-[40%]">
        <h1 className=" mb-[30px] font-Lato text-[30px] font-normal leading-[36px] text-[#56509f]">
          We have been educating children for over fifteen years. Our goal is to
          create a place that engages each child.
        </h1>
        <p className=" mb-[30px] font-openSans text-[16px] font-normal leading-[24px] text-[#707070]">
          Praesent arcu gravida vehicula est node maecenas loareet morbi a dosis
          luctus. Urna eget lacinia eleifend praesent luctus a arcu quis
          facilisis venenatis aenean interdum.
        </p>
        <ul>
          {insightSectionCheckBoxData.map((data, index) => {
            return (
              <li key={index}>
                <img src={data.icon} alt="" />
                <p>{data.text}</p>
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <div>
          <img src="" alt="" />
          <h1></h1>
          <p></p>
        </div>
      </div>
    </div>
  );
}
