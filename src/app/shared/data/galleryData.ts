import galleryIcon from "public/gallery_plus_icon.png";
import { z } from "zod";

export const galleryDataSchema = z.object({
  id: z.number(),
  image: z.any(),
  galleryIconPlus: z.string(),
});

export const galleryData = [
  {
    id: 1,
    image: "https://via.placeholder.com/80x80",
    galleryIconPlus: galleryIcon,
  },
  {
    id: 2,
    image: "https://via.placeholder.com/80x80",
    galleryIconPlus: galleryIcon,
  },

  {
    id: 3,
    image: "https://via.placeholder.com/80x80",
    galleryIconPlus: galleryIcon,
  },
  {
    id: 4,
    image: "https://via.placeholder.com/80x80",
    galleryIconPlus: galleryIcon,
  },
];
