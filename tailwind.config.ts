import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      bg_1: "#001F3F",
      bg_2: "#6A9AB0",
      bg_3: "#35627D",
      main: "#3A6D8C",
      accent: "#EAD8B1",
      warn: "#FF9800",
      info: "#03A9F4",
      success: "#4CAF50",
      error: "#EF5350",
      black: "#262626",
      grey: "#A0A0A0",
      white: "#F4F6F6",
    },
  },
  plugins: [],
};
export default config;
