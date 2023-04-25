import {
  extendTheme,
  useColorModeValue,
  type ThemeConfig,
} from "@chakra-ui/react";
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
      400: "#F4F5F7", //* light gray
      500: "#2d3748", //* dark gray
    },
  },
  fonts: {
    body: "Inter, sans-serif",
  },
  styles: {
    global: (props: { colorMode: string }) => ({
      body: {
        backgroundColor: props.colorMode === "light" ? "brand.400" : "gray.800",
        color: props.colorMode === "light" ? "gray.600" : "white",
      },
    }),
  },
});
