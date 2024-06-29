import { z } from "zod";

export const StaticsComponentDataSchema = z.object({
  title: z.string(),
  description: z.string(),
  number: z.number(),
  id: z.number(),
});

export const StaticsComponentData = [
  {
    title: "Our Pupils",
    description: "Pulvinar forte maestro node terminal est elipsis prism.",
    number: 507,
    id: 1,
  },
  {
    title: "Teaching Hours",
    description: "Pulvinar forte maestro node terminal est elipsis.",
    number: 235,
    id: 2,
  },
  {
    title: "Satisfied Parents",
    description: "Pulvinar forte maestro node terminal est elipsis.",
    number: 100,
    id: 3,
  },
  {
    title: "Meals Per Year",
    description: "Pulvinar forte maestro node terminal est elipsis.",
    number: 1050,
    id: 4,
  },
  {
    title: "Morning Session",
    description: "Pulvinar forte maestro node terminal est elipsis.",
    number: 15,
    id: 5,
  },
  {
    title: "Full Daycare",
    description: "Pulvinar forte maestro node terminal est elipsis.",
    number: 25,
    id: 6,
  },
];
