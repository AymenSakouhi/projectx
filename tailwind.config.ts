import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
        openSans: ["OpenSans"],
      },
      screen: {
        xs: "340px",
        sm: "540px",
        m: "720px",
        l: "960px",
        xl: "1140px",
        xxl: "1320px",
        xxxl: "1500px",
      },
    },
  },
  plugins: [],
} satisfies Config;
