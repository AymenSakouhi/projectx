import { z } from "zod";
import galleryIcon from "public/gallery_plus_icon.png";
import {
  faFacebook,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
export const staffDataSchema = z.object({
  image: z.string(),
  title: z.string(),
  role: z.string(),
  description: z.string(),
  id: z.number(),
  socialMedia: z.array(z.any()),
});

export const staffData = [
  {
    image: `https://via.placeholder.com/1980x1080`,
    title: "Ruth Richie",
    role: "Teacher",
    description:
      "I have just finished my studies in Early Childhood Education, and I am also the kid’s yoga teacher here at Fable. I enjoy cooking, swimming and bike riding in my free time.",
    id: 1,
    socialMedia: [
      { icon: faFacebook, url: "/" },
      { icon: faInstagram, url: "/" },
      { icon: faTiktok, url: "/" },
    ],
    galleryIconPlus: galleryIcon,
  },
  {
    image: `https://via.placeholder.com/1980x1080`,
    title: "Katie Willmore",
    role: "Assistant Teacher",
    description:
      "My name is Katie. I grew up and studied in Canada. This is my second year at Fable and love every minute of it, making the children’s learning experience fun.",
    id: 2,
    socialMedia: [
      { icon: faFacebook, url: "/" },
      { icon: faInstagram, url: "/" },
      { icon: faTiktok, url: "/" },
    ],
    galleryIconPlus: galleryIcon,
  },
  {
    image: `https://via.placeholder.com/1980x1080`,
    title: "Angelica Watson",
    role: "Lead Teacher",
    description:
      "I hold a degree in Early Childhood Education and an advanced English language certificate. I have been working as a kindergarten teacher since 2002.",
    id: 3,
    socialMedia: [
      { icon: faFacebook, url: "/" },
      { icon: faInstagram, url: "/" },
      { icon: faTiktok, url: "/" },
    ],
    galleryIconPlus: galleryIcon,
  },
  {
    image: `https://via.placeholder.com/1980x1080`,
    title: "Angela Lynn",
    role: "Teacher",
    description:
      "I have completed a Graduate Diploma in Early Childhood Teaching. I have worked with children aged from six weeks to eight years. This is my second year at Fable.",
    id: 4,
    socialMedia: [
      { icon: faFacebook, url: "/" },
      { icon: faInstagram, url: "/" },
      { icon: faTiktok, url: "/" },
    ],
    galleryIconPlus: galleryIcon,
  },
];
