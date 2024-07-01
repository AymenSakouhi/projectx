import { z } from "zod";

export const quoteComponentDataSchema = z.object({
  id: z.number(),
  quoteText: z.string(),
  name: z.string(),
  image: z.string(),
});

export const quoteComponentData = [
  {
    id: 1,
    quoteText:
      " igendi, officiis sint rem deleniti aut ab odit, numquam delectus cumque, ut quibusdam illo voluptatibus accusamus laudantium exercitationem! Placeat, nobis nesciunt.",

    name: "Fredric Greene",
    image: "/quote-text-icon.png",
  },
  {
    id: 2,
    quoteText:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta eligendi, officiis sint rem deleniti aut ab usdam illo voluptatibus accusamus laudantium exercitationem! Placeat, nobis nesciunt.",

    name: "Patricia Morgan",
    image: "/quote-text-icon.png",
  },
  {
    id: 3,
    quoteText:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. eniti aut ab odit, numquam delectus cumque, ut quibusdam illo voluptatibus accusamus laudantium exercitationem! Placeat, nobis nesciunt.",

    name: "Joann Simms",
    image: "/quote-text-icon.png",
  },
  {
    id: 4,
    quoteText:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta eligendi, officiis sint rem deleniti aut ab odit, numquam delectus cumqueatibus accusamus laudantium exercitationem! Placeat, nobis nesciunt.",

    name: "Shelia Perry",
    image: "/quote-text-icon.png",
  },
  {
    id: 5,
    quoteText:
      " Lorem ipsum dolor sit amet consectetur adipisicing elitt ab odit, numquam delectus cumque, ut quibusdam illo voluptatibus accusamus laudantium exercitationem! Placeat, nobis nesciunt.",

    name: "Tony I. Robinette",
    image: "/quote-text-icon.png",
  },
  {
    id: 6,
    quoteText:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta eligendi, officiis sint rem deleniti aut ab odit, numquam delectus cumque, ut quibusdam illo voluptatibus accusamus laudantium exercitationem! Placeat, nobis nesciunt.",

    name: "Claire Willmore",
    image: "/quote-text-icon.png",
  },
];

// /quote-text-icon.png
