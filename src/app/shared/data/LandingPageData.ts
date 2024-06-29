import { z } from "zod";

export const LandingPageDataSchema = z.object({
  id: z.number(),
  img: z.string(),
});

export const LandingPageData = [
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
