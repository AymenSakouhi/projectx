import ComponentsHeaders from "~/app/shared/components/componentsHeaders";
import quoteIcon from "public/quote-icon.png";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { staffData, staffDataSchema } from "@/shared/data/staffData";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

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

      <div className="flex flex-row flex-wrap justify-evenly gap-[25px] phone:h-auto phone:w-[98%] laptop:h-auto laptop:w-[80%]">
        {staffData.map((data, index) => {
          staffDataSchema.parse(data);
          try {
            return (
              <div
                key={index}
                className="flex items-center justify-center gap-[10px] text-start transition-all  duration-500 phone:h-[600px] phone:w-[360px] phone:flex-col laptop:h-[333px] laptop:w-[509px] laptop:flex-row"
              >
                <div className="relative flex h-[100%] flex-col text-center transition-all duration-500 hover:-translate-y-3 hover:bg-[#f1f1f1af] phone:w-[100%] laptop:w-[50%] ">
                  <img
                    className="h-[70%]"
                    src="https://via.placeholder.com/1980x1080"
                    alt=""
                  />
                  <h1 className="mb-[4px] mt-[20px] font-Lato text-[18px] font-normal leading-[25px] text-[#56509f]">
                    {data.title}
                  </h1>
                  <p className=" font-openSans text-[14px] font-normal leading-[21px] text-[#a0a0a0]">
                    {data.role}
                  </p>
                </div>
                <div className="relative flex flex-col items-start justify-end text-start phone:h-[25%]  phone:w-[100%] laptop:h-[100%]  laptop:w-[50%]">
                  <div className=" absolute left-[-40px] top-[30px] h-[55px] w-[117px] flex-col items-end justify-center border-2 border-[#FE6500] bg-transparent text-center phone:hidden laptop:flex">
                    <Image
                      src={quoteIcon}
                      alt=" "
                      className="mr-[20px] h-[32px] w-[32px]"
                    />
                  </div>
                  <p className="mb-[10px] ml-[15px] mt-[10px] font-openSans text-[16px] font-normal leading-[24px] text-[#707070]">
                    {data.description}
                  </p>
                  <div className="ml-[15px] mt-[25px] flex flex-row items-center  gap-1 text-center">
                    <button className=" flex h-[40px] w-[40px] flex-col items-center justify-center bg-orange-500 text-center hover:bg-[#665bdb]">
                      <FontAwesomeIcon
                        style={{
                          height: "23px",
                          width: "23px",
                          color: "white",
                        }}
                        icon={faFacebook}
                      />
                    </button>
                    <button className="flex h-[40px] w-[40px] flex-col items-center justify-center bg-orange-500 text-center hover:bg-[#665bdb]">
                      <FontAwesomeIcon
                        style={{
                          height: "23px",
                          width: "23px",
                          color: "white",
                        }}
                        icon={faFacebook}
                      />
                    </button>
                    <button className="flex h-[40px] w-[40px] flex-col items-center justify-center bg-orange-500 text-center hover:bg-[#665bdb]">
                      <FontAwesomeIcon
                        style={{
                          height: "23px",
                          width: "23px",
                          color: "white",
                        }}
                        icon={faFacebook}
                      />
                    </button>
                  </div>
                </div>
              </div>
            );
          } catch (err) {
            console.error(err);
            return null;
          }
        })}
      </div>
    </div>
  );
}
