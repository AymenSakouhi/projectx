import { z } from "zod";

export const OverViewPageSchema = z.object({
  id: z.number(),
  img: z.string(),
});

export const OverViewPageData = [
  {
    id: 1,
    img: `https://via.placeholder.com/1980x1080`,
  },
  {
    id: 2,
    img: `https://via.placeholder.com/1980x1080`,
  },
  {
    id: 3,
    img: `https://via.placeholder.com/1980x1080`,
  },
];
