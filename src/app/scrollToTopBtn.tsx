"use client";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

export default function ScrollToTopBtn() {
  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 136) {
        setShowBtn(true);
      } else {
        setShowBtn(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`${!showBtn && "hidden"} fixed bottom-[30px] right-[30px] flex  h-[40px] w-[40px] items-center justify-center bg-[#858585] text-center`}
    >
      <FontAwesomeIcon
        icon={faChevronUp}
        style={{ width: "30px", height: "30px", color: "white" }}
      />
    </div>
  );
}
