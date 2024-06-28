import {
  insightSectionCheckBox,
  insightSectionBox,
} from "@/shared/types/models";
import checkInsightIcon from "public/Insight-Icon.png";
import insightIconOne from "public/insight_icons/icon_one.png";
import insightIconTwo from "public/insight_icons/icon_two.png";
import insightIconThree from "public/insight_icons/icon_three.png";
import insightIconFour from "public/insight_icons/icon_four.png";

export const insightSectionCheckBoxData: insightSectionCheckBox[] = [
  {
    icon: checkInsightIcon,
    text: "Comprehensive reporting on individual achievement",
  },
  {
    icon: checkInsightIcon,
    text: "Educational field trips and school presentations",
  },
  {
    icon: checkInsightIcon,
    text: "Individual attention in a small-class setting",
  },
  {
    icon: checkInsightIcon,
    text: "Learning program with after-school care",
  },
  {
    icon: checkInsightIcon,
    text: "Opportunities to carry out scientific investigations",
  },
  {
    icon: checkInsightIcon,
    text: "Positive learning environment for your child",
  },
];

export const insightSectionBoxData: insightSectionBox[] = [
  {
    img: insightIconOne,
    title: "Learning & Fun",
    description: "Praesent modea est gravida node vehicula luctus.",
  },
  {
    img: insightIconTwo,
    title: "Healthy Meals",
    description: "Terminal interdum a eleifend maecenas est morbi.",
  },
  {
    img: insightIconThree,
    title: "Friendly Place",
    description: "Terminal interdum a eleifend maecenas est morbi.",
  },
  {
    img: insightIconFour,
    title: "Children Safety",
    description: "Praesent modea est gravida node vehicula luctus.",
  },
];
