import React from "react";
import { Flex, Card } from "@chakra-ui/react";
type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <Card
      mb={"20px"}
      ml={{ base: 0, md: "260px" }}
      px={"20px"}
      position={"sticky"}
      top={0}
      height={"80px"}
      zIndex={"1"}
      // alignItems={"center"}
      // justifyContent={"space-between"}
    >
      navbar
    </Card>
  );
};
export default Navbar;
