import ComponentsHeaders from "~/app/shared/components/componentsHeaders";
import quoteIcon from "public/quote-icon.png";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
        <div className="flex h-[333px] w-[509px] flex-row items-center justify-center gap-[10px] text-start transition-all duration-500">
          <div className="relative flex h-[100%] w-[50%] flex-col text-center transition-all duration-500 hover:-translate-y-3 hover:bg-[#f1f1f1af] ">
            <img
              className="h-[70%]"
              src="https://via.placeholder.com/1980x1080"
              alt=""
            />
            <h1 className="mb-[4px] mt-[20px] font-Lato text-[18px] font-normal leading-[25px] text-[#56509f]">
              Ruth Richie
            </h1>
            <p className=" font-openSans text-[14px] font-normal leading-[21px] text-[#a0a0a0]">
              Teacher
            </p>
          </div>
          <div className="relative flex h-[100%] w-[50%] flex-col  items-start justify-end  text-start">
            <div className=" absolute left-[-40px] top-[30px] flex h-[55px] w-[117px] flex-col items-end justify-center border-2 border-[#FE6500] bg-transparent text-center">
              <Image
                src={quoteIcon}
                alt=" "
                className="mr-[20px] h-[32px] w-[32px]"
              />
            </div>
            <p className="mb-[10px] ml-[15px] mt-[10px] font-openSans text-[16px] font-normal leading-[24px] text-[#707070]">
              I have just finished my studies in Early Childhood Education, and
              I am also the kid's yoga teacher here at Fable. I enjoy cooking,
              swimming and bike riding in my free time.
            </p>
            <div className="ml-[15px] mt-[25px] flex flex-row items-center  gap-1 text-center">
              <button className=" flex h-[40px] w-[40px] flex-col items-center justify-center bg-orange-500 text-center hover:bg-[#665bdb]">
                <FontAwesomeIcon
                  style={{
                    height: "23px",
                    width: "23px",
                    color: "white",
                  }}
                  icon={faInstagram}
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
                  icon={faTiktok}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
