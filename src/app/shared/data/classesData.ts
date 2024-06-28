import { z } from "zod";

export const classesDataSchema = z.object({
  title: z.string(),
  className: z.string(),
  monthOld: z.array(z.number()),
  monthOldText: z.string(),
  classSize: z.number(),
  classSizeText: z.string(),
  classImage: z.string(),
});

export const classesData = [
  {
    title: "Little Lambs",
    className: "Class name",
    monthOld: [12, 24],
    monthOldText: "Month olds",
    classSize: 9,
    classSizeText: "Class Size",
    classImage: `https://via.placeholder.com/1980x1080`,
  },
  {
    title: "Bouncy Bears",
    className: "Class name",
    monthOld: [2, 3],
    monthOldText: "Month olds",
    classSize: 12,
    classSizeText: "Class Size",
    classImage: `https://via.placeholder.com/1980x1080`,
  },
  {
    title: "Tenderhearts",
    className: "Class name",
    monthOld: [3, 4],
    monthOldText: "Month olds",
    classSize: 15,
    classSizeText: "Class Size",
    classImage: `https://via.placeholder.com/1980x1080`,
  },
  {
    title: "Shining Stars",
    className: "Class name",
    monthOld: [2, 3],
    monthOldText: "Month olds",
    classSize: 12,
    classSizeText: "Class Size",
    classImage: `https://via.placeholder.com/1980x1080`,
  },
];
