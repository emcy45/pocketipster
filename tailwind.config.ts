import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./modules/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      primary: {
        "50": "#97a7a7",
        "100": "#829595",
        "200": "#6d8484",
        "300": "#587272",
        "400": "#436161",
        "500": "#2e4f4f",
        "600": "#294747",
        "700": "#253f3f",
        "800": "#203737",
        "900": "#1c2f2f",
        "950": "#172828",
      },
      secondary: {
        "500": "#e2dcc8",
        "600": "#cbc6b4",
        "700": "#b5b0a0",
        "800": "#9e9a8c",
        "900": "#888478",
        "950": "#716e64",
      },
      tertiary: {
        "500": "#f1f1f1",
        "600": "#d9d9d9",
        "700": "#c1c1c1",
        "800": "#a9a9a9",
        "900": "#919191",
        "950": "#797979",
      },
      dark: "#262729",
    },
  },
  plugins: [],
};
export default config;
