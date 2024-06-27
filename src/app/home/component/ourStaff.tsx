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
        <div>
          <div>
            <img src="" alt="" />
            <h1></h1>
            <p></p>
          </div>
          <div>
            <img src="" alt="" />
            <p></p>
            <div>
              <button></button>
              <button></button>
              <button></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
