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
        // white: "#e1e2e2",
      },

      boxShadow: {
        neo: "4px 4px 9px #e3e5e5, -4px -4px 9px  #ffffff",
        ["neo-light-inset"]:
          "inset 2px 5px 5px #e3e5e5, inset -2px -5px 5px #ffffff",
      },
      dropShadow: {
        ["neo"]: ["5px 5px 10px #e3e5e5", "-5px -5px 10px #ffffff"],
        ["neo_contrast"]: [" 5px 5px 6px #a3a5a5", "-5px -5px 6px #ffffff"],
        ["neo_contrast_small"]: [
          " 5px 5px 6px #e1e2e2",
          "-5px -5px 6px #ffffff",
        ],
      },
    },
  },
  plugins: [],
};
export default config;
