import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { classesData, classesDataSchema } from "~/app/shared/data/classesData";
import ComponentsHeaders from "~/app/shared/components/componentsHeaders";

export default function ClassesInfo() {
  const CheckMonths = (data: any) => {
    let month: string = "";
    for (let i = 0; i < data.length; i++) {
      if (i > 0) {
        month += "-";
      }
      month += `${data[i]}`;
    }
    return month;
  };

  return (
    <div className="flex h-auto flex-col items-center justify-center pb-[80px] pt-[60px] text-center">
      <ComponentsHeaders
        title={"  Our Classes"}
        text={"Our preschool program has four dedicated classes"}
        context={
          "We provided four classes with nine to twenty children each aged twelve month to five years of age."
        }
        paragraph={
          "Praesent arcu gravida vehicula est node maecenas loareet morbi a dosis luctus. Urna eget lacinia eleifend praesent luctus a arcu quis facilisis venenatis. Aenean interdum, nibh vitae sodales, magna ante feugiat elit maecenas."
        }
      />
      <div className="flex flex-row flex-wrap items-center justify-center text-center phone:w-[95%] laptop:w-[80%]">
        {classesData &&
          classesData.map((data, index) => {
            try {
              classesDataSchema.parse(data);
              return (
                <div
                  className=" mb-[30px] flex h-[188px] w-[509px] flex-row items-center justify-center text-center phone:mr-[0] laptop:mr-[32px]"
                  key={index}
                >
                  <div className=" flex h-[100%] flex-col items-start justify-start bg-[#665bdb] p-[20px] text-start phone:w-[100%] laptop:w-[50%]">
                    <h1 className=" m-[0] p-[0] font-Lato text-[24px] font-normal leading-[29px] text-[#fff]">
                      {data.title}
                    </h1>
                    <p className=" font-openSans text-[14px] font-normal leading-[21px] text-[#cccae2]">
                      {data.className}
                    </p>
                    <div className="mt-[52px] flex h-[50%] w-[100%] flex-row items-center justify-between  text-center  ">
                      <div className="flex flex-col">
                        <h1 className=" font-openSans text-[16px] font-normal leading-[24px] text-white">
                          {CheckMonths(data.monthOld)}
                        </h1>
                        <p className="font-openSans text-[14px] font-normal leading-[21px] text-[#cccae2]">
                          {data.monthOldText}
                        </p>
                      </div>
                      <div className="h-[100%] w-[1px] bg-[rgba(138,138,138,0.74)]"></div>
                      <div className="flex flex-col">
                        <h1 className="font-openSans text-[16px] font-normal leading-[24px] text-white">
                          {data.classSize}
                        </h1>
                        <p className="font-openSans text-[14px] font-normal leading-[21px] text-[#cccae2]">
                          {data.classSizeText}
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
            } catch (error: any) {
              console.error("Invalid data:", error.errors);
              return null;
            }
          })}
      </div>
    </div>
  );
}
