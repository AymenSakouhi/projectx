import ComponentsHeaders from "~/app/shared/components/componentsHeaders";

export default function OurStaff() {
  return (
    <div className="flex h-auto flex-col items-center pb-[50px] pt-[60px] text-center">
      <ComponentsHeaders
        title={"Meet Our Staff"}
        text={"With education and experience in early childhood care"}
        context={
          "Our staff consists of three teachers and one assistant with experience in early childhood care."
        }
        paragraph={
          "Praesent arcu gravida vehicula est node maecenas loareet morbi a dosis luctus. Urna eget lacinia eleifend praesent luctus a arcu quis facilisis venenatis. Aenean interdum, nibh vitae sodales, magna ante feugiat elit maecenas."
        }
      />

      <div>
        <div className="flex h-[333px] w-[509px] flex-row items-center justify-center text-start">
          <div className="flex h-[100%] w-[50%] flex-col text-center">
            <img src="" alt="" />
            <h1 className=" font-Lato text-[18px] font-normal leading-[25px] text-[#56509f]">
              Ruth Richie
            </h1>
            <p className=" font-openSans text-[14px] font-normal leading-[21px] text-[#a0a0a0]">
              Teacher
            </p>
          </div>
          <div className="h-[100%] w-[50%]">
            <img src="" alt="" />
            <p className="mb-[10px] ml-[15px] mt-[10px] font-openSans text-[16px] font-normal leading-[24px] text-[#707070]">
              I have just finished my studies in Early Childhood Education, and
              I am also the kid’s yoga teacher here at Fable. I enjoy cooking,
              swimming and bike riding in my free time.
            </p>
            <div className="ml-[15px] mt-[25px] flex flex-row items-center  gap-1 text-center">
              <button className="h-[40px] w-[40px] bg-orange-500"></button>
              <button className="h-[40px] w-[40px] bg-orange-500"></button>
              <button className="h-[40px] w-[40px] bg-orange-500"></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
