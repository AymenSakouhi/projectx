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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      onClick={scrollToTop}
      className={`z-[20] ${!showBtn && "hidden"} fixed bottom-[30px] right-[30px] flex h-[40px] w-[40px]  cursor-pointer items-center justify-center bg-[#2020209f] text-center hover:bg-[#fe6501]`}
    >
      <FontAwesomeIcon
        icon={faChevronUp}
        style={{ width: "30px", height: "30px", color: "white" }}
      />
    </div>
  );
}
