import {heroui} from '@heroui/theme';
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        bgblue: "#b1cfe6",
      },
      fontFamily: {
        libre: ["var(--font-libre_baskerville)", "serif"],
        poppins: ["var(--font-poppins)", "sans-serif"],
      }
    },
  },
  plugins: [heroui()],
} satisfies Config;
