import React from "react";
import { Flex } from "@chakra-ui/react";
type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={"20px"}
      position={"sticky"}
      top={0}
      height={"80px"}
      zIndex={"1"}
      alignItems={"center"}
      justifyContent={"space-between"}
    >
      navbar
    </Flex>
  );
};
export default Navbar;
