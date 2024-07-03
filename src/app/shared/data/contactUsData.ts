import {
  faBook,
  faClock,
  faEnvelope,
  faMobileScreen,
} from "@fortawesome/free-solid-svg-icons";

import { z } from "zod";

export const contactUsDataSchema = z.object({
  id: z.number(),
  icon: z.any(),
  title: z.string(),
  name: z.string(),
  address: z.string(),
  postal: z.string(),
});

export const contactUsData = [
  {
    id: 1,
    icon: faEnvelope,
    title: "Postal Address",
    name: "Fable Care Center",
    address: "85 Fentiman Ave",
    postal: "Ottawa, ON K1S 0T7",
  },
  {
    id: 2,
    icon: faMobileScreen,
    title: "Phone & E-mail",
    name: "Phone: 1-800-64-38",
    address: "Fax: 1-800-64-39",
    postal: "office@fable.com",
  },
  {
    id: 3,
    icon: faClock,
    title: "Business Hours",
    name: "Monday – Friday",
    address: "8.00 am – 5.00 pm",
    postal: "Weekend Closed",
  },
  {
    id: 4,
    icon: faBook,
    title: "Sessions",
    name: "Mornings, 8 am – 12 noon",
    address: "Afternoons, 1 pm – 5 pm",
    postal: "Full Day, 8 am – 5 pm",
  },
];
