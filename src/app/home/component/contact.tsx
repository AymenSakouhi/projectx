import Image from "next/image";
import ComponentsHeaders from "~/app/shared/components/componentsHeaders";

export default function Contact() {
  return (
    <div className="flex h-[90vh] flex-col items-center justify-start pb-[80px] pt-[60px] text-center">
      <ComponentsHeaders
        title={"Contact Us"}
        text={"Our postal address and contact details"}
        context={""}
        paragraph={""}
      />
      <div className="mb-[50px] mt-[66px]">
        <div>
          <Image src={""} alt="" />
          <h1></h1>
          <div>
            <p></p>
            <p></p>
            <p></p>
          </div>
        </div>
      </div>
      <div>
        <div>
          <input type="text" id="text" placeholder="Your Name*" />
          <input type="email" id="email" placeholder="Your E-mail*" />
          <input type="text" id="subject" placeholder="Subject" />
        </div>
        <div>
          <textarea placeholder="Message*"></textarea>
        </div>
        <button>SEND MESSAGE</button>
      </div>
    </div>
  );
}
