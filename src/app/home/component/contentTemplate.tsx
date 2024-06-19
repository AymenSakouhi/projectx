export default function ContentTemplate() {
  return (
    <div className="flex h-[684px] flex-col items-center justify-center pb-[50px] text-center">
      <div>
        <h1 className=" font-lato text-[50px] font-light leading-[50px] text-[rgb(86,80,159)] ">
          Welcome to Fable
        </h1>
        <p className="pt-[15px] font-openSans text-[18px] font-medium leading-[25px] text-[rgb(112,112,112)]">
          Fable daycare, preschool, and kindergarten
        </p>
      </div>
      <div className="  mt-[30px]">this is orange line between</div>
      <div className="mt-[66px]">
        <div className="flex h-[344px] w-[237px] flex-col items-center justify-center gap-[20px] text-center">
          <i>this is image or icon</i>

          <h1 className=" font-lato text-[24px] text-[rgb(86,80,159)]">
            Morbi Etos
          </h1>

          <p className="font-openSans text-[16px] font-medium leading-[24px] text-[rgb(112,112,112)]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
            laudantium quo laboriosam temporibus corrupti eos quod fugit animi
            iure,
          </p>
        </div>
      </div>
    </div>
  );
}
