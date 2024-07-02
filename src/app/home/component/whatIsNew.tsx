import ComponentsHeaders from "~/app/shared/components/componentsHeaders";
import { whatsNewData, whatsNewDataSchema } from "@/shared/data/whatsNewData";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function WhatIsNew() {
  return (
    <div className="flex flex-col items-center  justify-start pb-[85px] pt-[60px] text-center">
      <ComponentsHeaders
        title={"What's New"}
        text={"Keep up to date with the latest news"}
        context={""}
        paragraph={""}
      />
      <div className="flex flex-row items-center justify-center gap-[33px] text-center">
        {whatsNewData.map((data, index) => {
          try {
            whatsNewDataSchema.parse(data);
            return (
              <div className="">
                <h1>{data.date}</h1>
                <div>
                  <Image src={`${data.image}`} alt="" />
                  <div>
                    <h2>{data.classRoom}</h2>
                  </div>
                </div>
                <h1>{data.title}</h1>
                <p>{data.description}</p>
                <hr />
                <div>
                  <div>
                    <FontAwesomeIcon icon={data.eventIconOne} />
                    <h1></h1>
                  </div>
                  <div>
                    <FontAwesomeIcon icon={data.eventIconTwo} />
                    <h1></h1>
                  </div>
                </div>
              </div>
            );
          } catch (err) {
            console.error(`Error loading  `, err);
            return null;
          }
        })}
      </div>
      <div>
        <button>GO TO BLOG ICONS</button>
      </div>
    </div>
  );
}
