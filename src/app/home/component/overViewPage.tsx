export default function OverViewPage() {
  return (
    <div className="flex h-[564px] flex-row items-center justify-center bg-[#f5f5f5f5] text-center">
      <div className="flex h-[80%] w-[40%] flex-col items-center justify-center text-center">
        <div className="flex w-[100%] flex-row items-center justify-center gap-[19px] text-center">
          <button
            type="button"
            className=" after:border-bottom after:content h-[50px] w-[140px] bg-[#fe6501] p-[15px] pb-[12px] pt-[12px] font-openSans text-[18px] font-normal leading-[27px] text-[rgb(255,255,255)] after:absolute after:border-b-[50px] after:border-white"
          >
            OverView
          </button>
          <h1 className=" h-[50px] w-[140px]  p-[15px]  pb-[12px] pt-[12px] font-openSans text-[18px] font-normal leading-[27px] text-[rgb(255,255,255)] hover:bg-[#fe6501]">
            Our Mission
          </h1>
        </div>
        <div>here comes the overview and mission page </div>
      </div>
      <div className="flex h-[80%] w-[40%] flex-col items-center justify-center text-center">
        <div>
          <div>here will go one big image with two buttons</div>
        </div>
        <div>here will go 3 images</div>
      </div>
    </div>
  );
}
