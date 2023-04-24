import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

import "@fontsource/inter/300.css";
import "@fontsource/inter/400.css";
const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};
export const theme = extendTheme({
  config,
  colors: {
    brand: {
      100: "#C1F497", //* light green
      200: "#64A72E",
      300: "#3C6B12", //*dark green
    },
    fonts: {
      body: "Inter, sans-serif",
    },
  },
});
