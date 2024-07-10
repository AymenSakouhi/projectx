import { z } from "zod";
import {
  faBars,
  faBlog,
  faContactCard,
  faCut,
  faHome,
  faPager,
} from "@fortawesome/free-solid-svg-icons";

export const navDataSchema = z.object({
  name: z.string(),
  path: z.string(),
  icon: z.any(),
});

export const navData = [
  {
    name: "Home",
    path: "/",
    icon: faHome,
  },
  {
    name: "Pages",
    path: "/pages",
    icon: faPager,
  },
  {
    name: "Blog",
    path: "/blog",
    icon: faBlog,
  },
  {
    name: "Shortcode",
    path: "/shortcode",
    icon: faCut,
  },
  {
    name: "Contact",
    path: "/contact",
    icon: faContactCard,
  },
];
