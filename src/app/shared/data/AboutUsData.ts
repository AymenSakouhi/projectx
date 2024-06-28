import { contentTempTypes } from "../types/AboutUsDataTypes";
import bagIcon from "public/template_content_icons/bag_icon.png";
import babyCart from "public/template_content_icons/baby_car_icon.png";
import worldIcon from "public/template_content_icons/world_icon.png";
import ringIcon from "public/template_content_icons/ring_icon.png";

const contentTempData: contentTempTypes[] = [
  {
    title: "Morbi Etos",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor laudantium",
    icon: bagIcon,
    color: "#fe6501",
  },
  {
    title: "Congue Gravida",
    description: " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    icon: babyCart,
    color: "rgb(86,80,159)",
  },
  {
    title: "Maecenas Node",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. dolor sit amet consectetur ",
    icon: worldIcon,
    color: "#fe6501",
  },
  {
    title: "Praesent Morbi",
    description:
      "  amet consectetur adipisicing elit. dolor sit amet consectetur Lorem ipsum dolor sit ",
    icon: ringIcon,
    color: "rgb(86,80,159)",
  },
];

export default contentTempData;
