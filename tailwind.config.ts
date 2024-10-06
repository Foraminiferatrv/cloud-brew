import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg_1: "#001F3F",
        bg_2: "#6A9AB0",
        bg_3: "#35627D",
        main: "#3A6D8C",
        main_2: "#356B8B",
        accent: "#EAD8B1",
        warn: "#FF9800",
        info: "#03A9F4",
        success: "#4CAF50",
        error: "#EF5350",
        black: "#262626",
        grey: "#A0A0A0",
        white: "#F4F6F6",
      },

      boxShadow: {
        neo: "4px 4px 9px #001b36, -4px -4px 9px #002348",
        ["neo-light"]: "8px 8px 20px #376885,-8px -8px 20px #3d7293",
        ["neo-light-inset"]:
          "inset 8px 8px 26px #376885, inset -8px -8px 26px #3d7293",
      },
      dropShadow: {
        ["neo_light"]: ["5px 5px 10px #366582", "-5px -5px 10px #3e7596"],
      },
    },
  },
  plugins: [],
};
export default config;
