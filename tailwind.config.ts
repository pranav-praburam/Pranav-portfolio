import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#112031",
        mist: "#f4f7fb",
        sky: "#d8e7f5",
        accent: "#1f5f8b",
        slate: "#5f6b7a",
      },
      boxShadow: {
        card: "0 18px 50px rgba(17, 32, 49, 0.08)",
      },
      backgroundImage: {
        grid: "radial-gradient(circle at 1px 1px, rgba(17, 32, 49, 0.08) 1px, transparent 0)",
      },
    },
  },
  plugins: [],
};

export default config;

