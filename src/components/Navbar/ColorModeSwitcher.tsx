import { IconButton, useColorMode } from "@chakra-ui/react";
import React from "react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
type ColorModeSwitcherProps = {};

const ColorModeSwitcher: React.FC<ColorModeSwitcherProps> = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  return (
    <IconButton
      border={"none"}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      variant={"outline"}
      icon={isDark ? <MoonIcon /> : <SunIcon />}
      onClick={toggleColorMode}
      mr={"10px"}
      bg={isDark ? "brand.500" : "white"}
    />
  );
};
export default ColorModeSwitcher;
