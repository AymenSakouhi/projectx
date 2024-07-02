import { faPaperclip, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { z } from "zod";

export const whatsNewDataSchema = z.object({
  id: z.number(),
  date: z.string(),
  image: z.string(),
  title: z.string(),
  description: z.string(),
  name: z.string(),
  eventTags: z.string(),
  classRoom: z.number(),
  eventIconOne: z.any(),
  eventIconTwo: z.any(),
});

export const whatsNewData = [
  {
    id: 1,
    date: "October 03, 2014",
    image: "https://via.placeholder.com/1980x1080",
    title: "Drawing and Painting Lessons",
    description:
      "Magna est consectetur interdum modest dictum. Curabitur est faucibus, malesuada esttincidunt etos et mauris, nunc a libero govum est cuprum.",
    name: "Anna Brown",
    eventTags: "Events, Fun",
    classRoom: 12,
    eventIconOne: faPenToSquare,
    eventIconTwo: faPaperclip,
  },
  {
    id: 2,
    date: "October 03, 2014",
    image: "https://via.placeholder.com/1980x1080",
    title: "Fall Parents Meeting Day",
    description:
      "Magna est consectetur interdum modest dictum. Curabitur est faucibus, malesuada esttincidunt etos et mauris, nunc a libero govum est cuprum.",
    name: "Anna Brown",
    eventTags: "Dance, Education",
    classRoom: 4,
    eventIconOne: faPenToSquare,
    eventIconTwo: faPaperclip,
  },
  {
    id: 3,
    date: "September 20, 2014",
    image: "https://via.placeholder.com/1980x1080",
    title: "Birthday in Kindergarten",
    description:
      "Magna est consectetur interdum modest dictum. Curabitur est faucibus, malesuada esttincidunt etos et mauris, nunc a libero govum est cuprum.",
    name: "Anna Brown",
    eventTags: "Games, General",
    classRoom: 4,
    eventIconOne: faPenToSquare,
    eventIconTwo: faPaperclip,
  },
];
