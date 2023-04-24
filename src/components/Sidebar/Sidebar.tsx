import React from "react";
import { Box, Text, Flex, Stack } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Navlink from "./Navlink";
type SidebarProps = {
  display?: any;
  title: string;
  onClose: () => void;
};

const Sidebar: React.FC<SidebarProps> = ({ onClose, title, display }) => {
  const router = useRouter();
  return (
    <Box
      borderRight={"1px"}
      borderRightColor={{ base: "transparent", md: "gray.400" }}
      h={"full"}
      w={{ base: "full", md: 60 }}
      pos={"fixed"}
      display={display}
    >
      <Flex
        justifyContent={"center"}
        align={"center"}
        border="1px solid red"
        h={"80px"}
      >
        <Text color={"brand.200"} fontWeight={"bold"} fontSize={"30px"}>
          Planti
        </Text>
      </Flex>
      <Stack>
        <Navlink name={"Login"} to={"/login"} />
        <Navlink name={"register"} to={"/register"} />
      </Stack>
    </Box>
  );
};
export default Sidebar;
