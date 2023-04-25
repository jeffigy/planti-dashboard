import React from "react";
import {
  Flex,
  Card,
  IconButton,
  useColorModeValue,
  useColorMode,
} from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import RightButtons from "./RightButtons";
import SearchBar from "./SearchBar";
import WelcomeMessage from "./WelcomeMessage";
import DrawerButton from "./DrawerButton";
type NavbarProps = {
  btnRef: any;
  onClick: () => void;
};

const Navbar: React.FC<NavbarProps> = ({ btnRef, onClick }) => {
  return (
    <Flex
      bg={useColorModeValue("brand.400", "brand.800")}
      ml={{ base: 0, md: "260px" }}
      mb={"20px"}
      // px={"20px"}
      position={"sticky"}
      top={0}
      height={"80px"}
      zIndex={"1"}
      alignItems={"center"}
      justifyContent={"space-between"}
    >
      <DrawerButton btnRef={btnRef} onClick={onClick} />
      <WelcomeMessage />
      <SearchBar />
      <RightButtons />
    </Flex>
  );
};
export default Navbar;
