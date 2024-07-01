import ComponentsHeaders from "~/app/shared/components/componentsHeaders";

export default function WhatIsNew() {
  return (
    <div className="flex flex-col items-center  justify-start pb-[85px] pt-[60px] text-center">
      <ComponentsHeaders
        title={"What's New"}
        text={"Keep up to date with the latest news"}
        context={""}
        paragraph={""}
      />
      <div>
        <div>
          <h1></h1>
          <div>
            <img src="" alt="" />
            <div>
              <h2></h2>
            </div>
          </div>

          <h1></h1>
          <p></p>

          <hr />
          <div>
            <div>
              <img src="" alt="" />
              <h1></h1>
            </div>
            <div>
              <img src="" alt="" />
              <h1></h1>
            </div>
          </div>
        </div>
      </div>
      <div>
        <button>GO TO BLOG ICONS</button>
      </div>
    </div>
  );
}
